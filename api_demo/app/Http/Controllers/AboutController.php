<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    public function index(){
        return About::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $about = About::create($validated);
        return response()->json($about, 201);
    }
    public function show(Request $about)
    {
            return response()->json($about, 200);
    }

    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'title' => 'required|string|max:255',
    //     ]);

    //     $about = About::findOrFail($id);
    //     $about->update($request->all());
    //     return response()->json($about);
    // }
}
