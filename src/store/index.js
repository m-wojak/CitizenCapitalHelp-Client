import { createStore } from 'vuex'

export default createStore({
  state: {
      currentHelpSectID: null,
      currentHelpSect: null,
      currentHelpTop: null,
      allHelpSect: []
  },
  mutations: { //synchronous
      setCurrentHelpSectID(state, payload) {
          state.currentHelpSectID = payload
      },
      setCurrentHelpSect(state, payload) {
          state.currentHelpSect = payload
      },
      setCurrentHelpTop(state, payload) {
          state.currentHelpTop = payload
      },
      setAllHelpSect(state, payload) {
          state.allHelpSect = payload
      }
  },
  actions: { //asynchronous

  },
  modules: {},
  getters: {
      getcurrentHelpSectID: state => state.currentHelpSectID,
      getcurrentHelpSect: state => state.currentHelpSect,
      getcurrentHelpTop: state => state.currentHelpTop,
      getAllHelpSect: state => state.allHelpSect,
      }
  

})
