<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-gray-50 text-gray-800 dark:bg-[#0a0a0b] dark:text-gray-200">
        <div class="max-w-5xl mx-auto">
            
            <!-- Page Header & Search Bar -->
            <div class="text-center mb-12 relative">
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
                    {{ currentLang === 'bn' ? '২৪/৭ সাহায্য কেন্দ্র' : 'Help & Knowledge Base' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'সাপোর্ট সেন্টার (Support Center)' : 'How Can We Help You?' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'র সাথে কেনাকাটা সংক্রান্ত যেকোনো সাধারণ জিজ্ঞাসার উত্তর সরাসরি এখান থেকে খুঁজে নিন।' : ' support hub. Search your queries or browse through our support categories below.' }}
                </p>

                <!-- Search Input Box -->
                <div class="max-w-xl mx-auto relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input 
                        v-model="searchQuery" 
                        type="text" 
                        :placeholder="currentLang === 'bn' ? 'আপনার প্রশ্ন বা সমস্যাটি লিখুন (যেমন: ডেলিভারি, রিফান্ড, পেমেন্ট)...' : 'Search topics (e.g., Delivery time, Refund, Payment)...'"
                        class="w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-white dark:bg-[#121215] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-lg shadow-gray-200/50 dark:shadow-none transition-all"
                    />
                </div>
            </div>

            <!-- Quick Category Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                <div 
                    v-for="cat in categories" 
                    :key="cat.id"
                    @click="activeCategory = activeCategory === cat.id ? null : cat.id"
                    :class="activeCategory === cat.id ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10 dark:border-indigo-500' : 'bg-white dark:bg-[#121215] border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20'"
                    class="p-5 rounded-3xl border shadow-lg shadow-gray-200/30 dark:shadow-none cursor-pointer transition-all duration-300 flex flex-col items-center text-center group">
                    <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                        <i :class="cat.icon"></i>
                    </div>
                    <h3 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-1">
                        {{ currentLang === 'bn' ? cat.titleBn : cat.titleEn }}
                    </h3>
                    <p class="text-[11px] text-gray-400">
                        {{ cat.qCount }} {{ currentLang === 'bn' ? 'টি উত্তর' : 'articles' }}
                    </p>
                </div>
            </div>

            <!-- Content Card Container (FAQ Accordion) -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                
                <h2 class="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                    <i class="fa-solid fa-circle-question text-indigo-500 text-lg"></i>
                    {{ currentLang === 'bn' ? 'সাধারণ জিজ্ঞাসা (FAQ)' : 'Frequently Asked Questions' }}
                </h2>

                <!-- No Search Results Found -->
                <div v-if="filteredFaqs.length === 0" class="text-center py-12">
                    <i class="fa-solid fa-circle-exclamation text-4xl text-gray-300 dark:text-gray-600 mb-3"></i>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ currentLang === 'bn' ? 'কোনো বিষয় খুঁজে পাওয়া যায়নি। অনুগ্রহ করে সার্চ পরিবর্তন করুন বা নিচে সরাসরি সহায়তা নিন।' : 'No articles found matching your query. Please try another search or contact support.' }}
                    </p>
                </div>

                <!-- Accordion List -->
                <div class="space-y-4">
                    <div 
                        v-for="(faq, index) in filteredFaqs" 
                        :key="index"
                        class="border rounded-2xl border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-200">
                        
                        <button 
                            @click="toggleFaq(index)"
                            class="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 bg-gray-50/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                                {{ currentLang === 'bn' ? faq.questionBn : faq.questionEn }}
                            </span>
                            <i 
                                :class="openFaq === index ? 'fa-solid fa-chevron-up text-indigo-500' : 'fa-solid fa-chevron-down text-gray-400'"
                                class="text-xs shrink-0 transition-transform duration-300"></i>
                        </button>

                        <div 
                            v-show="openFaq === index" 
                            class="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-[#121215] border-t border-gray-100 dark:border-white/5 leading-relaxed">
                            {{ currentLang === 'bn' ? faq.answerBn : faq.answerEn }}
                        </div>
                    </div>
                </div>

                <!-- Contact Support Banner Inside Card -->
                <div class="mt-12 p-6 rounded-3xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 class="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                            {{ currentLang === 'bn' ? 'উত্তর খুঁজে পাচ্ছেন না?' : 'Still Need Help?' }}
                        </h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {{ currentLang === 'bn' ? 'আমাদের কাস্টমার রিপ্রেজেন্টেটিভদের সাথে সরাসরি কথা বলতে মেসেজ অথবা ফোন করুন।' : 'Our dedicated support agents are standing by to assist you.' }}
                        </p>
                    </div>
                    <router-link 
                        to="/contact-us"
                        class="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md shrink-0 flex items-center gap-2">
                        <i class="fa-solid fa-headset"></i>
                        {{ currentLang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us' }}
                    </router-link>
                </div>

            </div>

            <!-- Bottom Navigation -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <router-link to="/about-us" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us' }}
                </router-link>
                <span>•</span>
                <router-link to="/contact-us" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'যোগাযোগ' : 'Contact Us' }}
                </router-link>
                <span>•</span>
                <router-link to="/return-policy" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'রিটার্ন পলিসি' : 'Return Policy' }}
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

// Search & Filter State
const searchQuery = ref('');
const activeCategory = ref(null);
const openFaq = ref(null);

const toggleFaq = (index) => {
    openFaq.value = openFaq.value === index ? null : index;
};

// Categories
const categories = ref([
    { id: 'order', icon: 'fa-solid fa-box-archive', titleBn: 'অর্ডার সংক্রান্ত', titleEn: 'Orders', qCount: 3 },
    { id: 'shipping', icon: 'fa-solid fa-truck-fast', titleBn: 'শিপিং ও ডেলিভারি', titleEn: 'Delivery', qCount: 2 },
    { id: 'payment', icon: 'fa-solid fa-credit-card', titleBn: 'পেমেন্ট ও রিফান্ড', titleEn: 'Payments', qCount: 2 },
    { id: 'account', icon: 'fa-solid fa-user-gear', titleBn: 'অ্যাাকাউন্ট সেটিংস', titleEn: 'Account', qCount: 2 },
]);

// FAQ Database
const faqs = ref([
    {
        catId: 'order',
        questionBn: 'আমি কীভাবে আমার অর্ডারের বর্তমান স্ট্যাটাস ট্র্যাক করব?',
        questionEn: 'How can I track my order status?',
        answerBn: 'আপনার অর্ডারের বর্তমান অবস্থা জানতে আমাদের ওয়েবসাইটের "Track Order" অপশনে গিয়ে আপনার অর্ডার আইডি এবং ফোন নম্বর টাইপ করুন।',
        answerEn: 'You can check your order status by navigating to the "Track Order" page and entering your Order ID and phone number.'
    },
    {
        catId: 'order',
        questionBn: 'অর্ডার করার পর কি তা বাতিল বা পরিবর্তন করা সম্ভব?',
        questionEn: 'Can I modify or cancel my order after placing it?',
        answerBn: 'পার্সেল হ্যাব থেকে শিপমেন্টের পূর্বে আপনি সাপোর্ট হেল্পলাইনে ফোন করে অর্ডার কনফার্মেশন বা অ্যাড্রেস পরিবর্তন করতে পারবেন।',
        answerEn: 'Yes, prior to dispatch, you can request order modifications or cancellation by contacting our customer helpline.'
    },
    {
        catId: 'shipping',
        questionBn: 'ঢাকা সিটি ও বাইরে ডেলিভারি পেতে কত সময় লাগে?',
        questionEn: 'What is the estimated delivery time?',
        answerBn: 'সাধারণত ঢাকা সিটির ভেতর ২৪-৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ২-৪ কার্যদিবসের মধ্যে পার্সেল ডেলিভারি দেওয়া হয়।',
        answerEn: 'Standard delivery takes 24–48 hours inside Dhaka and 2–4 business days across the rest of Bangladesh.'
    },
    {
        catId: 'payment',
        questionBn: 'Ogrova-তে পেমেন্টের কী কী মাধ্যম রয়েছে?',
        questionEn: 'What payment options are available?',
        answerBn: 'আমরা ক্যাশ অন ডেলিভারি (COD) এর পাশাপাশি বিকাশ, নগদ এবং যেকোনো কার্ডের মাধ্যমে সেকিউর অনলাইন পেমেন্ট গ্রহণ করি।',
        answerEn: 'We support Cash on Delivery (COD), Mobile Financial Services (bKash, Nagad), and debit/credit cards.'
    },
    {
        catId: 'payment',
        questionBn: 'রিটার্ন করা প্রোডাক্টের রিফান্ড কত দিনের মধ্যে পাওয়া যায়?',
        questionEn: 'How long does a refund take to process?',
        answerBn: 'রিটার্ন প্রোডাক্ট আমাদের অফিসে পৌঁছানোর পর তা যাচাই করে ৩-৫ কার্যদিবসের মধ্যে আপনার বিকাশ/ব্যাংক অ্যাকাউন্টে টাকা রিফান্ড করা হয়।',
        answerEn: 'Once the returned item passes quality check, refunds are issued to your original payment method within 3–5 business days.'
    },
    {
        catId: 'account',
        questionBn: 'অ্যাাকাউন্টের পাসওয়ার্ড ভুলে গেলে করণীয় কি?',
        questionEn: 'How do I reset a forgotten password?',
        answerBn: 'লগইন পেজে গিয়ে "Forgot Password" লিংকে ক্লিক করে আপনার ফোন নম্বর বা ইমেইলে প্রেরিত OTP দিয়ে নতুন পাসওয়ার্ড সেট করুন।',
        answerEn: 'Click on "Forgot Password" on the login page and follow the OTP verification instructions sent to your mobile or email.'
    }
]);

// Filtered FAQs computed based on Category Selection & Search Query
const filteredFaqs = computed(() => {
    return faqs.value.filter(faq => {
        const matchesCategory = activeCategory.value ? faq.catId === activeCategory.value : true;
        const query = searchQuery.value.toLowerCase().trim();
        const matchesSearch = query === '' || 
            faq.questionBn.toLowerCase().includes(query) || 
            faq.questionEn.toLowerCase().includes(query) ||
            faq.answerBn.toLowerCase().includes(query) ||
            faq.answerEn.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });
});
</script>

<style scoped>

</style>