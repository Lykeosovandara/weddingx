<template>
    <div class="relative w-full bg-white flex flex-col bg-cover items-center py-8  ">
        <p class="text-xl text-pink-500 font-moulpali text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</p>
        <p class="text-sm p-4 text-center text-gray-500">រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល
            សម្រាប់យើងទាំងពីរនាក់។</p>


        <div class="grid grid-cols-3 gap-2 p-4">
            <img v-for="item in items"
                class="w-full object-cover rounded-lg inset-10 border-gray border-2 border-opacity-10 h-full"
                :class="item.spac"
                :src="item.img ? item.img : wire" :alt="item.title"
                @click="() => openImage(item.img)">
        </div>

        <full-view :image="selectedImage" :show="showImageDetail" @close="closeImage" />

    </div>
</template>

<script setup lang="ts">

const showImageDetail = ref<boolean>(false)
const selectedImage = ref<string>(null)

const closeImage = () => {
    showImageDetail.value = false
    selectedImage.value = null
}

const openImage = (img) => {

    showImageDetail.value = true
    selectedImage.value = img
}


const items = [

    {
        id: 5,
        title: 'រូបភាពទី៥',
        img: g5,
        spac: 'col-span-1'
    },

    {
        id: 4,
        title: 'រូបភាពទី៤',
        img: g4,
        spac: 'col-span-2'
    },
    {
        id: 2,
        title: 'រូបភាពទី២',
        img: g2,
        spac: 'col-span-1'
    },
    {
        id: 3,
        title: 'រូបភាពទី៣',
        img: g3,
        spac: 'col-span-1'
    },
    {
        id: 8,
        title: 'រូបភាពទី៨',
        img: g8,
        spac: 'col-span-1'
    },

    {
        id: 7,
        title: 'រូបភាពទី៧',
        img: g7,
        spac: 'col-span-1'
    },
    {
        id: 6,
        title: 'រូបភាពទី៦',
        img: g6,
        spac: 'col-span-2'
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
