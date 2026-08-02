<template>
    <div :class="{ 'dark': isDark }">
        <div class="min-h-screen bg-white dark:bg-[#0C1326] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

            <Navbar
                :is-dark="isDark"
                :mobile-menu="mobileMenu"
                @toggle-dark="toggleDarkMode"
                @toggle-menu="toggleMenu"
                @search="handleSearch"
            />

            <Message
                :successMsg="successMsg"
                :errorMsg="errorMsg"
                @update:successMsg="successMsg = $event"
                @update:errorMsg="errorMsg = $event"
            />

            <!-- Content -->
            <section class="min-h-screen bg-slate-50/50 dark:bg-[#0C1326] rounded-2xl  text-slate-800 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
                <div class="container mx-auto px-4 sm:px-6 max-w-10xl">
                    <div class="flex-1 min-w-0">
                        <main class="min-h-screen bg-gray-50 dark:bg-[#0C1326]">
                            <div class="mx-auto px-4 sm:px-6 lg:px-8 py-5">

                                <!-- Header -->
                                <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h1 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                                        <i class="fa-regular fa-chart-bar"></i> Manage Account
                                        </h1>
                                        <p class="text-sm text-gray-600 dark:text-slate-400">Manage all order and ratings settings</p>
                                    </div>
                                </div>

                                <!-- Content -->
                                <div class="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

                                    <!-- LEFT SIDEBAR -->
                                    <aside class="lg:col-span-1">
                                        <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                                        <div class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                                            <button
                                            v-for="item in menus"
                                            :key="item.key"
                                            @click="activeTab = item.key"
                                            class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap transition"
                                            :class="activeTab === item.key
                                                ? 'bg-green-600 dark:bg-orange-600 text-white shadow'
                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
                                            >
                                            <span><i :class="item.icon"></i></span>
                                            <span>{{ item.label }}</span>
                                            </button>
                                        </div>

                                        </div>
                                    </aside>

                                    <!-- RIGHT CONTENT -->
                                    <section class="lg:col-span-3">
                                        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 min-h-[400px]">

                                            <!-- General -->
                                            <div v-if="activeTab === 'Orders'">
                                                <settingOrders />
                                            </div>

                                        
                                            <div v-if="activeTab === 'address'">
                                                <settingAddress />
                                            </div>

                                        <div v-if="activeTab === 'notification'">
                                            <settingNotification />
                                        </div>

                                        <div v-if="activeTab === 'privacyAndPolicy'">
                                            <privacyAndPolicy />
                                        </div>

                                        <div v-if="activeTab === 'returnPolicy'">
                                            <returnPolicy />
                                        </div>

                                        <div v-if="activeTab === 'termsCondition'">
                                            <termsCondition />
                                        </div>

                                        <div v-if="activeTab === 'about'">
                                            <settingAbout />
                                        </div>

                                        <div v-if="activeTab === 'security'">
                                            <settingSecurity />
                                        </div>


                                        </div>
                                    </section>

                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </section>
        

        <FooterSection />
        </div>
    </div>
</template>

<script setup>
import { computed, h, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import api, { makeImg } from "../../../services/api";

const router = useRouter();

import Message from '../../Message/message.vue';
import Navbar from '../navbar.vue';
import FooterSection from '../footer.vue';

const successMsg = ref("");
const errorMsg = ref("");
const isDark = ref(false);
const mobileMenu = ref(false);


import settingOrders from "./setting-orders.vue";
import settingAddress from "./setting-address.vue";
import settingAbout from "./setting-about.vue";
import privacyAndPolicy from "./setting-privacy.vue";
import termsCondition from "./setting-trams-and-condition.vue";
import returnPolicy from "./setting-return-policy.vue"

import settingSecurity from "./setting-security.vue";
import settingNotification from "./setting-notification.vue";
import settingTheme from "./setting-theme.vue";

const sidebarOpen = ref(false);
const active = ref("dashboard");







const activeTab = ref('Orders')

const menus = [
    { key: 'Orders', label: 'Orders', icon: 'fa-brands fa-opencart' },
    { key: 'address', label: 'Address', icon: 'fa-solid fa-location-dot' },
    { key: 'security', label: 'Security', icon: 'fa-solid fa-lock' },
    { key: 'returnPolicy', label: 'Return Policy', icon: 'fa-solid fa-arrow-rotate-left' },
    { key: 'termsCondition', label: 'Terms & Conditions', icon: 'fa-solid fa-key' },
    { key: 'privacyAndPolicy', label: 'Privacy & Policy', icon: 'fa-solid fa-shield-halved' },
    { key: 'notification', label: 'Notification', icon: 'fa-solid fa-bell' },
    { key: 'about', label: 'About', icon: 'fa-solid fa-info' },
]






// -----------------------------------------------------------------------
// Theme / navbar / search
// -----------------------------------------------------------------------
function toggleDarkMode() {
    isDark.value = !isDark.value;
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark.value);
}

function toggleMenu() {
    mobileMenu.value = !mobileMenu.value;
}

function handleSearch(query) {
    router.push({ path: "/search", query: { q: query } });
}


function handleEsc(e) {
    if (e.key === "Escape") mobileMenu.value = false;
}




/* ESC to close drawer */
onMounted(() => {
    window.addEventListener("keydown", handleEsc);

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }
});
</script>