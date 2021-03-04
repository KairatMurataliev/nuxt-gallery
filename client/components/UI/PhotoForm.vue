<template>
  <b-form @submit.prevent="submit">
    <b-form-group
      id="photo"
      label="Photo: "
      label-for="photo"
    >
      <b-form-file
        v-model="photo"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </b-form-group>

    <b-form-group
      id="title"
      label="Title: "
      label-for="title"
    >
      <b-form-input
        id="title"
        v-model.trim="title"
        type="text"
        placeholder="Enter title"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Create</b-button>
  </b-form>
</template>

<script>
export default {
  name: "PhotoForm",
  data() {
    return {
      photo: [],
      title: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', {photo: this.photo, title: this.title})
      this.photo = [];
      this.title = '';
    }
  }
}
</script>

<style scoped>

</style>
