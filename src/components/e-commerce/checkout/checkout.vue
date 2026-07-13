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

















        
        
        <section class="py-12 bg-slate-50 dark:bg-[#0b1120] min-h-screen">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <nav class="flex mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <router-link to="/" class="hover:text-[#16A34A] dark:hover:text-[#F97316] transition-colors">Home</router-link>
                            <span class="mx-2">/</span>
                            <router-link to="/cart">
                                <span class="text-gray-900 dark:text-white hover:text-[#16A34A] dark:hover:text-[#F97316] transition-colors">Shopping Cart</span>
                            </router-link>
                            <span class="mx-2">/</span>
                            <span class="text-gray-900 dark:text-white">Billing address</span>
                        </nav>
                        <h1 class="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                            Billing <span class="text-[#16A34A] dark:text-[#F97316]">Address</span>
                        </h1>
                    </div>
                </div>

                <!-- Empty Cart State -->
                <div v-if="cartItems.length === 0" 
                    class="flex flex-col items-center justify-center py-24 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-dashed border-gray-300 dark:border-gray-700 shadow-xl">
                    <div class="w-24 h-24 bg-[#16A34A]/10 dark:bg-[#F97316]/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fa-solid fa-bag-shopping text-4xl text-[#16A34A] dark:text-[#F97316]"></i>
                    </div>
                    <h2 class="text-2xl font-black text-gray-900 dark:text-white">Your cart feels a bit light</h2>
                    <p class="text-gray-500 dark:text-gray-400 mt-2 font-medium">Add some items to make it happy!</p>
                    <router-link to="/" class="mt-8 px-8 py-3 bg-[#16A34A] dark:bg-[#F97316] text-white rounded-xl font-bold hover:bg-[#148a3e] dark:hover:bg-[#e0640d] transition-all shadow-lg shadow-[#16A34A]/20 dark:shadow-none">
                        Go Shopping
                    </router-link>
                </div>

                <div v-else class="grid lg:grid-cols-12 gap-8">
                    
                    <!-- Left Side: Forms -->
                    <div class="lg:col-span-8 space-y-6">
                        <div class="group relative bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                
                                <!-- default address -->
                                <div class="sm:col-span-2 space-y-3">
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

                                    <!-- Error Message -->
                                    <div v-else-if="errorMsg" class="p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs rounded-xl flex items-center gap-2">
                                        <i class="fa-solid fa-circle-exclamation"></i>
                                        <span>{{ errorMsg }}</span>
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

                                        <!-- Empty State (যখন কোনো অ্যাড্রেস থাকবে না) -->
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

                                <AddressModel 
                                    :is-open="isAddressModalOpen"
                                    :divisions="divisions"
                                    @close="isAddressModalOpen = false"
                                    @address-created="handleAddressCreated"
                                    @success="showSuccess"
                                    @error="showError"
                                />















                                <!-- ==================== Payment method section start ==================== -->
                                <div class="sm:col-span-2">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1 block mb-2">
                                        Payment Method <span class="text-red-500">*</span>
                                    </label>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <!-- Cash on delivery -->
                                        <label class="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all"
                                            :class="form.payment_method === 'cod' ? 'border-[#16A34A] bg-[#16A34A]/5 ring-1 ring-[#16A34A]' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'">
                                            <input type="radio" v-model="form.payment_method" value="cod" class="accent-[#16A34A] h-4 w-4" />
                                            <div class="flex flex-col">
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Cash on Delivery</span>
                                                <span class="text-[10px] text-slate-400 dark:text-slate-500">Pay the price after receiving the product.</span>
                                            </div>
                                        </label>
                                        
                                        <!-- advance payment -->
                                        <label class="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all"
                                            :class="form.payment_method === 'advance' ? 'border-[#16A34A] bg-[#16A34A]/5 ring-1 ring-[#16A34A]' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'">
                                            <input type="radio" v-model="form.payment_method" value="advance" class="accent-[#16A34A] h-4 w-4" />
                                            <div class="flex flex-col">
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Advance Payment</span>
                                                <span class="text-[10px] text-slate-400 dark:text-slate-500">Pay delivery charges and product price in advance.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div v-if="form.payment_method === 'advance'" class="sm:col-span-2 mt-2 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-5">
                                    
                                    <TransactionDetailsSection />

                                    <!-- Payment Type Selection Switch -->
                                    <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm">
                                        <label class="text-xs font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider mb-3">
                                           Choose payment method <span class="text-red-500">*</span>
                                        </label>
                                        <div class="grid grid-cols-2 gap-3">
                                            <!-- Mobile Banking Radio Box -->
                                            <label class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200"
                                                :class="form.trans_payment_method === 'mobile' ? 'border-emerald-500 dark:border-orange-500 bg-emerald-50/[0.15] dark:bg-orange-500/[0.03] ring-1 ring-emerald-500 dark:ring-orange-500' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'">
                                                <input type="radio" v-model="form.trans_payment_method" value="mobile" class="accent-emerald-600 dark:accent-orange-500 h-4 w-4" />
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Mobile Banking</span>
                                            </label>
                                            
                                            <!-- Bank Radio Box -->
                                            <label class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200"
                                                :class="form.trans_payment_method === 'bank' ? 'border-emerald-500 dark:border-orange-500 bg-emerald-50/[0.15] dark:bg-orange-500/[0.03] ring-1 ring-emerald-500 dark:ring-orange-500' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'">
                                                <input type="radio" v-model="form.trans_payment_method" value="bank" class="accent-emerald-600 dark:accent-orange-500 h-4 w-4" />
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Bank Transfer</span>
                                            </label>
                                        </div>
                                    </div>

                                    <hr class="border-slate-100 dark:border-slate-800/60 my-2" />

                                    <!-- Template for Mobile Banking Input -->
                                    <template v-if="form.trans_payment_method === 'mobile'">
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    Account No. <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-phone text-xs"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.account_number"
                                                        placeholder="01XXXXXXXXX"
                                                        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    Transaction ID <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-key text-xs"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.transaction_id"
                                                        placeholder="e.g: BK24X7890"
                                                        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col gap-1.5">
                                            <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                Select Bank Name <span class="text-red-500">*</span>
                                            </label>
                                            <div class="relative flex items-center">
                                                <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                    <i class="fa-solid fa-wallet text-xs"></i>
                                                </span>
                                                
                                                <select 
                                                    v-model="form.bank_name"
                                                    class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500 appearance-none"
                                                    required
                                                >
                                                    <option value="" disabled selected>Select Payment Method</option>
                                                    <option value="Bkash">BKash</option>
                                                    <option value="Nagad">Nagad</option>
                                                    <option value="Rocket">Rocket</option>
                                                </select>
                                                
                                                <span class="absolute right-3 pointer-events-none text-slate-400">
                                                    <i class="fa-solid fa-chevron-down text-xs"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </template>

                                    <!-- Template for Bank Transfer Input -->
                                    <template v-if="form.trans_payment_method === 'bank'">
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    আপনার ব্যাংকের নাম (Your Bank Name) <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-building-columns text-xs"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.bank_name"
                                                        placeholder="যেমন: Islami Bank, BRAC Bank"
                                                        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    অ্যাকাউন্টের নাম (Account Title / Name) <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-user text-xs"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.account_holder_name" 
                                                        placeholder="যে নাম থেকে টাকা পাঠিয়েছেন"
                                                        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    ব্যাংক অ্যাকাউন্ট নম্বর (Account Number) <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-hashtag text-xs"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.account_number"
                                                        placeholder="আপনার ব্যাংক অ্যাকাউন্ট নম্বর"
                                                        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    ট্রানজেকশন আইডি / স্লিপ নম্বর (Optional)
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-receipt text-xs"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.transaction_id"
                                                        placeholder="ব্যাংক ডিপোজিট বা স্লিপ নম্বর (ঐচ্ছিক)"
                                                        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-emerald-500 dark:focus:border-orange-500 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-orange-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </template>

                                </div>

                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div class="sm:col-span-2 flex flex-col gap-1.5">
                                    <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        Remarks / Note (Optional)
                                    </label>
                                    <textarea 
                                        rows="3" 
                                        v-model="form.remarks"
                                        class="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316] resize-none" 
                                        placeholder="Type your external note here..."
                                    ></textarea>
                                </div>
                            </div>

                            <!-- Checkboxes -->
                            <div class="mt-8 space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
    
                                <!-- 1. Same Address Option -->
                                <label class="group flex items-start gap-4 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/50 cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30 dark:hover:border-orange-500/30 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                                    <div class="relative flex items-center mt-0.5">
                                        <input 
                                            type="checkbox" 
                                            v-model="form.sameAddress"
                                            class="peer sr-only" 
                                        />
                                        <!-- Custom Checkbox Design -->
                                        <div class="h-5 w-5 rounded-md border-2 border-slate-300 dark:border-slate-600 bg-transparent transition-all duration-200 flex items-center justify-center peer-checked:bg-emerald-600 peer-checked:border-emerald-600 dark:peer-checked:bg-orange-500 dark:peer-checked:border-orange-500 shadow-sm">
                                            <svg class="h-3 w-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                                            Shipping address is the same as default billing
                                        </span>
                                        <span class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                                            Simplify your delivery process by using one unified address.
                                        </span>
                                    </div>
                                </label>

                                <!-- 2. Save Info Option -->
                                <label class="group flex items-start gap-4 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/50 cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30 dark:hover:border-orange-500/30 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                                    <div class="relative flex items-center mt-0.5">
                                        <input 
                                            type="checkbox" 
                                            v-model="form.saveInfo"
                                            class="peer sr-only" 
                                        />
                                        <!-- Custom Checkbox Design -->
                                        <div class="h-5 w-5 rounded-md border-2 border-slate-300 dark:border-slate-600 bg-transparent transition-all duration-200 flex items-center justify-center peer-checked:bg-emerald-600 peer-checked:border-emerald-600 dark:peer-checked:bg-orange-500 dark:peer-checked:border-orange-500 shadow-sm">
                                            <svg class="h-3 w-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                                                Save this information for next time
                                            </span>
                                            <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-700 dark:bg-orange-500/10 dark:text-orange-500 rounded-md">
                                                Secure
                                            </span>
                                        </div>
                                        <span class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                                            Your checkout details will be encrypted and saved safely to your account.
                                        </span>
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>

                    <!-- Right Side: Payment Details -->
                    <div class="lg:col-span-4">
                        <div class="sticky top-20 bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-300 dark:border-gray-700">
                            <h2 class="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                Payment Details <span class="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#F97316]"></span>
                            </h2>

                            <div class="space-y-4">                                
                                <div class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Subtotal</span>
                                    <span class="text-gray-900 dark:text-white">৳ {{ subtotal.toLocaleString() }}</span>
                                </div>
                                <div class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Shipping</span>
                                    <span
                                        class="text-[#16A34A] dark:text-[#F97316] uppercase font-black"
                                    >
                                        {{ shippingCharge > 0 ? `৳ ${shippingCharge}` : 'FREE' }}
                                    </span>
                                </div>
                                <div class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Point</span>
                                    <span class="text-gray-900 dark:text-white">{{ totalPoint.toLocaleString() }} pts</span>
                                </div>
                                <div class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Estimated Tax</span>
                                    <span class="text-gray-900 dark:text-white">৳ 0</span>
                                </div>
                                <div v-if="couponSuccess" class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Coupon</span>
                                    <span class="text-red-900 dark:text-white" 
                                    v-if="couponData.discount_type === 'percent'">
                                        - ৳ {{ couponData.discount }}%
                                    </span>
                                    <span v-else class="text-red-500">
                                        - ৳ {{ couponData.discount }}
                                    </span>
                                </div>

                                <div class="max-w-md mx-auto p-6 bg-white dark:bg-[#0F172A] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-200">
                                    <!-- Label -->
                                    <label for="coupon" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Have a coupon or promo code?
                                    </label>
                                    
                                    <!-- Input Group -->
                                    <div class="flex items-center gap-2">
                                        <div class="relative flex-grow">
                                            <!-- Tag Icon -->
                                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa-solid fa-tags text-gray-400 dark:text-gray-500"></i>
                                            </div>
                                            
                                            <!-- Input Field -->
                                            <input 
                                                type="text" 
                                                id="coupon" 
                                                v-model="coupon"
                                                placeholder="Enter coupon code" 
                                                class="block w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 dark:bg-slate-800/50 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-colors duration-200"
                                            />
                                        </div>
                                        
                                        <!-- Apply Button -->
                                        <button 
                                            type="button" @click="checkCoupon"
                                            class="px-5 py-2.5 text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] dark:bg-[#F97316] dark:hover:bg-[#EA580C] dark:active:bg-[#C2410C] rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#1F2937] focus:ring-[#16A34A] dark:focus:ring-[#F97316] shadow-sm">
                                            Apply
                                        </button>
                                    </div>

                                    <!-- Success Banner -->
                                    <div
                                        v-if="couponSuccess"
                                        class="mt-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-green-950/20 dark:text-green-400"
                                    >
                                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                                            <i class="fa-solid fa-circle-check text-green-600 dark:text-green-400"></i>
                                        </div>

                                        <div class="flex-1">
                                            <h4 class="font-semibold">Coupon Applied</h4>
                                            <p class="mt-1 text-sm">
                                                {{ couponSuccess }}
                                            </p>
                                            <div
                                                v-if="couponData"
                                                class="mt-2 text-xs text-green-600 dark:text-green-300">
                                                <span class="font-medium">{{ couponData.code }}</span>
                                                •
                                                <span v-if="couponData.discount_type === 'percent'">
                                                    {{ couponData.discount }}% Discount
                                                </span>
                                                <span v-else>
                                                    ৳{{ couponData.discount }} Discount
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Error Banner -->
                                    <div
                                        v-if="couponError"
                                        class="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400"
                                    >
                                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40">
                                            <i class="fa-solid fa-circle-exclamation text-red-600 dark:text-red-400"></i>
                                        </div>
                                        <div class="flex-1">
                                            <h4 class="font-semibold">
                                                Unable to Apply Coupon
                                            </h4>
                                            <p class="mt-1 text-sm">
                                                {{ couponError }}
                                            </p>
                                        </div>
                                    </div>
                                   
                                </div>
                                
                                <div class="h-px bg-gray-100 dark:bg-gray-700 my-6"></div>

                                <div class="flex justify-between items-end">
                                    <span class="text-lg font-black text-gray-900 dark:text-white">Total</span>
                                    <div class="text-right">
                                        <p class="text-3xl font-black text-[#16A34A] dark:text-[#F97316] tracking-tighter">
                                            <!-- ৳ {{ payableAmount.toLocaleString('en-BD') }} || -->
                                            ৳ {{ grandTotal.toLocaleString() }}
                                        </p>
                                        <p class="text-[10px] font-bold text-gray-400 uppercase">VAT Included</p>
                                    </div>
                                </div>

                                <p class="text-center text-xs font-bold text-gray-400 mt-6 flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-shield-check text-[#16A34A] dark:text-[#F97316]"></i>
                                    Secure SSL Encrypted Checkout
                                </p>
                            </div>

                            <div class="mt-8">
                                <!-- <button
                                    @click="confirmPayment"
                                    :disabled="submitting"
                                    class="w-full bg-[#16A34A] dark:bg-[#F97316] hover:bg-[#148a3e] dark:hover:bg-[#e0640d] text-white font-bold py-4 rounded-xl shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
                                    <span>{{ submitting ? 'Processing...' : 'Proceed to Payment' }}</span>
                                    <i v-if="!submitting" class="fa-solid fa-arrow-right"></i>
                                    <i v-else class="fa-solid fa-spinner fa-spin"></i>
                                </button> -->

                                <button
                                    @click="confirmPayment"
                                    :disabled="submitting || orderConfirmed"
                                    class="w-full bg-[#16A34A] dark:bg-[#F97316] hover:bg-[#148a3e] dark:hover:bg-[#e0640d] text-white font-bold py-4 rounded-xl shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">

                                    <span>
                                        {{
                                            orderConfirmed
                                                ? 'Order Confirmed'
                                                : submitting
                                                    ? 'Processing...'
                                                    : 'Proceed to Payment'
                                        }}
                                    </span>

                                    <i
                                        v-if="orderConfirmed"
                                        class="fa-solid fa-circle-check">
                                    </i>

                                    <i
                                        v-else-if="submitting"
                                        class="fa-solid fa-spinner fa-spin">
                                    </i>

                                    <i
                                        v-else
                                        class="fa-solid fa-arrow-right">
                                    </i>

                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>       










        <FooterSection />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../../../services/api.js';

import Message from '../../Message/message.vue';
import Navbar from '../navbar.vue';
import AddressModel from './customer-address.vue';
import FooterSection from '../footer.vue';
import TransactionDetailsSection from './transaction-details.vue';
import { useAuth } from '../../../stores/auth.js';

const { authUser, loadUser } = useAuth();

const route = useRoute();
const router = useRouter();











const loading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');











const isAddressModalOpen = ref(false);
const userAddress = ref([]);
const divisions = ref([]);
const selectedAddressId = ref(null);

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


















// User address
async function getAddress() {
    loading.value = true;
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
        loading.value = false;
    }
}

const selectedAddress = computed(() => {
    return (
        userAddress.value.find(
            item => item.id === selectedAddressId.value
        ) || null
    );
});

const shippingCharge = computed(() => {
    return Number(selectedAddress.value?.delivery_charge ?? 0);
});

















const form = reactive({
    sameAddress: true,
    saveInfo: false,

    payment_method: 'cod',

    // Advance Payment
    trans_payment_method: 'mobile', // mobile | bank

    bank_name: '',
    account_number: '',
    transaction_id: '',
    account_holder_name: '',
    coupon: '',

    remarks: '',
});









// Get order details
const cartItems = ref([]);
async function getCartItems() {
    loading.value = true
    try {
        const res = await api.get(`/cart`);
        cartItems.value = res.data.data;
        // console.log(cartItems.value);
    } catch (err) {
        errorMsg.value =
            err.response?.data?.message ||
            err.response?.data?.error ||
            "Something went wrong.";
    } finally {
        loading.value = false;
    }
}

// Subtotal
const subtotal = computed(() => {
    return (cartItems.value || []).reduce((sum, item) => {
        return sum + (Number(item.price) * Number(item.quantity) - (Number(item.discount) * Number(item.quantity)));
    }, 0);
});

// Total Point
const totalPoint = computed(() => {
    return (cartItems.value || []).reduce((sum, item) => {
        return sum + (Number(item.point) * Number(item.quantity));
    }, 0);
});

// Coupon Discount
const couponDiscount = computed(() => {
    if (!couponSuccess.value || !couponData.value) {
        return 0;
    }

    if (couponData.value.discount_type === 'percent') {
        return (subtotal.value * Number(couponData.value.discount)) / 100;
    }

    return Number(couponData.value.discount);
});

// Total after coupon
const total = computed(() => {
    return Math.max(0, subtotal.value - couponDiscount.value);
});

// Grand Total = Total + Shipping
const grandTotal = computed(() => {
    return total.value + shippingCharge.value;
});









// ================
// Check Coupon
// ================
const coupon = ref('');
const couponLoading = ref(false);
const couponData = ref(null);
const couponSuccess = ref('');
const couponError = ref('');

const checkCoupon = async () => {

    couponSuccess.value = '';
    couponError.value = '';
    couponData.value = null;
    couponLoading.value = true;

    if (!coupon.value.trim()) {
        couponError.value = 'Please enter a coupon code.';
        couponLoading.value = false;
        return;
    }

    try {

        const response = await api.post('/coupon/check', {
            coupon: coupon.value, subtotal: subtotal.value,
        })
        couponData.value = response.data.data;
        couponSuccess.value= response.data.message;
        form.coupon = coupon.value;
    } catch (error) {
        couponData.value = null
        couponError.value =
            error.response?.data?.message ??
            'Something went wrong. Please try again.';
        form.coupon = '';
    } finally {
        couponLoading.value = false
    }
}

const payableAmount = computed(() => {
    return subtotal.value - (couponData.value?.discount_amount || 0);
});












const validationErrors = ref({});
const submitting = ref(false);
const orderConfirmed = ref(false);
async function confirmPayment() {

    if (submitting.value) return;

    const routeReg = route.params.reg;

    if (!routeReg) {
        errorMsg.value = "Something went wrong.";
        return;
    }

    if (!form.payment_method) {
        errorMsg.value = "Please select a payment method.";
        return;
    }

    if (form.payment_method === 'advance') {

        if (!form.trans_payment_method) {
            errorMsg.value = "Please select advance payment method.";
            return;
        }

        if (!form.account_number) {
            errorMsg.value = "Account number is required.";
            return;
        }

        if (!form.transaction_id) {
            errorMsg.value = "Transaction ID is required.";
            return;
        }

        if (!form.bank_name) {
            errorMsg.value = "Please select bKash/Nagad/Rocket.";
            return;
        }
    }


    submitting.value = true;

    const payload = {
        same_address: form.sameAddress,
        save_info: form.saveInfo,

        address_id: selectedAddressId.value,
        payment_method: form.payment_method,
        remarks: form.remarks,
    };

    if (form.payment_method === 'advance') {

        payload.trans_payment_method = form.trans_payment_method;

        payload.bank_name = form.bank_name;

        payload.account_number = form.account_number;

        payload.transaction_id = form.transaction_id;

        if (form.trans_payment_method === 'bank') {
            payload.account_holder_name = form.account_holder_name;
        }
    }

    if (coupon.value && couponSuccess.value)
    {
        payload.coupon = coupon.value;
    }

    try {
        const res = await api.post(`/orders/confirm/${routeReg}`, payload);
        successMsg.value =
            res.data.message || "Your order has been confirmed.";
        orderConfirmed.value = true;
        setTimeout(() => {
            router.push("/");
        }, 1500);
    } catch (err) {
        if (err.response?.status === 422) {

            validationErrors.value = err.response.data.errors || {};

            const errors = err.response.data.errors;

            if (errors && Object.keys(errors).length) {
                errorMsg.value = Object.values(errors)[0][0];
            } else {
                errorMsg.value = err.response.data.message;
            }

            return;
        }

        errorMsg.value =
            err.response?.data?.message ??
            "Something went wrong.";

    } finally {
        if (!orderConfirmed.value) {
            submitting.value = false;
        }
    }
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

onMounted(async () => {
    await Promise.all([
        getAddress(),
        loadUser(),
        getCartItems(),
    ]);
})

</script>

<style>

</style>