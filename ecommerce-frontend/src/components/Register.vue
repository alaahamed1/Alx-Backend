<template>
  <div class="register-page">
    <!-- Form for registration -->
    <div class="form-container">
      <form @submit.prevent="register" class="register-form">
        <!-- Name, email, and password inputs -->
        <input type="text" v-model="name" placeholder="Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <!-- Submit button -->
        <button type="submit">Register</button>
      </form>
      <!-- Message display -->
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      message: '',
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        this.message = 'Registration successful! Redirecting to login...';
        setTimeout(() => {
          this.router.push('/login');
        }, 2000);
      } catch (error) {
        console.error('An error occurred:', error.response.data);
        this.message = 'Registration failed: ' + error.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85dvh;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.register-form input,
.register-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}
.register-form button {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}
.message {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>