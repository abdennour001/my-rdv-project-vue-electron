<template>
    <div> 
        <h3>Créer un compte patient</h3>        
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
              <textarea required class="form-control" v-model="info" name="info" id="info" rows="3"></textarea>
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

export default {
    name: "CreatePatient",
    data() {
        return {
            firstname: "",
            lastname: "" ,
            address: "",
            phone: "",
            email: "",
            info: "",
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
            console.log(data)
        }
    }
}
</script>

<style scoped>

</style>