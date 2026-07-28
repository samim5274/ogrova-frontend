<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-gray-50 text-gray-800 dark:bg-[#0a0a0b] dark:text-gray-200">
        <div class="max-w-4xl mx-auto">
            
            <!-- Page Header -->
            <div class="text-center mb-10 relative">
                <!-- Language Switcher Toggle -->
                <div class="flex justify-center sm:justify-end mb-6">
                    <div class="inline-flex items-center p-1 rounded-2xl bg-gray-200/80 dark:bg-white/10 backdrop-blur-md border border-gray-300/50 dark:border-white/10">
                        <button 
                            @click="currentLang = 'bn'"
                            :class="currentLang === 'bn' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
                            class="px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300">
                            বাংলা
                        </button>
                        <button 
                            @click="currentLang = 'en'"
                            :class="currentLang === 'en' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
                            class="px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300">
                            English
                        </button>
                    </div>
                </div>

                <span class="inline-block px-4 py-1.5 mb-4 text-[11px] font-black tracking-[0.2em] uppercase rounded-full border text-indigo-600 bg-indigo-50 border-indigo-100 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20">
                    {{ currentLang === 'bn' ? 'লাইভ পার্সেল ট্র্যাকিং' : 'Live Parcel Tracking' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'অর্ডার ট্র্যাক করুন' : 'Track Your Order' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'র অর্ডারের বর্তমান অবস্থা জানতে অর্ডার আইডি ও ফোন নম্বর দিন।' : ' order status in real-time. Enter your Order ID and Phone Number below.' }}
                </p>
            </div>

            <!-- Search Form Card -->
            <div class="rounded-2xl p-6 sm:p-8 border shadow-sm transition-all duration-300 bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 mb-8">
                <form @submit.prevent="handleTrack" class="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    
                    <!-- Order ID Input -->
                    <div class="sm:col-span-2">
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            {{ currentLang === 'bn' ? 'অর্ডার আইডি (Order ID)' : 'Order ID' }} *
                        </label>
                        <div class="relative">
                            <i class="fa-solid fa-hashtag absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                            <input 
                                v-model="trackForm.orderId"
                                type="text" 
                                required
                                :placeholder="currentLang === 'bn' ? 'যেমন: #OG-89021' : 'e.g., #OG-89021'"
                                class="w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    <!-- Phone Number Input -->
                    <div class="sm:col-span-2">
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            {{ currentLang === 'bn' ? 'ফোন নম্বর' : 'Phone Number' }} *
                        </label>
                        <div class="relative">
                            <i class="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                            <input 
                                v-model="trackForm.phone"
                                type="tel" 
                                required
                                :placeholder="currentLang === 'bn' ? '০১৭XXXXXXXX' : '017XXXXXXXX'"
                                class="w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="sm:col-span-1 flex items-end">
                        <button 
                            type="submit" 
                            :disabled="loading"
                            class="w-full py-3 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all flex items-center justify-center gap-2">
                            <i v-if="loading" class="fa-solid fa-spinner animate-spin"></i>
                            <i v-else class="fa-solid fa-magnifying-glass"></i>
                            {{ currentLang === 'bn' ? 'ট্র্যাক করুন' : 'Track' }}
                        </button>
                    </div>
                </form>
            </div>

            <!-- Tracking Result Section -->
            <div v-if="orderResult" class="space-y-6">
                
                <!-- Timeline Component (Your Requested Design) -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                            {{ currentLang === 'bn' ? 'অর্ডার টাইমলাইন' : 'Order Timeline' }}
                        </h3>
                        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                            {{ orderResult.id }}
                        </span>
                    </div>

                    <div class="flex items-start overflow-x-auto pb-1 -mx-1 px-1">
                        <template v-for="(step, idx) in timelineSteps" :key="step.key">
                            <div class="flex flex-col items-center text-center min-w-[86px] shrink-0">
                                <div class="w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all" :class="stepClass(step)">
                                    <i :class="step.icon" class="text-xs"></i>
                                </div>
                                <p class="text-[11px] font-semibold mt-2 leading-tight"
                                    :class="step.reached ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400 dark:text-slate-600'">
                                    {{ currentLang === 'bn' ? step.labelBn : step.labelEn }}
                                </p>
                                <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                                    {{ step.at ? formatDate(step.at) : (step.reached ? (currentLang === 'bn' ? 'সম্পন্ন' : 'Reached') : (currentLang === 'bn' ? 'অপেক্ষমাণ' : 'Pending')) }}
                                </p>
                            </div>
                            <div v-if="idx < timelineSteps.length - 1"
                                class="flex-1 h-0.5 mt-[18px] mx-1 min-w-[20px] transition-colors"
                                :class="step.reached && timelineSteps[idx + 1].reached ? 'bg-indigo-400 dark:bg-indigo-500' : 'bg-slate-200 dark:bg-slate-700'"></div>
                        </template>
                    </div>
                </div>

                <!-- Product Summary & Shipping Info Grid -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <!-- Ordered Items -->
                    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <h4 class="font-bold text-xs text-slate-900 dark:text-white uppercase mb-3">
                            {{ currentLang === 'bn' ? 'অর্ডারের পণ্যসমূহ' : 'Ordered Items' }}
                        </h4>
                        <div class="space-y-3">
                            <div v-for="item in orderResult.items" :key="item.id" class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                                    <i class="fa-solid fa-box text-xs"></i>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-xs font-bold text-slate-900 dark:text-white truncate">{{ item.name }}</p>
                                    <p class="text-[10px] text-slate-400">Variant: {{ item.variant }} | Qty: {{ item.qty }}</p>
                                </div>
                                <span class="text-xs font-bold text-slate-900 dark:text-white">৳ {{ item.price }}</span>
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/50 flex justify-between text-xs font-bold text-slate-900 dark:text-white">
                            <span>{{ currentLang === 'bn' ? 'সর্বমোট (পেমেন্ট)' : 'Total Amount' }}</span>
                            <span class="text-indigo-600 dark:text-indigo-400">৳ {{ orderResult.totalAmount }}</span>
                        </div>
                    </div>

                    <!-- Shipping Address Info -->
                    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                        <div>
                            <h4 class="font-bold text-xs text-slate-900 dark:text-white uppercase mb-3">
                                {{ currentLang === 'bn' ? 'ডেলিভারি ঠিকানা' : 'Shipping Address' }}
                            </h4>
                            <p class="text-xs text-slate-800 dark:text-slate-200 font-bold">{{ orderResult.customerName }}</p>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{{ orderResult.address }}</p>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Phone: {{ orderResult.customerPhone }}</p>
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between text-xs">
                            <span class="text-slate-400">{{ currentLang === 'bn' ? 'কুরিয়ার পার্টনার:' : 'Courier:' }}</span>
                            <span class="font-bold text-indigo-600 dark:text-indigo-400">{{ orderResult.courierName }}</span>
                        </div>
                    </div>

                </div>

            </div>

            <!-- Bottom Navigation -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <router-link to="/how-to-order" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'অর্ডার নির্দেশিকা' : 'How to Order' }}
                </router-link>
                <span>•</span>
                <router-link to="/support-center" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'সাপোর্ট সেন্টার' : 'Support Center' }}
                </router-link>
                <span>•</span>
                <router-link to="/contact-us" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'যোগাযোগ' : 'Contact Us' }}
                </router-link>
            </div>

        </div>
    </div>
    <FooterSection />
</template>

<script setup>
import { ref } from 'vue';
import FooterSection from '../footer.vue';

// Language State
const currentLang = ref('bn');

const trackForm = ref({
    orderId: '',
    phone: ''
});

const loading = ref(false);
const orderResult = ref(null);

// Dynamic Timeline Steps
const timelineSteps = ref([
    { key: 'placed', icon: 'fa-solid fa-receipt', labelBn: 'অর্ডার গৃহীত', labelEn: 'Order Placed', reached: false, at: null },
    { key: 'processing', icon: 'fa-solid fa-gear', labelBn: 'প্রসেসিং', labelEn: 'Processing', reached: false, at: null },
    { key: 'shipped', icon: 'fa-solid fa-truck-fast', labelBn: 'শিপিংয়ে আছে', labelEn: 'Shipped', reached: false, at: null },
    { key: 'delivered', icon: 'fa-solid fa-check', labelBn: 'ডেলিভার্ড', labelEn: 'Delivered', reached: false, at: null }
]);

// Step class helper for active vs inactive state
const stepClass = (step) => {
    if (step.reached) {
        return 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-500/30';
    }
    return 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-600';
};

// Simple date formatter
const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLang.value === 'bn' ? 'bn-BD' : 'en-US', {
        month: 'short',
        day: 'numeric'
    });
};

const handleTrack = () => {
    loading.value = true;
    orderResult.value = null;

    setTimeout(() => {
        loading.value = false;
        
        // Mock API Response
        orderResult.value = {
            id: trackForm.value.orderId.toUpperCase(),
            customerName: 'Samim Hossen',
            customerPhone: trackForm.value.phone,
            address: 'House #12, Road #4, Dhanmondi, Dhaka 1209',
            courierName: 'Steadfast Courier',
            totalAmount: '2,450',
            items: [
                { id: 1, name: 'Premium Cotton Smart Shirt', variant: 'L / Navy Blue', qty: 1, price: '1,250' },
                { id: 2, name: 'Casual Denim Pants', variant: '32 / Dark Blue', qty: 1, price: '1,200' }
            ]
        };

        // Update timeline status dynamically (Simulated status up to 'Shipped')
        timelineSteps.value = [
            { key: 'placed', icon: 'fa-solid fa-receipt', labelBn: 'অর্ডার গৃহীত', labelEn: 'Order Placed', reached: true, at: '2026-07-26T10:00:00' },
            { key: 'processing', icon: 'fa-solid fa-gear', labelBn: 'প্রসেসিং', labelEn: 'Processing', reached: true, at: '2026-07-27T14:30:00' },
            { key: 'shipped', icon: 'fa-solid fa-truck-fast', labelBn: 'শিপিংয়ে আছে', labelEn: 'Shipped', reached: true, at: '2026-07-28T09:15:00' },
            { key: 'delivered', icon: 'fa-solid fa-check', labelBn: 'ডেলিভার্ড', labelEn: 'Delivered', reached: false, at: null }
        ];

    }, 800);
};
</script>

<style scoped>

</style>