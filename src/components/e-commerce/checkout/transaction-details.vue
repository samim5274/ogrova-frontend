<template>
    <div>
        <div>
            <!-- Alert / Instruction Header -->
            <div class="flex items-start gap-3">
                <div class="flex-shrink-0 bg-amber-500/10 p-2 rounded-lg text-amber-600 dark:text-amber-500">
                    <i class="fa-solid fa-circle-info text-lg"></i>
                </div>
                <div>
                    <h4 class="text-base font-bold text-slate-800 dark:text-slate-100">
                        অগ্রিম পেমেন্ট সম্পন্ন করে নিচের তথ্যগুলো পূরণ করুন
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        আপনার অর্ডারটি সফলভাবে কনফার্ম করতে অনুগ্রহ করে নিচের যেকোনো একটি পেমেন্ট মাধ্যমে নির্ধারিত ডেলিভারি চার্জ অথবা অগ্রিম মূল্য পাঠাতে পারেন। টাকা পাঠানো শেষ হলে সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন।
                    </p>
                </div>
            </div>

            <hr class="border-slate-100 dark:border-slate-800/60 my-4" />

            <!-- MFS Wallet Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <!-- bKash -->
                <div class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div class="w-9 h-9 rounded-lg bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center font-bold text-xs text-pink-600 dark:text-pink-400 flex-shrink-0">
                        bK
                    </div>
                    <div class="truncate">
                        <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">bKash (Personal)</p>
                        <p class="text-xs font-mono font-bold text-slate-700 dark:text-slate-200">01762164746</p>
                    </div>
                </div>

                <!-- Nagad -->
                <div class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div class="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center font-bold text-xs text-orange-600 dark:text-orange-400 flex-shrink-0">
                        Ng
                    </div>
                    <div class="truncate">
                        <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Nagad (Personal)</p>
                        <p class="text-xs font-mono font-bold text-slate-700 dark:text-slate-200">01762164746</p>
                    </div>
                </div>

                <!-- Rocket -->
                <div class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div class="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/20 flex items-center justify-center font-bold text-xs text-purple-600 dark:text-purple-400 flex-shrink-0">
                        Rk
                    </div>
                    <div class="truncate">
                        <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Rocket (Personal)</p>
                        <p class="text-xs font-mono font-bold text-slate-700 dark:text-slate-200">017621647466</p>
                    </div>
                </div>
            </div>

            <!-- Bank Account Details Card -->
            <div class="mt-4 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/20 dark:bg-blue-950/10">
                <div class="flex items-center gap-2 text-blue-700 dark:text-blue-400 mb-3">
                    <i class="fa-solid fa-building-columns text-sm"></i>
                    <span class="text-xs font-bold uppercase tracking-wider">Bank Transfer Information</span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="flex flex-col bg-white/60 dark:bg-slate-900/40 p-2.5 rounded-lg border border-slate-100/80 dark:border-slate-800/60">
                        <span class="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">Bank Name</span>
                        <span class="font-bold text-slate-700 dark:text-slate-200 mt-0.5">Islami Bank Bangladesh PLC</span>
                    </div>
                    <div class="flex flex-col bg-white/60 dark:bg-slate-900/40 p-2.5 rounded-lg border border-slate-100/80 dark:border-slate-800/60">
                        <span class="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">Account Name</span>
                        <span class="font-bold text-slate-700 dark:text-slate-200 mt-0.5">Your Company/Name</span>
                    </div>
                    <div class="flex flex-col sm:col-span-2 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <span class="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">Account Number</span>
                        <span class="font-mono text-sm font-bold text-emerald-600 dark:text-orange-400 tracking-wider mt-0.5">2050XXXXXXXXXXXXX</span>
                    </div>
                    <div class="flex flex-col bg-white/60 dark:bg-slate-900/40 p-2.5 rounded-lg border border-slate-100/80 dark:border-slate-800/60">
                        <span class="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">Branch</span>
                        <span class="font-semibold text-slate-600 dark:text-slate-300 mt-0.5">Dhaka Main Branch</span>
                    </div>
                    <div class="flex flex-col bg-white/60 dark:bg-slate-900/40 p-2.5 rounded-lg border border-slate-100/80 dark:border-slate-800/60">
                        <span class="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">Routing Number</span>
                        <span class="font-mono font-semibold text-slate-600 dark:text-slate-300 mt-0.5">125XXXXXXXX</span>
                    </div>
                </div>
            </div>

            <!-- Note Section -->
            <div class="mt-4 flex items-start gap-2 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.06] p-3 rounded-xl border border-emerald-500/10">
                <span class="flex h-2 w-2 translate-y-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <p class="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong class="text-emerald-600 dark:text-emerald-500 font-bold">নির্দেশনা:</strong> সফলভাবে সেন্ড মানি বা ব্যাংক ট্রান্সফার করার পর, যে পেমেন্ট মাধ্যমটি ব্যবহার করেছেন তা সিলেক্ট করুন এবং নিচের ফর্মে পেমেন্টের সঠিক তথ্যগুলো সাবমিট করুন।
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>