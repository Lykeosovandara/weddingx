<template>
    <div class="relative w-full bg-white flex flex-col bg-cover items-center py-8  ">
        <p class="text-xl text-pink-500 font-moulpali text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</p>
        <p class="text-sm p-4 text-center text-gray-500">រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល
            សម្រាប់យើងទាំងពីរនាក់។</p>


        <div class="columns-1 md:columns-2 p-4 space-y-3 pointer-events-auto">
            <img v-for="item in items" class="w-full object-cover rounded-lg inset-10 border-gray border-2 border-opacity-10" :src="item.img ? item.img : wire"
                        :alt="item.title" @click="() =>openImage(item.img)">
        </div>
       
    </div>
</template>

<script setup lang="ts">

const showImageDetail = ref<boolean>(false)
const selectedImage = ref<string>(null)

const closeImage = () => {
    showImageDetail.value = true
    selectedImage.value = null
}

const openImage = (img)=> {
    console.log("OPEN IMAGE", img);
    window.open(img);
    
    showImageDetail.value = false
    selectedImage.value = null
}


const items = [
    {
        id: 1,
        title: 'រូបភាពទី១',
        img: g1
    },
    {
        id: 2,
        title: 'រូបភាពទី២',
        img: g2
    },
    {
        id: 3,
        title: 'រូបភាពទី៣',
        img: g3
    },
    {
        id: 4,
        title: 'រូបភាពទី៤',
        img: g4
    },
    {
        id: 5,
        title: 'រូបភាពទី៥',
        img: g5
    },
    {
        id: 6,
        title: 'រូបភាពទី៦',
        img: g6
    },
    {
        id: 7,
        title: 'រូបភាពទី៧',
        img: g7
    },
    {
        id: 8,
        title: 'រូបភាពទី៨',
        img: g8
    },


]

import g1 from '~/assets/images/gallary/1.jpeg'
import g2 from '~/assets/images/gallary/2.jpeg'
import g3 from '~/assets/images/gallary/3.jpeg'
import g4 from '~/assets/images/gallary/4.jpeg'
import g5 from '~/assets/images/gallary/5.jpeg'
import g6 from '~/assets/images/gallary/6.jpeg'
import g7 from '~/assets/images/gallary/7.jpeg'
import g8 from '~/assets/images/gallary/8.jpeg'
</script>
