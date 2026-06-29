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

            <slider />

            <main class="container mx-auto px-4 sm:px-6 py-6 md:py-10 max-w-7xl transition-colors duration-300">
                <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    <aside class="hidden lg:block w-64 shrink-0">
                        <div class="sticky top-28 space-y-6">
                            
                            <!-- Premium Categories Card -->
                            <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-none transition-all duration-300">
                                <h3 class="font-bold text-slate-800 dark:text-slate-200 text-xs mb-4 flex items-center gap-2 uppercase tracking-widest opacity-90">
                                    <span class="w-1 h-3.5 bg-[#16A34A] rounded-full"></span> 
                                    Categories
                                </h3>
                                
                                <ul class="space-y-1 overflow-y-auto max-h-[200px] pr-1 custom-scrollbar">
                                    <!-- All Products Option for Large Devices -->
                                    <li class="group flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                        <span class="text-xs tracking-wide transition-colors">All Products</span>
                                        <i class="fa-solid fa-chevron-right text-[9px] transition-all duration-300 opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5"></i>
                                    </li>

                                    <!-- Dynamic Categories List -->
                                    <li v-for="cat in categories" :key="cat.id" @click="getCategory(cat)"
                                        class="group flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                        <span class="text-xs tracking-wide transition-colors">{{ cat.name }}</span>
                                        <i class="fa-solid fa-chevron-right text-[9px] transition-all duration-300opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5"></i>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </aside>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        
                        <div v-for="product in categoryProducts" :key="product.id"
                            class="group relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800/80 transition-all duration-500 hover:-translate-y-1.5 
                            hover:border-emerald-500 dark:hover:border-orange-500/60 shadow-sm hover:shadow-xl">
                            
                            <!-- Image & Badge Container -->
                            <div class="relative aspect-square overflow-hidden rounded-xl bg-slate-50/60 dark:bg-slate-900/40 m-2">
                                <img @click="ProductDetails(product)" :src="getProductImage(product)" :alt="product.name"
                                    class="w-full h-full object-contain p-4 cursor-pointer group-hover:scale-105 transition-transform duration-700">
                                
                                <!-- Discount -->
                                <span v-if="product.discount_price" class="absolute top-2.5 left-2.5 z-10 font-black text-[9px] px-2 py-0.5 rounded-md bg-gradient-to-r from-rose-500 to-orange-500 text-white">
                                    -{{ Math.round((product.discount_price / product.price) * 100) }}%
                                </span>
                            </div>

                            <!-- Product Info -->
                            <div class="p-3.5 pt-1.5">
                                <h4 class="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 truncate mb-3">
                                    {{ product.name }}
                                </h4>

                                <div class="flex items-center justify-between">
                                    <span class="text-sm font-black text-slate-900 dark:text-white">
                                        ৳{{ product.discount_price ? (product.price - product.discount_price) : product.price }}
                                    </span>
                                    
                                    <!-- Add to Cart Button -->
                                    <button class="px-3 py-2 rounded-xl text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:bg-orange-500/10 dark:text-orange-400 border border-emerald-500/10 hover:bg-emerald-600 hover:text-white transition-all">
                                        <i class="fa-solid fa-basket-shopping mr-1"></i> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <NewsLatter />
            
            <footerSection />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import api, { makeImg } from '../../services/api'

import slider from './slider.vue';
import Navbar from './navbar.vue';
import NewsLatter from './news-latter.vue';
import footerSection from "./footer.vue";




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
async function getCategoryProducts() {
    const categoryId = route.params.id;
    try {
        loading.value = true;
        const res = await api.get(`/public/category-products/${categoryId}`);
        categoryProducts.value = res.data.data;
    } catch (err) {
        console.error('Category error:', err);
    } finally {
        loading.value = false;
    }
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