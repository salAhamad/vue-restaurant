<template>
    <div class="signup-form-main-container">
        <div>
            <div class="signup-form-container">
                <div class="logo d-flex justify-content-center mb-3">
                    <img width="150" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226" alt="">
                </div>
                <h3 class="text-center fw-bold mb-3 text-uppercase">Sign Up</h3>
                <div action="">
                    <input v-model="name" type="text" class="form-control mb-3" :class="{'is-invalid': error }" placeholder="Enter Name" />
                    <input v-model="email" type="email" class="form-control mb-3" :class="{'is-invalid': error }" placeholder="Enter Email" />
                    <input v-model="password" type="password" class="form-control mb-3" :class="{'is-invalid': error }" placeholder="Enter Password" />
                    <small class="text-danger mb-3 d-block" v-show="error">{{errorMessage}}</small>  
                    <div class="col-auto text-center">
                        <button @click.prevent="signUp()" type="submit" class="btn btn-primary px-4">Sign Up</button>
                    </div>
                </div>
            </div>
            <p class="text-center mt-4">
                <small>Already have a account?</small>
                <br />
                <router-link class="btn btn-sm btn-light border mt-2" to="/login">Login</router-link>
            </p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'SignUp',
        data() {
            return {
                name: "",
                email: "",
                password: "",
                error: null,
                errorMessage: null,
            }
        },

        methods: {
            async signUp() {                
                if(this.name !== "" && this.email !== "" && this.password !== "") {

                    let allUsers = await axios.get('http://localhost:3000/users');
                    const userExistance = allUsers.data.some(user => user.email == this.email)
                                        
                    if(userExistance) {
                        this.error = true
                        this.errorMessage = 'The email Id is already exist. Please Register with another email'
                        return
                    } else if(this.password.length < 8) {
                        this.error = true
                        this.errorMessage = 'The password length can not be less than 8 characters'
                        return
                    } else {
                        let result = await axios.post('http://localhost:3000/users', {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                        })
                        if(result.status == 201) {
                            localStorage.setItem(this.$store.state.userNameLocalStorage, JSON.stringify(result.data.name))
                            this.$router.push({name: 'Home'})
                        } else {
                            this.name = ''
                            this.email = ''
                            this.password = ''
                            this.error = true
                            this.errorMessage = 'Something went wrong! Try again'
                        }        
                        return
                    }

                } else {
                    this.error = true
                    this.errorMessage = 'Please, fill out required fields'
                }
            },
        },
        mounted() {
            let user = localStorage.getItem(this.$store.state.userNameLocalStorage);
            if(user) this.$router.push({name: 'Home'});
        }
    }
</script>
<style>
    .signup-form-main-container {
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .signup-form-container {
        position: relative;
        background-color: #fff;
        width: 400px;
        border-radius: 10px;
        padding: 2rem;
        box-shadow: 0 10px 100px rgba(0,0,0,0.1);
    }
</style>