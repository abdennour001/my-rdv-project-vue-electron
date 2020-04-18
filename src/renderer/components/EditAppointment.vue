<template>
    <div> 
        <h3>Edit un RDV</h3> 

        <Notification
        
            :message="notification.message"
            :type="notification.type"
            v-if="notification.message"

        />   

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
import Notification from "@/components/atomic/Notification"


export default {
    name: "EditAppointment",
    components: {Datepicker, VueTimepicker, Notification},
    data() {
        return {
            object: "",
            date: new Date(2020, 4, 11),
            time: {HH:'', mm:''},
            notification: {
                message: '',
                type: '',
            },
        }
    },
    beforeMount() {  
        // fetch appointment data
        axios
            .get('/appointments/' + this.$route.params.id)
            .then(response => {
                this.object = response.data.data.object
                this.date = response.data.data.date
                let date = this.$options.filters.formatDate(this.date)
                this.time.HH = date.substring(11, 13)
                this.time.mm = date.substring(14, 16)
            })
            .catch(error => {
                    this.notification = Object.assign({}, this.notification, {
                                message: error.response.data.message,
                                type: error.response.data.status,
                            });
            })
    },
    methods: {
        onEdit(event) {
            event.preventDefault()

            axios
                .put("/appointments/" + this.$route.params.id, {
                    object: this.object,
                    date: this.getDate(),
                })
                .then(response => {
                    this.notification = Object.assign({}, this.notification, {
                                message: "Vous avez réussi à modifier le rendez-vous.",
                                type: response.data.status,
                            });
                })
                .catch(error => {
                    this.notification = Object.assign({}, this.notification, {
                                message: error.response.data.message,
                                type: error.response.data.status,
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