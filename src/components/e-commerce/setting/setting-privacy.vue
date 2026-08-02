<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-slate-50/50 dark:bg-[#0C1326] text-gray-800 dark:text-gray-200 rounded-2xl">
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
                    {{ currentLang === 'bn' ? 'লিগ্যাল ও পলিসি' : 'Legal & Policy' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'প্রাইভেসি পলিসি (গোপনীয়তা নীতি)' : 'Privacy Policy' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'তে আমরা আপনার আস্থাকে সম্মান করি এবং আপনার ব্যক্তিগত তথ্যের সুরক্ষা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।' : ' values your trust and is committed to protecting your personal data.' }}
                </p>
                
                <div class="mt-3 text-xs text-gray-400 dark:text-gray-500">
                    {{ currentLang === 'bn' ? 'সর্বশেষ আপডেট: মার্চ ২০২৬' : 'Last Updated: March 2026' }}
                </div>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#0C1326] dark:border-white/10 dark:shadow-none">
                
                <div class="space-y-10 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">

                    <!-- Section 1: Introduction -->
                    <section>
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-shield-halved text-indigo-500 text-lg"></i>
                            1. {{ currentLang === 'bn' ? 'ভূমিকা (Introduction)' : 'Introduction' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            স্বাগতম <strong>Ogrova</strong>-তে (`https://ogrova.com`)। আমরা আপনার ব্যক্তিগত গোপনীয়তার সর্বোচ্চ মূল্যায়ন করি। আপনি যখন আমাদের ওয়েবসাইটে ভিজিট করেন, ই-কমার্স সেবা গ্রহণ করেন কিংবা কেনাকাটা করেন, তখন কীভাবে আমরা তথ্য সংগ্রহ, ব্যবহার ও নিরাপদ রাখি তা এই গোপনীয়তা নীতিতে ব্যাখ্যা করা হয়েছে।
                        </p>
                        <p v-else>
                            Welcome to <strong>Ogrova</strong> (`https://ogrova.com`). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, utilize our e-commerce platform, or purchase products from us.
                        </p>
                    </section>

                    <!-- Section 2: Information We Collect -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-database text-indigo-500 text-lg"></i>
                            2. {{ currentLang === 'bn' ? 'সংগৃহীত তথ্যাবলী' : 'Information We Collect' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'আপনাকে মসৃণ ও দ্রুত কেনাকাটার অভিজ্ঞতা প্রদান করতে আমরা নিম্নলিখিত প্রয়োজনীয় তথ্য সংগ্রহ করে থাকি:' : 'We collect several types of information from and about users to deliver a seamless shopping experience:' }}
                        </p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'ব্যক্তিগত পরিচয় সম্পর্কিত তথ্য' : 'Personal Identifiable Data' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'নাম, মোবাইল নম্বর, ইমেইল এড্রেস, ডেলিভারির পূর্ণাঙ্গ ঠিকানা এবং পেমেন্ট ডিটেইলস।' : 'Full name, phone number, email address, delivery shipping address, and payment info.' }}
                                </p>
                            </div>
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'অর্ডার ও লেনদেনের তথ্য' : 'Order & Transactional Data' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'ক্রয়ের ইতিহাস, ক্যাশ অন ডেলিভারি (COD) বিবরণ, পার্সেল ট্র্যাকিং ও রিফান্ড সংক্রান্ত ডাটা।' : 'Purchase history, Cash on Delivery (COD) details, order status, parcel tracking, and refund requests.' }}
                                </p>
                            </div>
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'টেকনিক্যাল ও সিস্টেম লগ' : 'Technical & Log Information' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'আইপি (IP) ঠিকানা, ব্রাউজারের ধরণ, ডিভাইসের তথ্য এবং ওয়েবসাইট ব্যবহারের লগ ডাটা।' : 'IP address, browser type, device details, operating system, and website analytics logs.' }}
                                </p>
                            </div>
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'কুকিজ ও ট্র্যাকিং' : 'Cookies & Analytical Data' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'লগইন সেশন ধরে রাখা, কার্ট আইটেম সেভ করা এবং সাইটের স্পিড ও UX উন্নত করার কুকিজ।' : 'Cookies to keep you logged in, save your cart items, and analyze traffic for better site UX.' }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Section 3: How We Use Your Information -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-gears text-indigo-500 text-lg"></i>
                            3. {{ currentLang === 'bn' ? 'তথ্যের ব্যবহারের উদ্দেশ্য' : 'How We Use Your Information' }}
                        </h2>
                        <ul class="list-disc pl-5 space-y-2" v-if="currentLang === 'bn'">
                            <li>অর্ডার প্রসেসিং, শিপিং পরিচালনা এবং পণ্য আপনার দরজায় সফলভাবে পৌঁছে দেওয়া।</li>
                            <li>অর্ডার কনফার্মেশন, এসএমএস (SMS) অ্যালার্ট এবং পার্সেল ট্র্যাকিং নোটিফিকেশন পাঠাতে।</li>
                            <li>কাস্টমার সাপোর্ট প্রদান করা এবং আপনার যেকোনো জটিলতার দ্রুত সমাধান দেওয়া।</li>
                            <li>ভুয়া অর্ডার, ফেক অ্যাকাউন্ট তৈরি বা যেকোনো অপব্যবহার রোধ করা।</li>
                            <li>ওয়েবসাইটের ইউজার ইন্টারফেস (UI/UX) এবং পারফরম্যান্স উত্তরোত্তর উন্নত করা।</li>
                        </ul>
                        <ul class="list-disc pl-5 space-y-2" v-else>
                            <li>To process, fulfill, and manage delivery of your purchased items.</li>
                            <li>To send order confirmation, SMS updates, and customer service alerts.</li>
                            <li>To provide prompt customer support and manage query resolutions.</li>
                            <li>To prevent fraudulent transactions, duplicate registrations, and unauthorized site activity.</li>
                            <li>To continuously optimize website performance, speed, and user experience.</li>
                        </ul>
                    </section>

                    <!-- Section 4: Data Sharing & Third-Party Disclosure -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-share-nodes text-indigo-500 text-lg"></i>
                            4. {{ currentLang === 'bn' ? 'তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং' : 'Third-Party Data Sharing' }}
                        </h2>
                        <p class="mb-3">
                            {{ currentLang === 'bn' ? 'আমরা কখনোই আপনার ব্যক্তিগত তথ্য কোনো ৩য় পক্ষের কাছে বিক্রি বা বাণিজ্যিক উদ্দেশ্যে ভাড়া দিই না। তবে ব্যবসায়িক কার্যক্রম সম্পাদনে আমরা বিশ্বস্ত পার্টনারদের সাথে তথ্য শেয়ার করি:' : 'We do not sell or rent your personal information. However, we may share essential data with trusted business partners:' }}
                        </p>
                        <ul class="list-disc pl-5 space-y-2">
                            <li>
                                <strong>{{ currentLang === 'bn' ? 'কুরিয়ার ও লজিস্টিক পার্টনার:' : 'Courier & Logistics Partners:' }}</strong> 
                                {{ currentLang === 'bn' ? 'পার্সেল ডেলিভারির সুবিধার্থে ডেলিভারি এজেন্টের সাথে গ্রাহকের নাম, ফোন নম্বর ও ঠিকানা শেয়ার করা হয় (যেমন: Steadfast, Pathao, RedX)।' : 'Recipient details and delivery address are shared with delivery partners to fulfill parcel dispatch.' }}
                            </li>
                            <li>
                                <strong>{{ currentLang === 'bn' ? 'পেমেন্ট গেটওয়ে:' : 'Payment Gateways:' }}</strong> 
                                {{ currentLang === 'bn' ? 'অনলাইন পেমেন্ট প্রসেস বা ভেরিফিকেশনের জন্য বিশ্বস্ত গেটওয়ে (bKash, Nagad, SSLCommerz, Card)।' : 'Authorized gateways (bKash, Nagad, SSLCommerz, Card systems) for secure transaction processing.' }}
                            </li>
                            <li>
                                <strong>{{ currentLang === 'bn' ? 'আইনি বাধ্যবাধকতা:' : 'Legal Obligations:' }}</strong> 
                                {{ currentLang === 'bn' ? 'বাংলাদেশের প্রচলিত আইন বা দেশের আইন প্রয়োগকারী সংস্থার যথাযথ আদেশের অধীনে।' : 'When strictly mandated by Bangladeshi laws, judicial orders, or law enforcement authority.' }}
                            </li>
                        </ul>
                    </section>

                    <!-- Section 5: Data Security -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-lock text-indigo-500 text-lg"></i>
                            5. {{ currentLang === 'bn' ? 'তথ্য নিরাপত্তা' : 'Data Security' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            আমরা আপনার ডাটার নিরাপত্তায় SSL এনক্রিপশন, সেকিউর টোকেন অথেনটিকেশন এবং রোল-বেসড এক্সেস কন্ট্রোল ব্যবহার করি। যদিও ইন্টারনেটের মাধ্যমে ১০০% ডাটা সুরক্ষিত রাখার নিশ্চয়তা কেউ দিতে পারে না, তবুও আমরা আপনার তথ্যের সর্বোচ্চ নিরাপত্তা বিধানে আমাদের সিস্টেমকে নিয়মিত আধুনিকায়ন করি।
                        </p>
                        <p v-else>
                            We employ strict security standards including SSL encryption and token-based authentication to guard your data. While no system on the internet is 100% impenetrable, we continually audit and update our technical safeguards for your transactions.
                        </p>
                    </section>

                    <!-- Section 6: User Rights & Data Retention -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-user-check text-indigo-500 text-lg"></i>
                            6. {{ currentLang === 'bn' ? 'আপনার অধিকার ও ডাটা সংরক্ষণ' : 'Your Rights & Data Retention' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            আপনার নিজস্ব ডাটা নিয়ন্ত্রণ করার পূর্ণ অধিকার আপনার রয়েছে। আপনি যেকোনো সময় অ্যাকাউন্টের প্রোফাইল অপশন থেকে তথ্য পরিবর্তন/আপডেট করতে পারেন অথবা আমাদের টিমের সাথে যোগাযোগ করে ডাটা মুছে ফেলার (Account Deletion) অনুরোধ পাঠাতে পারেন।
                        </p>
                        <p v-else>
                            You hold the right to access, review, or update your stored personal details at any time via your account dashboard. You may also request data deletion by contacting our privacy compliance team.
                        </p>
                    </section>

                    <!-- Section 7: Contact Us -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-headset text-indigo-500 text-lg"></i>
                            7. {{ currentLang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'আমাদের প্রাইভেসি পলিসি সম্পর্কে আপনার কোনো প্রশ্ন, পরামর্শ বা অভিযোগ থাকলে নির্দ্বিধায় যোগাযোগ করুন:' : 'If you have questions, concerns, or requests regarding this policy, feel free to contact our compliance desk:' }}
                        </p>
                        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white">Ogrova Support Team</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Website: ogrova.com</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Location: Dhaka, Bangladesh</p>
                            </div>
                            <a href="mailto:support@ogrova.com" 
                               class="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2">
                                <i class="fa-solid fa-envelope"></i> 
                                {{ currentLang === 'bn' ? 'ইমেইল সাপোর্ট' : 'Contact Privacy Officer' }}
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
</template>

<script setup>
import { ref } from 'vue'
const currentLang = ref('en')
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>