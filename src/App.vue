<template>
  <div id="app">
    <section>
      <h1>Skeletons</h1>
      <div class="items">
        <div class="item">
          <Skeleton width="50%" height="80%" borderRadius="40" />
        </div>
        <div class="item">
          <Skeleton width="100" height="200" />
        </div>
        <div class="item">
          <Skeleton width="200" height="200" rounded />
        </div>
        <div class="item">
          <Skeleton width="100" height="100" rounded />
        </div>
        <div class="item">
          <Skeleton width="100%" height="100%" borderRadius="0" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .item {
    border: 2px solid #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
