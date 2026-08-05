<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-gray-50 text-gray-800 dark:bg-[#0a0a0b] dark:text-gray-200">
        <div class="max-w-6xl mx-auto">
            
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

            <!-- Header Section -->
            <div class="max-w-5xl mx-auto text-center mb-16 relative">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 dark:bg-blue-600/5 blur-[100px] -z-10"></div>
                
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                    <i class="fa-solid fa-lock text-blue-500"></i>
                    {{ currentLang === 'bn' ? 'ব্যাংক-গ্রেড নিরাপত্তা' : 'Bank-Grade Security' }}
                </div>
                
                <h1 class="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                    {{ currentLang === 'bn' ? 'আপনার নিরাপত্তাই আমাদের' : 'Your Security is Our' }} <br> 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        {{ currentLang === 'bn' ? 'সর্বোচ্চ অগ্রাধিকার' : 'Highest Priority' }}
                    </span>
                </h1>
                
                <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                    {{ currentLang === 'bn' 
                        ? 'আপনার ব্যবসার ডাটা, ব্যক্তিগত তথ্য এবং আর্থিক লেনদেন ২৪/৭ সুরক্ষিত রাখতে আমরা একাধিক প্রতিরক্ষা ব্যবস্থা ব্যবহার করি।' 
                        : 'We employ multiple layers of defense to ensure your business data, personal information, and financial transactions stay protected 24/7.' 
                    }}
                </p>
            </div>

            <div class="space-y-16">
                <!-- Core Features Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                        <div class="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-file-shield text-2xl text-blue-600 dark:text-blue-400"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
                            {{ currentLang === 'bn' ? 'এন্ড-টু-এন্ড এনক্রিপশন' : 'End-to-End Encryption' }}
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'আপনার ডিভাইস এবং আমাদের সার্ভারের মধ্যে আদান-প্রদান করা প্রতিটি ডাটা ২৫৬-বিট SSL এনক্রিপশন প্রযুক্তি দ্বারা সুরক্ষিত।' 
                                : 'Every piece of data transmitted between your device and our servers is protected using 256-bit SSL encryption technology.' 
                            }}
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                        <div class="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-fingerprint text-2xl text-emerald-600 dark:text-emerald-400"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
                            {{ currentLang === 'bn' ? 'এআই ফ্রড ডিটেকশন' : 'AI Fraud Detection' }}
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'আমাদের বুদ্ধিমত্তা অ্যালগরিদম রিয়েল-টাইমে সন্দেহজনক কার্যক্রম পর্যবেক্ষণ করে অননুমোদিত লেনদেন প্রতিরোধ করে।' 
                                : 'Our intelligent algorithms monitor for suspicious activity in real-time, preventing unauthorized transactions before they happen.' 
                            }}
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                        <div class="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-credit-card text-2xl text-orange-600 dark:text-orange-400"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
                            {{ currentLang === 'bn' ? 'PCI DSS কমপ্লায়েন্স' : 'PCI DSS Compliance' }}
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {{ currentLang === 'bn' 
                                ? 'পেমেন্ট সুরক্ষার আন্তর্জাতিক মানদণ্ড মেনে আমরা আপনার কার্ডের তথ্যের সর্বোচ্চ নিরাপত্তা নিশ্চিত করি।' 
                                : 'We adhere to the highest international standards for payment security, ensuring your card information is never compromised.' 
                            }}
                        </p>
                    </div>
                </div>

                <!-- Advanced Protection Ecosystem Banner -->
                <div class="bg-slate-900 rounded-3xl overflow-hidden relative shadow-xl border border-slate-800">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    
                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16 items-center">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-black text-white mb-6 tracking-tight">
                                {{ currentLang === 'bn' ? 'উন্নত সুরক্ষা ইকোসিস্টেম' : 'Advanced Protection Ecosystem' }}
                            </h2>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <div class="p-2 bg-blue-500 rounded-lg mt-1 shrink-0"><i class="fa-solid fa-check text-white text-xs"></i></div>
                                    <div>
                                        <h4 class="text-white font-bold text-sm sm:text-base">
                                            {{ currentLang === 'bn' ? 'টু-ফ্যাক্টর অথেনটিকেশন (2FA)' : 'Two-Factor Authentication (2FA)' }}
                                        </h4>
                                        <p class="text-slate-400 text-xs sm:text-sm mt-1">
                                            {{ currentLang === 'bn' ? 'মোবাইল ভেরিফিকেশনের মাধ্যমে অ্যাকাউন্টে অতিরিক্ত নিরাপত্তা স্তর যুক্ত করুন।' : 'Add an extra layer of security to your account using mobile verification.' }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="p-2 bg-blue-500 rounded-lg mt-1 shrink-0"><i class="fa-solid fa-check text-white text-xs"></i></div>
                                    <div>
                                        <h4 class="text-white font-bold text-sm sm:text-base">
                                            {{ currentLang === 'bn' ? 'স্বয়ংক্রিয় ব্যাকআপ' : 'Automated Backups' }}
                                        </h4>
                                        <p class="text-slate-400 text-xs sm:text-sm mt-1">
                                            {{ currentLang === 'bn' ? 'আপনার সকল তথ্য প্রতি ঘণ্টায় নিরাপদ ক্লাউড সার্ভারে ব্যাকআপ রাখা হয়।' : 'Your business data is backed up hourly in geographically distributed cloud servers.' }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="p-2 bg-blue-500 rounded-lg mt-1 shrink-0"><i class="fa-solid fa-check text-white text-xs"></i></div>
                                    <div>
                                        <h4 class="text-white font-bold text-sm sm:text-base">
                                            {{ currentLang === 'bn' ? 'রিয়েল-টাইম থ্রেট মনিটরিং' : 'Real-time Threat Monitoring' }}
                                        </h4>
                                        <p class="text-slate-400 text-xs sm:text-sm mt-1">
                                            {{ currentLang === 'bn' ? 'যেকোনো সাইবার আক্রমণ ব্লক করতে সক্রিয় ফায়ারওয়াল এবং DDoS সুরক্ষা সর্বদা প্রস্তুত।' : 'Active firewalls and DDoS protection are always on guard to block malicious attacks.' }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Graphical Shield Element -->
                        <div class="relative flex justify-center py-6">
                            <div class="w-56 h-56 sm:w-72 sm:h-72 bg-blue-600 rounded-full flex items-center justify-center relative animate-pulse-slow">
                                <div class="absolute inset-0 rounded-full border-[10px] border-blue-500/30 animate-ping"></div>
                                <i class="fa-solid fa-shield-halved text-[6rem] sm:text-[8rem] text-white"></i>
                            </div>
                            <div class="absolute top-2 right-4 sm:right-8 bg-white p-3 rounded-2xl shadow-xl transform rotate-12">
                                <i class="fa-solid fa-vault text-blue-600 text-xl sm:text-2xl"></i>
                            </div>
                            <div class="absolute bottom-4 left-2 sm:left-4 bg-white p-3 rounded-2xl shadow-xl transform -rotate-12">
                                <i class="fa-solid fa-key text-blue-600 text-xl sm:text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trusted Partners / Industry Leaders -->
                <div class="text-center py-6">
                    <h3 class="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-black mb-8">
                        {{ currentLang === 'bn' ? 'শিল্পের শীর্ষস্থানীয় প্রযুক্তি দ্বারা সুরক্ষিত' : 'Secured By Industry Leaders' }}
                    </h3>
                    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <i class="fa-brands fa-aws text-4xl text-slate-600 dark:text-slate-300"></i>
                        <i class="fa-brands fa-cloudflare text-4xl text-slate-600 dark:text-slate-300"></i>
                        <i class="fa-brands fa-stripe text-4xl text-slate-600 dark:text-slate-300"></i>
                        <i class="fa-brands fa-digital-ocean text-4xl text-slate-600 dark:text-slate-300"></i>
                    </div>
                </div>

                <!-- Bug Bounty CTA Card -->
                <div class="bg-blue-600 rounded-2xl p-8 sm:p-10 text-center text-white shadow-2xl shadow-blue-500/20">
                    <h2 class="text-2xl sm:text-3xl font-black mb-3 text-slate-100">
                        {{ currentLang === 'bn' ? 'কোনো নিরাপত্তা ত্রুটি পেয়েছেন?' : 'Found a Security Vulnerability?' }}
                    </h2>
                    <p class="text-blue-100 text-xs sm:text-sm mb-8 max-w-xl mx-auto leading-relaxed">
                        {{ currentLang === 'bn' 
                            ? 'আমরা নিরাপত্তা রিপোর্টগুলোকে গুরুত্ব সহকারে বিবেচনা করি। আপনি যদি কোনো ত্রুটি খুঁজে পান, তবে আমাদের বাগ বাউন্টি প্রোগ্রামের মাধ্যমে জানান।' 
                            : 'We take security reports seriously. If you\'ve discovered a bug, please let us know through our Bug Bounty program.' 
                        }}
                    </p>
                    <a href="mailto:security@dynamicbazarmerchantbd.com" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-blue-600 font-black text-xs sm:text-sm rounded-2xl hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
                        <i class="fa-solid fa-bug"></i>
                        {{ currentLang === 'bn' ? 'বাগ রিপোর্ট করুন' : 'Report a Vulnerability' }}
                    </a>
                </div>

            </div>

            <!-- Footer Copyright Text -->
            <div class="text-center py-10 mt-6">
                <p class="text-slate-400 text-xs tracking-wide">
                    &copy; 2026 <strong><a href="https://mercuviax.com" target="_blank" class="hover:underline hover:cursor-pointer">MERCUVIAX</a></strong> {{ currentLang === 'bn' ? 'সিকিউরিটি অপারেশনস সেন্টার। সর্বস্বত্ব সংরক্ষিত।' : 'Security Operations Center. All Rights Reserved.' }}
                </p>
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
/* Smooth pulse effect adjustment if needed */
@keyframes pulse-slow {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}
</style>