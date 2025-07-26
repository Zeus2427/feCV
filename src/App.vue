<script setup lang="ts">
import '@/assets/index.css';  
import { createRouter} from 'vue-router';
import Login from '@/views/auth/Login.vue'; // Import the Login component
import router from './router';          
</script>

<template>
 <router-view>
  <Login />
</router-view>
</template>
