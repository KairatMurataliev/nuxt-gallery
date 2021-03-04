<template>
  <div class="container">
    <PhotoComponent
      v-for="photo of gallery" :key="photo._id"
      :photo="photo.photo"
      :title="photo.title"
      :author="photo.author"
    />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  mounted() {
    this.fetchGallery()
  },
  computed: mapState(['gallery']),
  methods: {
    ...mapActions(['fetchGallery']),
  },
  middleware: ['auth']
}
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
}
</style>
