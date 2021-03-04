<template>
  <div>
    <h3 v-if="usersGallery && usersGallery.author" class="author">{{ usersGallery.author.username }}</h3>
    <b-container class="p-4 bg-dark">
      <b-row>
        <b-col v-for="image of usersGallery.photos">
          <b-img thumbnail fluid :src="`http://localhost:8000/uploads/${image.photo}`" alt="Responsive image"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  mounted() {
    this.fetchUsersGallery(this.$route.params.usersGallery)
  },
  computed: mapState(['usersGallery']),
  methods: {
    ...mapActions(['fetchUsersGallery']), ...mapMutations(['addUsersPhotos'])
  },
}
</script>

<style scoped>
.author {
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 20px
}
</style>
