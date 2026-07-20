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

            <slider />
            <Main />
            <NewsLatter />
            <footerSection />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHead } from '@unhead/vue';
import { useRouter } from 'vue-router';

import Navbar from './navbar.vue';
import slider from './slider.vue';
import Main from './main.vue';
import NewsLatter from './news-latter.vue';
import footerSection from "./footer.vue";

const router = useRouter()

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
    router.push({
        path: "/search",
        query: { q: query }
    });
}

useHead({
    title: 'Buy Electronics, Fashion, Grocery & More | Ogrova Bangladesh',

    meta: [
        {
            name: 'description',
            content: 'Shop original electronics, fashion, grocery, cosmetics, mobiles, laptops and more at the best price in Bangladesh. Enjoy fast delivery, Cash on Delivery and secure online payment with Ogrova.'
        },
        {
            name: 'keywords',
            content: 'Ogrova, Online Shopping Bangladesh, Electronics, Fashion, Grocery, Mobile, Laptop, Cosmetics, Best Price Bangladesh'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Buy Electronics, Fashion, Grocery & More | Ogrova Bangladesh'
        },
        {
            property: 'og:description',
            content: 'Shop original products online with fast delivery and Cash on Delivery across Bangladesh.'
        },
        {
            property: 'og:type',
            content: 'website'
        },

        // Twitter
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Buy Electronics, Fashion, Grocery & More | Ogrova Bangladesh'
        },
        {
            name: 'twitter:description',
            content: 'Shop original products online with fast delivery and Cash on Delivery across Bangladesh.'
        }
    ]
})

onMounted(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }
});
</script>