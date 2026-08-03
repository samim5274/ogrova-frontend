<template>
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
            Security Settings
        </h2>

        <div class="grid grid-cols-1 gap-6">
            <div class="space-y-1">
                <label class="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                <div class="relative">
                    <input 
                        v-model="form.password" 
                        :type="showPassword ? 'text' : 'password'"
                        :class="[
                            'w-full px-4 py-2.5 rounded-xl border bg-transparent focus:ring-2 outline-none transition-all dark:text-white',
                            form.password_confirmation && !isMatched ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        ]" 
                        placeholder="••••••••"
                    />
                    <button 
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-500 transition-colors">
                        <i v-if="!showPassword" class="fa-solid fa-eye h-5 w-5"></i>
                        <i v-else class="fa-solid fa-eye-slash h-5 w-5"></i>
                    </button>
                </div>
                <div class="mt-2 flex flex-wrap gap-2">
                    <span :class="form.password.length >= 8 ? 'text-green-500' : 'text-slate-400'" class="text-[11px] flex items-center">
                        <span class="mr-1">●</span> 8+ Digits
                    </span>
                    <span :class="/[A-Za-z]/.test(form.password) ? 'text-green-500' : 'text-slate-400'" class="text-[11px] flex items-center">
                        <span class="mr-1">●</span> Character
                    </span>
                    <span :class="/\d/.test(form.password) ? 'text-green-500' : 'text-slate-400'" class="text-[11px] flex items-center">
                        <span class="mr-1">●</span> Number
                    </span>
                    <span :class="/[!@#$%^&*]/.test(form.password) ? 'text-green-500' : 'text-slate-400'" class="text-[11px] flex items-center">
                        <span class="mr-1">●</span> Special Char
                    </span>
                </div>
            </div>

            <div class="space-y-1">
                <label class="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
                <div class="relative">
                    <input 
                        v-model="form.password_confirmation" 
                        :type="showPassword ? 'text' : 'password'" 
                        :class="[
                            'w-full px-4 py-2.5 rounded-xl border bg-transparent focus:ring-2 outline-none transition-all dark:text-white',
                            form.password_confirmation && !isMatched ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        ]" 
                        placeholder="••••••••" 
                    />
                    <button 
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-500 transition-colors">
                        <i v-if="!showPassword" class="fa-solid fa-eye h-5 w-5"></i>
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
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// Form Data State
const form = reactive({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
})

// Toggle Password Visibility States
const showCurrent = ref(false)
const showNew = ref(false)
const showConfirm = ref(false)

// UI Feedback States
const errorMessage = ref('')
const successMessage = ref('')
const isSubmitting = ref(false)

// Validation Rules
const isMinLength = computed(() => form.newPassword.length >= 8)
const hasMatch = computed(() => {
    return form.newPassword !== '' && form.newPassword === form.confirmPassword
})

// Submit Handler
const handleSubmit = async () => {
    errorMessage.value = ''
    successMessage.value = ''

    // Validation Check
    if (!isMinLength.value) {
        errorMessage.value = 'The new password must be at least 8 characters long.'
        return
    }

    if (!hasMatch.value) {
        errorMessage.value = 'New password and confirmed password do not match!'
        return
    }

    // Simulate API Call
    isSubmitting.value = true

    try {
        // API 
        await new Promise((resolve) => setTimeout(resolve, 1500))

        successMessage.value = 'Password changed successfully!'
        
        // Form Reset
        form.currentPassword = ''
        form.newPassword = ''
        form.confirmPassword = ''
    } catch (error) {
        errorMessage.value = 'There was a problem changing your password. Please try again.'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');

    .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f7f6;
    font-family: 'Hind Siliguri', sans-serif;
    padding: 20px;
    }

    .form-card {
    background: #ffffff;
    padding: 35px 30px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 420px;
    }

    h2 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 8px;
    text-align: center;
    }

    .subtitle {
    color: #7f8c8d;
    font-size: 14px;
    text-align: center;
    margin-bottom: 25px;
    line-height: 1.4;
    }

    .input-group {
    margin-bottom: 20px;
    }

    .input-group label {
    display: block;
    color: #34495e;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 6px;
    }

    .password-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    }

    .password-wrapper input {
    width: 100%;
    padding: 12px 45px 12px 14px;
    border: 1px solid #dcdde1;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    transition: all 0.3s ease;
    }

    .password-wrapper input:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);
    }

    .toggle-btn {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    }

    .password-hints {
    background-color: #f8f9fa;
    padding: 12px 15px;
    border-radius: 6px;
    margin-bottom: 20px;
    border-left: 3px solid #3498db;
    }

    .password-hints p {
    font-size: 13px;
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 5px;
    }

    .password-hints ul {
    padding-left: 18px;
    font-size: 12px;
    color: #a0a0a0;
    }

    .password-hints li.active {
    color: #27ae60;
    font-weight: 600;
    }

    .error-text {
    color: #e74c3c;
    font-size: 13px;
    margin-bottom: 15px;
    text-align: center;
    }

    .success-text {
    color: #27ae60;
    font-size: 14px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 600;
    }

    .submit-btn {
    width: 100%;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
    background-color: #2980b9;
    }

    .submit-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    }
</style>