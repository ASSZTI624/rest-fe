<template>
  <div>
    <a href="addRollerShutter">New Roller Shutter</a>
    <b-list-group v-for="rollerShutter in rollerShutters" :key="rollerShutter.id">
      <b-list-group-item>
        Height: {{ rollerShutter.height  }}
        Width: {{ rollerShutter.width }}
        Color:{{ rollerShutter.color }}
        <b-button variant="info" @click="editRollerShutter(rollerShutter.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteRollerShutter(rollerShutter.id)">
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
      rollerShutters: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/RollerShutterModels")
        .then((response) => {
          this.rollerShutters = response.data;
        });
    },
    editRollerShutter(id) {
      this.$router.push("editRollerShutter/" + id)
    },
    deleteRollerShutter(id) {
      this.axios
        .delete("https://localhost:5001/api/RollerShutterModels/" + id)
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