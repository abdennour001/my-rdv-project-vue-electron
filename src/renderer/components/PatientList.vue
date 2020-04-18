<template>
    <div>
        <h3>List des patients</h3>

        <Notification
        
            :message="notification.message"
            :type="notification.type"
            v-if="notification.message"

        /> 

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Information</th>
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
import Notification from "@/components/atomic/Notification"

export default {
    name: "PatientList",
    components: {
        Patient,
        Notification
    },
    data() {
        return {
            patients: [],
            notification: {
                message: '',
                type: '',
            },
        }
    },
    beforeMount() {
        // api call
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
                                type: "danger",
                            });
            })
    },
     methods: {
        deletePatient(value) {
            // api call to delete
            axios
                .delete("/patients/" + value)
                .then(response => {
                    if (response.data.status == 'success') {
                        this.notification = Object.assign({}, this.notification, {
                                        message: "Vous avez réussi à supprimer le paitient.",
                                        type: response.data.status,
                                    });                  
                    }
                    this.patients = this.patients.filter(el => el.id != value)
                })
                .catch(error => {
                    // display error notification
                    this.notification = Object.assign({}, this.notification, {
                                    message: error.response.data.message,
                                    type: error.response.data.status,
                                });
                })
        }
    }
}
</script>

<style scoped>

</style>