import Vuex from 'vuex'

const createStore = () => new Vuex.Store({
    state:{
        loadedPosts: [],
    },
    mutations: {
        setPosts(state, posts){
            state.loadedPosts = posts
        }
    },
    actions: {
        nuxtServerInit(vuexContext, context){
            return new Promise((resolve, reject) => setTimeout(() => {
           vuexContext.commit('setPosts', [
              { id: "1", isAdmin: true, thumbnail: "https://picsum.photos/1000", title: 'Hello there!', previewText: "This is my first post!" },
              { id: "2", isAdmin: true, thumbnail: "https://picsum.photos/1200", title: 'Hello there! - second time!', previewText: "This is my second post!" },
              { id: "3", isAdmin: true, thumbnail: "https://picsum.photos/1300", title: 'Hello there! - third time!', previewText: "This is my third post!" }
            ]
          )
            resolve();
            }, 3000))
        },
        setPosts(vuexContext, posts){
            vuexContext.commit('setPosts', posts)
        }
    },
    getters: {
        loadedPosts(state){
            return state.loadedPosts
        }
    },
})

export default createStore