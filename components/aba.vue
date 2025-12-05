<template>
    <div class=" rounded-lg bg-white flex flex-row justify-start mx-4 mb-4 border p-2">
        <img class="w-36 h-36" :src="aba" alt="aba" />
        <div class="flex flex-col justify-center items-center p-4">
            <p class="text-xl font-bold text-pink-500 ">{{ info.name }}</p>
            <a :href="info.abalink" class=" text-xl font-bold text-gray-400 underline ">{{ info.code }}</a> 
        </div>
    </div>
</template>
<script setup lang="ts">
import aba from "~/assets/images/aba.png";


const info = ref({
    abalink: '',
    code: '',
    name: '',
})

const { data: sheet } = await allRows();


onMounted(() => {
    info.value.abalink = sheet.value.values[9][1];
    // info.value.abalink = sheet.value.values[9][1];
    info.value.name = sheet.value.values[10][1];
    info.value.code = sheet.value.values[11][1];
    
    
   
})
</script>