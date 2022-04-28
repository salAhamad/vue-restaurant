<template>
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
                <tr v-for="(restaurant, index) in restaurantData" :key="index">
                    <td>{{restaurant.id}}</td>
                    <td>{{restaurant.name}}</td>
                    <td>{{restaurant.contact}}</td>
                    <td>{{restaurant.address}}</td>
                    <td>
                        <button @click="edit(index)" class="btn btn-sm btn-outline-dark mx-1" style="min-width: 60px">Edit</button>
                        <button @click="trash(index)" class="btn btn-sm btn-outline-danger mx-1" style="min-width: 60px">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'RestaurantTable',
    props: {
        // trash: Function,
        restaurantData: Array
    },
    data() {
        return {}
    },
    methods: {
        trash(index) {
            console.log(index)
        }
    },
}
</script>