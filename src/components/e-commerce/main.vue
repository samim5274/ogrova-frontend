<template>
    <main class="container mx-auto px-4 sm:px-6 py-6 md:py-10 max-w-7xl transition-colors duration-300">
        <featureProduct :products="allProductsFlat" />
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">

            <!-- 1. Sidebar Navigation -->
            <aside class="hidden lg:block w-64 shrink-0">
                <div class="sticky top-28 space-y-6">

                    <!-- Premium Categories Card -->
                    <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-none transition-all duration-300">
                        <h3 class="font-bold text-slate-800 dark:text-slate-200 text-xs mb-4 flex items-center gap-2 uppercase tracking-widest opacity-90">
                            <span class="w-1 h-3.5 bg-emerald-600 dark:bg-orange-500 rounded-full"></span>
                            Categories
                        </h3>

                        <ul class="space-y-1 overflow-y-auto max-h-[500px] pr-1 custom-scrollbar">
                            <li @click="selectedCategory = null"
                                class="group flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-300"
                                :class="!selectedCategory
                                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-orange-500 dark:to-orange-600 text-white font-semibold shadow-md shadow-emerald-500/20 dark:shadow-orange-500/20'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'">
                                <span class="text-xs tracking-wide transition-colors">All Products</span>
                                <i class="fa-solid fa-chevron-right text-[9px] transition-all duration-300"
                                :class="!selectedCategory ? 'text-white translate-x-0.5 opacity-100' : 'opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5'"></i>
                            </li>

                            <li v-for="cat in categories" :key="cat.id" @click="selectedCategory = cat.id"
                                class="group flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-300"
                                :class="selectedCategory === cat.id
                                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-orange-500 dark:to-orange-600 text-white font-semibold shadow-md shadow-emerald-500/20 dark:shadow-orange-500/20'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'">
                                <span class="text-xs tracking-wide transition-colors">{{ cat.name }}</span>
                                <i class="fa-solid fa-chevron-right text-[9px] transition-all duration-300"
                                :class="selectedCategory === cat.id ? 'text-white translate-x-0.5 opacity-100' : 'opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5'"></i>
                            </li>
                        </ul>
                    </div>

                    <!-- Luxury Vibe Coupon Card -->
                    <div class="p-6 rounded-2xl relative overflow-hidden group transition-all duration-300 border
                                bg-slate-950 text-white border-slate-900 shadow-xl shadow-slate-950/10
                                dark:bg-slate-900 dark:border-slate-800/80 dark:shadow-none">

                        <div class="absolute -top-12 -left-12 w-32 h-32 bg-[#16A34A]/8 rounded-full blur-2xl group-hover:bg-[#16A34A]/12 transition-all duration-500"></div>
                        <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-[#F97316]/8 rounded-full blur-2xl group-hover:bg-[#F97316]/12 transition-all duration-500"></div>

                        <div class="relative z-10">
                            <span class="inline-flex text-[9px] font-bold text-[#F97316] uppercase tracking-[0.2em] bg-[#F97316]/10 px-2 py-0.5 rounded border border-[#F97316]/10">
                                Exclusive Offer
                            </span>
                            <h4 class="font-extrabold text-xl mt-4 mb-1 tracking-tight text-white">Save ৳500 Instantly</h4>
                            <p class="text-[10px] text-slate-400 font-normal tracking-wide mb-5">Applicable on orders over ৳2,000</p>

                            <div class="flex items-center gap-2 bg-white/[0.04] dark:bg-black/40 p-1.5 rounded-xl border border-white/10 dark:border-slate-800 backdrop-blur-md">
                                <span class="text-xs font-mono font-bold tracking-widest text-slate-200 pl-2 select-all">BAZAR2026</span>
                                <button @click="copyCoupon" class="ml-auto bg-[#16A34A] hover:bg-[#16A34A]/90 text-white px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all active:scale-[0.97] shadow-sm shadow-[#16A34A]/10">
                                    {{ couponCopied ? 'Copied!' : 'Copy' }}
                                </button>
                            </div>
                        </div>
                        <i class="fa-solid fa-bolt-lightning absolute -bottom-5 -right-4 text-7xl text-slate-800/25 dark:text-slate-800/30 pointer-events-none transform rotate-[12deg] group-hover:scale-105 group-hover:rotate-[18deg] transition-all duration-500"></i>
                    </div>

                </div>
            </aside>

            <!-- Main Content Area -->
            <div class="flex-1 min-w-0">

                <!-- Header Section -->
                <div class="flex items-center justify-between mb-4 md:mb-6 pb-4 border-b border-slate-100 dark:border-slate-900">
                    <div>
                        <h2 class="text-xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                            Featured <span class="text-[#16A34A] dark:text-[#F97316]">Deals</span>
                        </h2>
                        <p class="text-[11px] md:text-xs text-slate-400 mt-0.5">Handpicked premium products just for you</p>
                    </div>
                    <button class="p-2 md:p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <i class="fa-solid fa-sliders text-xs"></i>
                    </button>
                </div>

                <!-- Mobile & Tablet Friendly Categories (Horizontal Scroll) -->
                <div class="lg:hidden mb-6 -mx-4 px-4 overflow-x-auto flex gap-2 scrollbar-hide snap-x">
                    <button @click="selectedCategory = null"
                        class="flex-none snap-start px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300"
                        :class="!selectedCategory
                            ? 'bg-[#16A34A] text-white border-[#16A34A] shadow-sm shadow-[#16A34A]/10'
                            : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800/60'">
                        All Products
                    </button>
                    <button v-for="cat in categories" :key="'mob-cat-'+cat.id" @click="selectedCategory = cat.id"
                        class="flex-none snap-start px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300"
                        :class="selectedCategory === cat.id
                            ? 'bg-gradient-to-r from-[#16A34A] to-emerald-600 text-white border-[#16A34A] shadow-sm shadow-[#16A34A]/15'
                            : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800/60'">
                        {{ cat.name }}
                    </button>
                </div>

                <!-- Mobile & Tablet Coupon Banner -->
                <div class="lg:hidden mb-8 p-5 rounded-2xl relative overflow-hidden bg-slate-950 dark:bg-slate-900 border border-slate-900 dark:border-slate-800 text-white shadow-lg">
                    <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span class="text-[9px] font-bold text-[#F97316] uppercase tracking-[0.2em] bg-[#F97316]/10 px-2 py-0.5 rounded border border-[#F97316]/10">Exclusive Offer</span>
                            <h4 class="font-extrabold text-lg mt-1 tracking-tight">Save ৳500 Instantly</h4>
                            <p class="text-[10px] text-slate-400 font-normal mt-0.5">Applicable on orders over ৳2,000</p>
                        </div>
                        <div class="flex items-center gap-2 bg-white/[0.04] dark:bg-black/40 p-1.5 rounded-xl border border-white/10 dark:border-slate-800 backdrop-blur-md w-full sm:w-auto sm:min-w-[220px]">
                            <span class="text-xs font-mono font-bold tracking-widest text-slate-200 pl-2 select-all">BAZAR2026</span>
                            <button @click="copyCoupon" class="ml-auto bg-[#16A34A] text-white px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all active:scale-[0.97]">
                                {{ couponCopied ? 'Copied!' : 'Copy' }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Loading Skeleton -->
                <div v-if="loading" class="space-y-10">
                    <div v-for="n in 2" :key="'skeleton-row-'+n">
                        <div class="h-4 w-40 bg-slate-100 dark:bg-slate-800 rounded mb-4 animate-pulse"></div>
                        <div class="flex gap-4 md:gap-5 overflow-hidden">
                            <div v-for="s in 4" :key="'skeleton-card-'+s"
                                class="flex-none w-[75%] sm:w-[46%] md:w-[31%] lg:w-[calc(25%-15px)] rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden">
                                <div class="aspect-square bg-slate-100 dark:bg-slate-800 animate-pulse m-2 rounded-xl"></div>
                                <div class="p-3.5 pt-1.5 space-y-2">
                                    <div class="h-2.5 w-2/3 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                                    <div class="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                                    <div class="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Error State -->
                <div v-else-if="fetchError" class="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                    <i class="fa-solid fa-triangle-exclamation text-3xl text-orange-500 mb-3"></i>
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-1">Products can not be fetched</h4>
                    <p class="text-xs text-slate-400 mb-5">Something went wrong while loading deals. Please try again.</p>
                    <button @click="fetchProducts" class="px-5 py-2.5 rounded-xl bg-[#16A34A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#16A34A]/90 transition-colors">
                        Retry
                    </button>
                </div>

                <!-- Empty State -->
                <div v-else-if="!hasVisibleProducts" class="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                    <i class="fa-solid fa-box-open text-3xl text-slate-300 dark:text-slate-700 mb-3"></i>
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-1">No products found</h4>
                    <p class="text-xs text-slate-400 mb-5">Try a different category or check back later.</p>
                    <button v-if="selectedCategory" @click="selectedCategory = null" class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        Clear filter
                    </button>
                </div>

                <!-- Product Category Rows -->
                <div v-else class="space-y-10 md:space-y-12">
                    <div v-for="(group, index) in groupedProducts" :key="group.categoryId ?? index" class="relative group/slider-box">

                        <!-- Row Label Header -->
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm md:text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                                {{ group.categoryName }}
                                <span class="text-[9px] md:text-[10px] font-normal text-slate-400 px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 rounded-md">Qty: {{ group.products.length }}</span>
                            </h3>
                            <button @click="getCategoryProducts(group)" class="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-[#16A34A] dark:hover:text-[#F97316] transition-colors">
                                See All <i class="fa-solid fa-angle-right text-[9px]"></i>
                            </button>
                        </div>

                        <!-- Slider Controllers -->
                        <button @click="scrollSlider(index, 'left')"
                            class="hidden lg:flex absolute left-2 top-[45%] -translate-y-1/2 z-40 h-10 w-10 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 items-center justify-center opacity-0 scale-90 group-hover/slider-box:opacity-100 group-hover/slider-box:scale-100 transition-all duration-300 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] text-slate-600 dark:text-slate-400">
                            <i class="fa-solid fa-angle-left text-sm"></i>
                        </button>

                        <button @click="scrollSlider(index, 'right')"
                            class="hidden lg:flex absolute right-2 top-[45%] -translate-y-1/2 z-40 h-10 w-10 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 items-center justify-center opacity-0 scale-90 group-hover/slider-box:opacity-100 group-hover/slider-box:scale-100 transition-all duration-300 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] text-slate-600 dark:text-slate-400">
                            <i class="fa-solid fa-angle-right text-sm"></i>
                        </button>

                        <!-- Slider Container -->
                        <div :id="'slider-' + index"
                            class="flex overflow-x-auto gap-4 md:gap-5 pb-5 pt-2 scrollbar-hide snap-x snap-mandatory scroll-smooth">

                            <!-- Product Card -->
                            <div v-for="product in group.products" :key="product.id"
                                class="flex-none w-[75%] sm:w-[46%] md:w-[31%] lg:w-[calc(25%-15px)] snap-start group relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800/80 transition-all duration-500 ease-out transform hover:-translate-y-1.5 hover:border-emerald-500 dark:hover:border-orange-500/60
                                hover:shadow-[0_24px_48px_-15px_rgba(16,185,129,0.12)] dark:hover:shadow-[0_24px_48px_-15px_rgba(249,115,22,0.15)]">

                                <div class="relative aspect-square overflow-hidden rounded-xl bg-slate-50/60 dark:bg-slate-900/40 m-2 transition-colors duration-300">

                                    <span v-if="product.discount"
                                        class="absolute top-2.5 left-2.5 z-10 font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-md tracking-wider uppercase shadow-sm transition-all duration-300 text-white
                                        bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/20
                                        dark:from-orange-500 dark:to-amber-500 dark:shadow-orange-500/30">
                                        -{{ discountPercent(product) }}% OFF
                                    </span>

                                    <!-- <button class="absolute top-2.5 right-2.5 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800/40">
                                        <i class="fa-regular fa-heart text-[10px] md:text-[11px]"></i>
                                    </button> -->

                                    <img @click="ProductDetails(product)" :src="getProductImage(product)" :alt="product.name"
                                        @error="onImageError"
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
                                    <div class="flex items-center justify-between gap-2 mb-2.5">
                                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider truncate max-w-[65%]">
                                            {{ truncate(group.categoryName, 15) }}
                                        </span>

                                        <div v-if="product.point" class="flex items-center justify-center px-2 py-0.5 rounded-full border transition-all duration-300
                                            bg-emerald-50 text-emerald-600 border-emerald-200/60
                                            dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20">
                                            <i class="fa-solid fa-award text-[9px] mr-1"></i>
                                            <span class="text-[9px] md:text-[10px] font-extrabold tracking-wide">{{ product.point }} Pts</span>
                                        </div>
                                    </div>

                                    <h4 @click="ProductDetails(product)"
                                        class="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 truncate cursor-pointer transition-colors duration-300 hover:text-emerald-600 hover:underline dark:hover:text-orange-400">
                                        {{ product.name }}
                                    </h4>

                                    <span class="text-[9px] md:text-[10px] font-medium text-slate-400 dark:text-slate-500 truncate mb-0.5 block">
                                        <i v-for="n in 5" :key="n" class="fa-solid fa-star" :class="n <= Math.round(Number(product?.ratings_avg_rating || 0)) ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-700'"></i>
                                        <span v-if="product.ratings_count" class="text-[9px] md:text-[10px] font-medium text-slate-500 dark:text-slate-400 pt-0.5">
                                            ({{ product.ratings_count }})
                                        </span>
                                    </span>

                                    <div class="flex items-center justify-between gap-1.5 mt-1">
                                        <span v-if="product.discount" class="text-[9px] md:text-[10px] font-medium text-slate-400 dark:text-slate-500 line-through truncate">
                                            ৳{{ formatPrice(product.price) }}
                                        </span>
                                        <span class="text-sm md:text-base font-black text-slate-900 dark:text-white tracking-tight truncate ml-auto">
                                            ৳{{ formatPrice(finalPrice(product)) }}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../../services/api'

import featureProduct from "./feature-product.vue";

const router = useRouter()

const loading = ref(false)
const fetchError = ref(false)
const categories = ref([])
// Raw API shape: [{ category: {id,name,slug}, products: [...] }, ...]
const categoryGroups = ref([])
const selectedCategory = ref(null)
const couponCopied = ref(false)

const defaultProductImage = "/images/product/default-product.png"

/* ---------- Helpers ---------- */

const getProductImage = (product) => {
    if (!product || !product.images || product.images.length === 0) {
        return defaultProductImage
    }
    const primaryImg = product.images.find(i => i.is_primary == 1)
    const selectedImg = primaryImg || product.images[0]
    return selectedImg?.url || defaultProductImage
}

const onImageError = (e) => {
    e.target.src = defaultProductImage
}

const truncate = (text, len) => {
    if (!text) return 'Products'
    return text.length > len ? text.slice(0, len) + '...' : text
}

const formatPrice = (value) => {
    const n = Number(value || 0)
    return n.toLocaleString('en-BD')
}

const finalPrice = (product) => {
    const price = Number(product.price || 0)
    const discount = Number(product.discount || 0)
    return discount > 0 ? price - discount : price
}

const discountPercent = (product) => {
    const price = Number(product.price || 0)
    const discount = Number(product.discount || 0)
    if (!price || !discount) return 0
    return Math.round((discount / price) * 100)
}

const copyCoupon = async () => {
    try {
        await navigator.clipboard.writeText('BAZAR2026')
        couponCopied.value = true
        setTimeout(() => (couponCopied.value = false), 1800)
    } catch (err) {
        console.error('Copy failed:', err)
    }
}

/* ---------- Data Fetching ---------- */

async function fetchCategories() {
    try {
        const res = await api.get('/public/get-categories')
        categories.value = res.data.data || []
    } catch (err) {
        console.error('Category error:', err)
    }
}

async function fetchProducts() {
    loading.value = true
    fetchError.value = false
    try {
        const res = await api.get('/public/products')
        // Backend returns: [{ category: {id,name,slug}, products: [...] }, ...]
        categoryGroups.value = Array.isArray(res.data.data) ? res.data.data : []
    } catch (err) {
        console.error('Product error:', err)
        fetchError.value = true
        categoryGroups.value = []
    } finally {
        loading.value = false
    }
}

/* ---------- Derived State ---------- */

// Flat list of all products, used for the top feature/highlight banner
const allProductsFlat = computed(() =>
    categoryGroups.value.flatMap(g => g.products || [])
)

// Groups filtered by selected category, with empty categories dropped
const groupedProducts = computed(() => {
    return categoryGroups.value
        .filter(g => (g.products || []).length > 0)
        .filter(g => !selectedCategory.value || Number(g.category?.id) === Number(selectedCategory.value))
        .map(g => ({
            categoryId: g.category?.id,
            categoryName: g.category?.name || 'New Collection',
            categorySlug: g.category?.slug,
            products: g.products,
        }))
})

const hasVisibleProducts = computed(() => groupedProducts.value.length > 0)

/* ---------- Actions ---------- */

const scrollSlider = (index, direction) => {
    const element = document.getElementById('slider-' + index)
    if (element) {
        const scrollAmount = element.clientWidth * 0.8
        element.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }
}

function ProductDetails(product) {
    router.push(`/product-details/${product.slug}`)
}

function getCategoryProducts(group) {
    if (!group.categorySlug || !group.categoryId) return
    router.push(`/category/${group.categorySlug}/${group.categoryId}`)
}

onMounted(() => {
    fetchProducts()
    fetchCategories()
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
}

@keyframes animate-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
}
</style>