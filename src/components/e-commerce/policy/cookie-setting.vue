<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-gray-50 text-gray-800 dark:bg-[#0a0a0b] dark:text-gray-200">
        <div class="max-w-5xl mx-auto">
            
            <!-- Page Header -->
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
                    {{ currentLang === 'bn' ? 'প্রাইভেসি ও পার্সোনালাইজেশন' : 'Privacy & Personalization' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'কুকি সেটিংস (Cookie Settings)' : 'Cookie Preferences' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'তে আপনার ব্রাউজিং অভিজ্ঞতা নিয়ন্ত্রণ করুন। আপনার প্রয়োজন অনুযায়ী কুকিজ কনফিগার করুন।' : ' gives you control over your data. Manage your cookie preferences below.' }}
                </p>

                <div class="mt-3 text-xs text-gray-400 dark:text-gray-500">
                    {{ currentLang === 'bn' ? 'সর্বশেষ আপডেট: মার্চ ২০২৬' : 'Last Updated: March 2026' }}
                </div>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                
                <div class="space-y-10 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">

                    <!-- Section 1: Introduction -->
                    <section>
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-cookie-bite text-indigo-500 text-lg"></i>
                            1. {{ currentLang === 'bn' ? 'কুকিজ কী এবং কেন ব্যবহার করা হয়?' : 'What are Cookies?' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            কুকিজ হলো ছোট টেক্সট ফাইল যা আপনি যখন ওয়েবসাইটে ভিজিট করেন তখন আপনার ডিভাইসে সংরক্ষিত হয়। <strong>Ogrova</strong>-তে আমরা সাইটের সঠিক কার্যকারিতা, ব্যবহারকারীর লগইন সেশন মনে রাখা, শপিং কার্ট সংরক্ষণ এবং ব্যক্তিগত অভিজ্ঞতা আরও উন্নত করতে কুকিজ ব্যবহার করি।
                        </p>
                        <p v-else>
                            Cookies are small text files stored on your device when you visit websites. At <strong>Ogrova</strong>, we use cookies to ensure site functionality, maintain your shopping cart, preserve your login session, and deliver tailored shopping experiences.
                        </p>
                    </section>

                    <!-- Section 2: Interactive Cookie Preferences -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-sliders text-indigo-500 text-lg"></i>
                            2. {{ currentLang === 'bn' ? 'আপনার কুকি পছন্দসমূহ নির্ধারণ করুন' : 'Manage Cookie Categories' }}
                        </h2>

                        <!-- Alert Notice -->
                        <div v-if="saveMessage" class="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-circle-check text-base"></i>
                            {{ saveMessage }}
                        </div>

                        <div class="space-y-4">
                            
                            <!-- Essential Cookies (Always Active) -->
                            <div class="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div class="pr-4">
                                    <div class="flex items-center gap-2">
                                        <h3 class="font-bold text-gray-900 dark:text-white">
                                            {{ currentLang === 'bn' ? 'অত্যাবশ্যকীয় কুকিজ (Essential Cookies)' : 'Strictly Necessary Cookies' }}
                                        </h3>
                                        <span class="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                                            {{ currentLang === 'bn' ? 'সর্বদা সক্রিয়' : 'Always Active' }}
                                        </span>
                                    </div>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {{ currentLang === 'bn' ? 'ওয়েবসাইট সঠিকভাবে পরিচালিত হওয়া, কার্টে পণ্য যোগ করা এবং সেকিউর লগইনের জন্য এগুলো অপরিহার্য। এগুলো বন্ধ করা সম্ভব নয়।' : 'Essential for the website to function properly, including shopping cart storage and secure login access. These cannot be disabled.' }}
                                    </p>
                                </div>
                                <div class="relative inline-flex items-center cursor-not-allowed opacity-60">
                                    <input type="checkbox" checked disabled class="sr-only peer">
                                    <div class="w-11 h-6 bg-indigo-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                </div>
                            </div>

                            <!-- Performance & Analytics Cookies -->
                            <div class="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div class="pr-4">
                                    <h3 class="font-bold text-gray-900 dark:text-white">
                                        {{ currentLang === 'bn' ? 'পারফরম্যান্স ও অ্যানালিটিক্স কুকিজ' : 'Analytics & Performance Cookies' }}
                                    </h3>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {{ currentLang === 'bn' ? 'এগুলো আমাদের সাইটের ট্রাফিক, পেজ লোড স্পিড এবং ভিজিটরদের আচরণ বিশ্লেষণ করে পারফরম্যান্স উন্নত করতে সাহায্য করে।' : 'Helps us understand how visitors interact with our store, enabling us to analyze traffic, fix issues, and boost site performance.' }}
                                    </p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="cookieState.analytics" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>

                            <!-- Marketing & Targeting Cookies -->
                            <div class="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div class="pr-4">
                                    <h3 class="font-bold text-gray-900 dark:text-white">
                                        {{ currentLang === 'bn' ? 'মার্কেটিং ও বিজ্ঞাপন কুকিজ' : 'Marketing & Targeting Cookies' }}
                                    </h3>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {{ currentLang === 'bn' ? 'আপনার পছন্দের ওপর ভিত্তি করে প্রাসঙ্গিক অফার, ডিসকাউন্ট এবং বিজ্ঞাপন প্রদর্শন করার জন্য এগুলো ব্যবহার করা হয়।' : 'Used to display relevant promotional offers, discounts, and personalized product recommendations based on your preferences.' }}
                                    </p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="cookieState.marketing" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>

                        </div>

                        <!-- Action Buttons -->
                        <div class="mt-8 flex flex-wrap gap-4 justify-end">
                            <button 
                                @click="acceptAll" 
                                class="px-6 py-3 rounded-xl text-xs font-bold bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-all">
                                {{ currentLang === 'bn' ? 'সবগুলো গ্রহণ করুন' : 'Accept All Cookies' }}
                            </button>
                            <button 
                                @click="savePreferences" 
                                class="px-6 py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2">
                                <i class="fa-solid fa-floppy-disk"></i>
                                {{ currentLang === 'bn' ? 'পছন্দসমূহ সেভ করুন' : 'Save Preferences' }}
                            </button>
                        </div>
                    </section>

                    <!-- Section 3: Managing Cookies via Browser -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-globe text-indigo-500 text-lg"></i>
                            3. {{ currentLang === 'bn' ? 'ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিয়ন্ত্রণ' : 'Browser Cookie Controls' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            আপনি চাইলে যেকোনো সময় আপনার ব্রাউজার (Chrome, Firefox, Safari, Edge) সেটিংস পরিবর্তন করে সব ধরণের কুকিজ মুছে ফেলতে বা ব্লক করতে পারেন। তবে এতে ওয়েবসাইটের কিছু কিছু ফিচার যেমন—অটো-লগইন বা কার্ট সেভ থাকা সাময়িকভাবে অকার্যকর হতে পারে।
                        </p>
                        <p v-else>
                            You can also control or delete cookies directly through your web browser settings (Chrome, Firefox, Safari, Edge). Please note that disabling essential cookies may impact specific features on our website like auto-login or active cart sessions.
                        </p>
                    </section>

                    <!-- Section 4: Contact Support -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-headset text-indigo-500 text-lg"></i>
                            4. {{ currentLang === 'bn' ? 'কুকি নীতি সংক্রান্ত যোগাযোগ' : 'Cookie Policy Support' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'আমাদের কুকি নীতি বা ডাটা সুরক্ষা সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:' : 'If you have questions regarding our Cookie Policy or data privacy settings, reach out to us:' }}
                        </p>
                        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white">Ogrova Privacy Desk</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Website: ogrova.com</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Location: Dhaka, Bangladesh</p>
                            </div>
                            <a href="mailto:support@ogrova.com" 
                               class="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2">
                                <i class="fa-solid fa-envelope"></i> 
                                {{ currentLang === 'bn' ? 'ইমেইল সাপোর্ট' : 'Contact Support' }}
                            </a>
                        </div>
                    </section>

                </div>
            </div>

            <!-- Bottom Navigation Links -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <router-link to="/privacy-policy" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy' }}
                </router-link>
                <span>•</span>
                <router-link to="/terms-and-conditions" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions' }}
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
import { ref, onMounted } from 'vue';
import FooterSection from '../footer.vue';

// Language State toggle ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');

// Cookie Preferences State
const cookieState = ref({
    essential: true, // Always true
    analytics: true,
    marketing: false
});

const saveMessage = ref('');

// Load saved cookie preferences from localStorage
onMounted(() => {
    const savedPreferences = localStorage.getItem('ogrova_cookie_preferences');
    if (savedPreferences) {
        try {
            cookieState.value = { ...cookieState.value, ...JSON.parse(savedPreferences) };
        } catch (e) {
            console.error('Error parsing cookie preferences:', e);
        }
    }
});

// Save preferences
const savePreferences = () => {
    localStorage.setItem('ogrova_cookie_preferences', JSON.stringify(cookieState.value));
    saveMessage.value = currentLang.value === 'bn' 
        ? 'আপনার কুকি পছন্দসমূহ সফলভাবে সেভ করা হয়েছে!' 
        : 'Your cookie preferences have been successfully saved!';
    
    setTimeout(() => {
        saveMessage.value = '';
    }, 4000);
};

// Accept all cookies
const acceptAll = () => {
    cookieState.value.analytics = true;
    cookieState.value.marketing = true;
    savePreferences();
};
</script>

<style scoped>

</style>