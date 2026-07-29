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
                    {{ currentLang === 'bn' ? 'নিরাপদ লেনদেন' : 'Secure Transactions' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'পেমেন্ট পদ্ধতিসমূহ' : 'Payment Methods' }}
                </h1>
                
                <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'তে কেনাকাটা করার জন্য উপলব্ধ সুবিধাজনক ও সম্পূর্ণ নিরাপদ পেমেন্ট অপশনসমূহ।' : ' offers smooth, versatile, and 100% secure payment gateways for your convenience.' }}
                </p>
            </div>

            <!-- Security Assurance Banner -->
            <div class="mb-8 p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/30">
                    <i class="fa-solid fa-shield-halved text-lg"></i>
                </div>
                <div>
                    <h4 class="text-xs font-bold text-slate-900 dark:text-white">
                        {{ currentLang === 'bn' ? '১০০% নিরাপদ অনলাইন পেমেন্ট' : '100% Encrypted & Safe Payment' }}
                    </h4>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {{ currentLang === 'bn' ? 'আপনার সকল আর্থিক তথ্য SSL পেমেন্ট এনক্রিপশনের মাধ্যমে সম্পূর্ণ সুরক্ষিত থাকে।' : 'Your financial credentials are processed through SSL encrypted gateways with top security.' }}
                    </p>
                </div>
            </div>

            <!-- Payment Options Grid -->
            <div class="space-y-6">
                
                <!-- Option 1: Cash on Delivery -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                    {{ currentLang === 'bn' ? 'ক্যাশ অন ডেলিভারি (Cash on Delivery)' : 'Cash on Delivery (COD)' }}
                                </h3>
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                                    {{ currentLang === 'bn' ? 'জনপ্রিয়' : 'Popular' }}
                                </span>
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'পণ্য হাতে পেয়ে তা দেখে চেক করার পর ডেলিভারিম্যানকে ক্যাশ পেমেন্ট করুন। সারাদেশের যেকোনো প্রান্তেই ক্যাশ অন ডেলিভারি সুবিধা প্রযোজ্য।' 
                                    : 'Pay with cash upon receiving your order at your doorstep. Available across all districts in Bangladesh.' }}
                            </p>
                            <div class="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                                <i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                                {{ currentLang === 'bn' ? 'পণ্য বুঝে নিয়ে টাকা দিন' : 'Pay after receiving package' }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Option 2: Mobile Financial Services (MFS) -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'মোবাইল ব্যাংকিং (Mobile Banking)' : 'Mobile Financial Services' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'আপনার বিকাশ, নগদ, রকেট বা উপায় ওয়ালেট ব্যবহার করে দ্রুত ও তাৎক্ষণিকভাবে পেমেন্ট সম্পন্ন করুন।' 
                                    : 'Instant payment through your preferred Mobile Wallet such as bKash, Nagad, Rocket, or Upay.' }}
                            </p>

                            <!-- Mobile Wallet Badges -->
                            <div class="mt-4 flex flex-wrap gap-2">
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-pink-600 flex items-center gap-1.5">
                                    <i class="fa-solid fa-wallet text-xs"></i> bKash
                                </span>
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-orange-500 flex items-center gap-1.5">
                                    <i class="fa-solid fa-wallet text-xs"></i> Nagad
                                </span>
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-purple-600 flex items-center gap-1.5">
                                    <i class="fa-solid fa-wallet text-xs"></i> Rocket
                                </span>
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-amber-500 flex items-center gap-1.5">
                                    <i class="fa-solid fa-wallet text-xs"></i> Upay
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Option 3: Credit / Debit Cards & Net Banking -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-credit-card"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'ডেবিট/ক্রেডিট কার্ড ও নেট ব্যাংকিং' : 'Debit/Credit Cards & Net Banking' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'যেকোনো দেশি বা বিদেশি ভিসা, মাস্টারকার্ড, অথবা লোকাল ইন্টারনেট ব্যাংকিং এর মাধ্যমে নিরাপদে অনলাইন চেকআউট করুন।' 
                                    : 'We support all major local and international VISA, Mastercard, UnionPay, and Online Internet Banking.' }}
                            </p>

                            <!-- Card Badges -->
                            <div class="mt-4 flex flex-wrap gap-2">
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-blue-600 flex items-center gap-1.5">
                                    <i class="fa-brands fa-cc-visa text-sm"></i> VISA
                                </span>
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-red-500 flex items-center gap-1.5">
                                    <i class="fa-brands fa-cc-mastercard text-sm"></i> Mastercard
                                </span>
                                <span class="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                    <i class="fa-solid fa-building-columns text-xs"></i> Net Banking
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- FAQs Regarding Payment -->
            <div class="mt-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-circle-question text-indigo-500"></i>
                    {{ currentLang === 'bn' ? 'পেমেন্ট সংক্রান্ত সাধারণ জিজ্ঞাসা' : 'Payment Related FAQs' }}
                </h3>
                
                <div class="space-y-4 text-xs">
                    <div class="pb-3 border-b border-slate-100 dark:border-slate-800">
                        <p class="font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'পেমেন্ট ফেল বা ব্যর্থ হলে কী করব?' : 'What if my online payment fails?' }}
                        </p>
                        <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'টাকা কেটে নেওয়া হলেও অর্ডার কনফার্ম না হলে ২৪ ঘণ্টার মধ্যে আপনার অ্যাকাউন্টে রিফান্ড অটো-ইনিশিয়েট হবে। প্রয়োজনে আমাদের হেল্পলাইনে যোগাযোগ করুন।' 
                                : 'If amount was debited but order failed, it will be refunded automatically within 24 hours. Contact our helpline if needed.' }}
                        </p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'পেমেন্টে কোনো অতিরিক্ত চার্জ বা ফি আছে কি?' : 'Are there any extra charges for payments?' }}
                        </p>
                        <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'না, Ogrova-তে কেনাকাটার জন্য আমরা কোনো লুকানো অতিরিক্ত ফি বা সার্ভিস চার্জ নিই না।' 
                                : 'No, Ogrova does not charge any hidden fees or extra gateway charges on checkout.' }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <router-link to="/order-tracking" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'অর্ডার ট্র্যাকিং' : 'Order Tracking' }}
                </router-link>
                <span>•</span>
                <router-link to="/how-to-order" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'অর্ডার নির্দেশিকা' : 'How to Order' }}
                </router-link>
                <span>•</span>
                <router-link to="/support-center" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'সাপোর্ট সেন্টার' : 'Support Center' }}
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