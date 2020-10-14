import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // petName: "",
    // sexPicked: "",
    // reproductionPicked: "",
    // terrainSelected: "",
    // respiratorySelected: "",
    // locomotionSelected: "",
    // visionSelected: "",
    // checkedEnhancements1: "",
    // checkedEnhancements2: "",
    // checkedEnhancements3: "",
    // checkedEnhancements4: "",
    // checkedEnhancements5: "",
    // checkedEnhancements6: "",
    // checkedEnhancements7: "",
    // checkedEnhancements8: ""
    userData: []
  },
  getters: {
    inputList: state => {
      return state
    }
  },
  mutations: {
    ADD_USER_DATA: (state, data) => {
      state.userData.push(data)
    }
    // setCart(state) {
    //   state.petName = this.petName
    //   state.sexPicked = this.sexPicked
    //   state.reproductionPicked = this.reproductionPicked
    //   state.terrainSelected = this.terrainSelected
    //   state.respiratorySelected = this.respiratorySelected
    //   state.locomotionSelected = this.locomotionSelected
    //   state.visionSelected = this.visionSelected
    //   state.checkedEnhancements1 = this.checkedEnhancements1
    //   state.checkedEnhancements2 = this.checkedEnhancements2
    //   state.checkedEnhancements3 = this.checkedEnhancements3
    //   state.checkedEnhancements4 = this.checkedEnhancements4
    //   state.checkedEnhancements5 = this.checkedEnhancements5
    //   state.checkedEnhancements6 = this.checkedEnhancements6
    //   state.checkedEnhancements7 = this.checkedEnhancements7
    //   state.checkedEnhancements8 = this.checkedEnhancements8
    // },
    // printCart(state) {
    //   console.log(
    //     state.petName,
    //     state.sexPicked,
    //     state.reproductionPicked,
    //     state.terrainSelected,
    //     state.respiratorySelected,
    //     state.locomotionSelected,
    //     state.visionSelected,
    //     state.checkedEnhancements1,
    //     state.checkedEnhancements2,
    //     state.checkedEnhancements3,
    //     state.checkedEnhancements4,
    //     state.checkedEnhancements5,
    //     state.checkedEnhancements6,
    //     state.checkedEnhancements7,
    //     state.checkedEnhancements8,)
    // },
    // getCartstate(){

    // }
  },
  actions: {
  },
  modules: {
  }
})
