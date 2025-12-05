<template>
   <div class="bg-rose-gold ">
    <Carousel class="carousel" :perPage="1" navigationEnabled paginationEnabled>
        <Slide v-for="(image, index) in images" :key="index" class=" z-1">

            <img class="h-full bg-cover full-width" :src="image" alt="Slide image" />
            <!-- <Pagination class="pagination z-10" /> -->

          
        </Slide>
        <template #addons>
                <Pagination />
            </template>
    </Carousel>
   </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import bg1 from '~/assets/images/1.png';
import bg2 from '~/assets/images/1-2.png';
import bg3 from '~/assets/images/1-3.png';

const images = ref([bg1, bg2, bg3]);
</script>

<style scoped>
.carousel {
    width: 100%;
    /* height: 100%; */
    
}

.full-width {
    width: 100%;
}


</style>