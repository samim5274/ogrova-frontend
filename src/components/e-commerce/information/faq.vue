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
                    {{ currentLang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'Help & Answers' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী' : 'Frequently Asked Questions' }}
                </h1>
                
                <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'র সার্ভিস, অর্ডার, ডেলিভারি ও পেমেন্ট সম্পর্কিত সকল প্রশ্নের উত্তর এখানে পাবেন।' : ' clear answers to common questions about orders, payments, shipping, and returns.' }}
                </p>
            </div>

            <!-- Category Filter Tabs -->
            <div class="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 -mx-2 px-2 scrollbar-none">
                <button 
                    v-for="cat in categories" 
                    :key="cat.key"
                    @click="activeCategory = cat.key"
                    :class="activeCategory === cat.key 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 border-indigo-600' 
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700'"
                    class="px-4 py-2 rounded-xl border text-xs font-bold shrink-0 transition-all flex items-center gap-2">
                    <i :class="cat.icon"></i>
                    {{ currentLang === 'bn' ? cat.labelBn : cat.labelEn }}
                </button>
            </div>

            <!-- Accordion FAQ List -->
            <div class="space-y-4 mb-10">
                <div 
                    v-for="(faq, index) in filteredFaqs" 
                    :key="index"
                    class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all">
                    
                    <button 
                        @click="toggleFaq(index)"
                        class="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none">
                        <span class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
                            {{ currentLang === 'bn' ? faq.questionBn : faq.questionEn }}
                        </span>
                        <i 
                            class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300 shrink-0"
                            :class="{ 'rotate-180 text-indigo-600 dark:text-indigo-400': openFaq === index }">
                        </i>
                    </button>

                    <!-- Animated Answer Container -->
                    <div 
                        v-show="openFaq === index"
                        class="px-5 pb-5 pt-0 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
                        <p class="pt-3">
                            {{ currentLang === 'bn' ? faq.answerBn : faq.answerEn }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Still Have Questions Banner -->
            <div class="rounded-2xl p-6 sm:p-8 bg-indigo-50/60 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-center">
                <div class="w-12 h-12 mx-auto rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-lg shadow-indigo-600/30 mb-4">
                    <i class="fa-solid fa-headset"></i>
                </div>
                <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                    {{ currentLang === 'bn' ? 'আপনার প্রশ্নের উত্তর পাননি?' : 'Still need assistance?' }}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 max-w-md mx-auto">
                    {{ currentLang === 'bn' ? 'আমাদের কাস্টমার সাপোর্ট টিম আপনাকে সার্বক্ষণিক সহায়তা করতে প্রস্তুত।' : 'Our support experts are here to help you 24/7 with any inquiries.' }}
                </p>
                <router-link 
                    to="/support-center" 
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all">
                    <i class="fa-solid fa-comments"></i>
                    {{ currentLang === 'bn' ? 'সাপোর্টে কথা বলুন' : 'Contact Support' }}
                </router-link>
            </div>

            <!-- Bottom Navigation -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <router-link to="/order-tracking" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'অর্ডার ট্র্যাকিং' : 'Order Tracking' }}
                </router-link>
                <span>•</span>
                <router-link to="/shipping-info" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'শিপিং তথ্য' : 'Shipping Info' }}
                </router-link>
                <span>•</span>
                <router-link to="/payment-methods" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'পেমেন্ট পদ্ধতি' : 'Payment Methods' }}
                </router-link>
            </div>

        </div>
    </div>
    <FooterSection />
</template>

<script setup>
import { ref, computed } from 'vue';
import FooterSection from '../footer.vue';

// Language Toggle State ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');

// Active Category & Accordion Control
const activeCategory = ref('all');
const openFaq = ref(0);

const toggleFaq = (index) => {
    openFaq.value = openFaq.value === index ? null : index;
};

// Filter Categories
const categories = ref([
    { key: 'all', icon: 'fa-solid fa-layer-group', labelBn: 'সকল প্রশ্ন', labelEn: 'All Questions' },
    { key: 'orders', icon: 'fa-solid fa-bag-shopping', labelBn: 'অর্ডার', labelEn: 'Orders' },
    { key: 'shipping', icon: 'fa-solid fa-truck-fast', labelBn: 'ডেলিভারি', labelEn: 'Shipping' },
    { key: 'payment', icon: 'fa-solid fa-credit-card', labelBn: 'পেমেন্ট', labelEn: 'Payment' },
    { key: 'returns', icon: 'fa-solid fa-rotate-left', labelBn: 'রিটার্ন ও রিফান্ড', labelEn: 'Returns' }
]);

// FAQ Data List
const faqs = ref([
    {
        category: 'orders',
        questionBn: 'আমি কীভাবে Ogrova-তে অর্ডার করব?',
        questionEn: 'How do I place an order on Ogrova?',
        answerBn: 'পছন্দের প্রোডাক্টটি সিলেক্ট করে সাইজ/ভেরিয়েন্ট বেছে নিন এবং "Add to Cart" বা "Order Now" বাটনে ক্লিক করুন। এরপর নাম, ঠিকানা ও ফোন নম্বর দিয়ে অর্ডার সম্পন্ন করুন।',
        answerEn: 'Select your preferred product and size variant, then click "Order Now" or "Add to Cart". Fill in your shipping address and contact details to confirm.'
    },
    {
        category: 'orders',
        questionBn: 'অর্ডার কনফার্ম করার পর পরিবর্তন বা বাতিল করা যাবে?',
        questionEn: 'Can I cancel or modify my order after placing it?',
        answerBn: 'পার্সেলটি কুরিয়ারে হস্তান্তর করার পূর্ব পর্যন্ত আপনি কাস্টমার কেয়ারে কল করে অর্ডার সংশোধন বা বাতিল করতে পারবেন।',
        answerEn: 'Yes, you can modify or cancel your order before it gets dispatched to our courier partner by contacting our support team.'
    },
    {
        category: 'shipping',
        questionBn: 'ডেলিভারি পেতে কত দিন সময় লাগে?',
        questionEn: 'How long does delivery take?',
        answerBn: 'ঢাকা শহরের ভেতরে ২৪ - ৪৮ ঘণ্টা এবং ঢাকার বাইরে ২ - ৪ কর্মদিবসের মধ্যে হোম ডেলিভারি প্রদান করা হয়।',
        answerEn: 'Delivery inside Metro Dhaka takes 24 to 48 hours, while outside Dhaka delivery takes 2 to 4 working days.'
    },
    {
        category: 'shipping',
        questionBn: 'ডেলিভারি চার্জ কত?',
        questionEn: 'What are the delivery charges?',
        answerBn: 'ঢাকা সিটির ভেতরে ডেলিভারি চার্জ ৳৬০ এবং ঢাকার বাইরে সারাদেশে ৳১২০।',
        answerEn: 'The shipping cost is ৳60 for deliveries inside Dhaka city and ৳120 for all other districts across Bangladesh.'
    },
    {
        category: 'payment',
        questionBn: 'কী কী উপায়ে পেমেন্ট করা যায়?',
        questionEn: 'What payment methods do you accept?',
        answerBn: 'আমরা ক্যাশ অন ডেলিভারি (COD), বিকাশ, নগদ, রকেট, উপায় এবং যেকোনো ডেবিট/ক্রেডিট কার্ড পেমেন্ট গ্রহণ করি।',
        answerEn: 'We accept Cash on Delivery (COD), Mobile Financial Services (bKash, Nagad, Rocket, Upay), and VISA/Mastercard.'
    },
    {
        category: 'returns',
        questionBn: 'প্রোডাক্ট অপছন্দ বা সাইজ সমস্যা হলে ফেরত দেওয়া যাবে?',
        questionEn: 'Can I return or exchange an item if it doesn\'t fit?',
        answerBn: 'হ্যাঁ, ডেলিভারিম্যানের উপস্থিতিতে পণ্য চেক করার সুযোগ রয়েছে। সমস্যা মনে হলে ৩ দিনের মধ্যে আমাদের জানালে সাইজ এক্সচেঞ্জ বা রিটার্ন করা যাবে।',
        answerEn: 'Yes, you can check the product upon delivery. If there is a size issue or defect, report it within 3 days for a hassle-free return or exchange.'
    }
]);

// Computed FAQ Filter Based on Category Selection
const filteredFaqs = computed(() => {
    if (activeCategory.value === 'all') {
        return faqs.value;
    }
    return faqs.value.filter(item => item.category === activeCategory.value);
});
</script>

<style scoped>
/* Hide Scrollbar for Horizontal Tabs */
.scrollbar-none::-webkit-scrollbar {
    display: none;
}
.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>