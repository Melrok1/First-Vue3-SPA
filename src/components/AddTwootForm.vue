<template>
  <div class="addTwootForm">
    <form class="userProfile__createTwoot" @submit.prevent="createNewTwoot" :class="{'__overloadTxtArea': twootLength > 180}">
      <label for="newTwoot">New twoot <span>({{ twootLength }}/180)</span></label>
      <textarea name="newTwoot" cols="30" rows="4" v-model="state.newTwoot"></textarea>
      <label for="select">select class:</label>
      <select name="select" v-model="state.selectedTwootClass">
        <option 
        :value="option.value" 
        v-for="(option, index) in state.twootClass" 
        :key="index">
          {{ option.name }}
        </option>
      </select>
      <button role="submit">Submit</button>
    </form>
  </div>
</template>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


<script>
import {reactive, computed} from 'vue'

export default {
  name: 'AddTwootForm',
  props: {
    twoots:{
      type: Array
    } 
  },
  setup(props, ctx) {

    // STATE (data)
    const state = reactive({
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
      ]
    });

    // COMPUTED - text area length
    const twootLength = computed(() => {
      if(state.newTwoot) {
        return state.newTwoot.length;
      }else {
        return 0;
      }
    });

    // METHODS - create new twoot
    function createNewTwoot() {
      let twootObject;
      if(state.newTwoot) {
        twootObject = {
          id: props.twoots ? props.twoots.length + 1 : 0,
          content: state.newTwoot,
          class: state.selectedTwootClass
        };
        console.log(twootObject);
        ctx.emit('new-twoot-from', twootObject);
        state.newTwoot = null;
      }else {
        console.log('Err in created object !');
      }
    }

    // RETURN 
    return {
      state,
      twootLength,
      createNewTwoot
    }
  }
}
</script>


<!-- //////////////////////////////////////////////////////////////////////////////// -->


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