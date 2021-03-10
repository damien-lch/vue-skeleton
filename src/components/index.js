import Skeleton from "./Skeleton.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Skeleton", Skeleton);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

Skeleton.install = install;

export default Skeleton;
