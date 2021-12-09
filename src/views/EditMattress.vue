<template>
  <div>
    <b-card :title="'Edit Mattress with id of ' + id">
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
  created() {
    this.id = this.$route.params.id;
    this.  getMattressById();
  },
  methods: {
    getMattressById() {
      this.axios
        .get("https://localhost:5001/api/Mattressmodels/" + this.id)
        .then((response) => {
          console.log(response);
          this.height = response.data.height;
          this.width = response.data.width;
          this.color = response.data.color;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveMattress() {
      let params = {
        id: this.id,
        height: this.height,
        width: this.width,
        color: this.color
      }

      this.axios
        .put("https://localhost:5001/api/Mattressmodels/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/mattress");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>