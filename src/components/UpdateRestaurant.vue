<template>
    <router-link to="/" class="back-btn btn btn-light shadow" role="button">Back to Home Page</router-link>
    <div class="container p-5">
        <div class="updateRestaurantDetails text-center">
            <h4 class="fw-bold mb-4">Update Restaurant Details</h4>
            <form action="">
                <input v-model="restaurant.name" type="text" class="form-control form-control-lg mb-3" :class="{'is-invalid': error }" placeholder="Restaurant Name">
                <input v-model="restaurant.contact" type="text" class="form-control form-control-lg mb-3" :class="{'is-invalid': error }" placeholder="Contact Number">
                <input v-model="restaurant.address" type="text" class="form-control form-control-lg mb-3" :class="{'is-invalid': error }" placeholder="Address">
                <small class="text-danger mb-3 d-block" v-show="error">{{errorMessage}}</small>
                <button @click.prevent="update(index)" class="btn btn-lg btn-primary mt-3">Save Changes</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'updateRestaurant',
    data() {
        return {
            restaurant: {
                name: '',
                contact: '',
                address: '',
            },
            error: null,
            errorMessage: null,
        }
    },
    methods: {
        async update() {
            if(this.restaurant.name !== '' && this.restaurant.contact !== '' && this.restaurant.address !== '') {
                const result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address,
                });
                if(result.status === 200) this.$router.push({name: 'Home'})
                this.error = false;
                this.errorMessage = false;
            }
            this.error = true;
            this.errorMessage = "All fields are mandary.";
        }
    },
    async mounted() {
        let user = localStorage.getItem(this.$store.state.userNameLocalStorage);
        if(!user) this.$router.push({name: 'Login'});
        const result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
            name: this.restaurant.name,
            contact: this.restaurant.contact,
            address: this.restaurant.address
        });        
        this.restaurant = result.data
    }
}
</script>