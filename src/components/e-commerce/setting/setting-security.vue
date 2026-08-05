<template>
    <div class="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0C1326] text-slate-800 dark:text-slate-200  rounded-2xl transition-colors duration-300">
        <div class="max-w-5xl mx-auto">
            
            <!-- Page Header -->
            <div class="mb-8">
                <div class="flex items-center gap-3 mb-2">
                    <div class="p-2.5 rounded-2xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                        <i class="fa-solid fa-shield-halved text-2xl"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            Security Settings
                        </h1>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                            Manage your account protection, authentication methods, and active sessions.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Security Grid Cards (Tabs) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <!-- 1. Change Password Card -->
                <div 
                    @click="openModal('password')"
                    class="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1">
                            Manage <i class="fa-solid fa-chevron-right text-[10px]"></i>
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Password</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        Change your password regularly to keep your account safe from unauthorized access.
                    </p>
                    <div class="text-[11px] font-semibold text-slate-400 flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Last updated 3 months ago
                    </div>
                </div>

                <!-- 2. Two-Factor Authentication Card -->
                <div 
                    @click="openModal('2fa')"
                    class="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                            Enabled
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Two-Factor Authentication (2FA)</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        Add an extra layer of security using Google Authenticator or SMS verification.
                    </p>
                    <div class="text-[11px] font-semibold text-slate-400 flex items-center gap-2">
                        <i class="fa-solid fa-shield-check text-emerald-500"></i>
                        Authenticator App Active
                    </div>
                </div>

                <!-- 3. Login Alerts Card -->
                <div 
                    @click="openModal('alerts')"
                    class="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1">
                            Configure <i class="fa-solid fa-chevron-right text-[10px]"></i>
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Login Alerts</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        Get notified instantly via Email or SMS whenever a login is detected from a new device.
                    </p>
                    <div class="text-[11px] font-semibold text-slate-400 flex items-center gap-2">
                        <i class="fa-solid fa-envelope text-amber-500"></i>
                        Email Alerts Active
                    </div>
                </div>

                <!-- 4. Login Sessions Card -->
                <div 
                    @click="openModal('sessions')"
                    class="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1">
                            View All <i class="fa-solid fa-chevron-right text-[10px]"></i>
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Active Sessions</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        Review and manage all active devices currently logged into your account.
                    </p>
                    <div class="text-[11px] font-semibold text-slate-400 flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        2 Devices Currently Active
                    </div>
                </div>

            </div>

            <!-- MODAL COMPONENT CONTAINER -->
            <div v-if="activeModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
                <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transform transition-all">
                    
                    <!-- Modal Header -->
                    <div class="p-6 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <i :class="modalIcons[activeModal]" class="text-indigo-600 dark:text-indigo-400"></i>
                            {{ modalTitles[activeModal] }}
                        </h3>
                        <button 
                            @click="closeModal" 
                            class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center transition-colors">
                            <i class="fa-solid fa-xmark text-sm"></i>
                        </button>
                    </div>

                    <!-- Modal Body Contents -->
                    <div class="p-6 max-h-[75vh] overflow-y-auto">
                        
                        <!-- 1. Password Modal Content -->
                        <div v-if="activeModal === 'password'">
                            <PasswordChange @completed="closeModal" />
                        </div>

                        <!-- 2. 2FA Modal Content -->
                        <div v-else-if="activeModal === '2fa'" class="space-y-4">
                            <p class="text-xs text-slate-500 dark:text-slate-400">
                                Secure your account using an Authenticator app (like Google Authenticator or Authy).
                            </p>
                            <div class="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <i class="fa-solid fa-qrcode text-2xl text-indigo-600 dark:text-indigo-400"></i>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-900 dark:text-white">Authenticator App</h4>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Use generated codes to sign in</p>
                                    </div>
                                </div>
                                <input type="checkbox" checked class="toggle accent-indigo-600 cursor-pointer w-5 h-5" />
                            </div>
                            <div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <i class="fa-solid fa-comment-sms text-2xl text-slate-400"></i>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-900 dark:text-white">SMS Verification</h4>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Receive OTP via phone message</p>
                                    </div>
                                </div>
                                <button class="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white text-xs font-bold rounded-xl transition-all">
                                    Setup
                                </button>
                            </div>
                        </div>

                        <!-- 3. Login Alerts Modal Content -->
                        <div v-else-if="activeModal === 'alerts'" class="space-y-4">
                            <p class="text-xs text-slate-500 dark:text-slate-400">
                                Choose how you want to be alerted when a new login occurs.
                            </p>
                            <div class="space-y-3">
                                <label class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 cursor-pointer">
                                    <div class="flex items-center gap-3">
                                        <i class="fa-solid fa-envelope text-indigo-500"></i>
                                        <div>
                                            <span class="text-sm font-bold text-slate-900 dark:text-white block">Email Notifications</span>
                                            <span class="text-xs text-slate-400">Send an email to user@example.com</span>
                                        </div>
                                    </div>
                                    <input type="checkbox" v-model="alerts.email" class="w-4 h-4 accent-indigo-600" />
                                </label>

                                <label class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 cursor-pointer">
                                    <div class="flex items-center gap-3">
                                        <i class="fa-solid fa-mobile-button text-emerald-500"></i>
                                        <div>
                                            <span class="text-sm font-bold text-slate-900 dark:text-white block">Push Notifications</span>
                                            <span class="text-xs text-slate-400">Alert directly on mobile app</span>
                                        </div>
                                    </div>
                                    <input type="checkbox" v-model="alerts.push" class="w-4 h-4 accent-indigo-600" />
                                </label>
                            </div>
                            <button @click="closeModal" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 transition-all mt-4">
                                Save Preferences
                            </button>
                        </div>

                        <!-- 4. Active Sessions Modal Content -->
                        <div v-else-if="activeModal === 'sessions'" class="space-y-4">
                            <div class="flex items-center justify-between mb-2">
                                <p class="text-xs text-slate-500 dark:text-slate-400">Devices currently logged into your account:</p>
                                <button class="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline">Log Out All</button>
                            </div>

                            <div class="space-y-3">
                                <div v-for="session in activeSessions" :key="session.id" class="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <i :class="session.icon" class="text-xl text-slate-600 dark:text-slate-300"></i>
                                        <div>
                                            <div class="flex items-center gap-2">
                                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">{{ session.device }}</h4>
                                                <span v-if="session.current" class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">Current</span>
                                            </div>
                                            <p class="text-[11px] text-slate-400">{{ session.location }} • {{ session.time }}</p>
                                        </div>
                                    </div>
                                    <button v-if="!session.current" class="text-xs text-rose-500 hover:text-rose-700 font-bold">Revoke</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PasswordChange from './PasswordChange.vue';

// Modal State Management
const activeModal = ref(null);

const openModal = (type) => {
    activeModal.value = type;
};

const closeModal = () => {
    activeModal.value = null;
};

// Titles & Icons Mapping for Modals
const modalTitles = {
    password: 'Change Password',
    '2fa': 'Two-Factor Authentication',
    alerts: 'Manage Login Alerts',
    sessions: 'Active Login Sessions'
};

const modalIcons = {
    password: 'fa-solid fa-key',
    '2fa': 'fa-solid fa-mobile-screen-button',
    alerts: 'fa-solid fa-bell',
    sessions: 'fa-solid fa-laptop-code'
};

// Login Alerts Local State
const alerts = ref({
    email: true,
    push: false
});

// Mock Active Sessions Data
const activeSessions = ref([
    { id: 1, device: 'Chrome on Windows 11', location: 'Dhaka, Bangladesh', time: 'Active Now', icon: 'fa-solid fa-desktop', current: true },
    { id: 2, device: 'Ogrova Mobile App (iOS)', location: 'Dhaka, Bangladesh', time: '2 hours ago', icon: 'fa-solid fa-mobile-button', current: false }
]);
</script>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
    animation: fadeIn 0.2s ease-out forwards;
}
</style>