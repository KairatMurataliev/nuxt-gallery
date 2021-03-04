import axios from "axios";

export default {
  async nuxtServerInit({commit, dispatch}, {app, req}) {
    try {
      const user = app.$cookies.get('user');
      commit('addUser', user)
    } catch (e) {
      console.log(e);
      app.$cookies.remove('user')
    }
  },
  async fetchGallery({commit}) {
    try {
      const response = await this.$axios.get('http://localhost:8000/photos');
      commit('addGallery', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async registerUser({dispatch}, {username, password}) {
    try {
      const response = await axios.post('http://localhost:8000/users/register', {username, password});
      dispatch('setUser', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async loginUser({dispatch}, {username, password}) {
    try {
      const response = await axios.post('http://localhost:8000/users/sessions', {username, password});
      dispatch('setUser', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async setUser({commit}, user) {
    try {
      const usr = JSON.stringify(user);
      this.$cookies.set('user', usr)
      commit('addUser', user)
      await this.$router.push({
        path: '/'
      })
    } catch (e) {
      console.log(e);
    }
  },
  async fetchUsersGallery({commit}, id) {
    try {
      const response = await axios.get(`http://localhost:8000/photos/${id}`);
      commit('addUsersPhotos', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async createPhoto({commit}, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    try {
      const headers = {'Token': this.getters.getUser.user.token};
      await axios.post('http://localhost:8000/photos/add-photo', formData, {headers});
    } catch (e) {
      console.log(e);
    }
  },
  async deletePhoto({commit, dispatch}, id) {
    try {
      const headers = {'Token': this.getters.getUser.user.token};
      await axios.delete(`http://localhost:8000/photos/${id.id}`, {headers});
      dispatch({type: 'fetchGallery'})
      await this.$router.push({
        path: '/'
      })
    } catch(e) {
      console.log(e);
    }
  }
}
