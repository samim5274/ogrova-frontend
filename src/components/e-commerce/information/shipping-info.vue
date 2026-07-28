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
                    {{ currentLang === 'bn' ? 'দ্রুত ও নিরাপদ ডেলিভারি' : 'Fast & Reliable Delivery' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'শিপিং ও ডেলিভারি তথ্য' : 'Shipping & Delivery Info' }}
                </h1>
                
                <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'র ডেলিভারি চার্জ, এলাকাভিত্তিক ডেলিভারি সময় এবং কুরিয়ার পলিসি সম্পর্কে বিস্তারিত জানুন।' : ' delivery rates, coverage areas, and estimated timelines across Bangladesh.' }}
                </p>
            </div>

            <!-- Quick Delivery Highlights Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                <!-- Inside Dhaka -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-city"></i>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                    {{ currentLang === 'bn' ? 'ঢাকার ভেতরে (Inside Dhaka)' : 'Inside Dhaka City' }}
                                </h3>
                                <span class="text-sm font-black text-indigo-600 dark:text-indigo-400">৳ ৬০</span>
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' ? 'ঢাকা সিটির ভেতরে মাত্র ২৪ থেকে ৪৮ ঘণ্টার মধ্যে হোম ডেলিভারি সুনিশ্চিত।' : 'Guaranteed home delivery within 24 to 48 hours inside Metro Dhaka.' }}
                            </p>
                            <div class="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                                <i class="fa-solid fa-clock text-indigo-500 text-xs"></i>
                                {{ currentLang === 'bn' ? 'ডেলিভারি সময়: ১ - ২ কর্মদিবস' : 'Delivery: 1 - 2 Working Days' }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Outside Dhaka -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all hover:border-indigo-300 dark:hover:border-slate-700">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                    {{ currentLang === 'bn' ? 'ঢাকার বাইরে (Outside Dhaka)' : 'Outside Dhaka City' }}
                                </h3>
                                <span class="text-sm font-black text-emerald-600 dark:text-emerald-400">৳ ১২০</span>
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' ? 'সারাদেশের ৬৪ জেলা ও যেকোনো উপজেলায় নিরাপদ কুরিয়ার হোম ডেলিভারি।' : 'Safe doorstep courier delivery covering all 64 districts & sub-districts.' }}
                            </p>
                            <div class="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                                <i class="fa-solid fa-truck-fast text-emerald-500 text-xs"></i>
                                {{ currentLang === 'bn' ? 'ডেলিভারি সময়: ২ - ৪ কর্মদিবস' : 'Delivery: 2 - 4 Working Days' }}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Courier Partners & Delivery Rules -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mb-8">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-handshake text-indigo-500"></i>
                    {{ currentLang === 'bn' ? 'আমাদের কুরিয়ার পার্টনারসমূহ' : 'Trusted Courier Logistics' }}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {{ currentLang === 'bn' 
                        ? 'আপনার পার্সেলটি দ্রুত ও নিখুঁতভাবে পৌঁছাতে আমরা নির্ভরযোগ্য কুরিয়ার নেটওয়ার্ক ব্যবহার করি।' 
                        : 'We collaborate with the most reliable express logistics networks in Bangladesh to deliver your orders safely.' }}
                </p>

                <!-- Courier Badges -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <i class="fa-solid fa-box text-xs"></i> Steadfast Express
                    </span>
                    <span class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-orange-500 flex items-center gap-2">
                        <i class="fa-solid fa-box text-xs"></i> Pathao Courier
                    </span>
                    <span class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        <i class="fa-solid fa-box text-xs"></i> RedX Logistics
                    </span>
                    <span class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <i class="fa-solid fa-box text-xs"></i> Sundarban Courier
                    </span>
                </div>

                <!-- Delivery Guidelines -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div class="flex items-start gap-2 text-xs">
                        <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5 shrink-0"></i>
                        <p class="text-slate-600 dark:text-slate-300">
                            {{ currentLang === 'bn' ? 'ডেলিভারিম্যানের উপস্থিতিতে পার্সেল খুলে প্রোডাক্ট ও সাইজ চেক করে নিন।' : 'Please check the parcel content and sizing in front of the courier delivery representative.' }}
                        </p>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                        <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5 shrink-0"></i>
                        <p class="text-slate-600 dark:text-slate-300">
                            {{ currentLang === 'bn' ? 'প্রোডাক্ট পছন্দ না হলে বা কোনো ডিফেক্ট থাকলে সাথে সাথে রিটার্ন করতে পারবেন (কুরিয়ার চার্জ প্রযোজ্য হতে পারে)।' : 'In case of damaged or incorrect items, you can return immediately through the delivery agent.' }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Shipping FAQs -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-circle-question text-indigo-500"></i>
                    {{ currentLang === 'bn' ? 'শিপিং সংক্রান্ত প্রশ্নাবলী' : 'Frequently Asked Questions' }}
                </h3>
                
                <div class="space-y-4 text-xs">
                    <div class="pb-3 border-b border-slate-100 dark:border-slate-800">
                        <p class="font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'আমি কীভাবে আমার পার্সেলের অবস্থান জানব?' : 'How do I track my shipment?' }}
                        </p>
                        <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'অর্ডার দেওয়ার পর আপনার মোবাইল নম্বরে একটি ট্র্যাকিং লিঙ্ক পাঠাবে Ogrova। এছাড়া আমাদের "Order Tracking" পেজে গিয়েও লাইভ আপডেট দেখতে পারবেন।' 
                                : 'You can use your Order ID and Phone number on our Order Tracking page to get live real-time status updates.' }}
                        </p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {{ currentLang === 'bn' ? 'জরুরি প্রয়োজনে এক্সপ্রেস ডেলিভারি পাওয়া সম্ভব?' : 'Do you offer same-day emergency delivery?' }}
                        </p>
                        <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'হ্যাঁ, শুধুমাত্র ঢাকা শহরের অভ্যন্তরে বিশেষ এক্সপ্রেস ডেলিভারি পাওয়া যাবে। এর জন্য সরাসরি আমাদের কাস্টমার সাপোর্টে কল করুন।' 
                                : 'Same-day express delivery is available for Metro Dhaka only upon contacting customer support prior to order dispatch.' }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation Link Footer -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <router-link to="/order-tracking" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'অর্ডার ট্র্যাকিং' : 'Order Tracking' }}
                </router-link>
                <span>•</span>
                <router-link to="/payment-methods" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'পেমেন্ট পদ্ধতি' : 'Payment Methods' }}
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