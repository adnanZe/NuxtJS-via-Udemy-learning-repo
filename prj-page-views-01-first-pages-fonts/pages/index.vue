<template>
  <div class='home-page'>
    <section class='intro'>
      <h1>Get the latest tech news!</h1>
    </section>
    <section class='featured-posts'>
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList,
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  asyncData(context, callback) {
    console.log(context);
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          { id: "1", isAdmin: true, thumbnail: "https://picsum.photos/1000", title: 'Hello there!', previewText: "This is my first post!" },
          { id: "2", isAdmin: true, thumbnail: "https://picsum.photos/1200", title: 'Hello there! - second time!', previewText: "This is my second post!" },
          { id: "3", isAdmin: true, thumbnail: "https://picsum.photos/1300", title: 'Hello there! - third time!', previewText: "This is my third post!" }
        ]
      })
    }, 1500)
  },
  created() {

  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>