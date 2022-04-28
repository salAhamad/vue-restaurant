<template>
    <div class="container p-5">
        <div class="updateRestaurantDetails text-center">
            <h4 class="fw-bold mb-4">Update Restaurant Details</h4>
            <form action="">
                <input v-model="restaurant.name" type="text" class="form-control form-control-lg mb-3" :class="{'is-invalid': error }">
                <input v-model="restaurant.contact" type="text" class="form-control form-control-lg mb-3" :class="{'is-invalid': error }">
                <input v-model="restaurant.address" type="text" class="form-control form-control-lg mb-3" :class="{'is-invalid': error }">
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
            console.table([this.restaurant])
            const result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`)
            if(result.status == 201) {
                this.$router.push({name: 'Home'})
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) this.$router.push({name: 'Login'});
        console.log(this.$route.params.id)

        const result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
            name: this.restaurant.name,
            contact: this.restaurant.contact,
            address: this.restaurant.address
        });
        
        console.log(result.data)
        this.restaurant = result.data
    }
}
</script>
<style lang="scss" scoped>
    .updateRestaurantDetails {
        background-color: #fff;
        padding: calc(1rem + 2vw);
        max-width: 500px;
        margin-inline: auto;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(var(--bs-dark-rgb), 0.1);
    }
</style>