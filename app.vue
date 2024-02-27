<template>
  <div class="w-full h-screen containera ">
    <app-header></app-header>
    <ticket></ticket>
    <photo-views></photo-views>
    <app-footer></app-footer>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

let inter: any = null;



function createHeart(): void {
  const heart: HTMLDivElement = document.createElement('div');
  heart.classList.add('heart');
  heart.classList.add('opacity-75');

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = '💗';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);



}
onMounted(() => {
  inter = setInterval(createHeart, 300);

  setTimeout(() => {
    clearInterval(inter);
  }, 30000);
});

onUnmounted(() => {
  // Cleanup code if necessary
});
</script>


<style>
.heart {
  position: fixed;
  font-size: 1.5rem;
  top: -1vh;
  transform: translateY(0);
  animation: fall 3s linear forwards;
}

@keyframes fall {
  from {
    transform: translateY(0vh) translateX(-10vw);
  }

  to {
    transform: translateY(105vh) translateX(10vw);
  }
}
</style>