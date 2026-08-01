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
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Address</h2>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Manage your address</p>
                        </div>
                    </div>
                    <button @click="getAddress()" class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
                        <i class="fa-solid fa-rotate-right text-sm" :class="{ 'animate-spin': loading }"></i>
                    </button>
                </div>

                <!-- Orders Table -->
                <div class="overflow-x-auto p-5 text-center space-y-3">
                    <!-- Label -->
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                            Shipping Address
                        </label>
                        
                        <!-- Add New Address Button (Optional) -->
                        <button @click="isAddressModalOpen = true" type="button" class="text-xs font-semibold text-emerald-600 dark:text-orange-500 hover:underline flex items-center gap-1">
                            <i class="fa-solid fa-plus text-[10px]"></i> Add New Address
                        </button>
                    </div>

                    <!-- Loading State -->
                    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
                        <div v-for="i in 2" :key="i" class="h-28 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700"></div>
                    </div>

                    <!-- Addresses Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                            v-for="address in userAddress" 
                            :key="address.id"
                            @click="selectedAddressId = address.id"
                            :class="[
                                'relative p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between bg-white dark:bg-slate-900 select-none shadow-sm',
                                selectedAddressId === address.id 
                                    ? 'border-emerald-500 dark:border-orange-500 ring-2 ring-emerald-500/10 dark:ring-orange-500/10 bg-emerald-50/10 dark:bg-orange-500/[0.02]' 
                                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                            ]">

                            <!-- Badge & Check Icon -->
                            <div class="absolute top-3 right-3 flex items-center gap-1.5">
                                <span v-if="address.is_default" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-orange-500/10 dark:text-orange-500 uppercase tracking-wide">
                                    Default
                                </span>
                                <div 
                                    :class="[
                                        'h-5 w-5 rounded-full flex items-center justify-center text-xs transition-colors',
                                        selectedAddressId === address.id 
                                            ? 'bg-emerald-600 dark:bg-orange-500 text-white' 
                                            : 'border-2 border-slate-300 dark:border-slate-700'
                                    ]"
                                >
                                    <i v-if="selectedAddressId === address.id" class="fa-solid fa-check text-[10px]"></i>
                                </div>
                            </div>

                            <!-- Address Information -->
                            <div class="space-y-1.5 pr-14">
                                <!-- Label (Home/Office) & Recipient Name -->
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="text-xs font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-1.5 py-0.5 rounded-md tracking-wider">
                                        {{ address.label || 'Address' }}
                                    </span>
                                    <h5 class="text-sm font-bold text-slate-800 dark:text-slate-100">
                                        {{ address.recipient_name }}
                                    </h5>
                                </div>

                                <!-- Phone -->
                                <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                    <i class="fa-solid fa-phone text-slate-400 dark:text-slate-500 text-[10px]"></i>
                                    {{ address.phone }}
                                </p>

                                <!-- Complete Address text string -->
                                <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                                    {{ address.address }}, 
                                    <span v-if="address.police_station">{{ address.police_station.name }}, </span>
                                    <span v-if="address.upazila">{{ address.upazila.name }}, </span>
                                    <span v-if="address.district">{{ address.district.name }}, </span>
                                    <span v-if="address.division">{{ address.division.name }}</span>
                                    <span v-if="address.postal_code"> - {{ address.postal_code }}</span>
                                </p>
                            </div>
                            <button 
                                @click.stop="deleteAddress(address.id)"
                                class="absolute bottom-3 right-3 h-7 w-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                                title="Delete Address"
                            >
                                <i class="fa-solid fa-trash-can text-xs"></i>
                            </button>
                        </div>

                        <!-- Empty State -->
                        <div v-if="userAddress.length === 0" class="col-span-full border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center space-y-2">
                            <div class="h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full flex items-center justify-center mx-auto text-sm">
                                <i class="fa-solid fa-map-location-dot"></i>
                            </div>
                            <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">No shipping addresses found.</p>
                            <button @click="isAddressModalOpen = true" type="button" class="text-xs font-bold text-emerald-600 dark:text-orange-500 hover:opacity-80">
                                Create your first address
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <AddressModel 
            :is-open="isAddressModalOpen"
            :divisions="divisions"
            @close="isAddressModalOpen = false"
            @address-created="handleAddressCreated"
            @success="showSuccess"
            @error="showError"
        />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import api, { makeImg } from "../../../services/api";
import Message from '../../Message/message.vue';

import AddressModel from '../checkout/customer-address.vue';

const loading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");
const isSubmitting = ref(false)
const localDivisions = ref([])
const districts = ref([])
const upazilas = ref([])
const policeStations = ref([])

const selectedAddressId = ref(null);
const addressLoading = ref(false);

const isAddressModalOpen = ref(false);
const userAddress = ref([]);
const divisions = ref([]);

const LogoLight = "/logo/logo.avif";
const LogoDark = "/logo/white-logo.avif";















// User address
async function getAddress() {
    addressLoading.value = true;
    errorMsg.value = '';

    try{
        const { data } = await api.get('/customer/addresses/get');
        userAddress.value =  Array.isArray(data?.data) ? data.data : [];
        if (userAddress.value.length) {
            const defaultAddress = userAddress.value.find(item => item.is_default) ?? userAddress.value[0];
            selectedAddressId.value = defaultAddress ? defaultAddress.id : null;
        }
    } catch (err){
        if(err.response?.status===422){
            validationErrors.value=err.response.data.errors;
        }

        errorMsg.value =
            err.response?.data?.message ||
            err.response?.data?.error ||
            "Unable to load your addresses. Please try again.";
    } finally {
        addressLoading.value = false;
    }
}

const selectedAddress = computed(() => {
    return (
        userAddress.value.find(
            item => item.id === selectedAddressId.value
        ) || null
    );
});






const deleteAddress = async (id) => {
    if (!confirm("Are you sure you want to delete this address?")) {
        return;
    }

    try {
        const { data } = await api.delete(`/customer/addresses/delete/${id}`);

        userAddress.value = userAddress.value.filter(
            address => address.id !== id
        );

        // Reset selected address if deleted
        if (selectedAddressId.value === id) {
            selectedAddressId.value =
                userAddress.value.length > 0
                    ? (userAddress.value.find(a => a.is_default)?.id ??
                       userAddress.value[0].id)
                    : null;
        }

        successMsg.value =
            data.message || "Address deleted successfully.";

        errorMsg.value = "";

    } catch (err) {
        errorMsg.value =
            err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to delete address.";

        successMsg.value = "";
    }
};








// ======================================================== Helper ========================================================
const handleAddressCreated = async(newAddress) => {
    if (!newAddress) return;
    if (newAddress.is_default) {
        userAddress.value.forEach(item => {
            item.is_default = false;
        });
    }
    
    userAddress.value.unshift(newAddress);
    selectedAddressId.value = newAddress.id;
    isAddressModalOpen.value = false;
    await getAddress();
};

const showSuccess = (msg) => {
    successMsg.value = msg;
    errorMsg.value = '';
    
    setTimeout(() => {
        successMsg.value = '';
    }, 3000);
};

const showError = (msg) => {
    errorMsg.value = msg;
    successMsg.value = '';

    setTimeout(() => {
        errorMsg.value = '';
    }, 4000);
};
// ======================================================== Helper ========================================================

















onMounted(() => {
    getAddress();
});

</script>

<style scoped>

</style>