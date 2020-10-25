<template>
  <div class="mainNav">
    <router-link to="/" class="mainNav__logo">
      <h1>TWOOTER!</h1>
    </router-link>
    <section class="mainNav__userName" v-if="user">
      <p>@{{ user.userName }}</p>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainNab',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user)

    // const state = reactive ({
    //   user: {
    //     username: '?'
    //   }
    // })

    return {
      user,
      // state
    }
  }
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