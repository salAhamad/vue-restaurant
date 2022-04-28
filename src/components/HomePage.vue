<template>
  <Header />
  <welcome-message :user="this.$store.state.userName" :welcomeText="`Welcome to Dashboard`" />
  <!-- <RestaurantTable :restaurantData="restaurants" /> -->

  <div class="container mt-4">
      <table class="table table-bordered bg-white shadow-sm">
          <thead class="table-dark">
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr v-show="!notEmpty"  v-for="(restaurant, index) in restaurants" :key="index">
                  <td>{{restaurant.id}}</td>
                  <td>{{restaurant.name}}</td>
                  <td>{{restaurant.contact}}</td>
                  <td>{{restaurant.address}}</td>
                  <td>
                      <router-link :to="`/update-restaurant/${restaurant.id}`" class="btn btn-sm btn-outline-dark mx-1" style="min-width: 60px">Edit / Update</router-link>
                      <button @click="deleteRestaurant(restaurant.id)" class="btn btn-sm btn-outline-danger mx-1" style="min-width: 60px">Delete</button>
                  </td>
              </tr>
              <tr v-show="notEmpty">
                <td colspan="5" class="p-5 text-center text-secondary">No Data Found</td>
              </tr>
          </tbody>
      </table>
  </div>

</template>

<script>
// https://www.youtube.com/watch?v=EBEU7t35rNg&list=PL8p2I9GklV44m5tFH-zjCmTiHeq9GZrby&index=19
import axios from 'axios';
import Header from './Header.vue'
// import RestaurantTable from './RestaurantTable.vue';
import WelcomeMessage from './WelcomeMessage.vue';
export default {
  components: { Header, WelcomeMessage },
  name: 'HomePage',
  data() {
    return {
      userName: JSON.parse(localStorage.getItem('user-info')).name,
      restaurants: [],
      notEmpty: null,
    }
  },
  created() {
    this.getUserName();
  },
  methods: {
    getUserName() {
      this.$store.commit('setUserName', this.userName);
    },
    async deleteRestaurant(id) {
      console.log(id)
      await axios.delete('http://localhost:3000/restaurants/'+id).then(res => this.restaurants = res.data).catch(err => console.log(err))
      this.loadData();
    },
    async loadData() {
      await axios.get('http://localhost:3000/restaurants/').then(res => this.restaurants = res.data).catch(err => console.log(err))
      if(this.restaurants.length > 0) this.notEmpty = false
      else this.notEmpty = !this.notEmpty
    },
  },
  mounted() {
    const user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({name: 'Login'})
    }
    this.loadData();
  },
}
</script>
<style lang="scss"></style>
