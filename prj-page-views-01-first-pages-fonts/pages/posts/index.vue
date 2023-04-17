<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => setTimeout(() => {
      resolve({
        loadedPosts: [
          { id: "1", isAdmin: true, thumbnail: "https://picsum.photos/1000", title: 'Hello there!', previewText: "This is my first post!" },
          { id: "2", isAdmin: true, thumbnail: "https://picsum.photos/1200", title: 'Hello there! - second time!', previewText: "This is my second post!" },
          { id: "3", isAdmin: true, thumbnail: "https://picsum.photos/1300", title: 'Hello there! - third time!', previewText: "This is my third post!" }
        ]
      })
    }, 3000))
      .then(data => data)
      .catch(e => {
        context.error(new Error(e))
      })
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

