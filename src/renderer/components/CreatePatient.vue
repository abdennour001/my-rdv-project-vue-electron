<template>
    <div> 
        <h3>Créer un compte patient</h3>     

        <Notification
        
            :message="notification.message"
            :type="notification.type"
            v-if="notification.message"

        /> 

        <form @submit.prevent="onSubmit" class="row">
            <div class="form-group col-6">
                  <label for="firstname">Nom</label>
                  <input required type="text" v-model="firstname"
                    class="form-control" name="firstname" id="firstname" placeholder="Nom">
            </div>
            <div class="form-group col-6">
                  <label for="lastname">Prenom</label>
                  <input required type="text" v-model="lastname"
                    class="form-control" name="lastname" id="lastname" placeholder="Prenom">
            </div>
            <div class="form-group col-6">
                  <label for="address">Adresse</label>
                  <input required type="text" v-model="address"
                    class="form-control" name="address" id="address" placeholder="Adresse">
            </div>
            <div class="form-group col-6">
                  <label for="phone">Téléphone</label>
                  <input required type="number" v-model="phone"
                    class="form-control" name="phone" id="phone" placeholder="Téléphone">
            </div>
            <div class="form-group col-6">
                  <label for="email">Email</label>
                  <input required type="email" v-model="email"
                    class="form-control" name="email" id="email" placeholder="Email">
            </div>
            <div class="form-group col-6">
              <label for="info">Information médicale</label>
              <textarea required class="form-control" v-model="info" name="info" id="info" rows="3" placeholder="Informations médicale..."></textarea>
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

import Notification from "@/components/atomic/Notification"


export default {
    name: "CreatePatient",
    components: {Notification},
    data() {
        return {
            firstname: "",
            lastname: "" ,
            address: "",
            phone: "",
            email: "",
            info: "",
            notification: {
                message: '',
                type: '',
            },
        }
    },
    beforeMount() {
        
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            // api call create an patient
            let data = {
                firstname: this.firstname,
                lastname: this.lastname,
                address: this.address,
                phone: this.phone,
                email: this.email,
                info: this.info,
            }
            axios
            .post("/patients/", data)
            .then(response => {
                if (response.data.status == 'success') {
                        this.notification = Object.assign({}, this.notification, {
                                        message: `Vous avez réussi à créer le patient ${this.firstname}  ${this.lastname}.`,
                                        type: response.data.status,
                                    });
                        this.firstname = ''                  
                        this.lastname = ''                  
                        this.address = ''                  
                        this.phone = ''                  
                        this.email = ''                  
                        this.info = ''                  
                }
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