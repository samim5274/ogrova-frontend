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
                                <!-- Full Name -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" v-model="form.name"
                                        class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none" 
                                        placeholder="Enter your full name" 
                                    />
                                </div>

                                <!-- Phone Number -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Phone Number
                                    </label>
                                    <div class="relative">
                                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+88</span>
                                        <input 
                                            type="text" v-model="form.phone"
                                            class="w-full pl-12 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none" 
                                            placeholder="01XXXXXXXXX" 
                                        />
                                    </div>
                                </div>

                                <!-- Email Address -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" v-model="form.email"
                                        class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none" 
                                        placeholder="example@mail.com" 
                                    />
                                </div>

                                <!-- User ID -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        User ID
                                    </label>
                                    <input 
                                        type="text" readonly v-model="form.user_id"
                                        class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none" 
                                        placeholder="VG-ABCD1G9" 
                                    />
                                </div>

                                <!-- Division -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Divison
                                    </label>
                                    <select v-model="selectedDivision" @change="handleDivisionChange" class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none">
                                        <option :value="null" selected disabled>-- Select Division --</option>
                                        <option v-for="division in divisions" :key="division.id" :value="division.id">
                                            {{ division.name }}
                                        </option>
                                    </select>
                                </div>
                                

                                <!-- District -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        District
                                    </label>
                                    <select v-model="selectedDistrict" @change="handleDistrictChange" :disabled="!selectedDivision" class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none">
                                        <option :value="null" selected disabled>-- Select District --</option>
                                        <option v-for="district in districts" :key="district.id" :value="district.id">
                                            {{ district.name }}
                                        </option>
                                    </select>
                                </div>

                                <!-- Upazila -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        District
                                    </label>
                                    <select v-model="selectedUpazila" @change="handleUpazilaChange" :disabled="!selectedDistrict" class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none">
                                        <option :value="null" selected disabled>-- Select Upazila --</option>
                                        <option v-for="upazila in upazilas" :key="upazila.id" :value="upazila.id">
                                            {{ upazila.name }}
                                        </option>
                                    </select>
                                </div>

                                <!-- Police Station -->
                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Police Station (Optional)
                                    </label>
                                    <select v-model="selectedPoliceStation" :disabled="!selectedUpazila" class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none">
                                        <option :value="null" selected disabled>-- Select Police Station --</option>
                                        <option v-for="station in policeStations" :key="station.id" :value="station.id">
                                            {{ station.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Default Address
                                    </label>
                                    <select v-model="selectedAddressId" @change="handleAddressChange" class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none">
                                        <option
                                            v-for="address in userAddress"
                                            :key="address.id"
                                            :value="address.id"
                                        >
                                            {{ address.label }}
                                            {{ address.is_default ? '(Default)' : '' }}
                                        </option>
                                    </select>
                                </div>
                                

                                <!-- Address -->
                                <div class="sm:col-span-2 space-y-1">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                                        Shipping Address
                                    </label>
                                    <textarea 
                                        rows="3" v-model="form.address"
                                        class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#16A34A]/20 dark:focus:ring-[#F97316]/20 focus:border-[#16A34A] dark:focus:border-[#F97316] transition-all outline-none resize-none" 
                                        placeholder="Enter your detailed shipping address"
                                    ></textarea>
                                </div>

                                <!-- ==================== পেমেন্ট মেথড সেকশন শুরু ==================== -->
                                <div class="sm:col-span-2">
                                    <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1 block mb-2">
                                        Payment Method <span class="text-red-500">*</span>
                                    </label>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <!-- ক্যাশ অন ডেলিভারি অপশন -->
                                        <label class="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all"
                                            :class="form.payment_method === 'cod' ? 'border-[#16A34A] bg-[#16A34A]/5 ring-1 ring-[#16A34A]' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'">
                                            <input type="radio" v-model="form.payment_method" value="cod" class="accent-[#16A34A] h-4 w-4" />
                                            <div class="flex flex-col">
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Cash on Delivery</span>
                                                <span class="text-[10px] text-slate-400 dark:text-slate-500">পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন</span>
                                            </div>
                                        </label>
                                        
                                        <!-- অগ্রিম পেমেন্ট অপশন -->
                                        <label class="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all"
                                            :class="form.payment_method === 'advance' ? 'border-[#16A34A] bg-[#16A34A]/5 ring-1 ring-[#16A34A]' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'">
                                            <input type="radio" v-model="form.payment_method" value="advance" class="accent-[#16A34A] h-4 w-4" />
                                            <div class="flex flex-col">
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Advance Payment</span>
                                                <span class="text-[10px] text-slate-400 dark:text-slate-500">ডেলিভারি চার্জ অগ্রিম প্রদান করুন</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div v-if="form.payment_method === 'advance'" class="sm:col-span-2 mt-2 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 space-y-4">
    
                                    <div>
                                        <div class="flex items-start gap-3">
                                            <div class="flex-shrink-0 bg-[#F97316]/10 p-2 rounded-lg text-[#F97316]">
                                                <i class="fa-solid fa-triangle-exclamation"></i>
                                            </div>
                                            <div>
                                                <h4 class="text-base font-bold text-slate-800 dark:text-slate-100">
                                                    অর্ডারটি কনফার্ম করতে ডেলিভারি চার্জ অগ্রিম প্রদান করুন
                                                </h4>
                                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                                    ভুয়া অর্ডার প্রতিরোধ এবং আপনার পার্সেলটি নিশ্চিত করতে অনুগ্রহ করে নিচের যেকোনো একটি পার্সোনাল নম্বরে ডেলিভারি চার্জ সেন্ড মানি করুন।
                                                </p>
                                            </div>
                                        </div>

                                        <hr class="border-slate-100 dark:border-slate-800/60 my-4" />

                                        <div class="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3">
                                            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-[#16A34A]/30">
                                                <div class="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center font-bold text-xs text-pink-600 dark:text-pink-400 flex-shrink-0">
                                                    bK
                                                </div>
                                                <div class="truncate">
                                                    <p class="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">bKash (Personal)</p>
                                                    <p class="text-xs font-bold text-slate-700 dark:text-slate-200">01762164746</p>
                                                </div>
                                            </div>

                                            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-[#16A34A]/30">
                                                <div class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center font-bold text-xs text-orange-600 dark:text-orange-400 flex-shrink-0">
                                                    Ng
                                                </div>
                                                <div class="truncate">
                                                    <p class="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Nagad (Personal)</p>
                                                    <p class="text-xs font-bold text-slate-700 dark:text-slate-200">01762164746</p>
                                                </div>
                                            </div>

                                            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-[#16A34A]/30">
                                                <div class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center font-bold text-xs text-purple-600 dark:text-purple-400 flex-shrink-0">
                                                    Rk
                                                </div>
                                                <div class="truncate">
                                                    <p class="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Rocket (Personal)</p>
                                                    <p class="text-xs font-bold text-slate-700 dark:text-slate-200">017621647466</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4 p-3.5 rounded-xl border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20">
                                            <div class="flex items-center gap-2 text-[#1E40AF] dark:text-blue-400 mb-2.5">
                                                <i class="fa-solid fa-building-columns"></i>
                                                <span class="text-xs font-bold uppercase tracking-wide">Bank Account Transfer</span>
                                            </div>
                                            
                                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs">
                                                <div class="flex flex-col">
                                                    <span class="text-slate-400 dark:text-slate-500 text-[11px] font-medium uppercase tracking-wider">Bank Name</span>
                                                    <span class="font-bold text-slate-700 dark:text-slate-200">Islami Bank Bangladesh PLC</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-slate-400 dark:text-slate-500 text-[11px] font-medium uppercase tracking-wider">Account Name</span>
                                                    <span class="font-bold text-slate-700 dark:text-slate-200">Your Company/Name</span>
                                                </div>
                                                <div class="flex flex-col sm:col-span-2 bg-white dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800 mt-1">
                                                    <span class="text-slate-400 dark:text-slate-500 text-[10px] font-medium uppercase tracking-wider">Account Number</span>
                                                    <span class="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider">2050XXXXXXXXXXXXX</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-slate-400 dark:text-slate-500 text-[11px] font-medium uppercase tracking-wider">Branch</span>
                                                    <span class="font-semibold text-slate-600 dark:text-slate-300">Dhaka Main Branch</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-slate-400 dark:text-slate-500 text-[11px] font-medium uppercase tracking-wider">Routing Number</span>
                                                    <span class="font-mono font-semibold text-slate-600 dark:text-slate-300">125XXXXXXXX</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="mt-4 flex items-start gap-2 bg-[#16A34A]/5 dark:bg-[#16A34A]/10 p-3 rounded-lg border border-[#16A34A]/10">
                                            <span class="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#16A34A] flex-shrink-0"></span>
                                            <p class="text-xs font-medium text-slate-600 dark:text-slate-300 leading-normal">
                                                <strong class="text-[#16A34A] dark:text-[#16A34A]">বিশেষ দ্রষ্টব্য:</strong> ব্যাংক বা মোবাইল ব্যাংকিংয়ে টাকা পাঠানোর পর আপনার পেমেন্টকৃত নম্বর/নাম এবং Transaction ID (TrxID) নিচের ইনপুট বক্সে লিখে অর্ডার সম্পন্ন করুন।
                                            </p>
                                        </div>
                                    </div>

                                    <div class="mt-5 mb-4">
                                        <label class="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                                            পেমেন্টের মাধ্যম নির্বাচন করুন <span class="text-red-500">*</span>
                                        </label>
                                        <div class="grid grid-cols-2 gap-3">
                                            <label class="flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all"
                                                :class="form.d_payment_method === 'mobile' ? 'border-[#16A34A] dark:border-[#E0640D] bg-[#16A34A]/5 dark:bg-[#E0640D]/5' : 'border-slate-200 dark:border-slate-800'">
                                                <input type="radio" v-model="form.d_payment_method" value="mobile" class="accent-[#16A34A]" />
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Mobile Banking</span>
                                            </label>
                                            
                                            <label class="flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all"
                                                :class="form.d_payment_method === 'bank' ? 'border-[#16A34A] dark:border-[#E0640D] bg-[#16A34A]/5 dark:bg-[#E0640D]/5' : 'border-slate-200 dark:border-slate-800'">
                                                <input type="radio" v-model="form.d_payment_method" value="bank" class="accent-[#16A34A]" />
                                                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Bank Transfer</span>
                                            </label>
                                        </div>
                                    </div>

                                    <hr class="border-slate-100 dark:border-slate-800/60 my-4" />

                                    <template v-if="form.d_payment_method === 'mobile'">
                                        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    যে নম্বর থেকে টাকা পাঠিয়েছেন <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-phone h-4 w-4"></i>
                                                    </span>
                                                    <input 
                                                        type="tel" 
                                                        v-model="form.mobile_number"
                                                        placeholder="017XXXXXXXX"
                                                        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316]"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    ট্রানজেকশন আইডি (TrxID) <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-shield-halved h-4 w-4"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.transaction_id"
                                                        placeholder="ট্রানজেকশন. BK24X7890"
                                                        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316]"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </template>

                                    <template v-if="form.d_payment_method === 'bank'">
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    আপনার ব্যাংকের নাম <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-building-columns h-4 w-4"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.bank_name"
                                                        placeholder="যেমন: Islami Bank, BRAC Bank"
                                                        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316]"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    অ্যাকাউন্ট নাম (Account Name) <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-user h-4 w-4"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.account_holder_name" 
                                                        placeholder="যে নাম থেকে টাকা পাঠিয়েছেন"
                                                        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316]"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    অ্যাকাউন্ট নম্বর <span class="text-red-500">*</span>
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-file-lines h-4 w-4"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.account_number"
                                                        placeholder="আপনার ব্যাংক অ্যাকাউন্ট নম্বর"
                                                        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316]"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="flex flex-col gap-1.5">
                                                <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    ব্যাংক ট্রানজেকশন আইডি / স্লিপ নম্বর
                                                </label>
                                                <div class="relative flex items-center">
                                                    <span class="absolute left-3 text-slate-400 dark:text-slate-500">
                                                        <i class="fa-solid fa-charging-station h-4 w-4"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        v-model="form.transaction_id"
                                                        placeholder="ক্রাফট বা রেফারেন্স আইডি (ঐচ্ছিক)"
                                                        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#16A34A] dark:focus:border-[#F97316] focus:ring-1 focus:ring-[#16A34A] dark:focus:ring-[#F97316]"
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
                            <div class="mt-8 space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                                
                                <label class="group flex items-start gap-3 p-2 rounded-lg cursor-pointer select-none transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                    <div class="relative flex items-center mt-0.5">
                                        <input 
                                            type="checkbox" 
                                            v-model="form.sameAddress"
                                            class="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent transition-all checked:bg-[#16A34A] checked:border-[#16A34A] dark:checked:bg-[#F97316] dark:checked:border-[#F97316]" 
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">Shipping address is the same as my billing address</span>
                                        <span class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Simplify delivery by using one address</span>
                                    </div>
                                </label>

                                <label class="group flex items-start gap-3 p-2 rounded-lg cursor-pointer select-none transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                    <div class="relative flex items-center mt-0.5">
                                        <input 
                                            type="checkbox" 
                                            v-model="form.saveInfo"
                                            class="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent transition-all checked:bg-[#16A34A] checked:border-[#16A34A] dark:checked:bg-[#F97316] dark:checked:border-[#F97316]" 
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">Save this information for next time</span>
                                            <span class="text-[9px] px-1.5 py-0.5 bg-[#16A34A]/10 dark:bg-[#F97316]/10 text-[#16A34A] dark:text-[#F97316] rounded-md font-bold tracking-wider uppercase">Secure</span>
                                        </div>
                                        <span class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Your data will be encrypted and saved safely</span>
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
                                    <span class="text-[#16A34A] dark:text-[#F97316] uppercase font-black">FREE</span>
                                </div>
                                <div class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Point</span>
                                    <span class="text-gray-900 dark:text-white">{{ totalPoint.toLocaleString() }} pts</span>
                                </div>
                                <div class="flex justify-between font-bold text-sm">
                                    <span class="text-gray-500">Estimated Tax</span>
                                    <span class="text-gray-900 dark:text-white">৳ 0</span>
                                </div>
                                
                                <div class="h-px bg-gray-100 dark:bg-gray-700 my-6"></div>

                                <div class="flex justify-between items-end">
                                    <span class="text-lg font-black text-gray-900 dark:text-white">Total</span>
                                    <div class="text-right">
                                        <p class="text-3xl font-black text-[#16A34A] dark:text-[#F97316] tracking-tighter">
                                            ৳ {{ total.toLocaleString() }}
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
                                <button
                                    @click="confirmPayment"
                                    :disabled="submitting"
                                    class="w-full bg-[#16A34A] dark:bg-[#F97316] hover:bg-[#148a3e] dark:hover:bg-[#e0640d] text-white font-bold py-4 rounded-xl shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
                                    <span>{{ submitting ? 'Processing...' : 'Proceed to Payment' }}</span>
                                    <i v-if="!submitting" class="fa-solid fa-arrow-right"></i>
                                    <i v-else class="fa-solid fa-spinner fa-spin"></i>
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
import FooterSection from '../footer.vue';
import { useAuth } from '../../../stores/auth.js';

const { authUser, loadUser } = useAuth();

const route = useRoute();
const router = useRouter();





const divisions = ref([]);
const districts = ref([]);
const upazilas = ref([]);
const policeStations = ref([]);

const selectedDivision = ref(null);
const selectedDistrict = ref(null);
const selectedUpazila = ref(null);
const selectedPoliceStation = ref(null);

async function getDivision() {
    loading.value = true
    try {
        const res = await api.get(`/public/get-division`);
        divisions.value = res.data.data;
    } catch (err) {
        errorMsg.value =
            err.response?.data?.message ||
            err.response?.data?.error ||
            "Something went wrong.";
    } finally {
        loading.value = false;
    }
}

const handleDivisionChange = async () => {
    selectedDistrict.value = null;
    selectedUpazila.value = null;
    selectedPoliceStation.value = null;

    districts.value = [];
    upazilas.value = [];
    policeStations.value = [];

    if (!selectedDivision.value) return;

    await getDistrict();
};

async function getDistrict() {
    loading.value = true;

    try {
        const { data } = await api.get('/public/get-district', {
            params: {
                division_id: selectedDivision.value
            }
        });

        districts.value = data.data ?? [];
    } catch (err) {
        districts.value = [];
        errorMsg.value =
            err.response?.data?.message ||
            "Failed to load districts.";
    } finally {
        loading.value = false;
    }
}

const handleDistrictChange = async () => {
    selectedUpazila.value = null;
    selectedPoliceStation.value = null;

    upazilas.value = [];
    policeStations.value = [];

    if (!selectedDistrict.value) return;

    await getUpazila();
};

async function getUpazila() {
    loading.value = true;

    try {
        const { data } = await api.get('/public/get-upazila', {
            params: {
                district_id: selectedDistrict.value
            }
        });

        upazilas.value = data.data ?? [];
    } catch (err) {
        upazilas.value = [];
        errorMsg.value =
            err.response?.data?.message ||
            "Failed to load upazilas.";
    } finally {
        loading.value = false;
    }
}

const handleUpazilaChange = async () => {
    selectedPoliceStation.value = null;
    policeStations.value = [];

    if (!selectedUpazila.value) return;

    await getPoliceStation();
};

async function getPoliceStation() {
    loading.value = true;

    try {
        const { data } = await api.get('/public/get-police-station', {
            params: {
                upazila_id: selectedUpazila.value
            }
        });

        policeStations.value = data.data ?? [];
    } catch (err) {
        policeStations.value = [];
        errorMsg.value =
            err.response?.data?.message ||
            "Failed to load police stations.";
    } finally {
        loading.value = false;
    }
}


onMounted(async () => {
    await Promise.all([
        getAddress(),
        getDivision(),
        loadUser(),
        fillUserForm(),
        getCartItems(),
    ]);
})
</script>

<style>

</style>