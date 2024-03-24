<template>
    <div class="flex flex-col bg-slate-500 items-center p-4">
        <div class="flex flex-row justify-center items-center">
            <p>
                <svg class="w-5 h-5 fill-white mr-2 mb-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                    width="800" height="800" viewBox="0 0 395.71 395.71">
                    <path
                        d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.064 3.064 0 0 0 2.471 1.255 3.08 3.08 0 0 0 2.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z" />
                </svg>

            </p>

            <a :href="info.map">
                <p class="text-sm md:text-xl text-white text-center font-kantumruy px-4 ">{{ info?.address }}</p>
            </a>
        </div>

        <button @click="info.show = true"
            class=" bg-gray-500 py-2  mt-4  justify-center items-center rounded-lg flex flex-row  opacity-80 w-2/3  border-white border-2">
            <!-- <img :src="map" alt="map image" class="h-6 mr-1"> -->
            <p class="font-serif text-sm  text-white font-bold ">INVITATION</p>
        </button>

        
        <full-view image="/invited.jpg" :show="info.show" @close="info.show = false" />
    </div>
</template>

<script setup lang="ts">
import backgroundUrlMobile from '~/assets/images/1.jpeg'
import backgroundUrl from '~/assets/images/1.1.jpg'
import map from '~/assets/images/google-maps.png'



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


<style scoped>
/* .hide-mobile {
    @media (max-width: 820px) {
        background-image: url('~/assets/images/1.jpeg')
    }
}

.hide-desktop {
    @media (min-width: 820px) {
        background-image: url('~/assets/images/1.1.jpg');
    }
} */
</style>