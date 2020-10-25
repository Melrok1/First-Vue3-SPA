<template>
  <div class="home">
    <h1>HOME !!!!!!!!</h1>
    <div class="routerWrap">
      <router-link 
        v-for="user in users" 
        :key="user.id" 
        :to="{name: 'UserProfile', params: { userId: user.id } }"
        :class="{'addStar': user.isAdmin}"
        >
        {{user.userName}} 
      </router-link>  
    </div>
  </div>
</template>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<script>
import {users} from '@/assets/users.js'

export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<style lang="scss" scoped>

.home {
  h1 {
    text-align: center;
  }

  .routerWrap {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 2px green solid;

    a {
      position: relative;
      width: 100%;
      padding: 0.25rem 0.75rem;
      text-decoration: none;
      color: black;
      font-weight: 900;
      letter-spacing: 1px;

      &::before {
        content: '@';
        color: green;
      }

      &:hover {
        background: rgba(1, 99, 9, 0.398);
      }

    }
    .addStar {
      &::after {
        content: '⭐';
        position: absolute;
        top: 2px;
        right: 0.5rem;
      }
    }
  }
}

</style>
