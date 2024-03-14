<template>
    <transition name="fade">
        <div v-if="show" class="image-detail z-20" @click="close">
            <div class="flex flex-col items-center">

                <img :src="image" class="rounded-lg border-2">
                <button @click="() => close()" class="text-white py-2 px-4 bg-black mt-2 rounded-lg">Close</button>

            </div>

        </div>
    </transition>
</template>


<script lang="ts" setup>
const emit = defineEmits(['close']);
defineProps<{
    show: boolean;
    image: string;
}>();

const close = () => {
    emit('close',);
};
</script>

<style scoped>
.image-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    inset: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
}

.image-detail img {
    max-width: 90%;
    max-height: 90%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>