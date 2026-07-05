<!-- AddressModal.vue -->
<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
        <div class="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
        
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800/60">
            <h3 class="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                <i class="fa-solid fa-map-location-dot text-emerald-600 dark:text-orange-500"></i> Add New Shipping Address
            </h3>
            <button @click="closeModal" type="button" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <i class="fa-solid fa-xmark text-base"></i>
            </button>
        </div>

        <!-- Modal Body (Form) -->
        <form @submit.prevent="handleSubmit" class="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
            
            <!-- Recipient & Phone Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Recipient Name *</label>
                    <input v-model="form.recipient_name" type="text" required class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all" placeholder="e.g. John Doe">
                </div>

                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Phone Number *</label>
                    <input v-model="form.phone" type="tel" required class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all" placeholder="e.g. 017XXXXXXXX">
                </div>
            </div>

            <!-- Location Dropdowns Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Division -->
                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Division *</label>
                    <select v-model="form.division_id" @change="handleDivisionChange" required class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all cursor-pointer">
                        <option :value="null" disabled>-- Select Division --</option>
                        <option v-for="division in localDivisions" :key="division.id" :value="division.id">{{ division.name }}</option>
                    </select>
                </div>

                <!-- District -->
                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">District *</label>
                    <select v-model="form.district_id" @change="handleDistrictChange" :disabled="!form.division_id" required class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                        <option :value="null" disabled>-- Select District --</option>
                        <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
                    </select>
                </div>

                <!-- Upazila -->
                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Upazila *</label>
                    <select v-model="form.upazila_id" @change="handleUpazilaChange" :disabled="!form.district_id" required class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                        <option :value="null" disabled>-- Select Upazila --</option>
                        <option v-for="upazila in upazilas" :key="upazila.id" :value="upazila.id">{{ upazila.name }}</option>
                    </select>
                </div>

                <!-- Police Station (Optional) -->
                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Police Station (Optional)</label>
                    <select v-model="form.police_station_id" :disabled="!form.upazila_id" class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                        <option :value="null">-- Select Police Station --</option>
                        <option v-for="station in policeStations" :key="station.id" :value="station.id">{{ station.name }}</option>
                    </select>
                </div>
            </div>

            <!-- Postal Code & Address Label -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Postal Code (Optional)</label>
                    <input v-model="form.postal_code" type="text" class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 transition-all" placeholder="e.g. 1200">
                </div>

                <div class="space-y-1">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Address Label</label>
                    <div class="flex gap-2">
                        <button v-for="label in ['Home', 'Office', 'Other']" :key="label" type="button" @click="form.label = label"
                            :class="[
                            'flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-200',
                            form.label === label 
                                ? 'bg-emerald-600 dark:bg-orange-500 text-white border-transparent shadow-sm' 
                                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                            ]">
                            {{ label }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Complete Street Address Textarea -->
            <div class="space-y-1">
                <label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Street Address *</label>
                <textarea v-model="form.address" rows="3" required class="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-orange-500/20 focus:border-emerald-500 dark:focus:border-orange-500 text-slate-800 dark:text-slate-100 resize-none transition-all" placeholder="House no, Road no, Village, Area details..."></textarea>
            </div>

            <!-- Set as Default Checkbox -->
            <label class="flex items-center gap-2 cursor-pointer select-none py-1 group w-max">
                <input v-model="form.is_default" type="checkbox" class="accent-emerald-600 dark:accent-orange-500 h-4 w-4 rounded transition-all">
                <span class="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">Set as default shipping address</span>
            </label>
        </form>

        <!-- Modal Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800/60 flex gap-3 bg-slate-50/50 dark:bg-slate-900/50 rounded-b-2xl">
            <button @click="closeModal" :disabled="isSubmitting" type="button" class="flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors disabled:opacity-50">
                Cancel
            </button>
            <button @click="handleSubmit" :disabled="isSubmitting" type="button" class="flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-emerald-600 dark:bg-orange-500 text-white hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2 disabled:opacity-70">
                <i v-if="isSubmitting" class="fa-solid fa-spinner animate-spin"></i>
                {{ isSubmitting ? 'Saving...' : 'Save Address' }}
            </button>
        </div>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import api from '../../../services/api.js'

const props = defineProps({
    isOpen: { type: Boolean, default: false },
    divisions: { type: Array, default: () => [] }
})

const emit = defineEmits(['close', 'address-created'])

const isSubmitting = ref(false)
const localDivisions = ref([])
const districts = ref([])
const upazilas = ref([])
const policeStations = ref([])

// Form Initial Values
const initialFormState = {
    label: 'Home',
    recipient_name: '',
    phone: '',
    division_id: null,
    district_id: null,
    upazila_id: null,
    police_station_id: null,
    address: '',
    postal_code: '',
    is_default: false
}

const form = reactive({ ...initialFormState })

// ১. Division 
const fetchDivisions = async () => {
    if (props.divisions && props.divisions.length > 0) {
        localDivisions.value = props.divisions
        return
    }
    try {
        const { data } = await api.get('/public/get-division')
        localDivisions.value = data.data ?? []
    } catch (err) {
        console.error("Failed to load divisions from modal fallback API", err)
    }
}

// ২. District 
const handleDivisionChange = async () => {
    form.district_id = null
    form.upazila_id = null
    form.police_station_id = null
    districts.value = []
    upazilas.value = []
    policeStations.value = []
    
    if (!form.division_id) return
    try {
        const { data } = await api.get('/public/get-district', { params: { division_id: form.division_id } })
        districts.value = data.data ?? []
    } catch (err) {
        console.error("Failed to load districts", err)
    }
}

// ৩. Upazila 
const handleDistrictChange = async () => {
    form.upazila_id = null
    form.police_station_id = null
    upazilas.value = []
    policeStations.value = []

    if (!form.district_id) return
    try {
        const { data } = await api.get('/public/get-upazila', { params: { district_id: form.district_id } })
        upazilas.value = data.data ?? []
    } catch (err) {
        console.error("Failed to load upazilas", err)
    }
}

// ৪. Police Station
const handleUpazilaChange = async () => {
    form.police_station_id = null
    policeStations.value = []

    if (!form.upazila_id) return
    try {
        const { data } = await api.get('/public/get-police-station', { params: { upazila_id: form.upazila_id } })
        policeStations.value = data.data ?? []
    } catch (err) {
        console.error("Failed to load police stations", err)
    }
}

const closeModal = () => {
    emit('close')
}

// Form Submission (Laravel Backend Request)
const handleSubmit = async () => {
    
    isSubmitting.value = true

    const payload = {
        label: form.label,
        recipient_name: form.recipient_name.trim(),
        phone: form.phone.trim(),
        division_id: Number(form.division_id),
        district_id: Number(form.district_id),
        upazila_id: Number(form.upazila_id),
        police_station_id: form.police_station_id || null,
        address: form.address.trim(),
        postal_code: form.postal_code || null,
        is_default: Boolean(form.is_default),
    }
    
    try {
        const res = await api.post('/customer/addresses/create', payload)
        emit('address-created', res.data.data) 
        closeModal()
    } catch (err) {
        console.log("FULL ERROR:", err);
        console.log("MESSAGE:", err.message);
        console.log("RESPONSE:", err.response);
        console.log("REQUEST:", err.request);
        console.log("CONFIG:", err.config);
    } finally {
        isSubmitting.value = false
    }
}


watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        Object.assign(form, initialFormState)
        districts.value = []
        upazilas.value = []
        policeStations.value = []
        fetchDivisions() 
    }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>