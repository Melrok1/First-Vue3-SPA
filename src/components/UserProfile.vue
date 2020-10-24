<template>
  <div class="userProfile">
    <div class="userProfile__userPanel">

      <!-- user information -->
      <div class="userProfile__informationWraper">
        <h1 class="userProfile__userName">@{{ user.userName }}</h1>
        <div class="userProfile__adminBadge" v-if="user.isAdmin">
          <p>Admin</p>
        </div>
        <div class="userProfile__userBadge" v-else>
          <p>User</p>
        </div>
        <div class="userProfile__followerCount">
          <strong>Followers:</strong> {{ followers }}
        </div>
      </div>

      <!-- Add Tweet -->
      <addTwootForm :twoots="this.user.twoots" @new-twoot-from="saveNewTwoot"/>
    </div>

    <!-- twootList -->
    <div class="userProfile__twootsWraper">
      <twootItem 
        v-for="twoot in user.twoots.slice().reverse()" 
        :key="twoot.id" 
        :twoot="twoot" 
        :username="user.userName" 
        @favorite="addToFavorite"
      />
    </div>
  </div>
</template>


<script>
import twootItem from '@/components/TwootItem.vue'
import addTwootForm from '@/components/AddTwootForm.vue'

export default {
  name: 'UserProfile',
  components: {
    twootItem,addTwootForm
  },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        userName: '_MartinBlaščák',
        firstName: 'Martin',
        lastName: 'Blaščák',
        email: 'martin.blascak86@gmail.com',
        isAdmin: true,
        twoots: [
          { id: 1, content: 'this.is.extreme.web'},
          { id: 2, content: 'this web sucks'},
          { id: 3, content: 'i need sleeeeeeeeep :/'}
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if(oldFollowerCount < newFollowerCount) {
        console.log(`${this.fullName} has a new follover`);
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    addToFavorite(id) {
      console.log(`Favorite tweet is: ${id}`)
    },
    saveNewTwoot(newTwoot) {
      this.user.twoots.push(newTwoot);
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>



<!--**************** CSS ***************** -->
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