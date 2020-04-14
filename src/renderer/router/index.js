import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PatientList from "@/components/PatientList"
import AppointmentList from "@/components/AppointmentList"
import CreateAppointment from "@/components/CreateAppointment"
import CreatePatient from "@/components/CreatePatient"
import EditAppointment from "@/components/EditAppointment"
import AppointmentInfo from "@/components/AppointmentInfo"
import PatientInfo from "@/components/PatientInfo"

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/appointments"
    },
    {
      path: '/patients',
      name: 'patients-list',
      component: PatientList,
    },
    {
      path: '/patients/create',
      name: 'create-patient',
      component: CreatePatient,
    },
    {
      path: '/patients/:id',
      name: 'patient-info',
      component: PatientInfo,
    },
    {
      path: '/appointments',
      name: 'appointments-list',
      component: AppointmentList,
    },
    {
      path: '/appointments/create',
      name: 'create-appointment',
      component: CreateAppointment,
    },
    {
      path: '/appointments/:id/edit',
      name: 'edit-appointment',
      component: EditAppointment,
    },
    {
      path: '/appointments/:id',
      name: 'appointment-info',
      component: AppointmentInfo,
    },
  ]
})
  