<template>
  <div>
    <b-card title="Add RollerShutter">
      <b-form-input v-model="height" placeholder="Enter Height"></b-form-input>
      <b-form-input v-model="width" placeholder="Enter Width"></b-form-input>
         <b-form-input v-model="color" placeholder="Enter Color"></b-form-input>

      <b-button variant="success" @click="saveRollerShutter">Save</b-button>
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
   saveRollerShutter() {
      let params = {
        height: this.height,
        width:this.width,
        color:this.color,
      }

      this.axios
        .post("https://localhost:5001/api/RollerShutterModels", params)
        .then(() => {
          alert("success");
          this.$router.push("rollerShutters");
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