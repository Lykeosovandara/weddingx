<template>
    <div class="relative w-full bg-rose-gold flex flex-col bg-cover items-center py-8  ">
        <p class="text-2xl text-pink-500 font-moulpali text-center">សិរីសួស្តីមង្គលអាពាហ៍ពិពាហ៍</p>
        <p class="text-2xl py-4 text-center ">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</p>
        <p class="text-md   px-4 text-center text-gray-500">ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត
            អញ្ជើញចូលរួមជាអធិបតី
            និងជាភ្ញៀវកិត្តិយស
            ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គល <strong class="font-extrabold">ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍</strong>
            របស់យើងខ្ញុំទាំងពីរ។ </p>
            

            <div class="flex flex-col md:flex-row p-4">
                
                <div class="flex flex-row items-center">
                    <p class="text-xl font-moulpali text-pink-500 pr-4 text-center">សេង ចាន់ធីតា</p>
                    <img class="w-32 md:w-44  rounded-full" :src="wire" alt="background">
                </div>
                
                <div class="flex items-center justify-center"><img class="animate-bounce h-28   w-28 p-4" :src="heart" alt="background"></div>

                <div class="flex flex-row  items-center">
                    <img class="w-32 md:w-44  rounded-full" :src="hasband" alt="background">
                    <p class="pl-4 text-xl font-moulpali text-pink-500 text-center">សិម ឆាយងួន</p>
                </div>

            </div>
    </div>
</template>

<script setup lang="ts">
import backgroundUrl from '~/assets/images/1.1.jpg'
import wire from '~/assets/images/1.2.jpg'
import hasband from '~/assets/images/1.3.jpg'
import heart from '~/assets/images/heart.png'
import locationSvg from '~/assets/svg/location.svg'
</script>


