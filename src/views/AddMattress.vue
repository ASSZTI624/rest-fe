<template>
  <div>
    <b-card title="Add Mattress">
      <b-form-input v-model="height" placeholder="Enter Height"></b-form-input>
      <b-form-input v-model="width" placeholder="Enter Width"></b-form-input>
         <b-form-input v-model="color" placeholder="Enter Color"></b-form-input>

      <b-button variant="success" @click="saveMattress">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
height:null,
width:null,
color:""
    };
  },
  methods: {
   saveMattress() {
      let params = {
        height: this.height,
        width:this.width,
        color:this.color,
      }

      this.axios
        .post("https://localhost:5001/api/MattressModels", params)
        .then(() => {
          alert("success");
          this.$router.push("Mattres");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>