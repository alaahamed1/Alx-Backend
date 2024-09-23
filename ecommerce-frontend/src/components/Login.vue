<template>
<div class="login-page">
  <div class="form-container">
    <form @submit.prevent="login" class="login-form">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        });
                // Check for the authentication token in the server response
                if (response.data.token) {
          // Store the token in local storage for session management
          localStorage.setItem('token', response.data.token);

          // Update the store's state to reflect user's logged-in status
          this.$store.commit('LOGIN');

          // Navigate to the home page after successful login
          this.$router.push('/');
          } else {
          // Handle the case when the authentication token is not found in the response
          console.error('Authentication failed. Please check your email and password.');
        }
        console.log(response.data);
      } catch (error) {
        console.error('An error occurred:', error.response.data);
      }
    },
  },
  }
</script>

<style scoped>
.login-page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85dvh;
}
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form input, .login-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.login-form button {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}
</style>