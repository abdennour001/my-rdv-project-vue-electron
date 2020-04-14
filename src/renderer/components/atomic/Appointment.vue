<template>
    <tr>    
        <th scope="row">{{ id }}</th>
        <td>{{ firstname }}</td>
        <td>{{ lastname }}</td>
        <td>{{ date }}</td>
        <td>{{ object }}</td>
        <td>
            <router-link :to="{ path: '/appointments/' + id + '/edit' }" class="btn btn-outline-primary">Edit</router-link>
            
            <button class="btn btn-outline-danger ml-2" @click="deleteAppointment">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Appointment",
    props: ['id', 'firstname', 'lastname', 'date', 'object', ''],
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