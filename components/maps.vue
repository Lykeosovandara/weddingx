<template>
  <div class="flex flex-col p-4">
    <p class="text-xl text-pink-500 font-moulpali text-center">ទីតាំងកម្មវិធី</p>
    <p class="text-sm   px-4 text-center text-gray-400 font-kantumruy py-4">{{ info.address }}</p>
    <div class="h-1/2 rounded-lg">
      <iframe style="border-radius: 10px;" loading="lazy" allowfullscreen class=" w-full h-full rounded-lg"
        title="map" aria-hidden="false" tabindex="0" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDIKCYO_jZB8-MZIhV4owOBDdG_rl8Xd6M
    &q=11.6448440,104.9566970">
      </iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>


const info = ref({
  title: '',
  marriedDate: '',
  address: '',
  map: '',
  show: false
})

const { data: sheet } = await allRows();


onMounted(() => {
  info.value.title = sheet.value.values[0][1];
  info.value.marriedDate = sheet.value.values[1][1];
  info.value.address = sheet.value.values[2][1];
  info.value.map = sheet.value.values[5][1];
})


</script>

<style></style>