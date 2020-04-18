<template>
    <tr>    
        <th scope="row">{{ id }}</th>
        <td>{{ firstname }}</td>
        <td>{{ lastname }}</td>
        <td>{{ phone }}</td>
        <td>{{ address }}</td>
        <td>{{ date | formatDate }}</td>
        <td>{{ object }}</td>
        <td>
            <router-link :to="{ path: '/appointments/' + id + '/edit' }" class="btn btn-outline-primary">Edit</router-link>
            
            <button class="btn text-danger ml-2" @click="deleteAppointment">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Appointment",
    props: ['id', 'firstname', 'lastname', 'date', 'object', 'phone', 'address'],
    beforeMount() {

    },
    methods: {
        deleteAppointment () {
            this.$emit('delete-appointment', this.id)
        }
    }
}
</script>

<style scoped>

</style>