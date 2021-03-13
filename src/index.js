import Vue from "vue";
import Skeleton from "./Skeleton.vue";

const Components = {
  Skeleton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
