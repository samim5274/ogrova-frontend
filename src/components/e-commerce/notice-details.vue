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

            <!-- Loading skeleton -->
            <section v-if="loading && !user" class="py-16 bg-white dark:bg-gray-900 min-h-screen">
                <div class="container mx-auto px-4 max-w-7xl animate-pulse">
                    <div class="h-32 rounded-3xl bg-slate-200 dark:bg-slate-800 mb-6"></div>
                    <div class="grid lg:grid-cols-3 gap-6">
                        <div class="h-72 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                        <div class="lg:col-span-2 space-y-6">
                            <div class="h-48 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                            <div class="h-32 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div class="min-h-screen w-full transition-colors duration-200 p-6">

                    <!-- Loading -->
                    <div v-if="loading" class="mx-auto max-w-4xl animate-pulse">
                        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            
                            <!-- Top Banner Skeleton -->
                            <div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div class="flex-1 space-y-3">
                                    <!-- Badges Skeleton -->
                                    <div class="flex items-center gap-2">
                                        <div class="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                        <div class="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                    </div>
                                    <!-- Title Skeleton -->
                                    <div class="h-7 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                                </div>
                                <!-- Back Button Skeleton -->
                                <div class="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                            </div>

                            <!-- Meta Info Skeleton -->
                            <div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex flex-wrap gap-6">
                                <div class="h-5 w-36 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                <div class="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                <div class="h-5 w-28 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                            </div>

                            <!-- Description Skeleton -->
                            <div class="px-6 py-6">
                                <div class="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 lg:p-10 space-y-4">
                                    <div class="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    <div class="h-4 w-11/12 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    <div class="h-4 w-4/5 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    <div class="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    <div class="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                </div>
                            </div>

                            <!-- Attachment Skeleton -->
                            <div class="px-6 pb-6 space-y-3">
                                <div class="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                <div class="h-14 w-full bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                            </div>

                        </div>
                    </div>

                    <div v-else-if="notice" class="mx-auto">

                        <!-- Main Card -->
                        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">

                            <!-- Top Banner -->
                            <div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                <div class="flex-1">
                                    <div class="flex flex-wrap items-center gap-2 mb-2">
                                        <!-- Notice Type Badge -->
                                        <span class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                                            {{ notice.notice_type }}
                                        </span>
                                        <!-- Status Badge -->
                                        <span v-if="notice.is_active"
                                            class="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                            <span class="relative flex h-1.5 w-1.5">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                                <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                            </span>
                                            Active
                                        </span>
                                        <span v-else
                                            class="inline-flex items-center rounded-md bg-rose-50 dark:bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-700 dark:text-rose-400">
                                            Inactive
                                        </span>
                                    </div>
                                    <h1 class="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                                        {{ notice.title }}
                                    </h1>
                                </div>
                                <div class="flex items-center justify-between mb-6">
                                    <button
                                        @click="$router.back()"
                                        class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                                        <i class="fa-solid fa-arrow-left-long"></i>
                                        Back
                                    </button>
                                </div>
                            </div>

                            <!-- Meta Info -->
                            <div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex flex-wrap gap-6">
                                <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                    <i class="fa-regular fa-calendar-days text-slate-400"></i>
                                    <span>Published: <span class="font-semibold text-slate-700 dark:text-slate-300">{{ formatDate(notice.publish_date) }}</span></span>
                                </div>
                                <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                    <i class="fa-regular fa-clock text-slate-400"></i>
                                    <span>Created: <span class="font-semibold text-slate-700 dark:text-slate-300">{{ formatDate(notice.created_at) }}</span></span>
                                </div>
                                <div v-if="notice.user" class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                    <i class="fa-regular fa-circle-user text-slate-400"></i>
                                    <span>By: <span class="font-semibold text-slate-700 dark:text-slate-300">{{ notice.user?.name }}</span></span>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="px-6 py-6">
                                <div
                                    class="product-content rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 lg:p-10 shadow-sm"
                                    v-html="notice.description">
                                </div>
                            </div>

                            <!-- Attachment -->
                            <div v-if="notice.attachment" class="px-6 pb-6">
                                <h2 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                                    Attachment
                                </h2>

                                <!-- IMAGE PREVIEW -->
                                <div v-if="isImage(notice.attachment)" class="mb-3">
                                    <img
                                        :src="getFileUrl(notice.attachment)"
                                        class="w-full max-h-[400px] object-contain rounded-xl border"
                                        alt="Attachment"
                                    />
                                </div>

                                <!-- PDF PREVIEW -->
                                <div v-else-if="isPdf(notice.attachment)" class="mb-3">
                                    <iframe
                                        :src="getFileUrl(notice.attachment)"
                                        class="w-full h-[500px] rounded-xl border"
                                    ></iframe>
                                </div>

                                <!-- DOWNLOAD / OPEN LINK -->
                                <a
                                    :href="getFileUrl(notice.attachment)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="group flex items-center justify-between gap-3 rounded-xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition"
                                >
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>

                                        <span class="truncate max-w-[200px]">
                                            {{ notice.attachment }}
                                        </span>
                                    </div>

                                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>

                    <!-- Not Found -->
                    <div v-else class="flex flex-col items-center justify-center py-32 text-center">
                        <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                            <i class="fas fa-box-open text-2xl text-slate-400"></i>
                        </div>
                        <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Notice not found</h3>
                        <p class="text-xs text-slate-400">The notice you're looking for doesn't exist.</p>
                    </div>

                </div>
            </div>
        </div>
        <FooterSection />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import api from '../../services/api.js';

import Navbar from "./navbar.vue";
import Message from '../Message/message.vue';
import FooterSection from "./footer.vue";

const router = useRouter();
const route  = useRoute();

const loading      = ref(false);
const successMsg   = ref('');
const errorMsg     = ref('');
const activeNavbar = ref('');
const notice       = ref(null);
const isDark       = ref(false);
const mobileMenu   = ref(false);
const user         = ref(null);



// =============================
// Fetch notice
// =============================
async function fetchNotice() {
    const noticeId = route.params.id;
    if (!noticeId) return;

    try {
        loading.value = true;
        const res = await api.get(`/notice/view/${noticeId}`);
        notice.value = res.data.data ?? null;
    } catch (err) {
        console.error('Error fetching notice:', err);
        errorMsg.value = err.response?.data?.message || 'Failed to load notice.';
    } finally {
        loading.value = false;
    }
}


const storageUrl = import.meta.env.VITE_STORAGE_URL;

const getFileUrl = (file) => {
    if (!file) return '';
    return `${storageUrl}/storage/${file}`;
};

const isImage = (file) => {
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file);
};

const isPdf = (file) => {
    return /\.pdf$/i.test(file);
};

// =============================
// Helpers
// =============================
const formatDate = (dateString) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
};






watch( () => route.params.id, () => 
    {
        fetchNotice();
    }
);











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




onMounted(() => {
    fetchNotice();
    window.addEventListener("keydown", handleEsc);

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }
});
</script>