<template>
    <div class="wedding-gift-card mx-4 mb-4">
        <!-- Decorative Header -->
        <div class="card-header">
            <div class="decorative-icon">👑</div>
            <h2 class="script-title">Wedding Gift</h2>
        </div>

        <!-- Gift Icon -->
        <div class="gift-icon-container">
            <div class="gift-icon">🎁</div>
        </div>

        <!-- Title -->
        <h3 class="main-title">WEDDING GIFT</h3>

        <!-- Khmer Instructions -->
        <div class="instructions">
            <p class="khmer-text">លោកអ្នកអាចធ្វើអំណោយតាមរយៈ: ABA</p>
            <p class="khmer-text">សូមចុចលើ Button ខាងក្រោម</p>
        </div>

        <!-- Account Info -->
        <p class="account-names">{{ info.name }}</p>
        <p class="account-codes">លេខគណនី: {{ info.code }}</p>

        <!-- QR Code Section -->
        <div class="qr-container">
            <div class="qr-wrapper">
                <a :href="info.abalink" target="_blank">
                    <img class="qr-code" :src="aba" alt="ABA QR Code" />
                </a>
            </div>
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
    info.value.name = sheet.value.values[10][1];
    info.value.code = sheet.value.values[11][1];
})
</script>

<style scoped>
.wedding-gift-card {
    background: linear-gradient(135deg, #f5f0e1 0%, #ebe5d5 50%, #f0ebe0 100%);
    border-radius: 16px;
    padding: 24px 20px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(180, 160, 120, 0.3);
    position: relative;
    overflow: hidden;
}

.wedding-gift-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9b896' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
}

.card-header {
    margin-bottom: 12px;
}

.decorative-icon {
    font-size: 24px;
    margin-bottom: 4px;
}

.script-title {
    font-family: 'Brush Script MT', 'Dancing Script', cursive;
    font-size: 32px;
    color: #5a4a3a;
    margin: 0;
    font-weight: normal;
}

.gift-icon-container {
    margin: 16px 0;
}

.gift-icon {
    font-size: 64px;
    filter: sepia(0.3) saturate(1.2);
}

.main-title {
    font-size: 18px;
    font-weight: 600;
    color: #4a4035;
    letter-spacing: 2px;
    margin: 12px 0;
}

.instructions {
    margin: 16px 0;
}

.khmer-text {
    font-size: 14px;
    color: #5a4a3a;
    margin: 4px 0;
    line-height: 1.6;
}

.account-names {
    font-size: 13px;
    color: #6a5a4a;
    margin: 8px 0 4px;
    font-weight: 500;
}

.account-codes {
    font-size: 12px;
    color: #7a6a5a;
    margin: 0 0 16px;
}

.qr-container {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
}

.qr-wrapper {
    background: white;
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.qr-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.qr-code {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: contain;
}

@media (max-width: 400px) {
    .qr-container {
        flex-direction: column;
        align-items: center;
    }

    .qr-code {
        width: 140px;
        height: 140px;
    }
}
</style>