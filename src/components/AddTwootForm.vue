<template>
  <div class="addTwootForm">
    <form class="userProfile__createTwoot" @submit.prevent="createNewTwoot" :class="{'__overloadTxtArea': twootLength > 180}">
      <label for="newTwoot">New twoot <span>({{ twootLength }}/180)</span></label>
      <textarea name="newTwoot" cols="30" rows="4" v-model="newTwoot"></textarea>
      <label for="select">select class:</label>
      <select name="select" v-model="selectedTwootClass">
        <option 
        :value="option.value" 
        v-for="(option, index) in twootClass" 
        :key="index">
          {{ option.name }}
        </option>
      </select>
      <button role="submit">Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'AddTwootForm',
  props: {
    twoots:{
      type: Array
    } 
  },
  data() {
    return {
      newTwoot: null,
      selectedTwootClass: null,
      twootClass: [
        {value: 'neurologia', name: 'Neorologia'},
        {value: 'gastro', name: 'Gastroenterologia'},
        {value: 'zubne', name: 'Zubné'},
        {value: 'endokrinologia', name: 'Endokrinológia'},
        {value: 'nefrologia', name: 'Nefrológia'},
        {value: 'alergologia', name: 'Alergológia'},
        {value: 'hematologia', name: 'Hematológia'},                
      ],
    }
  },
  methods: {
    createNewTwoot() {
      let twootObject;
      if(this.newTwoot) {
        twootObject = {
          id: this.twoots.length + 1,
          content: this.newTwoot,
          class: this.selectedTwootClass
        };
        console.log(twootObject);
        // this.user.twoots.push(twootObject);
        this.$emit('new-twoot-from', twootObject);
        this.newTwoot = null;
      }else {
        console.log('Err in created object !');
      }
    }
  },
  computed: {
    twootLength() {
      if(this.newTwoot) {
        return this.newTwoot.length;
      }else {
        return 0;
      }
    },
  }
}
</script>


<style lang="scss" scoped>

.addTwootForm {
  .userProfile__createTwoot {
    margin: 1.5rem auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    label {
      font-weight: 800;
      font-size: 0.8rem;
      font-style: italic;

      span {
        font-weight: 200;
        font-style: italic;
        display: inline-block;
        margin-left: 1rem;
      }
    }

    textarea {
      padding: 0.5rem;
    }

    button {
      align-self: flex-end;
      padding: 0.25rem 0.75rem;
      background: #052c00;
      color: #dfdfdf;
      font-weight: 800;
      border-radius: 4px;
      border: none;
      outline: none;

      &:active {
        transform: scale(1.05);
      }
    }

    &.__overloadTxtArea {
      label {
        span {
          color: red;
        }
      }
      button {
        background: red;
        color: #fff;
      }
    }
  }
}
</style>