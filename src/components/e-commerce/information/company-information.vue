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
                    {{ currentLang === 'bn' ? 'প্রাতিষ্ঠানিক পরিচয়' : 'Corporate Identity' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'কোম্পানির তথ্যাবলী' : 'Company Information' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'র আইনি পরিচয়, বাণিজ্যিক বিবরণ ও প্রাতিষ্ঠানিক কাঠামোর সংক্ষিপ্ত বিবরণী।' : ' official business identity, corporate highlights, and organizational overview.' }}
                </p>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                
                <div class="space-y-10 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">

                    <!-- Section 1: Business Overview -->
                    <section>
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-building text-indigo-500 text-lg"></i>
                            1. {{ currentLang === 'bn' ? 'কোম্পানি পরিচিতি' : 'Company Overview' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            <strong>Ogrova</strong> হলো বাংলাদেশের একটি উঠতি ও নির্ভরযোগ্য ই-কমার্স উদ্যোগ, যা অত্যাধুনিক প্রযুক্তি ও দ্রুততম ডেলিভারি সেবার সমন্বয়ে গ্রাহকদের নিরবচ্ছিন্ন শপিং অভিজ্ঞতা দিতে প্রতিশ্রুতিবদ্ধ। সততা, পণ্যের আসল মান এবং গ্রাহক সন্তুষ্টিই আমাদের ব্যবসার মূল ভিত্তি।
                        </p>
                        <p v-else>
                            <strong>Ogrova</strong> is a fast-growing e-commerce platform based in Bangladesh, dedicated to providing seamless digital shopping through modern web technologies, curated product selection, and efficient logistics. Customer trust and product authenticity drive our core operations.
                        </p>
                    </section>

                    <!-- Section 2: Quick Business Highlights Grid -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-passport text-indigo-500 text-lg"></i>
                            2. {{ currentLang === 'bn' ? 'ব্যবসায়িক ও অফিশিয়াল বিবরণী' : 'Corporate Details' }}
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                                <span class="text-xs text-gray-400 uppercase font-bold">{{ currentLang === 'bn' ? 'কোম্পানির নাম' : 'Company Name' }}</span>
                                <span class="font-bold text-gray-900 dark:text-white text-base mt-1">Ogrova Technologies Ltd.</span>
                            </div>

                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                                <span class="text-xs text-gray-400 uppercase font-bold">{{ currentLang === 'bn' ? 'ব্যবসার ধরন' : 'Business Type' }}</span>
                                <span class="font-bold text-gray-900 dark:text-white text-base mt-1">E-Commerce & Digital Retail</span>
                            </div>

                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                                <span class="text-xs text-gray-400 uppercase font-bold">{{ currentLang === 'bn' ? 'হেডকোয়ার্টার' : 'Headquarters' }}</span>
                                <span class="font-bold text-gray-900 dark:text-white text-base mt-1">Dhaka, Bangladesh</span>
                            </div>

                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                                <span class="text-xs text-gray-400 uppercase font-bold">{{ currentLang === 'bn' ? 'অফিশিয়াল ওয়েবসাইট' : 'Official Website' }}</span>
                                <a href="https://ogrova.com" target="_blank" class="font-bold text-indigo-600 dark:text-indigo-400 text-base mt-1 hover:underline">https://ogrova.com</a>
                            </div>
                        </div>
                    </section>

                    <!-- Section 3: Core Operations -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-gears text-indigo-500 text-lg"></i>
                            3. {{ currentLang === 'bn' ? 'আমাদের মূল পরিচালন ক্ষেত্র' : 'Core Operational Areas' }}
                        </h2>
                        <ul class="list-disc pl-5 space-y-2" v-if="currentLang === 'bn'">
                            <li><strong>পণ্য সরবরাহ:</strong> কোয়ালিটি চেইন নিশ্চিত করে সরাসরি প্রস্তুতকারক ও আসল ব্র্যান্ড পেজ থেকে পণ্য সংগ্রহ।</li>
                            <li><strong>লজিস্টিকস ও শিপিং:</strong> ঢাকার মধ্যে দ্রুততম সার্ভিস এবং কুরিয়ার পার্টনারদের মাধ্যমে সারাদেশে শিপিং।</li>
                            <li><strong>ডিজিটাল সেবা:</strong> ব্যবহারকারী-বান্ধব ওয়েব ইন্টারফেস এবং দ্রুত রেসপন্সিভ কেনাকাটার অভিজ্ঞতা।</li>
                        </ul>
                        <ul class="list-disc pl-5 space-y-2" v-else>
                            <li><strong>Product Procurement:</strong> Sourcing direct, verified quality products to prevent counterfeits.</li>
                            <li><strong>Logistics Network:</strong> Swift doorstep delivery inside Dhaka and reliable nationwide shipping partners.</li>
                            <li><strong>Digital Platform:</strong> Modern, responsive, and secure web interface for intuitive shopping.</li>
                        </ul>
                    </section>

                    <!-- Section 4: Contact & Legal Office -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-briefcase text-indigo-500 text-lg"></i>
                            4. {{ currentLang === 'bn' ? 'অফিশিয়াল ডায়াল ও করপোরেট যোগাযোগ' : 'Corporate Contact Desk' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'ব্যবসা সংক্রান্ত যেকোনো অনুসন্ধান, পার্টনারশিপ বা তথ্যের জন্য আমাদের প্রাতিষ্ঠানিক ডেস্কে যোগাযোগ করুন:' : 'For corporate inquiries, B2B partnerships, or institutional contacts, reach out to us:' }}
                        </p>
                        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white">Ogrova Corporate Desk</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Email: info@ogrova.com</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Location: Dhaka, Bangladesh</p>
                            </div>
                            <a href="mailto:info@ogrova.com" 
                               class="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2">
                                <i class="fa-solid fa-paper-plane"></i> 
                                {{ currentLang === 'bn' ? 'ইমেইল লিখুন' : 'Send Inquiry' }}
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
                <router-link to="/company-info" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'কোম্পানি তথ্য' : 'Company Info' }}
                </router-link>
                <span>•</span>
                <router-link to="/privacy-policy" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy' }}
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

// Language State toggle ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');
</script>

<style scoped>

</style>