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
                    {{ currentLang === 'bn' ? '২৪/৭ কাস্টমার সাপোর্ট' : 'Customer Help & Support' }}
                </span>
                
                <h1 class="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
                    {{ currentLang === 'bn' ? 'যোগাযোগ করুন (Contact Us)' : 'Get in Touch' }}
                </h1>
                
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400">Ogrova</span>-{{ currentLang === 'bn' ? 'র সাথে যেকোনো প্রয়োজন, পণ্য সংক্রান্ত জিজ্ঞাসা বা সহায়তার জন্য আমাদের মেসেজ দিন।' : ' is here to help you. Reach out for any questions, order updates, or inquiries.' }}
                </p>
            </div>

            <!-- Main Grid Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <!-- Left Side: Contact Information Cards -->
                <div class="space-y-4 lg:col-span-1">
                    
                    <!-- Phone -->
                    <div class="p-6 rounded-3xl border bg-white border-gray-200 shadow-xl shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none flex items-start gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900 dark:text-white text-sm">
                                {{ currentLang === 'bn' ? 'ফোন সাপোর্ট' : 'Call Support' }}
                            </h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">+880 1700-000000</p>
                            <span class="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold block mt-1">
                                {{ currentLang === 'bn' ? 'সকাল ১০টা - রাত ১০টা' : '10:00 AM - 10:00 PM' }}
                            </span>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="p-6 rounded-3xl border bg-white border-gray-200 shadow-xl shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none flex items-start gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900 dark:text-white text-sm">
                                {{ currentLang === 'bn' ? 'ইমেইল সাপোর্ট' : 'Email Us' }}
                            </h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">support@ogrova.com</p>
                            <span class="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold block mt-1">
                                {{ currentLang === 'bn' ? '২৪ ঘণ্টার মধ্যে উত্তর' : 'Reply within 24 hours' }}
                            </span>
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="p-6 rounded-3xl border bg-white border-gray-200 shadow-xl shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none flex items-start gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shrink-0">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900 dark:text-white text-sm">
                                {{ currentLang === 'bn' ? 'প্রধান কার্যালয়' : 'Headquarters' }}
                            </h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {{ currentLang === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh' }}
                            </p>
                            <span class="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold block mt-1">
                                {{ currentLang === 'bn' ? 'অনলাইন ও ফিজিক্যাল ডেলিভারি হ্যাব' : 'E-commerce Hub' }}
                            </span>
                        </div>
                    </div>

                </div>

                <!-- Right Side: Contact Form -->
                <div class="lg:col-span-2 rounded-[2.5rem] p-6 sm:p-10 border shadow-xl transition-all duration-300 bg-white border-gray-200 shadow-gray-200/50 dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
                    
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {{ currentLang === 'bn' ? 'আমাদের মেসেজ পাঠান' : 'Send Us a Message' }}
                    </h2>
                    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                        {{ currentLang === 'bn' ? 'নিচের ফর্মে আপনার তথ্য পূরণ করে সাবমিট করুন। আমাদের কাস্টমার প্রতিনিধি শীঘ্রই যোগাযোগ করবেন।' : 'Fill out the form below and our team will get back to you shortly.' }}
                    </p>

                    <!-- Success Alert -->
                    <div v-if="successMsg" class="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-base"></i>
                        {{ successMsg }}
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Name -->
                            <div>
                                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                                    {{ currentLang === 'bn' ? 'আপনার নাম' : 'Your Name' }} *
                                </label>
                                <input 
                                    v-model="form.name"
                                    type="text" 
                                    required
                                    :placeholder="currentLang === 'bn' ? 'আপনার পূর্ণ নাম লিখুন' : 'John Doe'"
                                    class="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                                />
                            </div>

                            <!-- Phone -->
                            <div>
                                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                                    {{ currentLang === 'bn' ? 'ফোন নম্বর' : 'Phone Number' }} *
                                </label>
                                <input 
                                    v-model="form.phone"
                                    type="tel" 
                                    required
                                    :placeholder="currentLang === 'bn' ? '০১৭XXXXXXXX' : '+88017XXXXXXXX'"
                                    class="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                                {{ currentLang === 'bn' ? 'ইমেইল অ্যাড্রেস' : 'Email Address' }}
                            </label>
                            <input 
                                v-model="form.email"
                                type="email" 
                                :placeholder="currentLang === 'bn' ? 'আপনার ইমেইল (ঐচ্ছিক)' : 'name@example.com'"
                                class="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                            />
                        </div>

                        <!-- Subject -->
                        <div>
                            <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                                {{ currentLang === 'bn' ? 'বিষয় (Subject)' : 'Subject' }} *
                            </label>
                            <input 
                                v-model="form.subject"
                                type="text" 
                                required
                                :placeholder="currentLang === 'bn' ? 'মেসেজের বিষয়' : 'e.g., Order Query, Product Inquiry'"
                                class="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                            />
                        </div>

                        <!-- Message -->
                        <div>
                            <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                                {{ currentLang === 'bn' ? 'আপনার বার্তা' : 'Your Message' }} *
                            </label>
                            <textarea 
                                v-model="form.message"
                                rows="4" 
                                required
                                :placeholder="currentLang === 'bn' ? 'বিস্তারিত এখানে লিখুন...' : 'Write your message here...'"
                                class="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <!-- Submit Button -->
                        <button 
                            type="submit" 
                            :disabled="loading"
                            class="w-full py-3.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2">
                            <i v-if="loading" class="fa-solid fa-spinner animate-spin"></i>
                            <i v-else class="fa-solid fa-paper-plane"></i>
                            {{ currentLang === 'bn' ? 'মেসেজ পাঠান' : 'Send Message' }}
                        </button>
                    </form>

                </div>

            </div>

            <!-- Bottom Policy Links -->
            <div class="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
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

// Form Data & State
const form = ref({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
});

const loading = ref(false);
const successMsg = ref('');

const handleSubmit = () => {
    loading.value = true;
    
    // Simulate API request delay
    setTimeout(() => {
        loading.value = false;
        successMsg.value = currentLang.value === 'bn'
            ? 'আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! শীঘ্রই আমরা যোগাযোগ করব।'
            : 'Your message has been sent successfully! We will contact you soon.';
        
        // Reset form fields
        form.value = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        };

        setTimeout(() => {
            successMsg.value = '';
        }, 5000);
    }, 1000);
};
</script>

<style scoped>

</style>