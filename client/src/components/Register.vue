<template>
  <v-layout align-center justify-center>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>регистрация</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field label="Email" v-model="email" ></v-text-field>
          <br>
          <v-text-field label="Password" v-model="password" ></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <v-btn @click="register" class="cyan">зарегистрироваться</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>         
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
