<template>
  <div class="w-full h-screen">
    <app-header></app-header>
    <ticket></ticket>
    <photo-views></photo-views>
    <app-footer></app-footer>
    <canvas ref="canvas" class="fixed inset-0 w-full h-full"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Raindrop {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  speed: number;
  size: number;
  update(width: number, height: number): void;
  draw(): void;
}

const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const raindrops = ref<Raindrop[]>([]);

class RaindropClass implements Raindrop {
  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.speed = Math.random() * 3 ;
    this.size = Math.random() * 1 ;
  }
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  speed: number;
  size: number;

  update(width: number, height: number): void {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = Math.random() * width;
    }
  }

  draw(): void {
    if (!this.ctx) return;
    this.ctx.beginPath();

    // Move to the starting point of the heart shape
    this.ctx.moveTo(this.x, this.y);

    // Draw the upper part of the heart
    this.ctx.bezierCurveTo(
      this.x + this.size,
      this.y - this.size,
      this.x + 2 * this.size,
      this.y - 2 * this.size,
      this.x + 2 * this.size,
      this.y
    );

    // Draw the lower part of the heart
    this.ctx.bezierCurveTo(
      this.x + 2 * this.size,
      this.y + 2 * this.size,
      this.x + this.size,
      this.y + 2 * this.size,
      this.x,
      this.y + 2 * this.size
    );

    // Close the path to form the heart shape
    this.ctx.closePath();

    // Fill the heart shape with color
    this.ctx.fillStyle = 'pink';
    this.ctx.fill();

  }
}

const animate = (): void => {
  if (!ctx.value || !canvas.value) return;
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  raindrops.value.forEach((raindrop) => {
    raindrop.update(canvas.value!.width, canvas.value!.height);
    raindrop.draw();
  });
  requestAnimationFrame(animate);
};

onMounted(() => {
  if (canvas.value) {
    ctx.value = canvas.value.getContext('2d');
    raindrops.value = Array.from({ length: 100 }, () => new RaindropClass(ctx.value!, canvas.value!.width, canvas.value!.height));
    animate();
  }
});

onUnmounted(() => {
  // Cleanup code if necessary
});
</script>