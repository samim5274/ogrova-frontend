<template>
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4 max-w-lg mx-auto">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
            Security Settings
        </h2>

        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6">
            <!-- Alert Messages -->
            <div v-if="errorMessage" class="p-3 rounded-xl bg-red-50 text-red-600 text-xs dark:bg-red-950/50 dark:text-red-400">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage" class="p-3 rounded-xl bg-green-50 text-green-600 text-xs dark:bg-green-950/50 dark:text-green-400">
                {{ successMessage }}
            </div>

            <!-- Current Password -->
            <div class="space-y-1">
                <label class="text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                <div class="relative">
                    <input 
                        v-model="form.current_password" 
                        :type="showCurrentPassword ? 'text' : 'password'"
                        class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                        placeholder="••••••••"
                    />
                    <button 
                        type="button"
                        @click="showCurrentPassword = !showCurrentPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-500 transition-colors">
                        <i v-if="!showCurrentPassword" class="fa-solid fa-eye h-5 w-5"></i>
                        <i v-else class="fa-solid fa-eye-slash h-5 w-5"></i>
                    </button>
                </div>
            </div>

            <!-- New Password -->
            <div class="space-y-1">
                <label class="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                <div class="relative">
                    <input 
                        v-model="form.password" 
                        :type="showNewPassword ? 'text' : 'password'"
                        :class="[
                            'w-full px-4 py-2.5 rounded-xl border bg-transparent focus:ring-2 outline-none transition-all dark:text-white',
                            form.password_confirmation && !isMatched ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        ]" 
                        placeholder="••••••••"
                    />
                    <button 
                        type="button"
                        @click="showNewPassword = !showNewPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-500 transition-colors">
                        <i v-if="!showNewPassword" class="fa-solid fa-eye h-5 w-5"></i>
                        <i v-else class="fa-solid fa-eye-slash h-5 w-5"></i>
                    </button>
                </div>
                
                <!-- Hints/Validation Checks -->
                <div class="mt-2 flex flex-wrap gap-2">
                    <span :class="isMinLength ? 'text-green-500 font-medium' : 'text-slate-400'" class="text-[11px] flex items-center transition-colors">
                        <span class="mr-1">●</span> 8+ Digits
                    </span>
                    <span :class="hasLetter ? 'text-green-500 font-medium' : 'text-slate-400'" class="text-[11px] flex items-center transition-colors">
                        <span class="mr-1">●</span> Character
                    </span>
                    <span :class="hasNumber ? 'text-green-500 font-medium' : 'text-slate-400'" class="text-[11px] flex items-center transition-colors">
                        <span class="mr-1">●</span> Number
                    </span>
                    <span :class="hasSpecialChar ? 'text-green-500 font-medium' : 'text-slate-400'" class="text-[11px] flex items-center transition-colors">
                        <span class="mr-1">●</span> Special Char
                    </span>
                </div>
            </div>

            <!-- Confirm Password -->
            <div class="space-y-1">
                <label class="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
                <div class="relative">
                    <input 
                        v-model="form.password_confirmation" 
                        :type="showNewPassword ? 'text' : 'password'" 
                        :class="[
                            'w-full px-4 py-2.5 rounded-xl border bg-transparent focus:ring-2 outline-none transition-all dark:text-white',
                            form.password_confirmation && !isMatched ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        ]" 
                        placeholder="••••••••" 
                    />
                    <button 
                        type="button"
                        @click="showNewPassword = !showNewPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-500 transition-colors">
                        <i v-if="!showNewPassword" class="fa-solid fa-eye h-5 w-5"></i>
                        <i v-else class="fa-solid fa-eye-slash h-5 w-5"></i>
                    </button>
                </div>
                <p v-if="form.password_confirmation && !isMatched" class="text-xs text-red-500 mt-1">
                    Passwords do not match.
                </p>
                <p v-if="form.password_confirmation && isMatched" class="text-xs text-green-500 mt-1">
                    Passwords matched!
                </p>
            </div>

            <!-- Submit Button -->
            <button 
                type="submit" 
                :disabled="isSubmitting || !isValidForm"
                class="w-full py-2.5 px-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                <span v-if="isSubmitting">Updating...</span>
                <span v-else>Update Password</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import api from '../../../services/api';

// Form Data State
const form = reactive({
    current_password: '',
    password: '',
    password_confirmation: ''
})

// Toggle Password Visibility States
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)

// UI Feedback States
const errorMessage = ref('')
const successMessage = ref('')
const isSubmitting = ref(false)

// Validation
const isMinLength = computed(() => form.password.length >= 8)
const hasLetter = computed(() => /[A-Za-z]/.test(form.password))
const hasNumber = computed(() => /\d/.test(form.password))
const hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(form.password))

const isMatched = computed(() => {
    return form.password !== '' && form.password === form.password_confirmation
})

// Form isValid constraint checking current password presence
const isValidForm = computed(() => {
    return form.current_password.trim() !== '' && 
           isMinLength.value && 
           hasLetter.value && 
           hasNumber.value && 
           hasSpecialChar.value && 
           isMatched.value
})

// Submit Handler
const handleSubmit = async () => {
    errorMessage.value = ''
    successMessage.value = ''
    isSubmitting.value = true

    if (!isValidForm.value) {
        errorMessage.value = 'Please complete all required fields.'
        return
    }

    try {
        const response = await api.patch('/profile/password', {
            current_password: form.current_password,
            password: form.password,
            password_confirmation: form.password_confirmation,
        })

        successMessage.value = 'Password changed successfully!'
        
        // Reset Form
        form.current_password = ''
        form.password = ''
        form.password_confirmation = ''
    } catch (error) {
        // console.log(error.response)
        errorMessage.value = 'There was a problem changing your password. Please try again.'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');

div {
    font-family: 'Hind Siliguri', sans-serif;
}
</style>