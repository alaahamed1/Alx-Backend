<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\Log;

class CheckoutController extends Controller
{
    public function store(Request $request)
    {
        // Log the incoming request data for debugging
        Log::info('Checkout request data:', $request->all());

        // Validate the incoming request data
        $validatedData = $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|integer',
            'items.*.quantity' => 'required|integer',
            'totalPrice' => 'required|numeric',
        ]);

        // Log the authenticated user ID
        $userId = auth()->id();
        Log::info('Authenticated user ID:', ['user_id' => $userId]);

        if (is_null($userId)) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        try {
            // Create a new order
            $order = Order::create([
                'user_id' => $userId,
                'total_price' => $validatedData['totalPrice'],
            ]);

            // Attach items to the order
            foreach ($validatedData['items'] as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                ]);
            }

            return response()->json(['message' => 'Order placed successfully'], 201);
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Checkout error:', ['error' => $e->getMessage()]);

            return response()->json(['message' => 'Order placement failed'], 500);
        }
    }
}
