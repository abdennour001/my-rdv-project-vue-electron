<template>
    <div> 
        <h3>Créer un RDV</h3>        
                      
        <Notification
        
            :message="notification.message"
            :type="notification.type"
            v-if="notification.message"

        /> 

        <form @submit.prevent="onSubmit" class="row">
            <div class="form-group col-12">
                <label for="object">
                    Objet
                </label>
                <textarea 
                    v-model="object" name="object" id="object" cols="30" rows="5" placeholder="Objet du RDV..." required
                    class="form-control"
                ></textarea>
            </div>
            <div class="form-group col-12">
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
            <div class="form-group col-6">
                <label for="date">
                    Date
                </label>
                <datepicker :inline="true" v-model="date" name="date"></datepicker>
            </div>
            <div class="form-group col-6">
                <label for="time">  
                    Time
                </label>
                <vue-timepicker name='time' style='display:block' v-model="time" format="HH:mm" hide-clear-button ></vue-timepicker>
            </div>
            <div class="form-group col-12">
                <button type="submit" class="btn btn-primary">
                    Ajouter
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
import Notification from "@/components/atomic/Notification"
import VueTimepicker from 'vuejs-timepicker'


export default {
    name: "CreateAppointment",
    components: {Datepicker, Notification, VueTimepicker},
    data() {
        return {
            date: new Date(),
            time: {"HH":"12", "mm":"00"},
            object: "" ,
            patient: "",
            patients: [],
            notification: {
                message: '',
                type: '',
            },
        }
    },
    beforeMount() {
        axios
            .get("/patients")
            .then(response => {
                response.data.data.forEach(patient => {
                    this.patients.push({
                        id: patient.id,
                        firstname: patient.firstname,
                        lastname: patient.lastname,
                        address: patient.address,
                        phone: patient.phone,
                        email: patient.email,
                        medicalInfo: patient.info,
                    })
                });
            })
            .catch(error => {
                // display error notification
                this.notification = Object.assign({}, this.notification, {
                                message: error.response.data.message,
                                type: error.response.data.status,
                            });
            })
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            // api call create an appointment
            let data = {
                object: this.object,
                date: this.getDate(),
            }
            axios
                .post("/appointments/patient/" + this.patient , data)
                .then(response => {
                    if (response.data.status == 'success') {
                        this.notification = Object.assign({}, this.notification, {
                                        message: "Vous avez réussi à créer le rendez-vous.",
                                        type: response.data.status,
                                    });                  
                    }
                })
                .catch(error => {
                    // display error notification
                    this.notification = Object.assign({}, this.notification, {
                                    message: error.response.data.message,
                                    type: "danger",
                                });
                })
        },
        getDate() {
            let date = this.$options.filters.formatDate(this.date).substring(0, 10)
            date += " " + this.time.HH + ':' + this.time.mm
            return date
        }
    }
}
</script>

<style scoped>

</style>