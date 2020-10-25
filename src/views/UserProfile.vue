<template>
  <div class="userProfile">
    <div class="userProfile__userPanel">

      <!-- user information -->
      <div class="userProfile__informationWraper">
        <h1 class="userProfile__userName">@{{ stats.user.userName }}</h1>
        <div class="userProfile__adminBadge" v-if="stats.user.isAdmin">
          <p>Admin</p>
        </div>
        <div class="userProfile__userBadge" v-else>
          <p>User</p>
        </div>
        <div class="userProfile__followerCount">
          <p><strong>Followers:</strong> {{ stats.followers }}</p>
          <p><strong> User ID:</strong> {{ userId }}</p>
        </div>
      </div>

      <!-- Add Tweet -->
      <addTwootForm :twoots="stats.user.twoots" @new-twoot-from="saveNewTwoot"/>
    </div>

    <!-- twootList -->
    <div class="userProfile__twootsWraper">
      <twootItem 
        v-for="twoot in stats.user.twoots" 
        :key="twoot.id" 
        :twoot="twoot" 
        :username="stats.user.userName" 
        @favorite="addToFavorite"
      />
    </div>
  </div>
</template>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<script>
import {reactive, computed, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {users} from '@/assets/users.js'
import twootItem from '@/components/TwootItem.vue'
import addTwootForm from '@/components/AddTwootForm.vue'

export default {
  name: 'UserProfile',
  components: {
    twootItem,addTwootForm
  },
  setup() {
    // userID from route
    const route = useRoute(); 
    const userId = computed(() => route.params.userId)
    
    // STATS - data
    const stats = reactive({
      followers: 0,
      user: users[userId.value - 1]
    })


    // COMPUTED - fullName
    const fullName = computed(() => {
      return `${stats.user.firstName} ${stats.user.lastName}`;
    })

    // METHODS - 
    function followUser() {
      stats.followers++;
      console.log('onMounted is rdy ?')
    }

    function addToFavorite(id) {
      console.log(`Favorite tweet is: ${id}`);
    }

    function saveNewTwoot(newTwoot) {
      if(newTwoot) {
        stats.user.twoots.push(newTwoot);
      }else {
        console.log('Push ERR')
      }
    }

    // HOOKS
    onMounted(() => {
      followUser();
      // console.log(users)
    })

    // WATCH

    // RETURN
    return {
      stats,
      fullName,
      followUser,
      addToFavorite,
      saveNewTwoot,
      userId
    }
  },
  // watch: {
  //   followers(newFollowerCount, oldFollowerCount) {
  //     if(oldFollowerCount < newFollowerCount) {
  //       console.log(`${stats.fullName} has a new follover`);
  //     }
  //   }
  // }
}
</script>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<style lang="scss" scoped>
.userProfile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;

  .userProfile__userPanel {
    margin: 1rem;
    
    .userProfile__informationWraper {
      background: #fff;
      padding: 1rem;
    }
  }

  .userProfile__twootsWraper {
    padding: 1rem;
    margin: 1rem;
    width: 65%;
    padding-top: 0;
  }

  .userProfile__followerCount {
    margin-top: 0.5rem;
    font-style: italic;
    font-weight: 400;
    font-size: 0.8rem;
  }

  .userProfile__adminBadge,
  .userProfile__userBadge {
    position: relative;
    font-weight: bold;
    font-size: 0.8rem;
    color: #e9e9e9;
    margin-top: 0.25rem;
    background: #4b03f2;
    display: inline-block;
    padding: 3px 3px 3px 1.3rem;
    border-radius: 4px;

    &::before {
      content: '👑';
      position: absolute;
      top: 2px;
      left: 2px;
    }
  }

  .userProfile__userBadge {
    background: green;
    padding: 3px 3px 3px 3px;

    &::before {
      content: none;
    }
  }
}
</style>