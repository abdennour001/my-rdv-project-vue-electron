<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <router-link :to="{ path : '/' }" class="navbar-brand mb-0 h1">My RDV</router-link>

        <div class="navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :class="{ active : (this.$route.path == '/appointments' || this.$route.path == '/') ? true : false }" to="/appointments">List des RDV</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :class="{ active : this.$route.path == '/patients' ? true : false }" to="/patients">List des Patients</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :class="{ active : this.$route.path == '/appointments/create' ? true : false }" to="/appointments/create">Créer RDV</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :class="{ active : this.$route.path == '/patients/create' ? true : false }" to="/patients/create">Créer Patient</router-link>
                </li>
            </ul>
        </div>
    </nav> 
</template>

<script>


export default {
    name: "Navbar",
    mounted() {

    },
    methods: {
       
    }
}
</script>

<style lang="sass" scoped>
    
</style>