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
                    {{ currentLang === 'bn' ? 'সহজ কেনাকাটা নির্দেশিকা' : 'Step-by-Step Shopping Guide' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'কীভাবে অর্ডার করবেন?' : 'How to Place an Order' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'তে কেনাকাটা করা একদম সহজ! মাত্র কয়েকটি ধাপে আপনার পছন্দের পণ্যটি অর্ডার করুন।' : ' makes shopping simple and seamless. Follow these quick steps to order your products.' }}
                </p>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                
                <!-- Steps Container -->
                <div class="space-y-8 relative">

                    <!-- Step 1: Select Product & Variant -->
                    <div class="flex gap-4 sm:gap-6 items-start">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30">
                            01
                        </div>
                        <div class="pt-1 flex-1">
                            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                {{ currentLang === 'bn' ? 'পণ্য ও ভ্যারিয়েন্ট নির্বাচন (Select Variant)' : 'Select Product & Variant' }}
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                {{ currentLang === 'bn' 
                                    ? 'আপনার পছন্দের পণ্যটি বেছে নিন। যদি পণ্যটির কোনো ভ্যারিয়েন্ট (যেমন: সাইজ, কালার বা সাইকেল) থাকে, তবে প্রথমে আপনার পছন্দের ভ্যারিয়েন্ট সিলেক্ট করুন।' 
                                    : 'Choose your desired product. If the item has variants (e.g., size, color, or specification), make sure to select your preferred variant first.' 
                                }}
                            </p>
                            <div class="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 inline-flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                                <i class="fa-solid fa-list-check"></i>
                                {{ currentLang === 'bn' ? 'টিপস: সঠিক সাইজ ও রঙ নির্বাচন দেখে নিন' : 'Tip: Double-check your chosen size and color' }}
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-gray-100 dark:border-white/5"></div>

                    <!-- Step 2: Add to Cart or Buy Now -->
                    <div class="flex gap-4 sm:gap-6 items-start">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30">
                            02
                        </div>
                        <div class="pt-1 flex-1">
                            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                {{ currentLang === 'bn' ? 'অ্যাড টু কার্ট বা বাই নাও (Add to Cart / Buy Now)' : 'Add to Cart or Buy Now' }}
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                {{ currentLang === 'bn' 
                                    ? 'ভ্যারিয়েন্ট সিলেক্ট করার পর "Add to Cart" বাটনে ক্লিক করে কার্টে যুক্ত করুন (যদি একাধিক পণ্য কিনতে চান), অথবা সরাসরি কিনতে "Buy Now" বাটনে ক্লিক করুন।' 
                                    : 'After selecting the variant, click the "Add to Cart" button to continue shopping, or click "Buy Now" to proceed instantly.' 
                                }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-100 dark:border-indigo-500/20">
                                    <i class="fa-solid fa-cart-plus mr-1"></i> Add to Cart
                                </span>
                                <span class="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold">
                                    <i class="fa-solid fa-bolt mr-1"></i> Buy Now
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-gray-100 dark:border-white/5"></div>

                    <!-- Step 3: Go to Checkout -->
                    <div class="flex gap-4 sm:gap-6 items-start">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30">
                            03
                        </div>
                        <div class="pt-1 flex-1">
                            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                {{ currentLang === 'bn' ? 'চেকআউট পেজে যান (Checkout Now)' : 'Proceed to Checkout' }}
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'কার্ট (Cart) পেজে গিয়ে আপনার পণ্যের পরিমাণ এবং মোট মূল্য চেক করুন। এরপর "Checkout Now" বা "Proceed to Checkout" বাটনে ক্লিক করুন।' 
                                    : 'Go to your Shopping Cart to review selected items, quantity, and subtotal. Then click "Checkout Now" to go to the order form.' 
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="border-t border-gray-100 dark:border-white/5"></div>

                    <!-- Step 4: Shipping Info & Payment -->
                    <div class="flex gap-4 sm:gap-6 items-start">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30">
                            04
                        </div>
                        <div class="pt-1 flex-1">
                            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                {{ currentLang === 'bn' ? 'ডেলিভারি তথ্য ও পেমেন্ট (Process to Payment)' : 'Provide Shipping & Payment' }}
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                {{ currentLang === 'bn' 
                                    ? 'চেকআউট পেজে আপনার নাম, মোবাইল নম্বর এবং সঠিক ডেলিভারি অ্যাড্রেস পূরণ করুন। পছন্দ অনুযায়ী ক্যাশ অন ডেলিভারি (COD) বা অনলাইন পেমেন্ট সিলেক্ট করুন।' 
                                    : 'Fill in your name, contact phone number, and detailed shipping address. Choose your preferred payment method (Cash on Delivery or Digital Online Payment).' 
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="border-t border-gray-100 dark:border-white/5"></div>

                    <!-- Step 5: Order Confirmation -->
                    <div class="flex gap-4 sm:gap-6 items-start">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="pt-1 flex-1">
                            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                {{ currentLang === 'bn' ? 'অর্ডার কনফার্মেশন (Order Confirm)' : 'Confirm Your Order' }}
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                {{ currentLang === 'bn' 
                                    ? 'সবশেষে "Confirm Order" বা "Place Order" বাটনে ক্লিক করুন। আপনার অর্ডারটি সফলভাবে সম্পন্ন হলে স্ক্রিনে একটি Confirmation Message এবং Order ID দেখতে পাবেন।' 
                                    : 'Finally, click "Confirm Order". Once completed, you will see an Order Confirmation message along with your unique Order ID.' 
                                }}
                            </p>
                            
                            <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-xs font-medium flex items-center gap-3">
                                <i class="fa-solid fa-circle-check text-lg shrink-0"></i>
                                <span>
                                    {{ currentLang === 'bn' ? 'অর্ডার সফল হলে আমরা SMS দিয়ে কনফার্মেশন জানাব এবং দ্রুত ডেলিভারির ব্যবস্থা নেব!' : 'After confirmation, you will receive an SMS update and we will process your shipment immediately!' }}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!-- Bottom Call to Action -->
            <div class="mt-12 text-center">
                <router-link to="/" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/30 transition-all">
                    <i class="fa-solid fa-bag-shopping"></i>
                    {{ currentLang === 'bn' ? 'এখনই কেনাকাটা শুরু করুন' : 'Start Shopping Now' }}
                </router-link>
            </div>

            <!-- Policy Links -->
            <div class="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <router-link to="/about-us" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us' }}
                </router-link>
                <span>•</span>
                <router-link to="/contact-us" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'যোগাযোগ' : 'Contact Us' }}
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

// Language State toggle ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');
</script>

<style scoped>

</style>