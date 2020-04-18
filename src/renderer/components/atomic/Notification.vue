<template>
    <div class="alert alert-dismissible fade show" :class="alertType" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span>{{ message }}</span> 
    </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    },
    computed: {
        alertType() {
            return "alert-" + this.type
        }
    }
}
</script>

<style lang="sass" scoped>

</style>