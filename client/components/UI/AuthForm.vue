<template>
  <b-form @submit.prevent="submit">
    <b-form-group
      id="user"
      label="Username: "
      label-for="username"
    >
      <b-form-input
        id="username"
        v-model.trim="username"
        type="text"
        placeholder="Enter username"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="pass"
      label="Password: "
      label-for="password"
    >
      <b-form-input
        id="password"
        v-model.trim="password"
        type="text"
        placeholder="Enter password"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">{{ title }}</b-button>
  </b-form>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', {username: this.username, password: this.password})
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>

</style>
