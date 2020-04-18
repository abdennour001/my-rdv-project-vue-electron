<template>
    <div>
        <h3>List des rendez-vous</h3>

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
                    <th scope="col">Phone</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Date</th>
                    <th scope="col">Objet</th>
                    <th></th>
                </tr>   
            </thead>
            <tbody>
                <Appointment 

                    v-for="appointment in appointments"
                    :key="appointment.id"
                    :id="appointment.id"
                    :firstname='appointment.patient.firstname'
                    :lastname='appointment.patient.lastname'
                    :phone='appointment.patient.phone'
                    :address='appointment.patient.address'
                    :date='appointment.date'
                    :object='appointment.object'
                    @delete-appointment = 'deleteAppointment'

                />
            </tbody>
        </table>
    </div>
</template>

<script>

import Appointment from "@/components/atomic/Appointment"
import Notification from "@/components/atomic/Notification"

export default {
    name: "AppointmentList",
    components: {
        Appointment,
        Notification,
    },
    data() {
        return {
            appointments: [],
            notification: {
                message: '',
                type: '',
            },
        }
    },
    beforeMount() {
        this.fetchAppointments()
    },
    
    methods: {
        fetchAppointments() {
            // api call
            axios
                .get("/appointments")
                .then(response => {
                    response.data.data.forEach(appointment => {
                        this.appointments.push({
                            id: appointment.id,
                            date: appointment.date,
                            object: appointment.object,
                            patient: {
                                firstname: appointment.patient.firstname,
                                lastname: appointment.patient.lastname,
                                phone: appointment.patient.phone,
                                address: appointment.patient.address,
                            }
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
        deleteAppointment(value) {
            // api call to delete
            axios
                .delete("/appointments/" + value)
                .then(response => {
                    if (response.data.status == 'success') {
                        this.notification = Object.assign({}, this.notification, {
                                        message: "Vous avez réussi à supprimer le rdv.",
                                        type: response.data.status,
                                    });                  
                    }
                    this.appointments = this.appointments.filter(el => el.id != value)
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