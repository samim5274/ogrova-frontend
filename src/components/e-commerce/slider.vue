<template>
  <section class="relative w-full overflow-hidden px-4 py-6 transition-colors duration-300">
    <div class="container mx-auto max-w-7xl">
      <div class="relative h-[320px] md:h-[520px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-white/5">
        
        <!-- Wrapper for Slides -->
        <div 
          class="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="min-w-full h-full relative group/slide flex-shrink-0">
            
            <!-- Image -->
            <img 
              :src="slide.image" 
              :alt="slide.title" 
              class="w-full h-full object-center select-none transform scale-100 transition-transform duration-[2000ms] group-hover/slide:scale-105">
            
            <!-- Cinematic Overlay Content -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-slate-950/85 lg:via-slate-950/30 lg:to-transparent flex flex-col justify-end p-6 md:p-14 lg:p-20 text-white">
              
              <!-- Tag -->
              <span class="inline-block text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg w-max mb-4 shadow-sm
                          bg-[#16A34A] dark:bg-[#F97316]">
                {{ slide.tag }}
              </span>
              
              <!-- Title -->
              <h2 class="text-2xl md:text-5xl font-black tracking-tight max-w-2xl mb-3 md:mb-4 leading-tight md:leading-[1.15] text-white drop-shadow-sm">
                {{ slide.title }}
              </h2>
              
              <!-- Description -->
              <p class="text-xs md:text-base text-slate-300 max-w-xl font-normal leading-relaxed hidden sm:block opacity-90 mb-5 md:mb-7">
                {{ slide.description }}
              </p>

              <!-- Premium Indicator Dots -->
              <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 bg-slate-950/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                <button 
                  v-for="(_, index) in displaySliders" 
                  :key="'dot-'+index"
                  @click="goToSlide(index)"
                  class="h-1.5 rounded-full transition-all duration-500 ease-out"
                  :class="currentSlide === index 
                    ? 'w-7 bg-gradient-to-r from-[#16A34A] to-[#F97316] shadow-sm' 
                    : 'w-2 bg-white/40 hover:bg-white/70'"
                  :aria-label="`Go to slide ${index + 1}`"
                ></button>
              </div>

            </div>
          </div>
        </div>

        <!-- Left/Right Navigation Controllers -->
        <button 
          @click="prevSlide" 
          class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 z-10 group/btn
                bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-lg
                hover:bg-[#16A34A] hover:border-[#16A34A] hover:scale-105">
          <i class="fa-solid fa-chevron-left text-xs md:text-sm transition-transform group-hover/btn:-translate-x-0.5"></i>
        </button>
        
        <button 
          @click="nextSlide" 
          class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 z-10 group/btn
                bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-lg
                hover:bg-[#F97316] hover:border-[#F97316] hover:scale-105">
          <i class="fa-solid fa-chevron-right text-xs md:text-sm transition-transform group-hover/btn:translate-x-0.5"></i>
        </button>

        <!-- Indicator Dots -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 bg-slate-950/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
          <button 
            v-for="(_, index) in slides" 
            :key="index"
            @click="currentSlide = index"
            class="h-2 rounded-full transition-all duration-500 ease-out"
            :class="currentSlide === index 
              ? 'w-7 bg-gradient-to-r from-[#16A34A] to-[#F97316] shadow-sm' 
              : 'w-2 bg-white/40 hover:bg-white/70'">
          </button>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sliders = ref([])

const currentSlide = ref(0)
let timer = null

const slides = [
  {
    tag: "New Arrival",
    title: "Next-Gen Wireless Audio Experience",
    description: "Immerse yourself in pure sound with our latest noise-cancelling technology. Limited edition colors available.",
    image: "/images/slide/1.png"
  },
  {
    tag: "Summer Sale",
    title: "Step Up Your Lifestyle Fashion",
    description: "Get up to 50% off on all premium sneakers and sports apparel this season. Move with style.",
    image: "/images/slide/2.png"
  },
  {
    tag: "Limited Stock",
    title: "Elegance on Your Wrist",
    description: "Modern smartwatches designed for both health and luxury. Experience the future of timekeeping.",
    image: "/images/slide/3.png"
  },
  {
    tag: "Limited Stock",
    title: "Elegance on Your Wrist",
    description: "Modern smartwatches designed for both health and luxury. Experience the future of timekeeping.",
    image: "/images/slide/4.png"
  }
]

const displaySliders = computed(() => {
    return sliders.value
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const startTimer = () => {
  timer = setInterval(nextSlide, 5000)
}

const stopTimer = () => {
  if (timer) clearInterval(timer)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style scoped>
.transition-transform {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>