<template>
    <div class="py-6">
        
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






const props = defineProps({
    products: {
        type: Array,
        default: () => []
    }
});




const productId = ref(props.products.id);

const form = reactive({
    product_id: productId.value,
    rating: 0,
    title: '',
    review: '',
    images: [] 
})


const hoverRating = ref(0)
const isSubmitting = ref(false)


const imagePreviews = ref([])

// Max 4 validation included
const handleImageUpload = (event) => {
    const files = Array.from(event.target.files)
    
    const availableSlots = 4 - form.images.length

    if (files.length > availableSlots) {
        alert(`You can only upload a maximum of 4 images. Only the first ${availableSlots} were added.`)
    }

    files.slice(0, availableSlots).forEach(file => {
        form.images.push(file)
        imagePreviews.value.push(URL.createObjectURL(file))
    })

    event.target.value = null
}

const removeImage = (index) => {
    form.images.splice(index, 1)
    
    URL.revokeObjectURL(imagePreviews.value[index]) 
    imagePreviews.value.splice(index, 1)
}

const submitReview = async () => {
    if (!form.rating) {
        alert('Please select a rating before submitting.')
        return
    }

    isSubmitting.value = true

    try {
        
        const formData = new FormData()
        formData.append('product_id', form.product_id)
        formData.append('rating', form.rating)
        formData.append('title', form.title)
        formData.append('review', form.review)

        form.images.forEach((image, index) => {
            formData.append(`images[${index}]`, image)
        })

        const response = await api.post('/product-ratings', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        successMsg.value = response.message || 'Review submitted successfully!';
        
        form.rating = 0
        form.title = ''
        form.review = ''
        form.images = []
        imagePreviews.value = []

    } catch (error) {
        console.error('Error submitting review:', error)
        errorMsg.value = error.response?.data?.message || 'Something went wrong. Please try again.';
    } finally {
        isSubmitting.value = false
    }
}











// default image
const defaultProductImage = "/images/product/default-product.png";



</script>

<style>

</style>