<template>
    <div class="relative w-full bg-rose-gold flex flex-col bg-cover items-center py-8  ">
        <p class="text-xl text-pink-500 font-moulpali text-center">សិរីសួស្តីមង្គលអាពាហ៍ពិពាហ៍</p>
        <p class="text-md py-4 text-center font-kantumruy ">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</p>
        <p class="text-sm   px-4 text-center text-gray-400 font-kantumruy">ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
            និងប្រិយមិត្ត
            អញ្ជើញចូលរួមជាអធិបតី
            និងជាភ្ញៀវកិត្តិយស
            ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គល <strong class="font-extrabold">ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍</strong>
            របស់យើងខ្ញុំទាំងពីរ។ </p>


        <div class="flex flex-col md:flex-row p-4">

            <div class="flex flex-row items-center">
                <p class="text-xl font-kantumruy text-pink-500 pr-4 text-center">{{ info?.husband }}</p>
                <img class="w-36 md:w-44  rounded-full border-2 border-white " :src="wire" alt="background">
            </div>

            <div class="flex items-center justify-center"><img class="animate-bounce h-16  w-16 my-8" :src="heart"
                    alt="background"></div>

            <div class="flex flex-row  items-center">
                <img class=" w-36 md:w-44  rounded-full border-2 border-white" :src="hasband" alt="background" >
                <p class="pl-4 text-xl font-kantumruy text-pink-400 text-center">{{ info?.wife }}</p>
            </div>

        </div>
        
        <p class="text-sm  px-4 text-center text-gray-500 font-kantumruy">និង ពិសាភោជនាហារ ដែលនឹងប្រព្រឹត្ត ទៅនៅ
        <p class=" text-sm font-bold font-kantumruy">{{ info.khmerDate }}</p> ត្រូវនឹង{{ info.buddaDate }} វេលាម៉ោង ០៥:០០ នាទីល្ងាច {{ info.address }}
        ដោយមេត្រីភាព។ សូមអរគុណ! </p>
    </div>
</template>

<script setup lang="ts">
import wire from '~/assets/images/1.2.jpg'
import hasband from '~/assets/images/1.3.jpg'
import heart from '~/assets/images/heart.png'

const info = ref({
    husband: '',
    wife: '',
    khmerDate: '',
    buddaDate: '',
    address: ''
})

const { data: sheet } = await allRows();


onMounted(() => {
    info.value.husband = sheet.value.values[3][1];
    info.value.wife = sheet.value.values[4][1];
    info.value.khmerDate = sheet.value.values[6][1];
    info.value.buddaDate = sheet.value.values[7][1];
    info.value.address = sheet.value.values[2][1];
})



</script>
