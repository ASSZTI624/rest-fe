<template>
  <div>
    <a href="addmattress">New Mattress</a>
    <b-list-group v-for="mattress in mattresss" :key="mattress.id">
      <b-list-group-item>
        Height: {{ mattress.height  }}
        Width: {{ mattress.width }}
        Color:{{ mattress.color }}
        <b-button variant="info" @click="editmattress(mattress.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deletemattress(mattress.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mattresss: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/mattressModels")
        .then((response) => {
          this.mattresss = response.data;
        });
    },
    editmattress(id) {
      this.$router.push("editmattress/" + id)
    },
    deletemattress(id) {
      this.axios
        .delete("https://localhost:5001/api/mattressModels/" + id)
        .then(() => {
          this.updateList();
          alert("success");
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