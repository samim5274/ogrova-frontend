<template>
    <footer class="mt-16 bg-slate-50 dark:bg-[#070708] border-t border-slate-200/60 dark:border-slate-900 transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
            
            <!-- 1. INTEGRATED PREMIUM NEWSLETTER CARD -->
            <div class="relative overflow-hidden rounded-2xl p-8 md:p-12 border transition-all duration-500 mb-16
                        bg-white border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.02)]
                        dark:bg-[#0c0c0e] dark:border-slate-800/60 dark:shadow-2xl">
                
                <!-- Dynamic Glow Orbs (Light: Emerald | Dark: Orange) -->
                <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-500 bg-emerald-100/50 dark:bg-orange-500/10"></div>
                <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] rounded-full blur-[90px] transition-colors duration-500 bg-slate-100 dark:bg-emerald-500/5"></div>

                <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div class="max-w-xl text-center lg:text-left">
                        <span class="inline-block px-3.5 py-1 mb-4 text-[9px] font-black tracking-[0.2em] uppercase rounded-full border transition-all duration-300
                                    text-emerald-600 bg-emerald-50 border-emerald-100 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/20">
                            Newsletter
                        </span>
                        <h2 class="text-3xl md:text-4xl font-black mb-4 leading-[1.15] transition-colors text-slate-900 dark:text-white">
                            Stay ahead with <br class="hidden md:block"/> 
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-orange-500 dark:to-amber-400">
                                Exclusive Deals.
                            </span>
                        </h2>
                        <p class="text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400">
                            Join 10,000+ shoppers and get <span class="font-bold text-slate-900 dark:text-white">15% off</span> on your first order. 
                        </p>
                    </div>

                    <!-- Input Form with Dynamic Accents -->
                    <div class="w-full max-w-md">
                        <form @submit.prevent class="relative p-1.5 rounded-2xl flex flex-col sm:flex-row gap-2 transition-all
                                                    bg-slate-100 border border-slate-200/60 shadow-inner dark:bg-slate-900/50 dark:backdrop-blur-xl dark:border-slate-800">
                            <div class="flex-1 flex items-center px-3 py-2 sm:py-0">
                                <i class="fa-regular fa-envelope text-slate-400 dark:text-slate-500 mr-2.5 text-sm"></i>
                                <input 
                                    type="email" 
                                    placeholder="yourname@email.com" 
                                    class="w-full bg-transparent outline-none text-sm font-medium text-slate-900 placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-600"
                                >
                            </div>
                            <button class="transition-all duration-300 font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 group text-xs uppercase tracking-wider text-white shadow-md 
                                         bg-emerald-600 hover:bg-emerald-700 dark:bg-orange-500 dark:hover:bg-orange-600">
                                Subscribe
                                <i class="fa-solid fa-paper-plane text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                            </button>
                        </form>
                        <p class="mt-3 text-center lg:text-left text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                            <i class="fa-solid fa-lock text-[9px] mr-1"></i> We respect your privacy. Safe unsubscribing.
                        </p>
                    </div>
                </div>
            </div>

            <!-- 2. BIG FOOTER MAIN LINKS GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12">
                
                <!-- Profile Section -->
                <div class="lg:col-span-2 space-y-5">
                    <div class="flex items-center gap-2">
                        <div class="h-9 w-9 rounded-xl flex items-center justify-center font-black text-white bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-orange-500 dark:to-amber-500 shadow-md">
                            O
                        </div>
                        <span class="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">Ogrova<span class="text-emerald-600 dark:text-orange-500">.</span></span>
                    </div>
                    <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
                        Your premium multi brand e-commerce destination. Experience unmatched quality, ultraist delivery, and elite support tailored just for you.
                    </p>
                    <!-- Socials -->
                    <div class="flex items-center gap-3 pt-2">
                        <a href="#" class="h-8 w-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:text-white dark:hover:bg-orange-500 hover:border-transparent"><i class="fa-brands fa-facebook-f text-xs"></i></a>
                        <a href="#" class="h-8 w-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:text-white dark:hover:bg-orange-500 hover:border-transparent"><i class="fa-brands fa-x-twitter text-xs"></i></a>
                        <a href="#" class="h-8 w-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:text-white dark:hover:bg-orange-500 hover:border-transparent"><i class="fa-brands fa-instagram text-xs"></i></a>
                    </div>
                </div>

                <!-- Links Grid -->
                <div>
                    <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">Shop Categories</h4>
                    <ul class="space-y-2.5 text-sm font-medium">
                        <li><a href="#" class="text-slate-500 dark:text-slate-400 hover:translate-x-1 transition-all duration-300 inline-block hover:text-emerald-600 dark:hover:text-orange-400">Groceries & Fresh</a></li>
                        <li><a href="#" class="text-slate-500 dark:text-slate-400 hover:translate-x-1 transition-all duration-300 inline-block hover:text-emerald-600 dark:hover:text-orange-400">Premium Electronics</a></li>
                        <li><a href="#" class="text-slate-500 dark:text-slate-400 hover:translate-x-1 transition-all duration-300 inline-block hover:text-emerald-600 dark:hover:text-orange-400">Fashion & Apparel</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">Support</h4>
                    <ul class="space-y-2.5 text-sm font-medium">
                        <li><a href="#" class="text-slate-500 dark:text-slate-400 hover:translate-x-1 transition-all duration-300 inline-block hover:text-emerald-600 dark:hover:text-orange-400">Track Your Order</a></li>
                        <li><a href="#" class="text-slate-500 dark:text-slate-400 hover:translate-x-1 transition-all duration-300 inline-block hover:text-emerald-600 dark:hover:text-orange-400">Returns & Refund</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">Contact Info</h4>
                    <ul class="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <li class="flex items-start gap-2.5"><i class="fa-solid fa-location-dot text-xs text-emerald-600 dark:text-orange-500 mt-1"></i><span>Dhaka, Bangladesh</span></li>
                        <li class="flex items-center gap-2.5"><i class="fa-solid fa-envelope text-xs text-emerald-600 dark:text-orange-500"></i><span class="truncate">info@mercuviax.com</span></li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
</template>