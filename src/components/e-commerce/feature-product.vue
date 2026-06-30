<template>
    <div class="py-6">
        <div class="flex items-center justify-between mb-8 px-2">
            <div class="flex items-center gap-3">
                <div class="h-8 w-1.5 bg-emerald-600 dark:bg-orange-500 rounded-full"></div>
                <div>
                    <h2 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        Featured <span class="text-emerald-600 dark:text-orange-500">Products</span>
                    </h2>
                    <p class="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                        Handpicked collections for you
                    </p>
                </div>
            </div>
            
            <button class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 dark:hover:text-orange-400 transition-colors">
                View All <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
        </div>

        <swiper
            :modules="[Autoplay]"
            :slides-per-view="1"
            :space-between="24"
            :loop="enableLoop"
            :autoplay="{ delay: 3500, disableOnInteraction: false }"
            :breakpoints="{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 }
            }"
            class="pb-10">

            <swiper-slide v-for="product in products" :key="product.id">
                <div class="group relative bg-white dark:bg-slate-900 rounded-2xl p-4 dark:border-slate-800 transition-all duration-500  hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-orange-500/10 border border-slate-200 hover:border-emerald-500 dark:hover:border-orange-500 h-full">
                    
                    <!-- Featured Badge -->
                    <div class="absolute top-6 left-6 z-10">
                        <span class="px-3 py-1 bg-emerald-600 dark:bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Featured</span>
                    </div>

                    <!-- Image -->
                    <div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                        <img :src="getProductImage(product)" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button @click="ProductDetails(product)" class="px-6 py-2 bg-white text-slate-900 font-bold text-xs uppercase rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all">View Details</button>
                        </div>
                    </div>

                    <!-- Details -->
                    <div class="mt-5 px-1">
                        <h3 @click="ProductDetails(product)" class="text-base font-bold text-slate-900 dark:text-white truncate hover:underline hover:cursor-pointer">{{ product.name }}</h3>
                        <p class="text-xs text-slate-400 mt-1 mb-4 line-clamp-2">{{ product.description }}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-black text-emerald-600 dark:text-orange-400">৳{{ product.discount_price ? (product.price - product.discount_price) : product.price }}</span>
                            <button @click="ProductDetails(product)" class="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-orange-500/10 text-emerald-600 dark:text-orange-400 rounded-xl font-bold text-xs uppercase hover:bg-emerald-600 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white">
                                <i class="fa-solid fa-basket-shopping"></i> View
                            </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const router = useRouter();

const defaultProductImage = "/images/product/default-product.png";

const props = defineProps({
    products: {
        type: Array,
        default: () => []
    }
});

const enableLoop = computed(() => {
    return props.products.length > 6;
});

// No need for watch + ref
const featuredProducts = computed(() => props.products);

// Product Image
const getProductImage = (product) => {
    if (!product?.images?.length) {
        return defaultProductImage;
    }

    const primaryImg = product.images.find(img => img.is_primary == 1);

    return (primaryImg || product.images[0]).url || defaultProductImage;
};

// Product Details
function ProductDetails(product) {
    router.push(`/product-details/${product.slug}`)
}
</script>

<style>

</style>