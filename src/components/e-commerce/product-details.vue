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

        <Message
            :successMsg="successMsg"
            :errorMsg="errorMsg"
            @update:successMsg="successMsg = $event"
            @update:errorMsg="errorMsg = $event"
        />

















        
        <section v-if="loading" class="py-16 bg-white dark:bg-gray-900 min-h-screen">
            <div class="container mx-auto px-4 max-w-7xl">

                <div class="animate-pulse">

                    <div class="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded mb-8"></div>

                    <div class="grid lg:grid-cols-2 gap-14">

                        <!-- Image -->
                        <div>

                            <div class="aspect-square rounded-3xl bg-slate-200 dark:bg-slate-800"></div>

                            <div class="flex gap-4 mt-6">
                                <div
                                    v-for="i in 4"
                                    :key="i"
                                    class="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"
                                ></div>
                            </div>

                        </div>

                        <!-- Details -->
                        <div class="space-y-5">

                            <div class="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700"></div>

                            <div class="h-10 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>

                            <div class="h-5 w-40 rounded bg-slate-200 dark:bg-slate-700"></div>

                            <div class="h-20 rounded-xl bg-slate-200 dark:bg-slate-800"></div>

                            <div class="h-16 rounded-xl bg-slate-200 dark:bg-slate-800"></div>

                            <div class="flex gap-3">
                                <div
                                    v-for="i in 3"
                                    :key="i"
                                    class="h-14 w-32 rounded-xl bg-slate-200 dark:bg-slate-800"
                                ></div>
                            </div>

                            <div class="flex gap-4 mt-6">
                                <div class="h-14 w-36 rounded-full bg-slate-200 dark:bg-slate-800"></div>

                                <div class="flex-1 h-14 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <section v-else-if="product" class="py-16 bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 min-h-screen selection:bg-indigo-500 selection:text-white">
            <div class="container mx-auto px-4 max-w-7xl">
                
                <!-- TOP BREADCRUMB & AVAILABILITY HEADER -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <nav class="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                        <router-link to="/" class="hover:text-indigo-500 transition-colors">Shop</router-link>
                        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span class="text-indigo-500">{{ product.category?.name }}</span>
                    </nav>
                    
                    <div class="flex items-center gap-4 text-xs font-bold">
                        <span class="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-full">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            In Stock
                        </span>
                        <span class="text-gray-400">SKU: PRD-{{ product.sku }}</span>
                    </div>
                </div>

                <!-- MAIN PRODUCT GRAPHICS & DETAILS CONFIGURATOR -->
                <div class="flex flex-col lg:flex-row gap-16 xl:gap-24">

                    <!-- LEFT COLUMN: Image Gallery (Clean View without overlapping text badges) -->
                    <div class="w-full lg:w-1/2 xl:w-[60%]">
                        <div class="lg:sticky lg:top-24 space-y-8">
                            <div class="relative group aspect-square lg:aspect-[16/14] rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-[#141c2e] border border-gray-100 dark:border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-none">
                                
                                <img loading="lazy" decoding="async" :src="activeImage || defaultProductImage" class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div v-if="hasDiscount" class="absolute top-6 left-6 z-10">
                                    <span class="bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 px-4 py-2 rounded-2xl text-xs font-black text-red-600 dark:text-red-400 shadow-2xl tracking-wider uppercase inline-block">
                                        -{{ discountPercent }}% OFF X
                                    </span>
                                </div>
                                
                            </div>

                            <!-- Thumbnails -->
                            <div class="flex justify-center gap-6 px-4">
                                <button v-for="img in product.images" :key="img.id"
                                    @click="activeImage = img.url"
                                    class="relative w-16 h-16 rounded-[2rem] overflow-hidden transition-all duration-700 border-2 shadow-sm"
                                    :class="activeImage === img.url 
                                        ? 'border-indigo-600 dark:border-indigo-400 scale-110 shadow-indigo-500/20' 
                                        : 'border-transparent opacity-40 grayscale hover:grayscale-0 hover:opacity-100'">
                                    <img loading="lazy" decoding="async" :src="img.url" class="w-full h-full object-cover">
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN: Professional Product Info & Actions -->
                    <div class="w-full lg:w-1/2 xl:w-[40%] flex flex-col justify-center">
                        <div class="space-y-8">
                            
                            <!-- 1. Brand, Category & Status Badges Integrated nicely -->
                            <div class="space-y-3">
                                <div class="flex items-center justify-between flex-wrap gap-2">
                                    <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                                        <span v-if="product.brand?.name" class="text-emerald-600 dark:text-orange-500">{{ product.brand.name }}</span>
                                        <span v-if="product.brand?.name" class="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>{{ product.category?.name }}</span>
                                    </nav>

                                    <!-- Modern Status Badges -->
                                    <div class="flex items-center gap-1.5 flex-wrap">
                                        <span v-if="hasDiscount" class="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-black tracking-wider text-emerald-700 uppercase dark:bg-orange-500/20 dark:text-orange-400">
                                            -{{ discountPercent }}% OFF
                                        </span>
                                        <span v-if="product.is_featured" class="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-1 text-[10px] font-black tracking-wider text-amber-700 uppercase dark:bg-amber-400/10 dark:text-amber-400">
                                            <i class="fa-solid fa-star text-[9px]"></i> Featured
                                        </span>
                                        <span v-if="product.is_on_sale" class="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-black tracking-wider text-emerald-700 uppercase dark:bg-orange-500/10 dark:text-orange-400">
                                            <i class="fa-solid fa-fire text-[9px]"></i> Sale
                                        </span>
                                    </div>
                                </div>

                                <!-- Product Title -->
                                <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white">
                                    {{ product.name }}
                                </h1>

                                <!-- Ratings, Point & SV Badges -->
                                <div class="flex flex-wrap items-center gap-4 pt-1">
                                    <div class="flex text-amber-400 text-xs gap-0.5">
                                        <i v-for="n in 5" :key="n" class="fa-solid fa-star" :class="n <= Math.round(Number(product?.ratings_avg_rating || 0)) ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-700'" ></i>
                                    </div>
                                    <span class="text-xs font-black text-gray-400 uppercase tracking-widest underline decoration-emerald-500/30 dark:decoration-orange-500/30 underline-offset-4 cursor-pointer hover:text-emerald-600 dark:hover:text-orange-500 transition">
                                        {{ product.ratings_count }} Verified Reviews
                                    </span>
                                    
                                    <div class="flex items-center gap-2 text-xs font-bold">
                                        <span v-if="product.point" class="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:bg-orange-500/10 dark:text-orange-400 rounded-md">
                                            {{ product.point }} Pts
                                        </span>
                                        <span v-if="product.sv" class="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:bg-orange-500/10 dark:text-orange-400 rounded-md">
                                            SV: {{ product.sv }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- 2. Product Summary -->
                            <p v-if="product.summary" class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                {{ product.summary }}
                            </p>

                            <!-- Price Card -->
                            <div class="p-8 rounded-xl bg-gray-50 dark:bg-[#111827] border border-gray-300 dark:border-white/20 flex items-center justify-between group">
                                <div class="flex flex-col">
                                    <span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Market Price</span>
                                    <div class="flex items-baseline gap-3">
                                        <span class="text-5xl font-black text-emerald-600 dark:text-orange-500 tracking-tighter transition-all group-hover:text-emerald-800 dark:group-hover:text-orange-400">
                                            ৳{{ currentPrice }}
                                        </span>
                                        <span v-if="hasDiscount" class="text-lg text-gray-400 line-through font-bold opacity-50">
                                            ৳{{ originalPrice }}
                                        </span>
                                    </div>
                                    <div v-if="hasDiscount" class="mt-2 text-xs font-bold text-red-500">
                                        Save ৳{{ discountAmount }}
                                    </div>
                                </div>
                                
                                <div class="h-14 w-14 rounded-full border-2 border-gray-200 dark:border-gray-500 flex items-center justify-center group-hover:border-emerald-500 dark:group-hover:border-orange-500 transition-colors">
                                    <i class="fa-solid fa-tag text-xl text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-orange-500 transition-colors"></i>
                                </div>
                            </div>

                            <!-- Variant Configuration -->
                            <div class="space-y-6">
                                <div class="flex items-center justify-between">
                                    <h4 class="text-xs font-black uppercase tracking-widest text-gray-500">Configure Variant</h4>
                                    <button class="text-[10px] font-bold text-emerald-600 dark:text-orange-500 underline uppercase tracking-wider">Size Guide</button>
                                </div>
                                
                                <div class="flex flex-wrap gap-3">
                                    <label v-for="(variant, index) in product.variants" :key="index" class="relative cursor-pointer group">
                                        <input type="radio" name="variant" :value="variant" v-model="selectedVariant" class="peer sr-only">

                                        <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-gray-300 transition-all duration-300
                                                    bg-white dark:bg-white/[0.03] dark:border-white/10
                                                    peer-checked:border-emerald-600 peer-checked:bg-emerald-50/50 dark:peer-checked:border-orange-500 dark:peer-checked:bg-orange-500/10 
                                                    peer-checked:shadow-sm hover:border-emerald-500 dark:hover:border-orange-500">
                                            
                                            <div class="w-3 h-3 rounded-full border border-black/5 shadow-inner shrink-0 transition-transform group-hover:scale-125"
                                                :style="{ backgroundColor: variant.color_code || variant.color }">
                                            </div>

                                            <div class="flex flex-col leading-none">
                                                <div class="flex items-center gap-2">
                                                    <span class="text-[11px] font-black text-gray-900 dark:text-white uppercase tracking-tight">
                                                        {{ variant.size }}
                                                    </span>
                                                    <span class="w-px h-2 bg-gray-200 dark:bg-gray-700"></span>
                                                    <span class="text-[10px] font-bold text-gray-400 uppercase">
                                                        {{ variant.color }}
                                                    </span>
                                                </div>
                                                <div class="mt-1 flex items-center gap-1">
                                                    <!-- variant price -->
                                                    <span class="text-[10px] font-black text-emerald-600 dark:text-orange-400">
                                                        ৳{{ Number(variant.price) - Number(variant.discount || 0) }}
                                                    </span>

                                                    <span v-if="variant.discount" class="line-through text-gray-400 text-[10px]">
                                                        ৳{{ variant.price }}
                                                    </span>

                                                    <span class="w-px h-2 bg-gray-200 dark:bg-gray-700"></span>
                                                    <span class="text-[10px] font-black text-emerald-600 dark:text-orange-400">
                                                        {{ variant.stock_quantity }} Left
                                                    </span>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-circle-check text-[10px] text-emerald-600 dark:text-orange-500 opacity-0 transition-opacity peer-checked:opacity-100"></i>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <!-- Cart Operations -->
                            <div class="space-y-4 pt-4">
                                <div class="flex flex-col sm:flex-row items-center gap-4 w-full">
                                    <div class="flex items-center justify-between bg-gray-50 dark:bg-white/[0.03] p-1.5 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-inner w-full sm:w-auto">
                                        <button @click="qty > 1 ? qty-- : null" class="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm hover:shadow-md transition-all active:scale-90 group">
                                            <i class="fa-solid fa-minus text-xs text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-orange-500"></i>
                                        </button>
                                        <div class="flex-1 sm:w-14 flex flex-col items-center">
                                            <span class="text-[7px] font-black text-gray-400 uppercase tracking-widest mb-[-2px]">QTY</span>
                                            <input type="number" v-model="qty" class="w-full bg-transparent text-center font-black text-xl sm:text-lg outline-none cursor-default text-gray-900 dark:text-white" readonly>
                                        </div>
                                        <button @click="qty < maxQty ? qty++ : null" class="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm hover:shadow-md transition-all active:scale-90 group">
                                            <i class="fa-solid fa-plus text-xs text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-orange-500"></i>
                                        </button>
                                    </div>

                                    <button @click="addToCart(product)" class="relative w-full sm:flex-1 h-[68px] sm:h-[64px] group overflow-hidden rounded-[2.2rem] bg-gray-950 dark:bg-orange-500 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(5,150,105,0.4)] dark:hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.4)] active:scale-[0.98]">
                                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -skew-x-[35deg] -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out"></div>
                                        <div class="relative flex items-center justify-center gap-4">
                                            <div class="relative flex items-center justify-center">
                                                <i class="fa-solid fa-bag-shopping text-white text-lg group-hover:scale-110 transition-transform duration-500"></i>
                                                <span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-gray-950 dark:border-orange-500 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                                            </div>
                                            <div :disabled="isAddingToCart" class="flex flex-col items-start leading-tight">
                                                <span class="text-white text-[11px] font-black uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-500">Add to Cart</span>
                                                <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-0.5">Secure Checkout</span>
                                            </div>
                                        </div>
                                        <div class="absolute inset-0 border border-white/10 rounded-[2.2rem] pointer-events-none"></div>
                                    </button>
                                </div>
                            </div>

                            <!-- Shipping Alert -->
                            <div class="bg-emerald-500/5 dark:bg-orange-500/5 rounded-3xl p-6 border border-emerald-500/10 dark:border-orange-500/10 flex items-start gap-4">
                                <div class="h-10 w-10 bg-emerald-600 dark:bg-orange-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30 dark:shadow-orange-500/30">
                                    <i class="fa-solid fa-bolt"></i>
                                </div>
                                
                                <div>
                                    <h5 class="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-orange-400 mb-1">
                                        Express Delivery Available
                                    </h5>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                        Order within <span class="text-emerald-600 dark:text-orange-500 font-bold">02h 45m</span> to receive your package by tomorrow.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- FULL DESCRIPTION TAB & META KEYWORDS SECTION (Moved cleanly below the columns layout) -->
                <div class="mt-24 border-t border-gray-200 dark:border-white/5 pt-12">
                    <div>
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Product Information</h3>
                        
                        <div class="mt-20">
                            <div
                                class="product-content rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 lg:p-10 shadow-sm"
                                v-html="product.description">
                            </div>
                        </div>

                        <div v-if="product.meta_keywords" class="mt-8 flex flex-wrap gap-2 pt-6 border-t border-gray-200 dark:border-white/5">
                            <span v-for="tag in product.meta_keywords.split(',')" :key="tag" 
                                class="text-[10px] font-bold text-emerald-600/80 dark:text-orange-400/80 uppercase tracking-wider bg-emerald-50 dark:bg-orange-500/[0.05] px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-orange-500/10">
                                #{{ tag.trim() }}
                            </span>
                        </div>
                    </div>
                </div>

































                

                <!-- RELATED PRODUCTS SECTION -->
                <div class="mt-24 border-t border-gray-200 dark:border-white/5 pt-16">
                    <h3 class="text-xl font-black tracking-tight text-gray-900 dark:text-white mb-8">You May Also Like</h3>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        <div v-for="cat_product in categoryProducts" :key="cat_product.id"
                            class="group relative bg-white dark:bg-[#111827] rounded-[1rem] p-4 border border-gray-200/80 dark:border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-none hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between">
                            
                            <div class="relative aspect-[10/12] overflow-hidden rounded-[1rem] bg-gray-50/70 dark:bg-gray-800/50 border border-gray-100/50 dark:border-white/[0.03]">
                                <div class="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5">
                                    <span v-if="cat_product.discount > 0" class="bg-emerald-600 dark:bg-orange-500 text-white text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-md shadow-emerald-500/20 dark:shadow-orange-500/20">
                                        -{{ Math.round((cat_product.discount / cat_product.price) * 100) }}% OFF
                                    </span>
                                </div>

                                <button class="absolute top-3.5 right-3.5 z-10 bg-white/70 dark:bg-[#1f2937]/60 backdrop-blur-md p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-orange-400 transition-all duration-300 active:scale-90 shadow-sm border border-white/40 dark:border-white/5">
                                    <i class="fa-regular fa-heart text-sm"></i>
                                </button>

                                <img @click="ProductDetails(cat_product)" loading="lazy" decoding="async" :src="getProductImage(cat_product)" :alt="cat_product.name"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out cursor-pointer">
                                
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                    <button @click="ProductDetails(cat_product)" class="w-full bg-white/95 dark:bg-orange-500/95 backdrop-blur-md text-gray-900 dark:text-white font-black text-[10px] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-xl hover:bg-emerald-600 dark:hover:bg-orange-600 hover:text-white transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        Quick View
                                    </button>
                                </div>
                            </div>

                            <div class="mt-5 flex-1 flex flex-col justify-between px-1">
                                <div>
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-orange-400">
                                            {{ cat_product.category?.name || categoryName }}
                                        </span>
                                        <div class="flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded-md">
                                            <i class="fa-solid fa-star text-[9px] text-amber-500"></i>
                                            <span class="text-[10px] font-black text-amber-700 dark:text-amber-400">
                                                {{ Math.round(Number(cat_product?.ratings_avg_rating || 0)) }}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 @click="ProductDetails(cat_product)" class="text-base font-black text-gray-800 dark:text-gray-100 truncate cursor-pointer group-hover:text-emerald-600 dark:group-hover:text-orange-400 transition-colors tracking-tight">
                                        {{ cat_product.name }} 
                                        <span v-if="cat_product.point" class="text-xs font-medium text-gray-400 ml-1">({{ cat_product.point }} Pts)</span>
                                    </h3>
                                </div>

                                <span class="text-[9px] md:text-[10px] font-medium text-slate-400 dark:text-slate-500 truncate mb-0.5">
                                    <i v-for="n in 5" :key="n" class="fa-solid fa-star" :class="n <= Math.round(Number(cat_product?.ratings_avg_rating || 0)) ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-700'" ></i> 
                                    <span v-if="cat_product.ratings_count" class="text-[9px] md:text-[10px] font-medium text-slate-500 dark:text-slate-400 pt-0.5">
                                        ({{ cat_product.ratings_count }})
                                    </span>
                                </span>

                                <div class="mt-4 pt-3 border-t border-gray-100 dark:border-white/[0.04] flex items-center justify-between">
                                    <div class="flex flex-col">
                                        <span v-if="cat_product.discount > 0" class="text-[11px] font-bold text-gray-400 line-through decoration-red-500/20 mb-0.5">৳{{ cat_product.price }}</span>
                                        <span class="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none flex items-start gap-0.5">
                                            <span class="text-sm font-bold mt-0.5">৳</span>{{ cat_product.price - cat_product.discount || cat_product.price }}
                                        </span>
                                    </div>

                                    <button @click="ProductDetails(cat_product)" class="relative h-11 w-11 group/btn overflow-hidden rounded-full bg-gray-900 dark:bg-orange-500 text-white shadow-md transition-all duration-500 hover:w-28 hover:bg-emerald-600 dark:hover:bg-orange-600 active:scale-95 flex items-center justify-center">
                                        <div class="absolute flex items-center justify-center transition-all duration-500 group-hover/btn:translate-x-10 group-hover/btn:opacity-0">
                                            <i class="fa-solid fa-plus text-base"></i>
                                        </div>
                                        <div class="absolute flex items-center justify-center gap-1.5 -translate-x-10 opacity-0 transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 px-3 whitespace-nowrap">
                                            <i class="fa-solid fa-cart-shopping text-xs"></i>
                                            <span class="text-[10px] font-black uppercase tracking-wider">View</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RatingSection :productId="product.id" />

            </div>
        </section>

        <section v-else class="min-h-screen flex items-center justify-center">
            <div class="text-center">

                <i class="fa-solid fa-box-open text-6xl text-slate-300 mb-5"></i>

                <h2 class="text-2xl font-bold mb-2">
                    Product Not Found
                </h2>

                <p class="text-slate-500">
                    This product may have been removed.
                </p>

                <router-link
                    to="/"
                    class="mt-6 inline-block px-6 py-3 rounded-full bg-emerald-600 dark:bg-orange-500 text-white"
                >
                    Continue Shopping
                </router-link>

            </div>
        </section>










        <FooterSection />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useHead } from "@vueuse/head";
import { useRoute, useRouter } from 'vue-router';
import api from '../../services/api';

import Message from '../Message/message.vue';
import Navbar from './navbar.vue';
import RatingSection from './rating/rating.vue';
import FooterSection from './footer.vue';
import { useAuth } from '../../stores/auth';
import { useCartStore } from './stores/cart';

const route = useRoute();
const router = useRouter();

const product = ref(null);
const categoryProducts = ref([]);
const activeImage = ref('');

const qty = ref(1);
const selectedVariant = ref(null);

const isAddingToCart = ref(false);
const CartItem = ref(null);
const cartStore = useCartStore();

const loading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');











// ===================================== computed =====================================
// price section
const priceSource = computed(() => {
    return selectedVariant.value || product.value;
});

const currentPrice = computed(() => {
    const source = priceSource.value;

    if (!source) return "0.00";

    return (
        Number(source.price || 0) -
        Number(source.discount || 0)
    ).toFixed(2);
});

const originalPrice = computed(() => {
    const source = priceSource.value;

    return source
        ? Number(source.price || 0).toFixed(2)
        : "0.00";
});

const discountAmount = computed(() => {
    const source = priceSource.value;

    return source
        ? Number(source.discount || 0).toFixed(2)
        : "0.00";
});

const hasDiscount = computed(() => {
    return Number(priceSource.value?.discount || 0) > 0;
});

const discountPercent = computed(() => {
    const source = priceSource.value;

    if (!source) return 0;

    const price = Number(source.price || 0);
    const discount = Number(source.discount || 0);

    if (!price || !discount) return 0;

    return Math.round((discount / price) * 100);
});

// ===================================== computed =====================================



// ===================================== watch =====================================
watch(
    () => route.params.slug,
    async () => {
        qty.value = 1;
        await getProduct();
    },
    { immediate: true }
);

watch(product, (p) => {
    if (!p) return;

    selectedVariant.value = p.variants?.length
        ? p.variants[0]
        : null;

    qty.value = 1;
}, {
    immediate: true
});

// ===================================== watch =====================================













// ===================================== computed =====================================
const maxQty = computed(() => {
    return selectedVariant.value?.stock_quantity
        ?? product.value?.stock_quantity
        ?? 1;
});
// ===================================== computed =====================================
































// ================================= functions =================================
async function getProduct() {
    loading.value = true
    try {
        const { data } = await api.get(`/public/product/${route.params.slug}`);

        product.value = data.data;
        categoryProducts.value = data.category_products;

        activeImage.value = product.value?.images?.[0]?.url ?? "";

    } catch (err) {
        errorMsg.value="Failed to load product.";
    } finally {
        loading.value = false
    }
}

async function addToCart(product) {
    if (product.variants?.length && !selectedVariant.value) {
        errorMsg.value = "Please select a variant.";
        return;
    }

    const quantity = qty.value;

    const cartData = {
        product_id: product.id,
        variant_id: selectedVariant.value?.id ?? null,
        quantity,
    };

    try {
        isAddingToCart.value = true;

        const res = await api.post("/cart/add-to-cart", cartData);

        if (res.data?.success) {
            successMsg.value = res.data.message || "Added to cart!";
            errorMsg.value = null;

            CartItem.value = res.data.data;

            cartStore.addToCartLocal({
                product_id: product.id,
                variant_id: selectedVariant.value?.id ?? null,
                quantity,
                price: selectedVariant.value?.price ?? product.price,
            })
            
            qty.value = 1;
            // console.log(CartItem.value);
        } else {
            errorMsg.value = res.data?.message || "Something went wrong";
            successMsg.value = null;
        }

    } catch (error) {

        if (error.response) {
            errorMsg.value = error.response.data?.message || "Server error";
        } else {
            errorMsg.value = "Network error";
            console.error(error);
        }

    } finally {
        isAddingToCart.value = false;
    }
}
// ================================= functions =================================










// ================================= Other =================================
// Product recall current page
function ProductDetails(product) {
    router.push(`/product-details/${product.slug}`)
}

// default image
const defaultProductImage = "/images/product/default-product.png"


const getProductImage = (product) => {
    const image =
        product?.images?.find(i => i.is_primary == 1)
        ?? product?.images?.[0];

    return image?.url || defaultProductImage;
}
// ================================= Other =================================
















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
    router.push({
        path: "/search",
        query: { q: query }
    });
}

const { loadUser } = useAuth()



// SEO Section
useHead({
    title: computed(() => product.value?.meta_title || product.value?.name || "OGROVA"),

    meta: [
        {
            name: "description",
            content: computed(() => product.value?.meta_description || product.value?.summary || "")
        },
        {
            name: "keywords",
            content: computed(() => product.value?.meta_keywords || "")
        }
    ]
});




onMounted(async () => {
    await loadUser();
    // await getProduct();

    // page load first variant select
    // if (product.value?.variants?.length > 0) {
    //     selectedVariant.value = product.value.variants[0];
    // }

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }

    // initializeProduct();
})
</script>

<style>

</style>