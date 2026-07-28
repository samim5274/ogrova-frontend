<template>
    <div class="py-6 contain-paint">
        <!-- Header Section -->
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

        <!-- Swiper Carousel -->
        <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="20"
            :loop="enableLoop"
            :autoplay="autoplayConfig"
            :breakpoints="swiperBreakpoints"
            :observer="true"
            :observe-parents="true"
            :resize-observer="true"
            class="pb-10 GPU-accelerated"> 
            <swiper-slide v-for="product in formattedProducts" :key="product.id">
                <div class="group relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800/80 transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500 dark:hover:border-orange-500/60 hover:shadow-lg transform-gpu" >
                    
                    <div class="relative aspect-square overflow-hidden rounded-xl bg-slate-50/60 dark:bg-slate-900/40 m-2 transition-colors duration-300">
                        <!-- Badge -->
                        <span
                            class="absolute top-2.5 left-2.5 z-10 font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-md tracking-wider uppercase shadow-sm text-white bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-orange-500 dark:to-amber-500">
                            {{ product.discount > 0 ? `-${product.discountPercentage}% OFF` : 'Featured' }}
                        </span>

                        <!-- Image -->
                        <img @click="ProductDetails(product.slug)" :src="product.imageUrl" :alt="product.name"
                            @error="onImageError" loading="lazy" decoding="async" width="300" height="300"
                            class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer transform-gpu" />

                        <!-- Quick View Hover -->
                        <div class="hidden lg:flex absolute inset-0 bg-slate-950/10 dark:bg-slate-950/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 items-end p-3 pointer-events-none group-hover:pointer-events-auto">
                            <button
                                @click="ProductDetails(product.slug)"
                                class="w-full bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-widest py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 transform translate-y-3 group-hover:translate-y-0 active:scale-[0.97] shadow-md transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 dark:hover:bg-orange-500 dark:hover:text-white dark:hover:border-orange-500">
                                Quick View
                            </button>
                        </div>
                    </div>

                    <!-- Product Details -->
                    <div class="p-3.5 pt-1.5">
                        <div class="flex items-center justify-between gap-2 mb-2.5">
                            <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider truncate max-w-[65%]">
                                {{ product.categoryName }}
                            </span>

                            <div
                                v-if="product.point"
                                class="flex items-center justify-center px-2 py-0.5 rounded-full border transition-all duration-300 bg-emerald-50 text-emerald-600 border-emerald-200/60 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20">
                                <i class="fa-solid fa-award text-[9px] mr-1"></i>
                                <span class="text-[9px] md:text-[10px] font-extrabold tracking-wide">{{ product.point }} Pts</span>
                            </div>
                        </div>

                        <h4
                            @click="ProductDetails(product.slug)"
                            class="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 truncate cursor-pointer transition-colors duration-300 hover:text-emerald-600 hover:underline dark:hover:text-orange-400">
                            {{ product.name }}
                        </h4>

                        <span class="text-[9px] md:text-[10px] font-medium text-slate-400 dark:text-slate-500 truncate mb-0.5 block">
                            <i
                                v-for="n in 5"
                                :key="n"
                                class="fa-solid fa-star"
                                :class="n <= product.rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-700'"
                            ></i>
                            <span v-if="product.ratings_count" class="text-[9px] md:text-[10px] font-medium text-slate-500 dark:text-slate-400 pt-0.5">
                                ({{ product.ratings_count }})
                            </span>
                        </span>

                        <div class="flex items-center justify-between gap-1.5 mt-1">
                            <span v-if="product.discount > 0" class="text-[9px] md:text-[10px] font-medium text-slate-400 dark:text-slate-500 line-through truncate">
                                ৳{{ product.formattedPrice }}
                            </span>
                            <span class="text-sm md:text-base font-black text-slate-900 dark:text-white tracking-tight truncate ml-auto">
                                ৳{{ product.formattedFinalPrice }}
                            </span>
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

// Optimization 1: Static module & options allocation to prevent re-instantiation
const swiperModules = [Autoplay];

const autoplayConfig = {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true // Prevents layout thrashing on active interaction
};

const swiperBreakpoints = {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 6 }
};

const enableLoop = computed(() => props.products.length > 6);

// Optimization 2: Pre-compute formatted data in computed property
// Avoids invoking functions during DOM render loops, reducing Layout Thrashing
const formattedProducts = computed(() => {
    return props.products.map(product => {
        const price = Number(product.price || 0);
        const discount = Number(product.discount || 0);
        const finalPrice = discount > 0 ? price - discount : price;
        const discountPct = (price > 0 && discount > 0) ? Math.round((discount / price) * 100) : 0;

        // Image resolution logic
        let imageUrl = defaultProductImage;
        if (product?.images?.length) {
        const primaryImg = product.images.find(img => img.is_primary == 1);
        imageUrl = (primaryImg || product.images[0]).url || defaultProductImage;
        }

        // Category truncation
        const categoryName = product.category?.name 
        ? (product.category.name.length > 15 ? product.category.name.slice(0, 15) + '...' : product.category.name)
        : 'Products';

        return {
        ...product,
        imageUrl,
        categoryName,
        discountPercentage: discountPct,
        rating: Math.round(Number(product?.ratings_avg_rating || 0)),
        formattedPrice: price.toLocaleString('en-BD'),
        formattedFinalPrice: finalPrice.toLocaleString('en-BD')
        };
    });
});

const onImageError = (e) => {
    e.target.src = defaultProductImage;
};

// Optimization 3: Pass slug string instead of whole object
const ProductDetails = (slug) => {
    if (slug) router.push(`/product-details/${slug}`);
};
</script>

<style scoped>
/* GPU Acceleration and Layer Containment */
.contain-paint {
    contain: layout style;
}

.GPU-accelerated :deep(.swiper-slide) {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
}

.transform-gpu {
    transform: translateZ(0);
    will-change: transform;
}
</style>