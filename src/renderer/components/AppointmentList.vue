<template>
    <div>
        <h3>List des rendez-vous</h3>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
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

export default {
    name: "AppointmentList",
    components: {
        Appointment,
    },
    data() {
        return {
            appointments: []
        }
    },
    beforeMount() {
        // api call
        this.appointments.push(
        {
            id: "1",
            date: "12-12-2012 08:00",
            object: "Object test.",
            patient: {
                firstname: "Amokrane",
                lastname: "Abdennour",
                address: "Batna",
                phone: "066666666",
                email: "amokranabdennour@gmail.com",
                medicalInfo: "test test...",
            },
        },
        {
            id: "2",
            date: "12-12-2012 08:00",
            object: "Object test.",
            patient: {
                firstname: "Amokrane",
                lastname: "Abdennour",
                address: "Batna",
                phone: "066666666",
                email: "amokranabdennour@gmail.com",
                medicalInfo: "test test...",
            },
        }
        
        )
    },
     methods: {
        deleteAppointment(value) {
            // api call to delete
            this.appointments = this.appointments.filter(el => el.id != value)
        }
    }
}
</script>

<style scoped>

</style>