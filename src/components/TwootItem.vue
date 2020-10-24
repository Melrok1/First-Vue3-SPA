<template>
  <div class="singleTwoot" @click="addToFavorite(twoot.id)">
    <p class="usernameWrap">@{{ username }}</p>
    <p class="contentWrap">{{ twoot.content }}</p>
  </div>
</template>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<script>
export default {
  name: 'SingleTwoot',
  props: {
    twoot: {
      type: Object,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    // METHODS - addToFavorite
    function addToFavorite(id) {
      ctx.emit('favorite',id)
    }

    return {
      addToFavorite
    }
  }
}
</script>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<style lang="scss" scoped>
#app .singleTwoot {
  background: #fff;
  margin: 0.8rem 0.5rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  .usernameWrap {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .contentWrap {
    font-size: 1rem;
    font-weight: 400;
    color: #767676;
  }
}

#app .singleTwoot:first-of-type {
  margin-top: 0;
}
</style>

