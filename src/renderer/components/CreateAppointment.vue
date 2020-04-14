<template>
    <div> 
        <h3>Créer un RDV</h3>        
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="object">
                    Objet
                </label>
                <textarea 
                    v-model="object" name="object" id="object" cols="30" rows="5" placeholder="Objet du RDV..." required
                    class="form-control"
                ></textarea>
            </div>
            <div class="form-group">
                <label for="patient">
                    Patient
                </label>
                <select 
                    name="patient" id="patient"  class="form-control" required
                    v-model="patient"
                    
                >
                  <option value="" disabled selected>Select patient...</option>
                    <option 
                        v-for="p in patients"
                        :key="p.id"
                        :value="p.id"
                        selected
                    >
                        {{ p.firstname + " " + p.lastname }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="date">
                    Date
                </label>
                <datepicker :inline="true" v-model="date" name="date"></datepicker>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">
                    Ajouter
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';

export default {
    name: "CreateAppointment",
    components: {Datepicker},
    data() {
        return {
            date: new Date(),
            object: "" ,
            patient: "",
            patients: [],
        }
    },
    beforeMount() {
        // fetch patients list form api call
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
        onSubmit(event) {
            event.preventDefault()
            // api call create an appointment
            let data = {
                patient: this.patient,
                object: this.object,
                date: this.date,
            }
            console.log(data)
        }
    }
}
</script>

<style scoped>

</style>