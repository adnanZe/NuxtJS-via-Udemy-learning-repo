<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>
<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue';

export default {
    components: {
        AdminPostForm
    },
    layout: 'admin',
    data() {
        return {
            loadedPost: {
                author: 'Adnan',
                title: 'My awesome Post',
                content: 'Super amazing, thanks for that!',
                thumbnailLink: 'https://picsum.photos/1400'
            }
        }
    }
}
</script>
<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>