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
                    {{ currentLang === 'bn' ? 'গ্রাহক সেবা ও নিশ্চয়তা' : 'Customer Assurance' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'রিটার্ন ও রিফান্ড পলিসি' : 'Return & Refund Policy' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span> {{ currentLang === 'bn' ? '-তে পণ্য রিটার্ন, এক্সচেঞ্জ, ড্যামেজ ক্লেইম এবং রিফান্ড সংক্রান্ত নির্দেশাবলী।' : ' guidelines on parcel returns, product exchanges, damage claims, and refunds.' }}
                </p>

                <div class="mt-3 text-xs text-gray-400 dark:text-gray-500">
                    {{ currentLang === 'bn' ? 'সর্বশেষ আপডেট: মার্চ ২০২৬' : 'Last Updated: March 2026' }}
                </div>
            </div>

            <!-- Content Card Container -->
            <div class="rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#0C1326] dark:border-white/10 dark:shadow-none">
                
                <div class="space-y-10 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">

                    <!-- Section 1: Policy Overview -->
                    <section>
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-box-open text-indigo-500 text-lg"></i>
                            1. {{ currentLang === 'bn' ? 'রিটার্ন পলিসি সাধারণ নিয়মাবলী' : 'Return Policy Overview' }}
                        </h2>
                        <p v-if="currentLang === 'bn'">
                            <strong>Ogrova</strong> (`https://ogrova.com`)-তে আমরা গুণগত মান নিশ্চিত করে সঠিক পণ্য গ্রাহকের কাছে পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ। তবুও যদি কোনো পণ্যে সমস্যা থাকে বা ক্রুটিযুক্ত হয়, তবে এই রিটার্ন ও রিফান্ড নীতিমালার অধীনে পণ্য ফেরত বা পরিবর্তনের সুযোগ প্রদান করা হয়।
                        </p>
                        <p v-else>
                            At <strong>Ogrova</strong> (`https://ogrova.com`), we strive to maintain high-quality standards and seamless deliveries. This Return & Refund Policy outlines the terms for product returns, damage replacements, and refund process.
                        </p>
                    </section>

                    <!-- Section 2: Eligibility for Return -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-truck-ramp-box text-indigo-500 text-lg"></i>
                            2. {{ currentLang === 'bn' ? 'রিটার্ন বা ফেরতের শতাবলি' : 'Eligibility for Return & Replacement' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'নিম্নলিখিত ক্ষেত্রগুলোতে গ্রাহক পণ্য রিটার্ন বা এক্সচেঞ্জ করতে পারবেন:' : 'Customers are eligible for a return or replacement under the following conditions:' }}
                        </p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'ত্রুটিযুক্ত বা ক্ষতিগ্রস্ত পণ্য' : 'Damaged or Defective Item' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'ডেলিভারি পাওয়ার সময় পণ্য ভাঙা, ছেঁড়া বা কার্যক্ষম না থাকলে সাথে সাথে ডেলিভারি ম্যানের সামনে চেক করে জানাতে হবে।' : 'If the product arrives broken, damaged, or defective during delivery, report it immediately to the delivery agent.' }}
                                </p>
                            </div>
                            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    {{ currentLang === 'bn' ? 'ভুল বা ভিন্ন পণ্য' : 'Incorrect or Missing Product' }}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ currentLang === 'bn' ? 'অর্ডার করা সাইজ, কালার বা পণ্যের বিবরণীর সাথে বাস্তব পণ্যের মিল না থাকলে ফ্রিতে এক্সচেঞ্জ করা হবে।' : 'If the delivered product differs from what you ordered in terms of size, color, or model specifications.' }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Section 3: Conditions for Valid Return -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-arrows-rotate text-indigo-500 text-lg"></i>
                            3. {{ currentLang === 'bn' ? 'রিটার্নের প্রয়োজনীয় শর্তাবলী' : 'Mandatory Conditions for Return' }}
                        </h2>
                        <ul class="list-disc pl-5 space-y-2" v-if="currentLang === 'bn'">
                            <li><strong>অরিজিনাল প্যাকেজিং:</strong> পণ্য অবশ্যই এর আসল বক্স, ট্যাগ, লেবেল এবং ইনভয়েস/মেমো সহ অক্ষত অবস্থায় থাকতে হবে।</li>
                            <li><strong>ব্যবহার না করার শর্ত:</strong> পণ্যটি অব্যবহৃত এবং অবিকৃত অবস্থায় থাকতে হবে। কোনো ব্যবহারকৃত বা ক্ষতিগ্রস্ত পণ্য ফেরত নেওয়া হবে না।</li>
                            <li><strong>আনবক্সিং ভিডিও (প্রযোজ্য ক্ষেত্রে):</strong> যেকোনো অনাকাঙ্ক্ষিত ঝামেলা এড়াতে ডেলিভারি পাওয়ার পর প্যাকেট খোলার একটি আনবক্সিং ভিডিও করে রাখার পরামর্শ দেওয়া হয়।</li>
                        </ul>
                        <ul class="list-disc pl-5 space-y-2" v-else>
                            <li><strong>Original Condition:</strong> Products must be unwashed, unworn, unused, and with original tags, labels, and invoice included.</li>
                            <li><strong>Intact Packaging:</strong> The product must be returned in its original brand box/packaging undamaged.</li>
                            <li><strong>Unboxing Video:</strong> We strongly advise recording a quick unboxing video upon receiving the parcel for faster claim resolution.</li>
                        </ul>
                    </section>

                    <!-- Section 4: Refund Process & Timeline -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-hand-holding-dollar text-indigo-500 text-lg"></i>
                            4. {{ currentLang === 'bn' ? 'রিফান্ড প্রক্রিয়া ও সময়সীমা' : 'Refund Method & SLA Timeline' }}
                        </h2>
                        <p class="mb-3">
                            {{ currentLang === 'bn' ? 'রিটার্নকৃত পণ্য আমাদের ওয়্যারহাউজে পৌঁছানোর পর সঠিকতা যাচাই করে রিফান্ড প্রসেস করা হয়:' : 'Once your returned product is inspected and verified by our quality control team:' }}
                        </p>
                        
                        <div class="space-y-3">
                            <div class="p-4 rounded-xl bg-gray-50 dark:bg-white/5 text-xs sm:text-sm">
                                <strong>{{ currentLang === 'bn' ? 'পেমেন্ট রিফান্ড মাধ্যম:' : 'Payment Refund Channels:' }}</strong> 
                                {{ currentLang === 'bn' ? 'অনলাইন পেমেন্ট বা বিকাশ/নগদে পেমেন্ট করা থাকলে ৫-৭ কার্যদিবসের মধ্যে একই অ্যাকাউন্টে টাকা রিফান্ড করা হবে।' : 'Prepaid orders will be refunded via the original payment method (bKash, Nagad, or Bank) within 5-7 business days.' }}
                            </div>
                            <div class="p-4 rounded-xl bg-gray-50 dark:bg-white/5 text-xs sm:text-sm">
                                <strong>{{ currentLang === 'bn' ? 'ক্যাশ অন ডেলিভারি (COD):' : 'Cash on Delivery (COD) Refunds:' }}</strong> 
                                {{ currentLang === 'bn' ? 'COD অর্ডারের ক্ষেত্রে পণ্য ফেরতের পর গ্রাহকের দেওয়া মোবাইল ব্যাংকিং (bKash/Nagad) নম্বরে টাকা পাঠিয়ে দেওয়া হবে।' : 'For COD orders, approved refund amounts will be sent directly to your provided bKash or Nagad account.' }}
                            </div>
                        </div>
                    </section>

                    <!-- Section 5: Delivery & Return Charges -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-clock-rotate-left text-indigo-500 text-lg"></i>
                            5. {{ currentLang === 'bn' ? 'ডেলিভারি চার্জ সংক্রান্ত নীতি' : 'Shipping Charges Policy' }}
                        </h2>
                        <ul class="list-disc pl-5 space-y-2" v-if="currentLang === 'bn'">
                            <li><strong>আমাদের ভুল থাকলে:</strong> ভুল বা ক্রুটিযুক্ত পণ্য পাঠানো হলে সম্পূর্ণ ডেলিভারি চার্জ Ogrova বহন করবে।</li>
                            <li><strong>গ্রাহকের পছন্দে পরিবর্তন:</strong> কোনো ত্রুটি ছাড়া গ্রাহক নিজের ইচ্ছায় সাইজ বা রঙ পরিবর্তন করতে চাইলে রিটার্ন ও নতুন ডেলিভারি চার্জ গ্রাহককে বহন করতে হবে।</li>
                        </ul>
                        <ul class="list-disc pl-5 space-y-2" v-else>
                            <li><strong>Fault on Ogrova:</strong> If we deliver a wrong or defective item, Ogrova covers all return and replacement shipping fees.</li>
                            <li><strong>Change of Mind / Preference:</strong> If you wish to exchange due to personal preference/size change, applicable shipping charges apply.</li>
                        </ul>
                    </section>

                    <!-- Section 6: Contact & Support -->
                    <section class="border-t border-gray-100 dark:border-white/5 pt-8">
                        <h2 class="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            <i class="fa-solid fa-headset text-indigo-500 text-lg"></i>
                            6. {{ currentLang === 'bn' ? 'রিটার্ন ক্লেম বা হেল্পলাইন' : 'Return Support & Assistance' }}
                        </h2>
                        <p class="mb-4">
                            {{ currentLang === 'bn' ? 'রিটার্ন বা রিফান্ড সংক্রান্ত কোনো সাহায্য বা ক্লেম জমা দিতে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন:' : 'Need assistance with returning a product or checking your refund status? Contact our support team:' }}
                        </p>
                        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white">Ogrova Return & Claim Desk</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Website: ogrova.com</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Location: Dhaka, Bangladesh</p>
                            </div>
                            <a href="mailto:support@ogrova.com" 
                               class="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2">
                                <i class="fa-solid fa-envelope"></i> 
                                {{ currentLang === 'bn' ? 'রিটার্ন ক্লেম করুন' : 'File a Return Claim' }}
                            </a>
                        </div>
                    </section>

                </div>
            </div>

            <!-- Bottom Policy Links -->
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
import { ref } from 'vue';

// Language State toggle ('bn' for Bangla, 'en' for English)
const currentLang = ref('bn');
</script>

<style scoped>

</style>