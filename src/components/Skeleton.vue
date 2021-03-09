<template>
  <div class="skeleton" :style="styles"></div>
</template>

<script>
export default {
  name: "skeleton",
  props: {
    width: {
      type: String,
      default: "100"
    },
    height: {
      type: String,
      default: "100"
    },
    color: {
      type: String,
      default: "#E0E0E0"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: String,
      default: "8"
    }
  },
  computed: {
    styles() {
      const styles = {
        width: this.width.includes("%") ? this.width : this.width + "px",
        height: this.height.includes("%") ? this.height : this.height + "px",
        backgroundColor: this.color,
        borderRadius: this.rounded ? "50%" : this.borderRadius + "px"
      };
      return styles;
    }
  }
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
