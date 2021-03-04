export default {
  addGallery(state, payload) {
    state.gallery = payload;
  },
  addUsersPhotos(state, payload) {
    state.usersGallery = payload;
  },
  addUser(state, payload) {
    state.user = payload;
  },
  logoutUser(state) {
    state.user = null
  }
}
