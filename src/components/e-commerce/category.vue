<template>
  <section class="py-8 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            class="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-emerald-500/50 transition-all active:scale-95">
            <svg class="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="scroll('right')"
            aria-label="Scroll right"
            class="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-emerald-500/50 transition-all active:scale-95">
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
          @click="selectCategory(cat.id)"
          class="flex-none snap-start group cursor-pointer text-center select-none focus:outline-none">
          
          <!-- Round Shape Image Card -->
          <div 
            class="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-1 border-2 transition-all duration-300 group-hover:scale-105 will-change-transform"
            :class="selectedCategory === cat.id 
              ? 'border-[#16A34A] shadow-md shadow-[#16A34A]/20 bg-emerald-50 dark:bg-emerald-950/30' 
              : 'border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 group-hover:border-emerald-500/50'">
            
            <div class="w-full h-full rounded-full overflow-hidden relative bg-slate-100 dark:bg-slate-800">
              <img 
                :src="cat.image" 
                :alt="cat.name"
                loading="lazy"
                decoding="async"
                width="112"
                height="112"
                class="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <!-- Category Name -->
          <span 
            class="block mt-2.5 text-xs sm:text-sm font-semibold truncate max-w-[80px] sm:max-w-[96px] md:max-w-[112px] transition-colors duration-200"
            :class="selectedCategory === cat.id 
              ? 'text-[#16A34A] font-bold' 
              : 'text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'">
            {{ cat.name }}
          </span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedCategory = ref(null)
const scrollContainer = ref(null)

const categories = ref([
  { id: 1, name: 'Electronics', image: 'https://picsum.photos/seed/cat1/200' },
  { id: 2, name: 'Fashion', image: 'https://picsum.photos/seed/cat2/200' },
  { id: 3, name: 'Groceries', image: 'https://picsum.photos/seed/cat3/200' },
  { id: 4, name: 'Beauty', image: 'https://picsum.photos/seed/cat4/200' },
  { id: 5, name: 'Home Appliances', image: 'https://picsum.photos/seed/cat5/200' },
  { id: 6, name: 'Sports', image: 'https://picsum.photos/seed/cat6/200' },
  { id: 7, name: 'Gadgets', image: 'https://picsum.photos/seed/cat7/200' },
  { id: 8, name: 'Toys', image: 'https://picsum.photos/seed/cat8/200' },
  { id: 9, name: 'Books', image: 'https://picsum.photos/seed/cat9/200' },
])

const selectCategory = (id) => {
  selectedCategory.value = id
}

const scroll = (direction) => {
  if (!scrollContainer.value) return
  const scrollAmount = direction === 'left' ? -300 : 300
  scrollContainer.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
}
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