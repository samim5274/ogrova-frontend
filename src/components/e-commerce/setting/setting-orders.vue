<template>
    <div>
        <Message
            :successMsg="successMsg"
            :errorMsg="errorMsg"
            @update:successMsg="successMsg = $event"
            @update:errorMsg="errorMsg = $event"
        />
        
        <!-- Header -->
        <div class="grid grid-cols-1 gap-8">
            <div class="overflow-hidden">
    
                <!-- Table Header Title -->
                <div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="relative group">
                            <div v-if="LogoLight" class="h-16 w-16 rounded-full ring-4 ring-emerald-500/20 overflow-hidden">
                                <img :src="LogoLight" class="max-w-full max-h-full object-contain block dark:hidden transition-opacity duration-300" />
                                <img :src="LogoDark" class="max-w-full max-h-full object-contain hidden dark:block transition-opacity duration-300" />
                            </div>
                            <div v-else class="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300">
                                <span class="text-[10px] text-slate-400 font-medium">LOGO</span>
                            </div>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Order History</h2>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Manage and track your recent orders</p>
                        </div>
                    </div>
                    <button @click="fetchedUserOrder" class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
                        <i class="fa-solid fa-rotate-right text-sm" :class="{ 'animate-spin': loading }"></i>
                    </button>
                </div>

                <!-- Loading State -->
                <!-- Skeleton Loading View (Runs when loading is true) -->
                <div v-if="loading" class="overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead>
                            <tr class="bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800/80 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                <th class="px-6 py-4">Order ID</th>
                                <th class="px-6 py-4">Date</th>
                                <th class="px-6 py-4">Payment</th>
                                <th class="px-6 py-4">Total</th>
                                <th class="px-6 py-4 text-center">Status</th>
                                <th class="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 animate-pulse">
                            <!-- 4 Mock Rows for Skeleton -->
                            <tr v-for="i in 4" :key="i" class="hover:bg-transparent">
                                
                                <!-- Order ID Skeleton -->
                                <td class="px-6 py-4">
                                    <div class="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg mb-1.5"></div>
                                    <div class="h-2.5 w-14 bg-slate-100 dark:bg-slate-800/60 rounded-md"></div>
                                </td>

                                <!-- Date Skeleton -->
                                <td class="px-6 py-4">
                                    <div class="h-3.5 w-24 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                                </td>

                                <!-- Payment Skeleton -->
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2">
                                        <div class="h-3.5 w-10 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                                        <div class="h-4 w-12 bg-slate-100 dark:bg-slate-800/60 rounded-full"></div>
                                    </div>
                                </td>

                                <!-- Total Skeleton -->
                                <td class="px-6 py-4">
                                    <div class="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                                </td>

                                <!-- Status Badge Skeleton -->
                                <td class="px-6 py-4 text-center">
                                    <div class="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto"></div>
                                </td>

                                <!-- Action Button Skeleton -->
                                <td class="px-6 py-4 text-right">
                                    <div class="h-4 w-12 bg-slate-200 dark:bg-slate-800 rounded-lg ml-auto"></div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Empty State -->
                <div v-else-if="orders.length === 0" class="p-10 text-center space-y-3">
                    <div class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-400 mx-auto flex items-center justify-center">
                        <i class="fa-solid fa-box-open text-xl"></i>
                    </div>
                    <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">No orders found</p>
                    <p class="text-xs text-slate-400">You haven't placed any orders yet.</p>
                </div>

                <!-- Orders Table -->
                <div v-else class="overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead>
                            <tr class="bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800/80 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                <th class="px-6 py-4">Order ID</th>
                                <th class="px-6 py-4">Date</th>
                                <th class="px-6 py-4">Payment</th>
                                <th class="px-6 py-4">Total</th>
                                <th class="px-6 py-4 text-center">Status</th>
                                <th class="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
                            <tr v-for="order in orders" :key="order.id" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/20 transition">
                                
                                <!-- Registration / Order Number -->
                                <td class="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                    #{{ order.reg || order.id }}
                                    <span v-if="order.point > 0" class="block text-[10px] font-normal text-amber-500">
                                        +{{ order.point }} points earned
                                    </span>
                                </td>

                                <!-- Order Date -->
                                <td class="px-6 py-4 text-xs whitespace-nowrap">
                                    {{ formatDate(order.date || order.created_at) }}
                                </td>

                                <!-- Payment Method & Status -->
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center gap-2">
                                        <span class="uppercase text-xs font-semibold">{{ order.payment_method }}</span>
                                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                                            :class="order.payment_status === 'paid' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10' : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10'">
                                            {{ order.payment_status }}
                                        </span>
                                    </div>
                                </td>

                                <!-- Payable Amount -->
                                <td class="px-6 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                                    {{ order.currency }} {{ parseFloat(order.payable_amount).toLocaleString() }}
                                </td>

                                <!-- Order Status Badge -->
                                <td class="px-6 py-4 text-center whitespace-nowrap">
                                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border capitalize"
                                        :class="getStatusBadge(order.status)">
                                        {{ order.status }}
                                    </span>
                                </td>

                                <!-- View Details Action Button -->
                                <td class="px-6 py-4 text-right whitespace-nowrap">
                                    <button type="button" @click="openOrderDetails(order)" class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                                        <span>Details</span>
                                        <i class="fa-solid fa-chevron-right text-[10px]"></i>
                                    </button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
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
                            v-for="page in OrderVisiblePages"
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

            </div>
        </div>


        <!-- Order Details Modal -->
        <Teleport to="body">
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
                <!-- Modal Backdrop Click to Close -->
                <div class="fixed inset-0" @click="closeModal"></div>

                <!-- Modal Box -->
                <div class="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-2xl border border-slate-200 dark:border-slate-800 transition-all max-h-[90vh] flex flex-col">
                    
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4">
                        <div>
                            <h3 class="text-base font-bold text-slate-900 dark:text-white">
                                Order Details
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                Order Reg: <span class="font-mono font-semibold text-indigo-600 dark:text-indigo-400">#{{ selectedOrder?.reg || selectedOrder?.id }}</span>
                            </p>
                        </div>
                        <button @click="closeModal" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition">
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </div>

                    <!-- Modal Body (Scrollable) -->
                    <div class="p-6 overflow-y-auto space-y-6">
                        <!-- Status & Overview -->
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                            <div>
                                <span class="text-xs font-medium text-slate-500 dark:text-slate-400 block">Order Date</span>
                                <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                                    {{ formatDate(selectedOrder?.created_at || selectedOrder?.date) }}
                                </span>
                            </div>
                            <div>
                                <span class="text-xs font-medium text-slate-500 dark:text-slate-400 block">Order Status</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mt-1" :class="getStatusBadge(selectedOrder?.status)">
                                    {{ selectedOrder?.status || 'Pending' }}
                                </span>
                            </div>
                            <div>
                                <span class="text-xs font-medium text-slate-500 dark:text-slate-400 block">Payment Method</span>
                                <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block uppercase">
                                    {{ selectedOrder?.payment_method || 'N/A' }} 
                                    <span class="text-[10px] text-slate-400">({{ selectedOrder?.payment_status }})</span>
                                </span>
                            </div>
                        </div>

                        <!-- Customer & Shipping Info -->
                        <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1 bg-white dark:bg-slate-900">
                            <h4 class="font-bold text-slate-700 dark:text-slate-300 mb-2">Shipping Information</h4>
                            <p><span class="text-slate-500">Name:</span> <span class="font-medium text-slate-800 dark:text-slate-200">{{ selectedOrder?.contact_name || 'N/A' }}</span></p>
                            <p><span class="text-slate-500">Phone:</span> <span class="font-medium text-slate-800 dark:text-slate-200">{{ selectedOrder?.contact_number || 'N/A' }}</span></p>
                            <p><span class="text-slate-500">Address:</span> <span class="font-medium text-slate-800 dark:text-slate-200">{{ selectedOrder?.shipping_address || 'N/A' }}</span></p>
                        </div>

                        <!-- Product Items List -->
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                                Items Ordered
                            </h4>
                            
                            <div class="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
                                <div v-if="selectedOrderCartItems.length">
                                    <div v-for="item in selectedOrderCartItems" :key="item.id" class="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
                                        <div class="flex items-center gap-3">
                                            <!-- Product Image (Optional) -->
                                            <img v-if="item.product?.image" :src="makeImg(item.product.image)" class="w-12 h-12 object-cover rounded-lg border border-slate-200 dark:border-slate-800" />
                                            <div>
                                                <h5 class="font-semibold text-xs text-slate-800 dark:text-slate-200">
                                                    {{ item.product?.name ?? 'Product' }}
                                                </h5>
                                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                    Qty: {{ item.quantity }} × ৳{{ Number(item.price).toFixed(2) }}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="font-semibold text-xs text-slate-900 dark:text-white">
                                            ৳{{ (Number(item.quantity) * Number(item.price)).toFixed(2) }}
                                        </div>
                                    </div>
                                </div>

                                <div v-else class="text-center py-8 text-xs text-slate-500 dark:text-slate-400">
                                    No items found for this order.
                                </div>
                            </div>
                        </div>

                        <!-- Total Summary -->
                        <div class="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                            <div class="flex justify-between text-slate-600 dark:text-slate-400">
                                <span>Subtotal</span>
                                <span>৳{{ Number(selectedOrder?.amount ?? 0).toFixed(2) }}</span>
                            </div>

                            <div v-if="Number(selectedOrder?.discount) > 0" class="flex justify-between text-emerald-600 dark:text-emerald-400">
                                <span>Discount</span>
                                <span>- ৳{{ Number(selectedOrder?.discount).toFixed(2) }}</span>
                            </div>

                            <div class="flex justify-between text-slate-600 dark:text-slate-400">
                                <span>Shipping Charge</span>
                                <span>৳{{ Number(selectedOrder?.shipping_charge ?? 0).toFixed(2) }}</span>
                            </div>

                            <div class="flex justify-between font-bold text-sm text-slate-900 dark:text-white pt-2 border-t border-dashed border-slate-200 dark:border-slate-700">
                                <span>Total Payable</span>
                                <span class="text-indigo-600 dark:text-indigo-400">৳{{ Number(selectedOrder?.payable_amount ?? 0).toFixed(2) }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="border-t border-slate-200 dark:border-slate-800 px-6 py-3.5 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
                        <button @click="closeModal" class="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Teleport>


    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import api, { makeImg } from "../../../services/api";
import Message from '../../Message/message.vue';

const loading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const LogoLight = "/logo/logo.png";
const LogoDark = "/logo/white-logo.png";























// Pagination
const OrderVisiblePages = computed(() => {
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

const pagination = ref({
    page: 1,
    lastPage: 1,
    total: 0,
    perPage: 10,
    from: 0,
    to: 0,
});


// fetch order
const orders = ref([]);
async function fetchedUserOrder(page = 1) {
    loading.value = true;
    try{
        const res = await api.get(`/orders/user/details?page=${page}`);
        if (res.data.success) {
            const response = res.data;

            orders.value = response?.data?.data ?? [];

            pagination.value = {
                page: response?.data?.current_page ?? 1,
                lastPage: response?.data?.last_page ?? 1,
                total: response?.data?.total ?? 0,
                perPage: response?.data?.per_page ?? 10,
                from: response?.data?.from ?? 0,
                to: response?.data?.to ?? 0,
            };
        }
    } catch (e) {
        errorMsg.value = e?.response?.data?.message || "Failed to load orders";

        orders.value = [];

        pagination.value = {
            page: 1,
            lastPage: 1,
            total: 0,
            perPage: 10,
            from: 0,
            to: 0,
        };
    } finally {
        loading.value = false;
    }
}

async function changePage(page) {
    if (page === pagination.value.page || page === "...") return;
    await fetchedUserOrder(page);
}

const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
        case 'completed':
        case 'delivered':
            return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-500/20';
        case 'processing':
        case 'confirmed':
            return 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200/60 dark:border-blue-500/20';
        case 'cancelled':
            return 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border-rose-200/60 dark:border-rose-500/20';
        default: // pending
            return 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200/60 dark:border-amber-500/20';
    }
};













// Modal controls & selected order state
const isModalOpen = ref(false);
const selectedOrder = ref(null);

const cartItems = ref([]);
const orderPayment = ref(null);
// Open Modal with selected order data
async function openOrderDetails(order) {

    selectedOrder.value = order;
    cartItems.value = [];
    orderPayment.value = null;
    isModalOpen.value = true;
    loading.value = true;

    try {
        const { data } = await api.get(`/orders/items/${order.reg}/payment/details`);
        if (data.success) {
            cartItems.value = data.data.cartItems || [];
            orderPayment.value = data.data.orderPayment;
        }
    } catch (error) {
        errorMsg.value =
            error.response?.data?.message ||
            "Failed to load order details.";
    } finally {
        loading.value = false;
    }

}

// Close Modal
const closeModal = () => {
    isModalOpen.value = false;
    selectedOrder.value = null;
    cartItems.value = [];
    orderPayment.value = null;
};

// শুধুমাত্র সিলেক্ট করা অর্ডারের কার্ট আইটেমস ফিল্টার করবে
const selectedOrderCartItems = computed(() => {
    if (!selectedOrder.value || !cartItems.value.length) return [];
    
    return cartItems.value.filter(item => item.reg === selectedOrder.value.reg);
});







onMounted(() => {
    fetchedUserOrder();
});

</script>

<style scoped>

</style>