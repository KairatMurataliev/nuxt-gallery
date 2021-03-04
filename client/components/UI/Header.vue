<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Gallery</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <nuxt-link to="/">Home</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link to="/addPhoto">Add Photo</nuxt-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown v-if="user" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ user && user.user.username }}</em>
          </template>
          <b-dropdown-item href="#">
            <nuxt-link :to="`/profile`">Profile</nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-button v-else variant="outline-primary">
          <nuxt-link to="/login">Login</nuxt-link>
        </b-button>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>
