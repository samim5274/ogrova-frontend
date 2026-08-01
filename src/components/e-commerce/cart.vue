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

















        
        
        <section class="py-12 bg-zinc-50 dark:bg-[#0f172a] min-h-screen transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Header Section -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <nav class="flex mb-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                            <router-link to="/" class="hover:text-[#16A34A] dark:hover:text-[#F97316] transition-colors">Home</router-link>
                            <span class="mx-2">/</span>
                            <span class="text-zinc-900 dark:text-zinc-200">Shopping Cart</span>
                        </nav>
                        <h1 class="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                            Shopping Cart <span class="text-[#16A34A] dark:text-[#F97316]">.</span>
                        </h1>
                    </div>
                    <div class="bg-white dark:bg-[#1f2937] px-5 py-2.5 rounded-xl shadow-sm border border-zinc-200/80 dark:border-zinc-700/50 transition-all">
                        <p class="text-sm font-bold text-zinc-600 dark:text-zinc-400">
                            Total Items: <span class="text-[#16A34A] dark:text-[#F97316] font-black">{{ cartItems.length }}</span>
                        </p>
                    </div>
                </div>

                <div v-if="loading" class="grid lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-8 space-y-5">
                        <div v-for="i in 5" :key="i" class="animate-pulse bg-white dark:bg-slate-800 p-5 rounded-2xl border dark:border-slate-700">
                            <div class="flex gap-5">
                                <div class="w-20 h-20 rounded-xl bg-slate-200 dark:bg-slate-700"></div>

                                <div class="flex-1 space-y-3">
                                    <div class="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div class="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div class="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-4">
                        <div class="animate-pulse bg-white dark:bg-slate-800 p-5 border dark:border-slate-700 rounded-2xl h-96 min-h-[420px]">
                            <div class="flex gap-5" v-for="i in 3" :key="i">
                                <div class="w-20 h-20 rounded-xl bg-slate-200 dark:bg-slate-700"></div>

                                <div class="flex-1 space-y-3">
                                    <div class="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div class="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div class="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Empty Cart State -->
                <div  v-else-if="cartItems.length === 0" 
                    class="flex flex-col items-center justify-center py-24 bg-white dark:bg-[#1f2937] rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700 shadow-xl">
                    <div class="w-24 h-24 bg-[#16a34a36] dark:bg-[#f9741633] rounded-full flex items-center justify-center mb-6 ring-8 ring-[#16a34a54] dark:ring-[#f9741649]">
                        <i class="fa-solid fa-bag-shopping text-4xl text-[#16A34A] dark:text-[#F97316]"></i>
                    </div>
                    <h2 class="text-2xl font-black text-zinc-900 dark:text-white">Your cart feels a bit light</h2>
                    <p class="text-zinc-500 dark:text-zinc-400 mt-2 font-medium">Add some items to make it happy!</p>
                    <router-link to="/" class="mt-8 px-8 py-3.5 bg-[#16A34A] dark:bg-[#F97316] text-white rounded-xl font-bold hover:bg-emerald-700 dark:hover:bg-[#c75300] active:scale-95 transition-all shadow-lg shadow-[#16A34A]/20 dark:shadow-none">
                        Go Shopping
                    </router-link>
                </div>

                <!-- Main Cart Content -->
                <div v-else class="grid lg:grid-cols-12 gap-8">
                    
                    <!-- Cart Items List -->
                    <div class="lg:col-span-8 space-y-5">
                        <div v-for="item in cartItems" :key="item.id" v-memo="[item.quantity,item.price,item.discount,item.point]"
                            class="group relative bg-white dark:bg-[#1f2937] p-5 rounded-2xl shadow-sm border border-zinc-200/80 dark:border-zinc-700/60 hover:shadow-xl hover:border-[#16A34A] dark:hover:border-[#F97316] transition-all duration-300">
                            
                            <div class="flex flex-col sm:flex-row gap-6">
                                <!-- Product Image -->
                                <div @click="ProductDetails(item)" class="relative w-24 h-24 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-zinc-100 dark:bg-[#111827] cursor-pointer flex-shrink-0 mx-auto sm:mx-0">
                                    <img :src="item.image" :alt="item.product?.name || 'Product Image'" loading="lazy" decoding="async"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                         @error="item.image = defaultProductImage" />
                                </div>

                                <!-- Item Details -->
                                <div class="flex-1 flex flex-col justify-between">
                                    <div class="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 @click="ProductDetails(item)" class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#16A34A] dark:group-hover:text-[#F97316] transition-colors line-clamp-1 cursor-pointer hover:underline">
                                                
                                                {{ item.product?.name }}
                                                
                                                <!-- Dynamic Offer Highlight -->
                                                <span v-if="item.discount > 0" class="text-[9px] font-bold text-green-600 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400 px-1.5 py-0.5 rounded mt-1 border border-green-100 dark:border-orange-500/10">
                                                    Saved ৳{{ (Number(item.discount) * item.quantity).toLocaleString() }}
                                                </span>
                                            </h3>
                                            
                                            <!-- Variants -->
                                            <div class="flex flex-wrap gap-2 mt-2">
                                                <span v-if="item.variant?.color" 
                                                    class="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-50 dark:bg-[#111827] text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                                    <span class="w-2 h-2 rounded-full mr-2" :style="{ backgroundColor: item.variant.color.toLowerCase() }"></span>
                                                    {{ item.variant.color }}
                                                </span>

                                                <span v-if="item.variant?.size" 
                                                    class="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-orange-500/10 text-[#16A34A] dark:text-orange-400 border border-[#16A34A] dark:border-[#ffa362]">
                                                    <i class="fa-solid fa-ruler-combined mr-1.5 opacity-70"></i>
                                                    Size: {{ item.variant.size }}
                                                </span>

                                                <span v-if="!item.variant" 
                                                    class="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-[#111827] text-zinc-500 dark:text-zinc-400">
                                                    Standard Edition
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <!-- Remove Button -->
                                        <button @click="remove(item)" :disabled="removeLoading[item.id]"
                                            class="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 transition-all flex-shrink-0">
                                            <i v-if="removeLoading[item.id]" class="fa-solid fa-spinner fa-spin" ></i>
                                            <i v-else class="fa-solid fa-trash-can" ></i>
                                        </button>
                                    </div>

                                    <!-- Footer Section of Item (Qty, Points, Price) -->
                                    <div class="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-700/50">
                                        
                                        <!-- Quantity Controls -->
                                        <div class="flex items-center p-1 bg-zinc-50 dark:bg-[#111827] rounded-xl border border-zinc-200 dark:border-zinc-700">
                                            <button @click="decreaseQty(item)" 
                                                :disabled="qtyLoading[item.id] || item.quantity <= 1"
                                                class="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-[#1f2937] shadow-sm text-zinc-600 dark:text-zinc-300 hover:text-[#16A34A] dark:hover:text-[#F97316] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                                                <i class="fa-solid fa-minus text-xs"></i>
                                            </button>
                                            <span class="w-10 text-center font-bold text-zinc-900 dark:text-white">{{ item.quantity }}</span>
                                            <button @click="increaseQty(item)" :disabled="qtyLoading[item.id]"
                                                class="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-[#1f2937] shadow-sm text-zinc-600 dark:text-zinc-300 hover:text-[#16A34A] dark:hover:text-[#F97316] transition-colors">
                                                <i class="fa-solid fa-plus text-xs"></i>
                                            </button>
                                        </div>

                                        <!-- Points Section (Orange Energy/Offer Theme) -->
                                        <div class="flex flex-col items-end px-2 py-0.5 bg-orange-50/60 dark:bg-orange-500/5 rounded-lg border border-green-200/80 dark:border-orange-500/10">
                                            <p class="flex items-center gap-0.5 text-[8px] font-black text-[#16A34A] dark:text-orange-500 uppercase tracking-wider mb-0">
                                                <i class="fa-solid fa-bolt text-[7px]"></i>
                                                Points
                                            </p>
                                            <div class="flex items-baseline gap-0.5 leading-none">
                                                <span class="text-sm font-black text-[#16A34A] dark:text-orange-400 tracking-tight">
                                                    {{ (Number(item.point) * item.quantity).toLocaleString() }}
                                                </span>
                                                <span class="text-[8px] font-bold text-[#16A34A]/80 dark:text-[#F97316]/80 uppercase">pts</span>
                                            </div>
                                        </div>

                                        <!-- Pricing Subtotal -->
                                        <div class="text-right flex flex-col items-end">
                                            <div class="flex items-center gap-1.5 mb-0.5">
                                                <span class="text-[10px] font-semibold text-zinc-400 uppercase">Unit:</span>
                                                <span class="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                                                    ৳{{ Number(item.price).toLocaleString() }}
                                                </span>
                                            </div>

                                            <!-- Original subtotal (strikethrough, only if there's a discount) -->
                                            <p v-if="item.discount > 0" class="text-xs font-semibold text-zinc-400 line-through mb-0.5">
                                                ৳{{ (item.discount).toLocaleString() }}
                                            </p>

                                            <!-- Final subtotal after discount -->
                                            <p class="text-xl font-black text-zinc-900 dark:text-white tracking-tight">
                                                <span class="text-sm font-bold mr-0.5 text-[#16A34A] dark:text-[#F97316]">৳</span>{{
                                                    ((Number(item.price) - Number(item.discount)) * item.quantity).toLocaleString()
                                                }}
                                            </p>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Order Summary Card -->
                    <div class="lg:col-span-4">
                        
                        <div class="sticky top-10 bg-white dark:bg-[#1f2937] rounded-2xl p-6 sm:p-8 shadow-md border border-zinc-200/80 dark:border-zinc-700/60 transition-all">
                            
                            <h2 class="text-xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                                Order Summary <span class="w-2.5 h-2.5 rounded-full bg-[#16a34a] dark:bg-[#F97316] animate-pulse"></span>
                            </h2>

                            <div class="space-y-4">                                
                                <!-- Subtotal -->
                                <div class="flex justify-between font-medium text-sm">
                                    <span class="text-zinc-500 dark:text-zinc-400">Subtotal</span>
                                    <span class="text-zinc-900 dark:text-white font-bold">৳ {{ subtotal.toLocaleString() }}</span>
                                </div>
                                
                                <!-- <div class="flex justify-between font-medium text-sm">
                                    <span class="text-zinc-500 dark:text-zinc-400">Shipping</span>
                                    <span class="text-[#16a34a] dark:text-[#F97316] font-bold uppercase text-xs tracking-wider">Free</span>
                                </div> -->
                                
                                <div class="flex justify-between font-medium text-sm">
                                    <span class="text-zinc-500 dark:text-zinc-400">Total Points</span>
                                    <span class="text-[#16a34a] dark:text-[#fb923c] font-bold bg-[#16a34a]/10 dark:bg-[#f97316]/20 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[10px]"></i> {{ totalPoint.toLocaleString() }} pts
                                    </span>
                                </div>
                                
                                <!-- Estimated Tax -->
                                <div class="flex justify-between font-medium text-sm">
                                    <span class="text-zinc-500 dark:text-zinc-400">Estimated Tax</span>
                                    <span class="text-zinc-900 dark:text-white font-bold">৳ 0</span>
                                </div>
                                
                                <div class="h-px bg-zinc-100 dark:bg-zinc-700 my-5"></div>

                                <div class="flex justify-between items-end">
                                    <span class="text-base font-bold text-zinc-900 dark:text-white mb-1">Total Payable</span>
                                    <div class="text-right">
                                        <p class="text-3xl font-black text-[#16a34a] dark:text-[#F97316] tracking-tight">
                                            ৳ {{ subtotal.toLocaleString() }}
                                        </p>
                                        <p class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">VAT Included</p>
                                    </div>
                                </div>

                                <button @click="checkOut(cartItems)" :disabled="checkoutLoading" class="w-full mt-8 bg-[#16a34a] hover:bg-[#15803d] dark:bg-[#F97316] hover:dark:bg-[#d85a00] text-white py-4 rounded-xl font-black text-base tracking-wide transition-all shadow-lg shadow-[#16a34a]/20 dark:shadow-none flex items-center justify-center gap-3 group active:scale-[0.99]">
                                    <span v-if="checkoutLoading">
                                        <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                                        Processing...
                                    </span>

                                    <span v-else>
                                        Checkout Now
                                        <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                    </span>
                                </button>

                                <p class="text-center text-[11px] font-bold text-zinc-400 mt-6 flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-shield-check text-[#16a34a]"></i>
                                    Secure SSL Encrypted Checkout
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>      









        <NewsLatter />
        <FooterSection />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import api from '../../services/api';

const Message = defineAsyncComponent(() =>
    import("../Message/message.vue")
);

const Navbar = defineAsyncComponent({
    loader: () => import("./navbar.vue"),
    delay: 200,
    timeout: 10000,
});

const NewsLatter = defineAsyncComponent(() =>
    import("./news-latter.vue")
);

const FooterSection = defineAsyncComponent(() =>
    import("./footer.vue")
);
import { useAuth } from '../../stores/auth';

const router = useRouter();









const loading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');
const checkoutLoading = ref(false);
const removeLoading = ref({});
const qtyLoading = ref({});


const cartItems = ref([]);
const defaultProductImage = "/images/product/default-product.webp";

async function getCartItems() {
    loading.value = true
    try {
        const { data } = await api.get("/cart");
        // cartItems.value = data.data ?? [];
        // console.log(cartItems.value);
        cartItems.value = (data.data ?? []).map(item => ({
            ...item,
            image:
                item.product?.images?.[0]?.url ??
                defaultProductImage,
        }));
    } catch (err) {
        console.error(err);
        errorMsg.value = err || "Something is wrong";
    } finally {
        loading.value = false;
    }
}













// subtotal
const subtotal = computed(() =>
    (cartItems.value || []).reduce((sum, i) => {
        return sum + (Number(i.price) * Number(i.quantity) - (Number(i.discount) * Number(i.quantity)))
    }, 0)
)

// total point
const totalPoint = computed(() =>
    (cartItems.value || []).reduce((sum, i) => {
        return sum + (Number(i.point) * Number(i.quantity))
    }, 0)
)























// Debounce timer
const qtyTimers = {};

// Increase
function increaseQty(item) {
    if (qtyLoading.value[item.id]) return;
    item.quantity = Number(item.quantity) + 1;
    queueQtyUpdate(item);
}

// Decrease
function decreaseQty(item) {
    if (qtyLoading.value[item.id]) return;
    if (item.quantity <= 1) return;

    item.quantity = Number(item.quantity) - 1;
    queueQtyUpdate(item);
}

// Debounce
function queueQtyUpdate(item) {
    const key = `${item.reg}_${item.product_id}_${item.variant_id ?? 0}`;

    clearTimeout(qtyTimers[key]);

    qtyTimers[key] = setTimeout(() => {
        updateQty(item);
    }, 500);
}

// Update Quantity
async function updateQty(item) {
    const oldQty = item.quantity;
    qtyLoading.value[item.id] = true;

    try {
        const { data } = await api.post(
            `/cart/qty-update/${item.reg}/${item.product_id}/${item.variant_id}`,
            {
                quantity: oldQty,
            }
        );

        if (data.status === "success") {
            
            item.quantity = Number(data.quantity);

            if (data.available_stock !== undefined) {
                item.available_stock = data.available_stock;
            }

            if (data.price !== undefined) {
                item.price = Number(data.price);
            }

            if (data.discount !== undefined) {
                item.discount = Number(data.discount);
            }

            if (data.point !== undefined) {
                item.point = Number(data.point);
            }
        }
    } catch (err) {
        
        item.quantity = Number(item.quantity) > oldQty ? oldQty - 1 : oldQty + 1;

        errorMsg.value =
            err?.response?.data?.message || "Out of stock.";

        setTimeout(() => {
            errorMsg.value = "";
        }, 3000);
    } finally{
        qtyLoading.value[item.id] = false;
    }
}










async function remove(item) {
    removeLoading.value[item.id] = true;
    try {
        const res = await api.post(`/cart/remove-to-cart/${item.id}/${item.reg}/${item.product_id}/${item.variant_id}`, {
            quantity: Number(item.quantity),
        });
        if (res?.data?.status === 'success') {
            item.quantity = Number(res.data.quantity);
            if (res.data.available_stock !== undefined) {
                item.available_stock = res.data.available_stock;
            }
        }
        cartItems.value = cartItems.value.filter(
            i => i.id !== item.id
        ); 
    } catch (err) {
        const msg = err?.response?.data?.message || "Something went wrong.";
        errorMsg.value = msg;
        
        setTimeout(() => {
            errorMsg.value = "";
        }, 3000);
    } finally {
        removeLoading.value[item.id] = false;
    }
}












async function  checkOut(cartItems) {
    errorMsg.value = "";
    successMsg.value = "";
    checkoutLoading.value = true;

    try{
        const reg = cartItems?.[0]?.reg;
        if(!reg || cartItems.length === 0){
            errorMsg.value = "Cart is empty.";
            return;
        }
        
        await router.push(`/checkout/${reg}`);
    } catch (err) {
        console.log(err?.response?.data?.message);
        errorMsg.value = err?.response?.data?.message || "Order failed";
        errorMsg.value = "Order failed";
    } finally {
        checkoutLoading.value = false;
    }
}















function ProductDetails(item) {
    if (!item.product?.slug) return;
    router.push(`/product-details/${item.product.slug}`);
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

const { loadUser } = useAuth()

onMounted(async () => {
    isDark.value = localStorage.getItem("theme") === "dark";

    document.documentElement.classList.toggle(
        "dark",
        isDark.value
    );
    
    await Promise.all([
        loadUser(),
        getCartItems()
    ]);
});
</script>

<style>

</style>