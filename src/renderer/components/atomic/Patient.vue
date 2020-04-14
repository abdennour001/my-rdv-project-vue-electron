<template>
    <tr>    
        <th scope="row">{{ id }}</th>
        <td>{{ firstname }}</td>
        <td>{{ lastname }}</td>
        <td>{{ address }}</td>
        <td>{{ phone }}</td>
        <td>{{ email }}</td>
        <td>{{ info }}</td>
        <td>
            <router-link :to="{ path: '/appointments/' + id + '/edit' }" class="btn btn-outline-primary">Consulter</router-link>
            <button class="btn btn-outline-danger ml-2 margin-top-small" @click="deletePatient">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Patient",
    props: ['id', 'firstname', 'lastname', 'address', 'phone', 'email', 'info'],
    beforeMount() {
            
    },
    methods: {
        deletePatient () {
            this.$emit('delete-patient', this.id)
        }
    }
}
</script>

<style scoped>
    @media screen and (max-width: 1200px) {
        .margin-top-small {
            margin-top:10px;
        }
    }
</style>