<template>
    <div class="relative w-full bg-white flex flex-col bg-cover items-center py-8  ">
        <p class="text-2xl text-pink-500 font-moulpali text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</p>
        <p class="text-md p-4 text-center text-gray-500">រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល
            សម្រាប់យើងទាំងពីរនាក់។</p>

        <div class="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 p-4">
            <div  v-for="item in items">
                <div class="relative">
                    <img class="w-full h-96 object-cover rounded-lg inset-10" :src="item.image" :alt="item.title">
                    <div class="bg-black bg-opacity-50 p-4 rounded-lg absolute w-full h-full inset-0">
                          
                        </div>
                    <div class="absolute inset-0  items-center justify-center h-full bottom-0">
                        <div class=" p-4 rounded-lg">
                            <p class="text-white text-lg font-semibold">{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const items = [
    {
        id: 1,
        title: 'រូបភាពទី១',
        image: backgroundUrl
    },
    {
        id: 2,
        title: 'រូបភាពទី២',
        image: wire
    },
    {
        id: 3,
        title: 'រូបភាពទី៣',
        image: hasband
    },
    {
        id: 4,
        title: 'រូបភាពទី៤',
        image: py
    }

]

import backgroundUrl from '~/assets/images/1.1.jpg'
import wire from '~/assets/images/1.2.jpg'
import hasband from '~/assets/images/1.3.jpg'
import py from '~/assets/images/py.jpg'
</script>


