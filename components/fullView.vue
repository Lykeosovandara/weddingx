<template>
    <div v-if="show" class="image-detail">
        <img :src="image.img" :alt="image.title">
        <button @click="close">Close</button>
    </div>
</template>


<script lang="ts" setup>
defineProps<{
    show: boolean;
    image: {
        id: number;
        title: string;
        img: string;
    };
}>();

const close = () => {
    emit('update:show', false);
};
</script>

<style scoped>
.image-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
}

.image-detail img {
    max-width: 90%;
    max-height: 90%;
}
</style>