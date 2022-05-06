<template>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom bg-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-3">
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center align-items-center mb-md-0">
                        <li>
                            <img width="50" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226" alt="">
                            <strong><span class="text-secondary d-inline-block ms-2">Home</span></strong>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-9">
                    <div class="text-end d-flex align-items-center justify-content-end">
                        <router-link to="/add-restaurent" class="btn btn-outline-primary ms-2 btn-md-sm mb-0">Add Restaurant</router-link>
                        <button @click.prevent="logout()" type="button" class="btn btn-outline-danger ms-2 btn-md-sm mb-0">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'topHeader',
    data() {
        return {
            
        }
    },
    methods: {
        logout() {
            localStorage.removeItem(this.$store.state.userNameLocalStorage)
            this.$router.push({name: 'Login'})
        }
    },
}
</script>
<style lang="scss">
    button {
        white-space: nowrap;
    }
</style>