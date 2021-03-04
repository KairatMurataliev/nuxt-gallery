<template>
  <div>
    <div class="photo" v-for="image of usersGallery.photos">
      <b-card
        :title="image.title"
        :img-src="`http://localhost:8000/uploads/${image.photo}`"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-button variant="danger" @click="deletePhoto(image._id)">Delete</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "profile",
  mounted() {
    this.fetchUsersGallery(this.$store.getters.getUser.user._id);
  },
  computed: mapState(['usersGallery']),
  methods: {
    ...mapActions(['fetchUsersGallery', 'deletePhoto']), ...mapMutations(['addUsersPhotos']),
    deletePhoto(id) {
      this.$store.dispatch({type: 'deletePhoto', id})
    }
  },
}
</script>

<style scoped>
.photo {
  width: 300px
}

.image {
  width: 100%
}
</style>
