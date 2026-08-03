<template>
    <div class="form-container">
        <div class="form-card">
            <h2>Change Password</h2>
            <p class="subtitle">
                Choose a strong password to secure your account.
            </p>

           
            <form @submit.prevent="handleSubmit">
                <!-- Current Password -->
                <div class="input-group">
                    <label for="current-password">Current Password</label>
                    <div class="password-wrapper">
                        <input
                        :type="showCurrent ? 'text' : 'password'"
                        id="current-password"
                        v-model="form.currentPassword"
                        placeholder="••••••••"
                        required
                        />
                        <button
                        type="button"
                        class="toggle-btn"
                        @click="showCurrent = !showCurrent"
                        >
                        {{ showCurrent ? '🙈' : '👁️' }}
                        </button>
                    </div>
                </div>

                <!-- New Password -->
                <div class="input-group">
                    <label for="new-password">New Password</label>
                    <div class="password-wrapper">
                        <input
                        :type="showNew ? 'text' : 'password'"
                        id="new-password"
                        v-model="form.newPassword"
                        placeholder="••••••••"
                        required
                        />
                        <button
                        type="button"
                        class="toggle-btn"
                        @click="showNew = !showNew"
                        >
                        {{ showNew ? '🙈' : '👁️' }}
                        </button>
                    </div>
                </div>

                <!-- Confirm Password -->
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <div class="password-wrapper">
                        <input
                        :type="showConfirm ? 'text' : 'password'"
                        id="confirm-password"
                        v-model="form.confirmPassword"
                        placeholder="••••••••"
                        required
                        />
                        <button
                        type="button"
                        class="toggle-btn"
                        @click="showConfirm = !showConfirm"
                        >
                        {{ showConfirm ? '🙈' : '👁️' }}
                        </button>
                    </div>
                </div>

                <!-- Error Message -->
                <p v-if="errorMessage" class="error-text">
                    {{ errorMessage }}
                </p>

                <!-- Success Message -->
                <p v-if="successMessage" class="success-text">
                    {{ successMessage }}
                </p>

                <!-- Password Requirements -->
                <div class="password-hints">
                    <p>Password must be:</p>
                    <ul>
                        <li :class="{ active: isMinLength }">At least 8 characters</li>
                        <li :class="{ active: hasMatch }">Both passwords must match exactly.</li>
                    </ul>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="submit-btn" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Processing...' : 'Update password' }}
                </button>
            </form>
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