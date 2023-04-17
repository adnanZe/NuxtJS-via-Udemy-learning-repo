<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          { id: "1", isAdmin: true, thumbnail: "https://picsum.photos/1000", title: 'Hello there!', previewText: "This is my first post!" },
          { id: "2", isAdmin: true, thumbnail: "https://picsum.photos/1200", title: 'Hello there! - second time!', previewText: "This is my second post!" },
          { id: "3", isAdmin: true, thumbnail: "https://picsum.photos/1300", title: 'Hello there! - third time!', previewText: "This is my third post!" }
        ]
      })
    }, 3000)
  }
}
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

