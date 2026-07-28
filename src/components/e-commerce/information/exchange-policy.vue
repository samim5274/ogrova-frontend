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
                    {{ currentLang === 'bn' ? 'সহজ পরিবর্তন নীতি' : 'Hassle-Free Replacement' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'এক্সচেঞ্জ নীতিমালা' : 'Exchange Policy' }}
                </h1>
                
                <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'তে কেনাকাটায় সাইজ বা পছন্দ নিয়ে চিন্তা নেই! সহজেই আপনার প্রোডাক্ট এক্সচেঞ্জ বা পরিবর্তন করে নিন।' : ' enjoy seamless size swaps and product exchanges across Bangladesh.' }}
                </p>
            </div>

            <!-- Key Exchange Highlights -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                <!-- Size Issue Exchange -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-ruler-combined"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'সাইজ বা ফিটিং সমস্যা' : 'Size or Fitting Issues' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'পোশাক বা জুতার সাইজ না মিললে ৩ দিনের মধ্যে সাইজ পরিবর্তনের সুযোগ রয়েছে। স্টক সাপেক্ষে নতুন সাইজ কুরিয়ারে পাঠানো হবে।' 
                                    : 'If the size doesn\'t fit properly, request a replacement within 3 days subject to stock availability.' }}
                            </p>
                            <span class="mt-3 inline-block text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                                {{ currentLang === 'bn' ? '* কুরিয়ার চার্জ গ্রাহককে বহন করতে হবে' : '* Delivery fee applies for size swaps' }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Defective or Wrong Item Exchange -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-box-open"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'ভুল বা ক্ষতিগ্রস্ত প্রোডাক্ট' : 'Damaged or Wrong Product' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'ভুল প্রোডাক্ট, ভুল কালার কিংবা কোনো ট্রানজিট ড্যামেজ থাকলে সম্পূর্ণ বিনামূল্যে ফ্রেশ প্রোডাক্ট এক্সচেঞ্জ করে দেওয়া হবে।' 
                                    : 'If you receive a defective or incorrect item, we will exchange it free of charge.' }}
                            </p>
                            <span class="mt-3 inline-block text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                                {{ currentLang === 'bn' ? '* ডেলিভারি চার্জ সম্পূর্ণ ফ্রি' : '* 100% Free replacement charge' }}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Mandatory Terms for Exchange -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mb-8">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-clipboard-check text-indigo-500"></i>
                    {{ currentLang === 'bn' ? 'এক্সচেঞ্জ গ্রহণের আবশ্যিক শর্তাবলী' : 'Mandatory Conditions for Exchange' }}
                </h3>

                <div class="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                    <div class="flex items-start gap-3">
                        <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5 shrink-0"></i>
                        <p>
                            {{ currentLang === 'bn' 
                                ? 'পণ্য ডেলিভারি পাওয়ার পর সর্বোচ্চ ৩ (তিন) দিনের মধ্যে আমাদের কাস্টমার সাপোর্টে যোগাযোগ করে সমস্যা জানাতে হবে।' 
                                : 'You must inform our customer support team within 3 days of receiving the package.' }}
                        </p>
                    </div>
                    <div class="flex items-start gap-3">
                        <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5 shrink-0"></i>
                        <p>
                            {{ currentLang === 'bn' 
                                ? 'পণ্যটি অব্যবহৃত (Unused), না-ধোয়া (Unwashed) এবং মূল ট্যাগ (Original Tag), কিউআর কোড ও প্যাকেজিং অক্ষত থাকতে হবে।' 
                                : 'The product must be unused, unwashed, with all original tags, packaging, and invoice intact.' }}
                        </p>
                    </div>
                    <div class="flex items-start gap-3">
                        <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5 shrink-0"></i>
                        <p>
                            {{ currentLang === 'bn' 
                                ? 'কোনো ডিসকাউন্ট বা অফারের প্রোডাক্টের ক্ষেত্রে কাস্টম এক্সচেঞ্জ পলিসি প্রযোজ্য হতে পারে।' 
                                : 'Clearance or promotional items may be subject to specific exchange restrictions.' }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Exchange Steps Process -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mb-8">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <i class="fa-solid fa-arrows-rotate text-indigo-500"></i>
                    {{ currentLang === 'bn' ? 'এক্সচেঞ্জ করার ধাপসমূহ' : 'Simple Step-by-Step Process' }}
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 mx-auto rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mb-3">1</div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'সাপোর্টে জানান' : 'Report Issue' }}
                        </h4>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">
                            {{ currentLang === 'bn' ? 'ছবিসহ আমাদের হটলাইন বা ইনবক্সে মেসেজ দিন' : 'Send us order details & product photo via support' }}
                        </p>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 mx-auto rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mb-3">2</div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'প্যাকেজিং করুন' : 'Pack the Item' }}
                        </h4>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">
                            {{ currentLang === 'bn' ? 'ট্যাগ ও মূল ব্যাগসহ সাবধানে আবার প্যাক করুন' : 'Pack the unused product with all tags attached' }}
                        </p>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 mx-auto rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mb-3">3</div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'ডোরস্টেপ এক্সচেঞ্জ' : 'Doorstep Swap' }}
                        </h4>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">
                            {{ currentLang === 'bn' ? 'কুরিয়ারম্যান নতুন প্রোডাক্ট দেবে এবং আগেরটি বুঝে নেবে' : 'Rider will deliver new product & pick up old one' }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Call to Action Banner -->
            <div class="rounded-2xl p-6 sm:p-8 bg-indigo-50/60 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-center">
                <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                    {{ currentLang === 'bn' ? 'এক্সচেঞ্জ রিকোয়েস্ট পাঠাতে চান?' : 'Ready to Request an Exchange?' }}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 max-w-md mx-auto">
                    {{ currentLang === 'bn' ? 'আমাদের কাস্টমার কেয়ার টিম আপনাকে তাৎক্ষণিক সাহায্য করবে।' : 'Get in touch with our support representatives right now.' }}
                </p>
                <router-link 
                    to="/support-center" 
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all">
                    <i class="fa-solid fa-headset"></i>
                    {{ currentLang === 'bn' ? 'সাপোর্টে কথা বলুন' : 'Contact Support' }}
                </router-link>
            </div>

            <!-- Bottom Navigation -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <router-link to="/cancellation-policy" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'বাতিলকরণ নীতি' : 'Cancellation Policy' }}
                </router-link>
                <span>•</span>
                <router-link to="/return-refund" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'রিটার্ন ও রিফান্ড' : 'Return & Refund' }}
                </router-link>
                <span>•</span>
                <router-link to="/faq" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'FAQ' }}
                </router-link>
            </div>

        </div>
    </div>
    <FooterSection />
</template>

<script setup>
import { ref } from 'vue';
import FooterSection from '../footer.vue';

// Language Toggle State ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');
</script>

<style scoped>

</style>