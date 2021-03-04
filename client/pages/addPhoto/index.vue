<template>
  <PhotoForm @submit="createPhoto"/>
</template>

<script>
import PhotoForm from "../../components/UI/PhotoForm";

export default {
  name: "index",
  components: {
    PhotoForm
  },
  methods: {
    createPhoto({photo, title}) {
      this.$store.dispatch({
        type: 'createPhoto',
        photo,
        title
      })
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>

</style>
