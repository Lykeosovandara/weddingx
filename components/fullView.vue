<template>
    <transition name="fade">
        <div v-if="show" class="image-detail z-20" @click="close">
            <div class="flex flex-col items-center">

                <NuxtImg :src="image" class="rounded-lg border-2"   @error="$event.target.src = image"/>
                <button @click="() => close()" class="text-white py-2 px-4  mt-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>

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