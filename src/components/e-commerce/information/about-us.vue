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
                    {{ currentLang === 'bn' ? 'আমাদের গল্প ও পরিচয়' : 'Who We Are' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'আমাদের সম্পর্কে (About Us)' : 'About Ogrova' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span> {{ currentLang === 'bn' ? '-তে আমরা উন্নতমানের পণ্য ও বিশ্বস্ত সেবার মাধ্যমে ই-কমার্স কেনাকাটার অভিজ্ঞতাকে সহজ ও আনন্দদায়ক করতে কাজ করছি।' : ' is dedicated to delivering premium products, trusted service, and a seamless online shopping experience across Bangladesh.' }}
                </p>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                
                <div class="space-y-12 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">

                    <!-- Section 1: Our Story -->
                    <section>
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-store text-indigo-500 text-lg"></i>
                            1. {{ currentLang === 'bn' ? 'আমাদের গল্প' : 'Our Story' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            <strong>Ogrova</strong> একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম যা গুণগত মানসম্পন্ন পণ্য মানুষের দোরগোড়ায় সহজে পৌঁছে দেওয়ার লক্ষ্য নিয়ে যাত্রা শুরু করেছে। আমরা বিশ্বাস করি কেনাকাটা কেবল প্রয়োজনীয় পণ্য সংগ্রহ নয়, বরং এটি একটি স্বাচ্ছন্দ্যময় অভিজ্ঞতার বিষয়। উন্নত প্রযুক্তি এবং বিশ্বস্ত গ্রাহক সেবার সমন্বয়ে আমরা বাংলাদেশের ই-কমার্স জগতে একটি নির্ভেজাল ও নির্ভরযোগ্য প্ল্যাটফর্ম হিসেবে নিজেদের গড়ে তুলছি।
                        </p>
                        <p v-else>
                            <strong>Ogrova</strong> is a modern e-commerce destination committed to making online shopping reliable, fast, and accessible across Bangladesh. We believe online shopping should be effortless and trustworthy. By combining user-centered technology with dedicated customer care, we bring high-quality products directly to your doorstep.
                        </p>
                    </section>

                    <!-- Section 2: Mission & Vision Cards -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Mission -->
                            <div class="p-6 rounded-3xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                                <div class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-4 text-lg">
                                    <i class="fa-solid fa-bullseye"></i>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {{ currentLang === 'bn' ? 'আমাদের মিশন' : 'Our Mission' }}
                                </h3>
                                <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                    {{ currentLang === 'bn' ? 'গ্রাহকদের নিখুঁত ও মানসম্পন্ন পণ্য প্রদান করা, দ্রুততম সময়ের মধ্যে শিপিং নিশ্চিত করা এবং স্বচ্ছ পেমেন্ট ও রিটার্ন ব্যবস্থার মাধ্যমে সর্বোচ্চ কাস্টমার সন্তুষ্টি অর্জন করা।' : 'To empower shoppers with genuine products, transparent pricing, fast nationwide delivery, and hassle-free post-purchase support.' }}
                                </p>
                            </div>

                            <!-- Vision -->
                            <div class="p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <div class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-4 text-lg">
                                    <i class="fa-solid fa-eye"></i>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {{ currentLang === 'bn' ? 'আমাদের ভিশন' : 'Our Vision' }}
                                </h3>
                                <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'বাংলাদেশের সবচেয়ে পছন্দের এবং বিশ্বস্ত ই-কমার্স প্ল্যাটফর্ম হিসেবে আত্মপ্রকাশ করা, যেখানে গ্রাহকরা চোখ বন্ধ করে তাদের পছন্দের কেনাকাটা সম্পন্ন করতে পারেন।' : 'To become Bangladesh’s most trusted e-commerce brand, known for innovation, quality assurance, and unrivaled customer satisfaction.' }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Section 3: Why Choose Ogrova -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-star text-indigo-500 text-lg"></i>
                            {{ currentLang === 'bn' ? 'কেন Ogrova-কে বেছে নেবেন?' : 'Why Choose Ogrova?' }}
                        </h2>

                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <i class="fa-solid fa-circle-check text-indigo-500 text-xl mb-2"></i>
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'অরিজিনাল পণ্য' : 'Authentic Products' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? '১০০% অরিজিনাল ও মানসম্পন্ন পণ্যের নিশ্চয়তা।' : 'Guaranteed quality with authentic products.' }}
                                </p>
                            </div>

                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <i class="fa-solid fa-truck-fast text-indigo-500 text-xl mb-2"></i>
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'দ্রুত ডেলিভারি' : 'Fast Delivery' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'সারাদেশে দ্রুততম সময়ে বিশ্বস্ত কুরিয়ার ডেলিভারি।' : 'Express shipping right to your doorstep.' }}
                                </p>
                            </div>

                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <i class="fa-solid fa-shield-halved text-indigo-500 text-xl mb-2"></i>
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'নিরাপদ পেমেন্ট' : 'Secure Payment' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'ক্যাশ অন ডেলিভারি এবং বিকাশ/নগদে সেকিউর পেমেন্ট।' : 'Cash on Delivery and secure digital payment modes.' }}
                                </p>
                            </div>

                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <i class="fa-solid fa-headset text-indigo-500 text-xl mb-2"></i>
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? '২৪/৭ কাস্টমার সাপোর্ট' : 'Dedicated Support' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সবসময় প্রস্তুত।' : 'Responsive helpline to assist your inquiries.' }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Section 4: Office / Contact Section -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-location-dot text-indigo-500 text-lg"></i>
                            {{ currentLang === 'bn' ? 'আমাদের সাথে যুক্ত থাকুন' : 'Get in Touch' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'আমাদের পণ্য বা সেবা সম্পর্কে যেকোনো তথ্য জানতে বা মতামত জানাতে আমাদের সাথে যোগাযোগ করুন:' : 'Have questions or want to learn more about Ogrova? We would love to hear from you:' }}
                        </p>
                        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white">Ogrova Headquarters</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Website: ogrova.com</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Location: Dhaka, Bangladesh</p>
                            </div>
                            <a href="mailto:support@ogrova.com" 
                               class="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2">
                                <i class="fa-solid fa-envelope"></i> 
                                {{ currentLang === 'bn' ? 'ইমেইল করুন' : 'Contact Support' }}
                            </a>
                        </div>
                    </section>

                </div>
            </div>

            <!-- Bottom Policy Links -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <router-link to="/about-us" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us' }}
                </router-link>
                <span>•</span>
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
import { ref } from 'vue';
import FooterSection from '../footer.vue';

// Language State toggle ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');
</script>

<style scoped>

</style>