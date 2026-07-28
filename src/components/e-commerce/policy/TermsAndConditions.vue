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
                    {{ currentLang === 'bn' ? 'আইনি চুক্তি ও শর্তাবলী' : 'Legal Agreement' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'শর্তাবলী (Terms & Conditions)' : 'Terms & Conditions' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span> {{ currentLang === 'bn' ? 'প্ল্যাটফর্ম ব্যবহার ও কেনাকাটা করার আগে অনুগ্রহ করে আমাদের শর্তাবলীসমূহ মনোযোগ দিয়ে পড়ুন।' : ' services. Please read these terms carefully before using our platform or making a purchase.' }}
                </p>

                <div class="mt-3 text-xs text-gray-400 dark:text-gray-500">
                    {{ currentLang === 'bn' ? 'কার্যকরের তারিখ: মার্চ ২০২৬' : 'Effective Date: March 2026' }}
                </div>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                
                <div class="space-y-10 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">

                    <!-- Section 1: Agreement Overview -->
                    <section>
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-file-contract text-indigo-500 text-lg"></i>
                            1. {{ currentLang === 'bn' ? 'শর্তাবলীর সম্মতি' : 'Acceptance of Terms' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            <strong>Ogrova</strong> (`https://ogrova.com`) ওয়েবসাইট বা এর যেকোনো সেবা ব্যবহারের মাধ্যমে আপনি আমাদের এই ব্যবহারের শর্তাবলীর সাথে সম্পূর্ণ একমত পোষণ করছেন। আপনি যদি এই শর্তাবলীর কোনো অংশের সাথে সম্মত না হন, তবে অনুগ্রহ করে আমাদের প্ল্যাটফর্ম ব্যবহার করা থেকে বিরত থাকুন।
                        </p>
                        <p v-else>
                            By accessing or using the platform at <strong>https://ogrova.com</strong> or purchasing products through <strong>Ogrova</strong>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue using our platform.
                        </p>
                    </section>

                    <!-- Section 2: User Account & Security -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-user-check text-indigo-500 text-lg"></i>
                            2. {{ currentLang === 'bn' ? 'ব্যবহারকারী অ্যাকাউন্ট ও নিরাপত্তা' : 'User Account & Security' }}
                        </h2>
                        <ul class="list-disc pl-5 space-y-2" v-if="currentLang === 'bn'">
                            <li>অর্ডার সম্পন্ন বা অ্যাকাউন্ট খোলার জন্য সঠিক নাম, সক্রিয় ফোন নম্বর এবং নিখুঁত ডেলিভারি ঠিকানা প্রদান করা বাধ্যতাবোধক।</li>
                            <li>আপনার অ্যাকাউন্টের পাসওয়ার্ড ও লগইন তথ্যের গোপনীয়তা বজায় রাখার সম্পূর্ণ দায়িত্ব আপনার।</li>
                            <li>কোনো ভুয়া তথ্য, মিথ্যা পরিচয় বা প্ল্যাটফর্মে প্রতারণামূলক কর্মকাণ্ড পরিলক্ষিত হলে Ogrova যেকোনো অ্যাকাউন্ট স্থগিত করার অধিকার রাখে।</li>
                        </ul>
                        <ul class="list-disc pl-5 space-y-2" v-else>
                            <li>Users must provide accurate, current, and complete personal details (Name, active phone number, and address) during checkout or registration.</li>
                            <li>You are solely responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
                            <li>Ogrova reserves the right to suspend or terminate accounts that provide fraudulent information or engage in unauthorized activity.</li>
                        </ul>
                    </section>

                    <!-- Section 3: Ordering & Pricing -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-tag text-indigo-500 text-lg"></i>
                            3. {{ currentLang === 'bn' ? 'অর্ডার, মূল্য ও পেমেন্ট' : 'Orders, Pricing & Payments' }}
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'পণ্যের স্টক ও মূল্য নির্ধারণ' : 'Pricing & Stock Availability' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'সাইটে প্রদর্শিত পণ্যের দাম এবং স্টক যেকোনো সময় পরিবর্তিত হতে পারে। ভুলবশত কোনো পণ্যের দাম ভুল উঠলে Ogrova অর্ডার বাতিলের অধিকার রাখে।' : 'All prices and stock availability are subject to change without notice. In case of pricing errors, Ogrova reserves the right to cancel affected orders.' }}
                                </p>
                            </div>
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'পেমেন্ট পদ্ধতি' : 'Payment Methods' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'গ্রাহকগণ ক্যাশ অন ডেলিভারি (COD) কিংবা ডিজিটাল পেমেন্ট গেটওয়ে (bKash, Nagad, Cards) এর মাধ্যমে নিরাপদ পেমেন্ট করতে পারবেন।' : 'We support Cash on Delivery (COD) as well as secure online payments via bKash, Nagad, cards, and net banking.' }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Section 4: Shipping & Delivery -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-truck-fast text-indigo-500 text-lg"></i>
                            4. {{ currentLang === 'bn' ? 'শিপিং ও ডেলিভারি নীতি' : 'Shipping & Delivery Terms' }}
                        </h2>
                        <ul class="list-disc pl-5 space-y-2" v-if="currentLang === 'bn'">
                            <li><strong>ডেলিভারি সময়সূচী:</strong> ঢাকা সিটির ভেতরে সাধারণত ২৪-৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ২-৪ কার্যদিবসের মধ্যে পার্সেল পৌঁছানো হয়।</li>
                            <li><strong>পার্সেল গ্রহণ ও চেক:</strong> পণ্য গ্রহণের সময় ডেলিভারিম্যানের সামনে প্যাকেজিং দেখে ও বুঝে নেওয়া গ্রাহকের দায়িত্ব।</li>
                            <li><strong>অনিবার্য বিলম্ব:</strong> আবহাওয়া সংক্রান্ত বিপর্যয়, রাজনৈতিক বা লজিস্টিক সমস্যার কারণে ডেলিভারিতে বিলম্ব হতে পারে।</li>
                        </ul>
                        <ul class="list-disc pl-5 space-y-2" v-else>
                            <li><strong>Delivery Timeline:</strong> Deliveries within Dhaka typically take 24–48 hours, while nationwide shipping outside Dhaka takes 2–4 business days.</li>
                            <li><strong>Order Inspection:</strong> Customers are advised to inspect the physical condition of the parcel upon arrival in front of the courier agent.</li>
                            <li><strong>Unforeseen Delays:</strong> Delivery schedules may experience slight delays due to severe weather, strikes, or courier logistics bottlenecks.</li>
                        </ul>
                    </section>

                    <!-- Section 5: Intellectual Property & Restrictions -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-copyright text-indigo-500 text-lg"></i>
                            5. {{ currentLang === 'bn' ? 'মেধাসম্পদ ও ব্যবহারের সীমাবদ্ধতা' : 'Intellectual Property & Website Use' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            Ogrova ওয়েবসাইটের সমস্ত কন্টেন্ট—যেমন লোগো, গ্রাফিক্স, ছবি, প্রোডাক্ট বিবরণী, টেক্সট এবং সফ্টওয়্যার সংক্রান্ত সকল উপাদান **Ogrova**-এর নিজস্ব সম্পত্তি। অনুমতি ছাড়া এই সাইটের কোনো কন্টেন্ট কপি, লোগো ব্যবহার বা বাণিজ্যিক উদ্দেশ্যে পুনর্ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।
                        </p>
                        <p v-else>
                            All content on this website, including logos, icons, graphics, product photography, UI designs, and software code, is the exclusive property of <strong>Ogrova</strong>. Unauthorized reproduction, copying, or commercial distribution is strictly prohibited.
                        </p>
                    </section>

                    <!-- Section 6: Modifications & Termination -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-pen-to-square text-indigo-500 text-lg"></i>
                            6. {{ currentLang === 'bn' ? 'শর্তাবলী পরিবর্তন ও সংশোধন' : 'Modifications to Terms' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            Ogrova যেকোনো সময় পূর্ববর্তী নোটিশ ছাড়াই এই ব্যবহারের শর্তাবলী পরিবর্তন বা আপডেট করার অধিকার রাখে। পরিবর্তিত শর্তাবলী ওয়েবসাইটে আপলোডের পর থেকে তা কার্যকর হবে।
                        </p>
                        <p v-else>
                            Ogrova reserves the right to modify, add, or update these Terms & Conditions at any time without prior notice. Continued usage of the platform after updates implies acceptance of the updated terms.
                        </p>
                    </section>

                    <!-- Section 7: Contact Information -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-headset text-indigo-500 text-lg"></i>
                            7. {{ currentLang === 'bn' ? 'যোগাযোগ ও সাপোর্ট' : 'Legal Contact & Support' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'আমাদের শর্তাবলী সম্পর্কে কোনো তথ্য জানতে বা সাহায্য পেতে আমাদের সাথে যোগাযোগ করুন:' : 'If you have any questions or require clarification regarding these Terms and Conditions, reach out to us:' }}
                        </p>
                        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white">Ogrova Legal & Support Team</p>
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

            <!-- Navigation Footer -->
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
import { ref } from 'vue';
import FooterSection from '../footer.vue';

// Language State toggle ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');
</script>

<style scoped>

</style>