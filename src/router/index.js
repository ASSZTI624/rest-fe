import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import RollerShutter from "../views/RollerShutter.vue"
import AddRollerShutter from "../views/AddRollerShutter.vue"
import EditRollerShutter from "../views/EditRollerShutter.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/carBrands",
    name: "CarBrands",
    component: CarBrand
  },
  {
    path: "/addCarBrand",
    name: "AddCarBrand",
    component: AddCarBrand
  },
  {
    path: "/editBrand/:id",
    name: "EditBrand",
    component: EditBrand
  },
  {
    path: "/rollerShutters",
    name: "RollerShutters",
    component: RollerShutter
  },
  {
    path: "/addRollerShutter",
    name: "AddRollerShutter",
    component: AddRollerShutter
  },
  {
    path: "/editRollerShutter/:id",
    name: "EditRollerShutter",
    component: EditRollerShutter
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
