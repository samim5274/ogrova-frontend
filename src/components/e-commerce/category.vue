<template>
    <section class="py-8 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 transition-colors duration-300 rounded-2xl mb-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
            <!-- Section Header -->
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Popular Categories
                    </h2>
                    <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Explore products by top categories
                    </p>
                </div>

                <!-- Navigation Controls (Visible on Tablet/Desktop) -->
                <div class="hidden sm:flex items-center gap-2">
                    <button 
                        @click="scroll('left')"
                        aria-label="Scroll left"
                        class="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                        <svg class="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        @click="scroll('right')"
                        aria-label="Scroll right"
                        class="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                        <svg class="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Horizontal Scrollable Container -->
            <div 
                ref="scrollContainer"
                class="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-3 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
                
                <div 
                    v-for="cat in categories" 
                    :key="cat.id"
                    @click="getCategoryProducts(cat)"
                    class="flex-none snap-start group cursor-pointer text-center select-none focus:outline-none">

                    <!-- Round Shape Image Card -->
                    <div 
                        class="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-1 border-2 transition-all duration-300 group-hover:scale-105 will-change-transform"
                        :class="selectedCategory === cat.id 
                        ? 'border-[#F97316] shadow-md shadow-[#F97316]/20 bg-orange-50 dark:bg-orange-950/30' 
                        : 'border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 group-hover:border-[#F97316]/60'">
                        
                        <div class="w-full h-full rounded-full overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                            <img 
                                :src="getCategoryImage(cat.image)" 
                                :alt="cat.name"
                                loading="lazy"
                                decoding="async"
                                width="112"
                                height="112"
                                class="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                                @error="handleImageError"
                            />
                        </div>
                    </div>

                    <!-- Category Name -->
                    <span 
                        class="block mt-2.5 text-xs sm:text-sm font-semibold truncate max-w-[80px] sm:max-w-[96px] md:max-w-[112px] transition-colors duration-200"
                        :class="selectedCategory === cat.id 
                        ? 'text-[#F97316] font-bold' 
                        : 'text-slate-700 dark:text-slate-300 group-hover:text-[#F97316] dark:group-hover:text-orange-400'">
                        {{ cat.name }}
                    </span>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useHead } from "@vueuse/head";
import api from '../../services/api.js';

const router = useRouter();

// Default Fallback Image path
const defaultCategoryImage = "/images/product/default-product.webp";

// Ref initialized as empty array for backend dynamic data
const categories = ref([]);
const categoryKeywords = ref('');
const selectedCategory = ref(null);
const scrollContainer = ref(null);

// Category Image Resolver Function
const getCategoryImage = (image) => {
    if (!image || image.trim() === '') {
        return defaultCategoryImage;
    }
    
    if (image.startsWith('http://') || image.startsWith('https://')) {
        return image;
    }
    
    return image.startsWith('/') ? image : `/${image}`;
}


const handleImageError = (e) => {
    e.target.src = defaultCategoryImage;
}

// Fetch categories from Backend API
async function fetchCategories() {
    try {
        const res = await api.get('/public/get-categories');
        categories.value = res.data.data || res.data || [];

        categoryKeywords.value = categories.value.map(cat => cat.name).slice(0,10).join(', ')
        setCategorySEO()
    } catch (err) {
        console.error('Category error:', err);
        categories.value = [];
    }
}

function getCategoryProducts(cat) {
    if (!cat.slug || !cat.id) return;
    router.push(`/category/${cat.slug}/${cat.id}`);
}

const scroll = (direction) => {
    if (!scrollContainer.value) return
    const scrollAmount = direction === 'left' ? -300 : 300
    scrollContainer.value.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    })
}







// seo section
function setCategorySEO(category, products = []){

    if(!category) return;


    useHead({


        title:
        category.meta_title || `${category.name} | Ogrova`,


        meta:[

            {
                name:'description',
                content:
                category.meta_description ||
                `Explore ${category.name} products online from Ogrova Bangladesh.`
            },


            {
                name:'robots',
                content:
                category.robots || 'index,follow'
            },


            {
                property:'og:title',
                content:
                category.og_title || category.name
            },


            {
                property:'og:image',
                content:
                category.og_image
            }

        ],


        link:[

            {
                rel:'canonical',
                href:
                category.canonical_url ||
                window.location.href
            }

        ],



        script:[


        // Category Schema

        {

        type:'application/ld+json',

        children:JSON.stringify({

            "@context":"https://schema.org",

            "@type":"CollectionPage",

            "name":category.name,

            "description":
            category.meta_description,

            "url":
            window.location.href


        })

        },


        // Category Product List

        {

        type:'application/ld+json',

        children:JSON.stringify({

            "@context":"https://schema.org",

            "@type":"ItemList",

            "name":
            category.name + " Products",


            "itemListElement":

            products
            .slice(0,20)
            .map((product,index)=>({

                "@type":"ListItem",

                "position":index+1,

                "name":product.name,

                "url":
                `${window.location.origin}/product-details/${product.slug}`

            }))


        })

        },


        // Breadcrumb

        {

        type:'application/ld+json',

        children:JSON.stringify({

            "@context":"https://schema.org",

            "@type":"BreadcrumbList",

            "itemListElement":[


                {
                "@type":"ListItem",
                "position":1,
                "name":"Home",
                "item":window.location.origin
                },


                {
                "@type":"ListItem",
                "position":2,
                "name":category.name,
                "item":window.location.href
                }


            ]

        })

        }


        ]


    })

}







onMounted(() => {
    fetchCategories()
})
</script>

<style scoped>
/* Scrollbar Hide Utility */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>