<template>
    <div class="relative w-full bg-white flex flex-col bg-cover items-center pt-8  ">
        <p class="text-xl text-pink-500 font-moulpali text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</p>
        <p class="text-sm p-4 text-center text-gray-500">រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល
            សម្រាប់យើងទាំងពីរនាក់។</p>


        <div class="grid grid-cols-3 gap-2 p-4">
            <NuxtImg v-for="item in items"
                class="rounded-lg inset-10 border-gray border-2 border-opacity-5 " :class="item.spac"
                :src="item.img" @click="() => openImage(item.id)" quality="50" />
        </div>
        <full-view v-if="showImageDetail" :image="selectedImage" :show="showImageDetail" @close="closeImage" />

    </div>
</template>

<script setup lang="ts">

const showImageDetail = ref<boolean>(false)
const selectedImage = ref<string>(null)

const closeImage = () => {

    showImageDetail.value = false
}

const openImage = (img) => {

    showImageDetail.value = true
    selectedImage.value = "/gallary/" + img + ".jpeg";
}


const items = [
    {
        id: 5,
        title: 'រូបភាពទី៥',
        spac: 'col-span-1',
        img: '/gallary/5.jpeg'

    },

    {
        id: 4,
        title: 'រូបភាពទី៤',
        spac: 'col-span-2',
        img: '/gallary/4.jpeg'
    },
    {
        id: 2,
        title: 'រូបភាពទី២',
        spac: 'col-span-1',
        img: '/gallary/2.jpeg'
    },
    {
        id: 3,
        title: 'រូបភាពទី៣',
        spac: 'col-span-1',
        img: '/gallary/3.jpeg'
    },
    {
        id: 8,
        title: 'រូបភាពទី៨',
        spac: 'col-span-1',
        img: '/gallary/8.jpeg'
    },

    {
        id: 7,
        title: 'រូបភាពទី៧',
        spac: 'col-span-1',
        img: '/gallary/7.jpeg'
    },
    {
        id: 6,
        title: 'រូបភាពទី៦',
        spac: 'col-span-2',
        img: '/gallary/6.jpeg'
    },

]


</script>
