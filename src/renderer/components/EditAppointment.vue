<template>
    <div> 
        <h3>Créer un RDV</h3>        
        <form @submit.prevent="onEdit" class="row">
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
                    Modifier
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vuejs-timepicker'

export default {
    name: "EditAppointment",
    components: {Datepicker, VueTimepicker},
    data() {
        return {
            patient: -1,
            object: "fsdf",
            date: new Date(2020, 4, 11),
            time: {"HH":"12", "mm":"00"},
            patients: []
        }
    },
    beforeMount() {
        // fetch appointment data
        
    },
    methods: {
        onEdit(event) {
            event.preventDefault()


        }
    }
}
</script>

<style scoped>

</style>