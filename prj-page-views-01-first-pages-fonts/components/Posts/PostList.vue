<template>
    <section class='posts-list'>
        <PostPreview id="1" thumbnail="https://picsum.photos/1000" title="Hello there!"
            previewText="This is my first post!" />
        <PostPreview id="2" thumbnail="https://picsum.photos/1200" title="Hello there! - second time!"
            previewText="This is my second post!" />
        <PostPreview id="3" thumbnail="https://picsum.photos/1300" title="Hello there! - third time!"
            previewText="This is my third post!" />
    </section>
</template>
<script>
import PostPreview from '@/components/Posts/PostPreview';
export default {
    components: {
        PostPreview,
    }
}
</script>

<style scoped>
.posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>