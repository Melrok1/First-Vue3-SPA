<template>
  <div class="mainNav">
    <router-link to="/" class="mainNav__logo">
      <h1>TWOOTER!</h1>
    </router-link>
    <section class="mainNav__userName">
      <p>USERBANE</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainNab'
}
</script>


<style lang="scss" scoped>

.mainNav {
  background: #0b850f;
  color: #fff;
  min-height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.5rem;

  .mainNav__logo {
    text-decoration: none;
    color: inherit;
  }
}

</style>