<template>
    <div>
        <h3>List des patients</h3>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Inormation médicale</th>
                    <th></th>
                </tr>   
            </thead>
            <tbody>
                <Patient 

                    v-for="patient in patients"
                    :key="patient.id"
                    :id="patient.id"
                    :firstname='patient.firstname'
                    :lastname='patient.lastname'
                    :address='patient.address'
                    :phone='patient.phone'
                    :email='patient.email'
                    :info='patient.medicalInfo'
                    @delete-patient = 'deletePatient'

                />
            </tbody>
        </table>
    </div>
</template>

<script>

import Patient from "@/components/atomic/Patient"

export default {
    name: "PatientList",
    components: {
        Patient,
    },
    data() {
        return {
            patients: []
        }
    },
    beforeMount() {
        // api call
        this.patients.push(
        {
            id: "1",
            firstname: "Amokrane",
            lastname: "Abdennour",
            address: "Batna",
            phone: "066666666",
            email: "amokranabdennour@gmail.com",
            medicalInfo: "test test...",
        },
        {
            id: "2",
            firstname: "Amokrane",
            lastname: "Abdennour",
            address: "Batna",
            phone: "066666666",
            email: "amokranabdennour@gmail.com",
            medicalInfo: "test test...",
        }
        
        )
    },
     methods: {
        deletePatient(value) {
            // api call to delete
            this.patients = this.patients.filter(el => el.id != value)
        }
    }
}
</script>

<style scoped>

</style>