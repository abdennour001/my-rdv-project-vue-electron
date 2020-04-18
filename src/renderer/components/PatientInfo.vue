<template>
    <div>
        <h3>Les rendez-vous du patient #{{ $route.params.id }}: </h3>


        <Notification
        
            :message="notification.message"
            :type="notification.type"
            v-if="notification.message"

        /> 

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Objet</th>
                </tr>   
            </thead>
            <tbody>
                <tr
                    v-for="appointment in appointments"
                    :key="appointment.id"
                >
                    <th scope="row">{{ appointment.id }}</th>
                    <td>{{ appointment.date | formatDate }}</td>
                    <td>{{ appointment.object }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import Notification from "@/components/atomic/Notification"

export default {
    name: "PatientInfo",
    components: {},
    data() {
        return {
            appointments: [],
            notification: {
                message: '',
                type: '',
            },
        }
    },
    created() {
        this.fetchAppointment()
    },
    methods: {
        fetchAppointment() {
            axios
                .get("/appointments/patient/" + this.$route.params.id)
                .then(response => {
                    response.data.data.forEach(appointment => {
                        this.appointments.push({
                            id: appointment.id,
                            date: appointment.date,
                            object: appointment.object,
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
        }
    }
}
</script>

<style scoped>

</style>