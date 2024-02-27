<template>
    <div class="relative w-full bg-rose-gold flex h-screen  bg-cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class=" bg-cover flex flex-col p-8 z-10">

            <div class="flex flex-col text-center">
                <p class="text-4xl font-moulpali text-rose-gold">10 April 2024</p>
                <p class="text-md pt-4 text-gray-100 font-moulpali">សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
            </div>


        </div>

        <div class=" absolute flex justify-center items-center  w-full h-full">
            <p
                class="font-moulpali p-4 text-center text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.orange.100),theme(colors.yellow.400),theme(colors.yellow.100),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                LEAP HOUR & MENG SIVCHHANG</p>
        </div>
        <div class="z-10 absolute flex flex-col justify-end items-center  w-full h-full  pb-6">
            <p>
                <svg class="w-5 h-5 fill-white mr-2 mb-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                    width="800" height="800" viewBox="0 0 395.71 395.71">
                    <path
                        d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.064 3.064 0 0 0 2.471 1.255 3.08 3.08 0 0 0 2.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z" />
                </svg>

            </p>
            
            <a href="https://www.google.com/maps">
                <p class="text-sm md:text-xl text-white text-center font-moulpali px-4 "> <strong>នៅគេហដ្ឋានខាងស្រី</strong> <strong> ស្ថិតនៅភូមិក្រសាំងជ័យ ឃុំបារាយណ៍
                    ស្រុកបារាយណ៍
                    ខេត្តកំពង់ធំ
                    ។
                </strong></p>
            </a>

            <a href="https://www.google.com/maps" class=" bg-white py-4 mt-4  p-40 rounded-lg flex flex-row ">
                <img :src="map" alt="map image"  class="h-6 mr-1"> <p class=" font-light">GOOGLE MAP</p>
            </a>

        </div>

        <div class=" absolute w-full h-full bg-black opacity-20"></div>
    </div>
</template>

<script setup lang="ts">
import backgroundUrl from '~/assets/images/1.1.jpg'
import map from '~/assets/images/google-maps.png'
import locationSvg from '~/assets/svg/location.svg'
</script>

