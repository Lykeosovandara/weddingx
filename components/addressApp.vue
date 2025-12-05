<template>
   <div class="bg-rose-gold ">
    <img class="h-full bg-cover full-width" :src="bg1" alt="Slide image" />
    <img class="h-full bg-cover full-width" :src="bg2" alt="Slide image" />
       </div>
</template>

<script setup lang="ts">
import bg1 from '~/assets/images/1.png';
import bg2 from '~/assets/images/111.png';

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