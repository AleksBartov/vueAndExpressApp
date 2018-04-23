<template>
  <div>
    <h1>РЕГИСТРАЦИЯ</h1>

    <input type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button @click="register">зарегистрироваться</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abcdf',
      password: '12345'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
