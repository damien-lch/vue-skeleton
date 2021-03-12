<template>
  <div class="skeleton" :style="styles"></div>
</template>
<script>
export default {
  name: "skeleton",
  props: {
    width: {
      type: String,
      default: "350px",
    },
    height: {
      type: String,
      default: "350px",
    },
    color: {
      type: String,
      default: "#E0E0E0",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: String,
      default: "8px",
    },
  },
  computed: {
    styles() {
      const styles = {
        width:
          !this.width.includes("px") &&
          !this.width.includes("%") &&
          !this.height.includes("vw")
            ? this.width + "px"
            : this.width,
        height:
          !this.height.includes("px") &&
          !this.height.includes("%") &&
          !this.height.includes("vh")
            ? this.height + "px"
            : this.height,
        backgroundColor: this.color,
        borderRadius: this.rounded ? "50%" : this.borderRadius,
      };
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
