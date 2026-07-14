<template>
    <div class="py-6">
        <!-- =========================================================================
         1. CREATE RATING SECTION
         ========================================================================= -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
            <div class="mb-6 border-b border-slate-100 dark:border-slate-800/60 pb-5">
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">Write a Product Review</h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Share your thoughts and images with other buyers.</p>
            </div>

            <form @submit.prevent="submitReview" class="space-y-5">
                <!-- Star Selection -->
                <div>
                    <div class="flex items-center gap-1.5">
                        <button
                            v-for="star in 5"
                            :key="star"
                            type="button"
                            @click="selectRating(star)">
                            <i
                                class="fa-solid fa-star text-xl transition"
                                :class="star <= review.rating
                                    ? 'text-amber-400'
                                    : 'text-slate-300 dark:text-slate-700'"
                            ></i>
                        </button>

                        <span
                            v-if="review.rating"
                            class="ml-2 text-xs font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800"
                        >
                            {{ ratingText[review.rating] }}
                        </span>

                    </div>
                </div>

                <!-- Title & Body -->
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400 mb-1.5">Review Title</label>
                        <input v-model="review.title" type="text" placeholder="e.g., Premium quality, highly recommended!" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-orange-500 transition-colors">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400 mb-1.5">Detailed Review</label>
                        <textarea v-model="review.review" rows="4" placeholder="Write about product quality, packaging, delivery, etc." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-orange-500 transition-colors resize-none"></textarea>
                    </div>
                </div>

                <!-- Image Upload Component -->
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400 mb-2">
                        Upload Photos (Max 4)
                    </label>

                    <div class="flex flex-wrap gap-3">

                        <!-- Preview -->
                        <div
                            v-for="(image,index) in review.images"
                            :key="index"
                            class="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                            <img
                                :src="image.preview"
                                class="w-full h-full object-cover"
                            >

                            <button
                                type="button"
                                @click="removeImage(index)"
                                class="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white flex items-center justify-center text-[10px]"
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <!-- Upload Button -->
                        <label
                            v-if="review.images.length < 4"
                            class="w-16 h-16 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 hover:border-emerald-500 dark:border-slate-800 dark:hover:border-orange-500 rounded-xl cursor-pointer"
                        >
                            <i class="fa-solid fa-camera text-slate-400"></i>
                            <span class="text-[9px] mt-1">Add</span>

                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                class="hidden"
                                @change="handleImages"
                            >
                        </label>

                    </div>

                    <p class="mt-2 text-xs text-slate-500">
                        {{ review.images.length }}/4 images selected
                    </p>
                </div>

                <!-- Actions -->
                <div class="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <button type="submit" class="px-5 py-2.5 bg-emerald-600 dark:bg-orange-500 hover:bg-emerald-700 dark:hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm">Submit Review</button>
                </div>
            </form>
        </div>
        <!-- =========================================================================
         2. VIEW RATINGS & REVIEWS SECTION 
         ========================================================================= -->
        <div class="space-y-6">
            <!-- Review Section Header -->
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                <div>
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white">Customer Reviews</h2>
                    <div class="flex items-center gap-2 mt-1">
                        <div class="flex text-amber-400 text-xs gap-0.5">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">4.8 out of 5 (24 reviews)</span>
                    </div>
                </div>
            </div>

            <!-- Single Review Item Card -->
            <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-3.5">
                <!-- Review Top Info -->
                <div class="flex items-start justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <!-- User Avatar Placeholder -->
                        <div class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-300">
                            AN
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h4 class="text-sm font-semibold text-slate-800 dark:text-slate-200">Asif Nawaz</h4>
                                <!-- Verified Purchase Badge -->
                                <span class="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                    <i class="fa-solid fa-circle-check"></i> Verified
                                </span>
                            </div>
                            <p class="text-[11px] text-slate-400">Reviewed 2 days ago</p>
                        </div>
                    </div>

                    <!-- Product Rating Given -->
                    <div class="flex text-amber-400 text-[10px] gap-0.5 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                </div>

                <!-- Review Text Content -->
                <div class="space-y-1.5">
                    <h5 class="text-sm font-bold text-slate-900 dark:text-white">Outstanding quality, worth every penny!</h5>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        The item arrived incredibly fast. Packaging was top-notch. The product works seamlessly and the materials used feel premium. Will definitely purchase again.
                    </p>
                </div>

                <!-- Review Attached Images Layout -->
                <div class="flex gap-2 pt-1">
                    <div class="w-14 h-14 rounded-lg overflow-hidden bg-slate-100 cursor-zoom-in group border border-slate-100 dark:border-slate-800">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <div class="w-14 h-14 rounded-lg overflow-hidden bg-slate-100 cursor-zoom-in group border border-slate-100 dark:border-slate-800">
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=150" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                </div>

                <!-- Admin Note Reply Box (Optional Layout) -->
                <div class="bg-slate-50 dark:bg-slate-950/40 border-l-2 border-slate-300 dark:border-slate-700 p-3 rounded-r-xl mt-3">
                    <div class="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-reply fa-flip-horizontal"></i> Store Response
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        Thank you so much for your wonderful feedback, Asif! We strive to deliver the best experience possible. Enjoy your purchase!
                    </p>
                </div>

                <!-- Review Interaction Footer (Helpful Buttons) -->
                <div class="flex items-center gap-4 pt-3 border-t border-slate-50 dark:border-slate-800/40 text-[11px] text-slate-400 font-medium">
                    <span>Was this review helpful?</span>
                    <div class="flex items-center gap-3">
                        <button class="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-orange-400 transition-colors">
                            <i class="fa-regular fa-thumbs-up"></i> (12)
                        </button>
                        <button class="flex items-center gap-1 hover:text-rose-500 transition-colors">
                            <i class="fa-regular fa-thumbs-down"></i> (1)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api, { makeImg } from '../../../services/api';
import Message from '../../Message/message.vue';

const route = useRoute();
const router = useRouter();


const loading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');


const review = ref({
    rating: 0,
    title: '',
    review: '',
    images: [],
});

const handleImages = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    // Max 4 images
    if (review.value.images.length + files.length > 4) {
        alert('You can upload a maximum of 4 images.');
        e.target.value = '';
        return;
    }

    files.forEach(file => {
        if (!file.type.startsWith('image/')) return;
        review.value.images.push({
            file,
            preview: URL.createObjectURL(file),
        });
    });

    e.target.value = '';
};

const removeImage = (index) => {
    URL.revokeObjectURL(review.value.images[index].preview);
    review.value.images.splice(index, 1);

};

const ratingText = {
    1: 'Very Bad',
    2: 'Bad',
    3: 'Average',
    4: 'Good',
    5: 'Excellent',
};

const selectRating = (star) => {
    review.value.rating = star;
};


const submitReview = async () => {

    if (!review.value.rating) {
        alert('Please select a rating.');
        return;
    }

    const formData = new FormData();

    formData.append('rating', review.value.rating);
    formData.append('title', review.value.title);
    formData.append('review', review.value.review);

    review.value.images.forEach((image) => {
        formData.append('images[]', image.file);
    });

    try {

        const res = await api.post('/ratings/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        alert('Review submitted successfully.');

        review.value = {
            rating: 0,
            title: '',
            review: '',
            images: [],
        };

    } catch (err) {
        console.error(err);
        errorMsg.value = err || 'Failed';
    }

};

</script>

<style>

</style>