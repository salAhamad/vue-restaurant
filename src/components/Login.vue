<template>
    <div class="signup-form-main-container">
        <div>
            <div class="signup-form-container">
                <div class="logo d-flex justify-content-center mb-3">
                    <img width="150" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226" alt="">
                </div>
                <h3 class="text-center fw-bold mb-3 text-uppercase">Sign Up</h3>
                <form action="">
                    <input v-model="email" type="email" class="form-control mb-3" :class="{'is-invalid': this.$store.state.error }" placeholder="Enter Email" required>
                    <input v-model="password" type="password" class="form-control mb-3" :class="{'is-invalid': this.$store.state.error }" placeholder="Enter Password" required>
                    <small class="text-danger mb-3 d-block" v-show="this.$store.state.error">{{this.$store.state.errorMessage}}</small>
                    <div class="col-auto text-center">
                        <button @click.prevent="signIn()" type="submit" class="btn btn-primary px-4">Login</button>
                    </div>
                </form>
            </div>
            <p class="text-center mt-4">
                <small>Don't have a account?</small>
                <br />
                <router-link class="btn btn-sm btn-light border mt-2" to="/signup">Register Now</router-link>
            </p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'LogIn',
        data() {
            return {
                email: '',
                password: '',
                error: null,
                errorMessage: null,
            }
        },
        methods: {            
            async signIn() {                
                if(this.email !== '' && this.password !== '') {
                    let allUsers = await axios.get('http://localhost:3000/users');
                    const userExistance = allUsers.data.some(user => user.email == this.email)
                    if( !userExistance ) {
                        // this.error = true
                        // this.errorMessage = `The provide email doesn't exit. Please, try with another email`
                        // store.commit('formError', {true, 'asdfjsaldf'});
                        
                        let err = true;
                        let errMsg = `The provide email doesn't exit. Please, try with another email`;
                        this.$store.commit('formError', { err, errMsg});

                        return
                    }

                    let result = await axios.get(`http://localhost:3000/users?email=${this.email}&pasword=${this.password}`)
                    if(result.status === 200 && result.data.length > 0) {
                        this.error = false
                        this.errorMessage = null

                        localStorage.setItem(this.$store.state.userNameLocalStorage, JSON.stringify(result.data[0].name))
                        this.$router.push({name: 'Home'})
                        return
                    } else {
                        this.error = true
                        this.errorMessage = 'Something went wrong! Try again'
                        this.email = ''
                        this.password = ''
                        return
                    }
                } else {
                    this.error = true
                    this.errorMessage = 'Please, fill out required fields'
                    return
                }
            },
        },
        mounted() {
            let user = localStorage.getItem(this.$store.state.userNameLocalStorage);
            if(user) this.$router.push({name: 'Home'});
        }
    }
</script>