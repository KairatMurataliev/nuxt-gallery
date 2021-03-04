<template>
  <AuthForm
    :title="'Register'"
    @submit="registerUser"
  />
</template>

<script>
import AuthForm from "~/components/UI/AuthForm";

export default {
  name: "register",
  components: {
    AuthForm
  },
  methods: {
    registerUser({username, password}) {
      this.$store.dispatch({
        type: 'registerUser',
        username,
        password
      })
    }
  }
}
</script>

<style scoped>

</style>
