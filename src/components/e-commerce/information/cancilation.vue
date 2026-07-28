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
                    {{ currentLang === 'bn' ? 'অর্ডার ক্যানসেলেশন নীতি' : 'Order Cancellation Rules' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'বাতিলকরণ নীতিমালা' : 'Cancellation Policy' }}
                </h1>
                
                <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'তে অর্ডার বাতিল করার শর্তাবলী ও সহজ প্রক্রিয়াসমূহ স্পষ্ট জেনে নিন।' : ' clear and transparent guidelines regarding how to cancel an order.' }}
                </p>
            </div>

            <!-- Main Rules Container -->
            <div class="space-y-6 mb-8">
                
                <!-- Rule 1: Customer Initiated Cancellation -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-ban"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'গ্রাহক দ্বারা অর্ডার বাতিল (Before Dispatch)' : 'Cancellation Before Dispatch' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'অর্ডার প্লেস করার পর পার্সেলটি কুরিয়ারে শিফট বা ডিসপ্যাচ হওয়ার আগে যেকোনো মুহূর্তে আপনি বিনামূল্যে অর্ডারটি বাতিল করতে পারবেন।' 
                                    : 'You can request to cancel your order free of charge at any time before the item is dispatched to the courier.' }}
                            </p>
                            <div class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                                <strong>{{ currentLang === 'bn' ? 'কীভাবে বাতিল করবেন:' : 'How to cancel:' }}</strong> 
                                {{ currentLang === 'bn' 
                                    ? 'সরাসরি অ্যাকাউন্ট থেকে বা আমাদের হটলাইন নম্বর/সাপোর্টে কল বা মেসেজ দিয়ে অর্ডার আইডি উল্লেখ করে বাতিল করতে পারবেন।' 
                                    : 'Contact our customer helpline or message support with your Order ID before fulfillment.' }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Rule 2: Cancellation After Dispatch -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'কুরিয়ারে যাওয়ার পর বাতিল (After Dispatch)' : 'Cancellation After Dispatch' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'পার্সেলটি কুরিয়ারে হ্যান্ডওভার হয়ে গেলে সাধারণ নিয়মে আর বাতিল করা সম্ভব নয়। তবে জরুরি প্রয়োজনে পার্সেল রিসিভ না করে ফেরত পাঠাতে চাইলে কুরিয়ার ডেলিভারি চার্জ পরিশোধ করতে হবে।' 
                                    : 'Once the order is picked up by the courier, standard cancellation is closed. Refusing delivery at doorstep requires paying the return shipping charge.' }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Rule 3: Ogrova Initiated Cancellation -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'Ogrova কর্তৃপক্ষের বাতিল করার অধিকার' : 'Cancellation by Ogrova' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed mb-3">
                                {{ currentLang === 'bn' 
                                    ? 'নিম্নলিখিত বিশেষ পরিস্থিতিতে Ogrova যেকোনো সময়ে আপনার অর্ডার বাতিল করার পূর্ণ অধিকার সংরক্ষণ করে:' 
                                    : 'Ogrova reserves the right to cancel an order under the following exceptional circumstances:' }}
                            </p>
                            <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                                <li class="flex items-center gap-2">
                                    <i class="fa-solid fa-circle-dot text-[8px] text-rose-500"></i>
                                    {{ currentLang === 'bn' ? 'পণ্য আউট অব স্টক (Out of Stock) হয়ে গেলে' : 'If the ordered item is out of stock' }}
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fa-solid fa-circle-dot text-[8px] text-rose-500"></i>
                                    {{ currentLang === 'bn' ? 'অসম্পূর্ণ বা ভুল ডেলিভারি ঠিকানা প্রদান করলে' : 'Incorrect or incomplete delivery details provided' }}
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fa-solid fa-circle-dot text-[8px] text-rose-500"></i>
                                    {{ currentLang === 'bn' ? 'ফোন ভেরিফিকেশনে গ্রাহককে না পাওয়া গেলে' : 'Unreachable phone number during order verification' }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Rule 4: Advance Payment Refund -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-all">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                                {{ currentLang === 'bn' ? 'অগ্রিম পেমেন্ট ফেরত (Refund on Cancelled Order)' : 'Refund for Cancelled Pre-paid Orders' }}
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {{ currentLang === 'bn' 
                                    ? 'যদি আপনার অর্ডারটি বাতিল হয়ে থাকে এবং আপনি আগেই অনলাইন পেমেন্ট বা মোবাইল ব্যাংকিংয়ের মাধ্যমে মূল্য পরিশোধ করে থাকেন, তবে ৭-১০ কর্মদিবসের মধ্যে পূর্ণ অর্থ আপনার মূল পেমেন্ট মেথডে রিফান্ড করা হবে।' 
                                    : 'If a pre-paid order is cancelled by you or by Ogrova, 100% of the payment will be refunded to your original payment method within 7-10 working days.' }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Quick Assistance CTA -->
            <div class="rounded-2xl p-6 sm:p-8 bg-indigo-50/60 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-center">
                <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                    {{ currentLang === 'bn' ? 'এখনই একটি অর্ডার বাতিল করতে চান?' : 'Need to cancel an existing order?' }}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 max-w-md mx-auto">
                    {{ currentLang === 'bn' ? 'দেরি হওয়ার আগেই আমাদের কাস্টমার এক্সিকিউটিভের সাথে সরাসরি কথা বলুন।' : 'Speak to our support team immediately before your parcel is handed over to courier.' }}
                </p>
                <router-link 
                    to="/support-center" 
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all">
                    <i class="fa-solid fa-headset"></i>
                    {{ currentLang === 'bn' ? 'সাপোর্টে যোগাযোগ করুন' : 'Contact Customer Care' }}
                </router-link>
            </div>

            <!-- Bottom Navigation -->
            <div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <router-link to="/return-refund" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'রিটার্ন ও রিফান্ড নীতি' : 'Return & Refund Policy' }}
                </router-link>
                <span>•</span>
                <router-link to="/faq" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'FAQ' }}
                </router-link>
                <span>•</span>
                <router-link to="/terms-conditions" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {{ currentLang === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions' }}
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