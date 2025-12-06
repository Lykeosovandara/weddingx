<template>
    <div class="bg-rose-gold">
        <Carousel class="carousel" :items-to-show="1" :wrap-around="true" :touch-drag="true" :mouse-drag="true"
            snap-align="center" :transition="300">
            <Slide v-for="(image, index) in images" :key="index" class="z-1">
                <img class="h-full bg-cover full-width" :src="image" alt="Slide image" />
            </Slide>
            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import bg1 from '~/assets/images/1.png';
import bg2 from '~/assets/images/1-2.png';
import bg3 from '~/assets/images/1-3.png';

const images = ref([bg1, bg2, bg3]);
</script>

<style scoped>
.carousel {
    width: 100%;
    position: relative;
}

.full-width {
    width: 100%;
}

/* Bigger navigation arrows for mobile */
:deep(.carousel__prev),
:deep(.carousel__next) {
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
}

:deep(.carousel__prev svg),
:deep(.carousel__next svg) {
    width: 24px;
    height: 24px;
}

/* Even bigger on mobile for easier touch */
@media (max-width: 768px) {

    :deep(.carousel__prev),
    :deep(.carousel__next) {
        width: 56px;
        height: 56px;
    }

    :deep(.carousel__prev svg),
    :deep(.carousel__next svg) {
        width: 28px;
        height: 28px;
    }
}
</style>