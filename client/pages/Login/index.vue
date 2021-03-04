<template>
  <div>
    <AuthForm :title="`Login`" @submit="loginUser"/>
    <b-button>
      <nuxt-link to="/register">Register</nuxt-link>
    </b-button>
  </div>
</template>

<script>
import AuthForm from "../../components/UI/AuthForm";

export default {
  name: "login",
  components: {
    AuthForm
  },
  methods: {
    loginUser({username, password}) {
      this.$store.dispatch({
        type: 'loginUser',
        username,
        password
      })
    }
  }
}
</script>

<style scoped>

</style>
