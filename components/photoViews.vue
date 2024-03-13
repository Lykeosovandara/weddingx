<template>
    <div class="relative w-full bg-white flex flex-col bg-cover items-center py-8  ">
        <p class="text-2xl text-pink-500 font-moulpali text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</p>
        <p class="text-md p-4 text-center text-gray-500">រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល
            សម្រាប់យើងទាំងពីរនាក់។</p>

        <div class="columns-1 gap-4 py-4 md:columns-2 p-4 space-y-4">
            <div v-for="item in items">
                <div class="relative" >
                    <img class="w-full  object-cover rounded-lg inset-10" :src="item.img ? item.img : wire"
                        :alt="item.title" >
                    <div class="bg-black bg-opacity-20 p-4 rounded-lg absolute w-full h-full inset-0">

                    </div>
                    <div class="absolute inset-0  items-center justify-center h-full bottom-0" @click="() => openImage(item)">
                        <div class=" p-4 rounded-lg">
                            <p class="text-white text-lg font-semibold">{{ item.title }}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <ImageDetail :show="showImageDetail" :image="selectedImage" @close="closeImage"></ImageDetail> -->
    </div>
</template>

<script setup lang="ts">


const showImageDetail = ref<boolean>(false)
const selectedImage = ref<string>(null)

const closeImage = () => {
    showImageDetail.value = false
    selectedImage.value = null
}

const openImage = (img: {
    id: number;
    title: string;
    img: string;
})=> {
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
