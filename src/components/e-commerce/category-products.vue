<template>
    <div :class="{ 'dark': isDark }">
        <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
            <Navbar 
                :is-dark="isDark"
                :mobile-menu="mobileMenu"
                @toggle-dark="toggleDarkMode"
                @toggle-menu="toggleMenu"
                @search="handleSearch"
            />

            

            <main class="container mx-auto px-4 sm:px-6 py-6 md:py-10 max-w-7xl transition-colors duration-300">

                <featureProduct :products="categoryProducts"/>

                <div class="w-full mb-8">
                    <div class="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x">
                        
                        <!-- "All Products" Button -->
                        <button @click="router.push('/')"
                            class="flex-none flex items-center gap-2 px-6 py-3 rounded-2xl cursor-pointer transition-all duration-300 border font-bold text-xs tracking-wide shadow-sm"
                            :class="route.path === '/' 
                                ? 'bg-emerald-600 border-emerald-600 text-white dark:bg-orange-500 dark:border-orange-500 shadow-emerald-500/20 dark:shadow-orange-500/20' 
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-orange-500'">
                            <span>All Products</span>
                        </button>

                        <!-- Dynamic Category Buttons -->
                        <button v-for="cat in categories" :key="cat.id" @click="getCategory(cat)"
                            class="group flex-none flex items-center gap-2 px-6 py-3 rounded-2xl cursor-pointer transition-all duration-300 border font-semibold text-xs"
                            :class="[
                                route.params.id == cat.id 
                                    ? 'bg-emerald-600 border-emerald-600 text-white dark:bg-orange-500 dark:border-orange-500 shadow-lg shadow-emerald-500/20 dark:shadow-orange-500/20' 
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:scale-105 hover:border-emerald-500 dark:hover:border-orange-500'
                            ]">
                            
                            <!-- Text -->
                            <span class="transition-colors duration-300"
                                :class="route.params.id == cat.id ? 'text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-orange-400'">
                                {{ cat.name }}
                            </span>
                            
                            <!-- Arrow Icon -->
                            <i class="fa-solid fa-arrow-right text-[10px] transition-all duration-300"
                            :class="[
                                route.params.id == cat.id 
                                    ? 'opacity-100 translate-x-0 text-white' 
                                    : 'opacity-0 -translate-x-2 text-emerald-600 dark:text-orange-500 group-hover:opacity-100 group-hover:translate-x-0'
                            ]"></i>
                        </button>
                        
                    </div>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        
                        <div v-for="product in categoryProducts" :key="product.id"
                            class="group relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800/80 transition-all duration-500 ease-out transform hover:-translate-y-1.5 border border-slate-200
                            hover:border-emerald-500 dark:hover:border-orange-500/60 
                            hover:shadow-[0_24px_48px_-15px_rgba(16,185,129,0.12)] dark:hover:shadow-[0_24px_48px_-15px_rgba(249,115,22,0.15)]">
                            
                            <div class="relative aspect-square overflow-hidden rounded-xl bg-slate-50/60 dark:bg-slate-900/40 m-2 transition-colors duration-300">
                                
                                <span v-if="product.discount_price" 
                                    class="absolute top-2.5 left-2.5 z-10 font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-md tracking-wider uppercase shadow-sm transition-all duration-300 text-white
                                    /* Light Mode: Emerald Green Gradient */
                                    bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/20
                                    /* Dark Mode: Orange/Amber Gradient */
                                    dark:from-orange-500 dark:to-amber-500 dark:shadow-orange-500/30">
                                    -{{ Math.round((product.discount_price / product.price) * 100) }}% OFF
                                </span>

                                <button class="absolute top-2.5 right-2.5 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800/40">
                                    <i class="fa-regular fa-heart text-[10px] md:text-[11px]"></i>
                                </button>

                                <img @click="ProductDetails(product)" :src="getProductImage(product)" :alt="product.name"
                                    class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer">

                                <div class="hidden lg:flex absolute inset-0 bg-slate-950/10 dark:bg-slate-950/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 items-end p-3">
                                    <button @click="ProductDetails(product)" 
                                        class="w-full bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-widest py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 transform translate-y-3 group-hover:translate-y-0 active:scale-[0.97] shadow-md transition-all duration-300
                                        hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20
                                        dark:hover:bg-orange-500 dark:hover:text-white dark:hover:border-orange-500 dark:hover:shadow-lg dark:hover:shadow-orange-500/20">
                                        Quick View
                                    </button>
                                </div>
                            </div>

                            <div class="p-3.5 pt-1.5">
                                <div class="flex items-center justify-between gap-2 mb-1.5">
                                    <span class="text-[8px] md:text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate max-w-[65%]">
                                        {{ product.category?.name || 'General' }}
                                    </span>
                                    
                                    <div v-if="product.point" class="flex items-center gap-0.5 px-2 py-0.5 rounded-md shrink-0 border transition-all duration-300
                                        bg-emerald-500/10 text-emerald-600 border-emerald-500/5
                                        dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/10">
                                        <span class="text-[8px] md:text-[9px] font-extrabold tracking-wide">{{ product.point }} Pts</span>
                                    </div>
                                </div>

                                <h4 @click="ProductDetails(product)" 
                                    class="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 truncate cursor-pointer transition-colors duration-300 mb-3
                                    hover:text-emerald-600 dark:hover:text-orange-400">
                                    {{ product.name }}
                                </h4>

                                <div class="flex items-center justify-between gap-1.5">
                                    <div class="flex flex-col min-w-0">
                                        <span v-if="product.discount_price" class="text-[9px] md:text-[10px] font-medium text-slate-400 dark:text-slate-500 line-through truncate mb-0.5">৳{{ product.price }}</span>
                                        <span class="text-sm md:text-base font-black text-slate-900 dark:text-white tracking-tight truncate">
                                            ৳{{ product.discount_price ? (product.price - product.discount_price) : product.price }}
                                        </span>
                                    </div>

                                    <button class="flex items-center justify-center gap-1.5 px-3 py-2 md:px-3.5 md:py-2 rounded-xl transition-all duration-300 active:scale-95 shrink-0 group/btn font-bold border
                                        bg-emerald-500/5 text-emerald-600 border-emerald-500/10 
                                        hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/10
                                        dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/10 
                                        dark:hover:bg-orange-500 dark:hover:text-white dark:hover:border-orange-500 dark:hover:shadow-lg dark:hover:shadow-orange-500/20">
                                        <i class="fa-solid fa-basket-shopping text-[10px] md:text-xs transition-transform group-hover/btn:-translate-y-0.5 duration-300"></i>
                                        <span class="text-[9px] md:text-[10px] uppercase tracking-wider">Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="flex flex-col gap-2 border-slate-200 bg-white dark:bg-slate-900 shadow-sm px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <!-- Showing info -->
                    <p class="text-xs text-slate-500">
                        Showing
                        <span class="font-semibold text-slate-700">{{ pagination.from }}</span>
                        –
                        <span class="font-semibold text-slate-700">{{ pagination.to }}</span>
                        of
                        <span class="font-semibold text-slate-700">{{ pagination.total }}</span>
                    </p>

                    <div class="flex flex-wrap items-center justify-end gap-2">
                        <!-- First -->
                        <button
                            @click="changePage(1)" :disabled="pagination.page === 1 || loading"
                            class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                            <i class="fa-solid fa-angles-left"></i>
                        </button>

                        <!-- Prev -->
                        <button
                            @click="changePage(pagination.page - 1)" :disabled="pagination.page === 1 || loading"
                            class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>

                        <!-- Pages -->
                        <button
                            v-for="page in ProductVisiblePages"
                            :key="String(page)"
                            @click="page !== '...' && changePage(page)"
                            class="rounded-lg border px-3 py-1.5 text-xs font-semibold"
                            :disabled="page === '...' || loading"
                            :class="[
                                page === pagination.page
                                    ? 'border-slate-900 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                                    : 'border-slate-200 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 hover:bg-slate-50'
                            ]">
                            {{ page }}
                        </button>

                        <!-- Next -->
                        <button
                            @click="changePage(pagination.page + 1)"
                            :disabled="pagination.page === pagination.lastPage || loading"
                            class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>

                        <!-- Last -->
                        <button
                            @click="changePage(pagination.lastPage)"
                            :disabled="pagination.page === pagination.lastPage || loading"
                            class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                            <i class="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </div>

            </main>

            <NewsLatter />
            
            <footerSection />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import api, { makeImg } from '../../services/api'

import Navbar from './navbar.vue';
import NewsLatter from './news-latter.vue';
import footerSection from "./footer.vue";
import featureProduct from "./feature-product.vue";



const router = useRouter();
const route = useRoute();
const loading = ref(false);
const categoryProducts = ref([]);
const categories = ref([]);
const defaultProductImage = "/images/product/default-product.png"





// Get Product Image Logic
const getProductImage = (product) => {
    if (!product || !product.images || product.images.length === 0) {
        return defaultProductImage;
    }
    const primaryImg = product.images.find(i => i.is_primary == 1);
    const selectedImg = primaryImg || product.images[0];
    return selectedImg.url ? selectedImg.url : defaultProductImage;
}










const orderPage = ref(1);
const orderLastPage = ref(1);
const orderTotal = ref(0);
const orderPerPage = ref(20);
const orderFromItem = ref(0);
const orderToItem = ref(0);

const ProductVisiblePages = computed(() => {
    const pages = [];
    const last = pagination.value.lastPage;
    const cur = pagination.value.page;

    if (last <= 5) {
        for (let i = 1; i <= last; i++) pages.push(i);
        return pages;
    }

    pages.push(1);

    if (cur > 3) pages.push("...");

    const start = Math.max(2, cur - 1);
    const end = Math.min(last - 1, cur + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (cur < last - 2) pages.push("...");

    pages.push(last);

    return pages;
});







// Fetch Categories
async function fetchCategories() {
    try {
        const res = await api.get('/public/get-categories')
        categories.value = res.data.data
    } catch (err) { 
        console.error('Category error:', err); 
    }
}









// Fetch Category products
const pagination = ref({
    page: 1,
    lastPage: 1,
    total: 0,
    perPage: 20,
    from: 0,
    to: 0,
});

async function getCategoryProducts(page = 1) {
    const categoryId = route.params.id;
    try {
        loading.value = true;
        const res = await api.get(`/public/category-products/${categoryId}`, {
            params: { page }
        });
        const response = res.data;

        // REAL DATA ARRAY (IMPORTANT FIX)
        categoryProducts.value = response?.data?.data ?? [];

        // PAGINATION META
        pagination.value = {
            page: response?.data?.current_page ?? 1,
            lastPage: response?.data?.last_page ?? 1,
            total: response?.data?.total ?? 0,
            perPage: response?.data?.per_page ?? 20,
            from: response?.data?.from ?? 0,
            to: response?.data?.to ?? 0,
        };

    } catch (err) {
        console.error('Category error:', err);

        pagination.value = {
            page: 1,
            lastPage: 1,
            total: 0,
            perPage: 20,
            from: 0,
            to: 0,
        };

    } finally {
        loading.value = false;
    }
}


function changePage(page) {
    if (
        page < 1 ||
        page > pagination.value.lastPage ||
        loading.value
    ) return;

    getCategoryProducts(page);
}








function getCategory(cat) {
    router.push(`/category/${cat.slug}/${cat.id}`);
}

watch(
    () => route.params.id,
    () => {
        getCategoryProducts();
    },
    { immediate: true }
);







function ProductDetails(product) {
    router.push(`/product-details/${product.slug}`)
}






const isDark = ref(false);
const mobileMenu = ref(false);

function toggleDarkMode() {
    isDark.value = !isDark.value;
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
    if (isDark.value) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

function toggleMenu() {
    mobileMenu.value = !mobileMenu.value;
}

function handleSearch(query) {
    console.log("Searching for:", query);
    // Add your redirect or search API routing logic here
}

onMounted(() => {
    fetchCategories();
    getCategoryProducts();

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }
});
</script>