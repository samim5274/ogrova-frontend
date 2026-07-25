<template>
    <div :class="{ 'dark': isDark }">
        <div class="min-h-screen bg-white dark:bg-[#0C1326] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

            <Navbar
                :is-dark="isDark"
                :mobile-menu="mobileMenu"
                @toggle-dark="toggleDarkMode"
                @toggle-menu="toggleMenu"
                @search="handleSearch"
            />

            <Message
                :successMsg="successMsg"
                :errorMsg="errorMsg"
                @update:successMsg="successMsg = $event"
                @update:errorMsg="errorMsg = $event"
            />

            <!-- Loading skeleton -->
            <section v-if="loading && !user" class="py-16 bg-white dark:bg-gray-900 min-h-screen">
                <div class="container mx-auto px-4 max-w-7xl animate-pulse">
                    <div class="h-32 rounded-3xl bg-slate-200 dark:bg-slate-800 mb-6"></div>
                    <div class="grid lg:grid-cols-3 gap-6">
                        <div class="h-72 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                        <div class="lg:col-span-2 space-y-6">
                            <div class="h-48 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                            <div class="h-32 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else class="py-10 sm:py-16 text-gray-900 dark:text-gray-100 min-h-screen selection:bg-indigo-500 selection:text-white">
                <div class="container mx-auto p-4 max-w-7xl rounded-2xl border border-slate-200 dark:border-slate-800">
                    <main class="min-w-0 bg-gray-50 dark:bg-[#0C1326] px-0">

                        <!-- Page header -->
                        <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">My Profile</h1>
                                <p class="text-sm text-slate-500 dark:text-slate-400">Manage your personal information and account details</p>
                            </div>
                            <button
                                type="button"
                                @click="refreshProfile"
                                :disabled="loading"
                                class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm
                                    hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                                <i class="fa-solid fa-rotate" :class="{ 'animate-spin': loading }"></i>
                                Refresh
                            </button>
                        </div>

                        <!-- ============================= -->
                        <!-- Hero / identity card          -->
                        <!-- ============================= -->
                        <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden mb-6">
                            <div class="px-5 sm:px-8 py-6">
                                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                                    <div class="flex items-center gap-5 min-w-0">
                                        <div class="relative shrink-0">
                                            <img :src="photoPreview || photoUrl" alt="User photo"
                                                class="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm" />
                                            <button type="button" @click="triggerPhotoPicker"
                                                title="Change photo"
                                                class="absolute -bottom-1.5 -right-1.5 h-7 w-7 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-900 transition">
                                                <i class="fa-solid fa-camera text-[11px]"></i>
                                            </button>
                                            <input ref="photoInputRef" type="file" accept="image/*" @change="onPhotoChange" class="hidden" />
                                        </div>

                                        <div class="min-w-0">
                                            <div class="flex items-center flex-wrap gap-2">
                                                <p class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 truncate">
                                                    {{ user?.name || "User" }}
                                                </p>
                                                <span v-if="user?.designation"
                                                    class="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                                                    {{ user.designation }}
                                                </span>
                                            </div>

                                            <p class="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 truncate mt-1">
                                                <i class="fa-regular fa-envelope text-slate-400 dark:text-slate-500 text-xs shrink-0"></i>
                                                <span class="truncate">{{ user?.email || "No email" }}</span>
                                                <span
                                                    v-if="user?.email"
                                                    class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide shrink-0"
                                                    :class="user?.email_verified_at
                                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                                                        : 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400'">
                                                    <i class="fa-solid" :class="user?.email_verified_at ? 'fa-circle-check' : 'fa-circle-exclamation'"></i>
                                                    {{ user?.email_verified_at ? 'Verified' : 'Not verified' }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap gap-2">
                                        <span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                                            <i class="fa-solid fa-user-shield mr-1.5 text-slate-400"></i>
                                            {{ user?.role || "user" }}
                                        </span>
                                        <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                                            :class="user?.is_active
                                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                                                : 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'">
                                            <span class="h-1.5 w-1.5 rounded-full" :class="user?.is_active ? 'bg-emerald-500' : 'bg-red-500'"></span>
                                            {{ user?.is_active ? "Active" : "Inactive" }}
                                        </span>
                                    </div>
                                </div>

                                <!-- Profile completion -->
                                <div class="mt-6 pt-5 border-t border-dashed border-slate-200 dark:border-slate-800">
                                    <div class="flex items-center justify-between mb-2">
                                        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                            <i class="fa-solid" :class="user?.is_profile_completed ? 'fa-circle-check text-emerald-500' : 'fa-triangle-exclamation text-amber-500'"></i>
                                            {{ user?.is_profile_completed ? "Your profile is complete" : "Complete your profile" }}
                                        </p>
                                        <p class="text-xs font-bold text-slate-700 dark:text-slate-300">{{ profileCompletion }}%</p>
                                    </div>
                                    <div class="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                        <div class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                                            :style="{ width: profileCompletion + '%' }"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3 mb-6">
                            <div class="rounded-xl border border-slate-800 p-4">
                                <p class="text-slate-400 text-sm">Orders</p>
                                <h3 class="text-2xl font-bold">156</h3>
                            </div>

                            <div class="rounded-xl border border-slate-800 p-4">
                                <p class="text-slate-400 text-sm">Reviews</p>
                                <h3 class="text-2xl font-bold">48</h3>
                            </div>

                            <div class="rounded-xl border border-slate-800 p-4">
                                <p class="text-slate-400 text-sm">Referral</p>
                                <h3 class="text-2xl font-bold">12</h3>
                            </div>

                            <div class="rounded-xl border border-slate-800 p-4">
                                <p class="text-slate-400 text-sm">Points</p>
                                <h3 class="text-2xl font-bold">890</h3>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

                            <!-- ============================= -->
                            <!-- Left: account details         -->
                            <!-- ============================= -->
                            <aside class="space-y-6 lg:sticky lg:top-6 self-start">
                                <section class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                                    <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                                        <h2 class="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Account details</h2>
                                    </div>
                                    <div class="p-5 space-y-2">
                                        <InfoRow icon="fa-solid fa-phone" label="Phone" :value="[
                                            user?.phone || 'N/A',
                                            user?.phone ? h('span', {
                                                class: [
                                                    'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase',
                                                    user?.phone_verified_at
                                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                                                        : 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
                                                ].join(' ')
                                            }, user?.phone_verified_at ? 'Verified' : 'Not verified') : null
                                        ]"/>
                                        <InfoRow icon="fa-regular fa-calendar" label="Date of birth" :value="formatOnlyDate(user?.dob)" />
                                        <InfoRow icon="fa-solid fa-venus-mars" label="Gender" :value="capitalize(user?.gender) || 'N/A'" />
                                        <InfoRow icon="fa-solid fa-droplet" label="Blood group" :value="user?.blood_group || 'N/A'" />
                                        <InfoRow icon="fa-regular fa-id-card" label="NID" :value="user?.national_id || 'N/A'" />
                                        <InfoRow icon="fa-solid fa-place-of-worship" label="Religion" :value="user?.religion || 'N/A'" />
                                        <InfoRow icon="fa-regular fa-clock" label="Last login" :value="formatDateTime(user?.last_login_at)" />
                                        <InfoRow icon="fa-solid fa-location-crosshairs" label="Login IP" :value="user?.last_login_ip || 'N/A'" />
                                    </div>
                                </section>

                                <ReferLink :user="user" />
                            </aside>

                            <!-- ============================= -->
                            <!-- Right: editable form          -->
                            <!-- ============================= -->
                            <section class="lg:col-span-2 space-y-6">

                                <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-5 sm:p-6">
                                    <div class="flex items-center gap-2 mb-5">
                                        <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                                            <i class="fa-regular fa-user text-sm"></i>
                                        </span>
                                        <div>
                                            <h2 class="text-sm font-bold text-slate-900 dark:text-white">Personal Information</h2>
                                            <p class="text-xs text-slate-400 dark:text-slate-500">Your basic identity details</p>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <Field label="Full name">
                                            <input v-model="form.name" type="text" class="input" placeholder="Your name" />
                                        </Field>

                                        <Field label="Phone number">
                                            <input v-model="form.phone" type="text" class="input" placeholder="01XXXXXXXXX" />
                                        </Field>

                                        <Field label="Email address">
                                            <input :value="user?.email || ''" disabled class="inputDisabled" />
                                        </Field>

                                        <Field label="Date of birth">
                                            <input v-model="form.dob" type="date" class="input" />
                                        </Field>

                                        <Field label="Gender">
                                            <select v-model="form.gender" class="input">
                                                <option value="" disabled>Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </Field>

                                        <Field label="Blood group">
                                            <select v-model="form.blood_group" class="input">
                                                <option value="">Select</option>
                                                <option>O+</option><option>O-</option>
                                                <option>A+</option><option>A-</option>
                                                <option>B+</option><option>B-</option>
                                                <option>AB+</option><option>AB-</option>
                                            </select>
                                        </Field>

                                        <Field label="National ID" class="sm:col-span-2">
                                            <input v-model="form.national_id" type="text" class="input" placeholder="NID number" />
                                        </Field>

                                        <Field label="Religion" class="sm:col-span-2">
                                            <input v-model="form.religion" type="text" class="input" placeholder="Religion" />
                                        </Field>
                                    </div>
                                </div>

                                <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-5 sm:p-6">
                                    <div class="flex items-center gap-2 mb-5">
                                        <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                                            <i class="fa-solid fa-location-dot text-sm"></i>
                                        </span>
                                        <div>
                                            <h2 class="text-sm font-bold text-slate-900 dark:text-white">Address</h2>
                                            <p class="text-xs text-slate-400 dark:text-slate-500">Used for delivery and billing</p>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 gap-4">
                                        <Field label="Present address">
                                            <textarea v-model="form.present_address" rows="3" class="input" placeholder="House, road, area, city"></textarea>
                                        </Field>

                                        <Field label="Permanent address">
                                            <textarea v-model="form.permanent_address" rows="3" class="input" placeholder="House, road, area, city"></textarea>
                                        </Field>
                                    </div>
                                </div>

                                <!-- Save bar -->
                                <div class="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm px-5 sm:px-6 py-4">
                                    <p class="text-xs text-slate-400 dark:text-slate-500 hidden sm:block">
                                        Changes are saved to your account immediately.
                                    </p>
                                    <button
                                        type="button"
                                        @click="updateProfile"
                                        :disabled="saving"
                                        class="ml-auto inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 disabled:opacity-60 transition"
                                    >
                                        <i class="fa-solid" :class="saving ? 'fa-spinner fa-spin' : 'fa-floppy-disk'"></i>
                                        {{ saving ? "Saving..." : "Save changes" }}
                                    </button>
                                </div>
                            </section>
                        </div>


                        <div class="rounded-2xl border border-slate-800 p-5 mt-4">
                            <h3 class="font-semibold mb-4">
                                Recent Activity
                            </h3>

                            <div class="space-y-4">
                                <div class="flex gap-3">
                                    <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                                    <div>
                                        <p>Password changed</p>
                                        <span class="text-sm text-slate-500">
                                            2 hours ago
                                        </span>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                                    <div>
                                        <p>Profile updated</p>
                                        <span class="text-sm text-slate-500">
                                            Yesterday
                                        </span>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <div class="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                                    <div>
                                        <p>Logged in from Dhaka</p>
                                        <span class="text-sm text-slate-500">
                                            Jul 24, 2026
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            <FooterSection />
        </div>
    </div>
</template>

<script setup>
import { computed, h, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import api, { makeImg } from "../../services/api";

import Message from '../Message/message.vue';
import Navbar from './navbar.vue';
import FooterSection from './footer.vue';
import ReferLink from "../Dashboard/customer/refer-link.vue";

const router = useRouter();

/** Small inline render-function components used only inside this page. */
const InfoRow = (props) =>
    h("div",
        { class: "flex items-center justify-between gap-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 px-3 py-2.5" },
        [
            h("span", { class: "flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm min-w-0" }, [
                props.icon ? h("i", { class: [props.icon, "text-slate-400 dark:text-slate-500 w-4 text-center shrink-0"] }) : null,
                h("span", { class: "truncate" }, props.label),
            ]),
            h("span",
                { class: "flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 text-sm shrink-0" },
                Array.isArray(props.value) ? props.value : [props.value]),
        ]
    );

const Field = (props, { slots }) =>
    h("div", { class: props.class || "" }, [
        h("label", { class: "mb-2 block text-xs font-semibold text-slate-600 dark:text-slate-300" }, props.label),
        slots.default?.(),
    ]);

// -----------------------------------------------------------------------
// State
// -----------------------------------------------------------------------
const loading = ref(false);
const saving = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const isDark = ref(false);
const mobileMenu = ref(false);

const user = ref(null);
const form = ref({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    blood_group: "",
    present_address: "",
    permanent_address: "",
    national_id: "",
    religion: "",
});

const photoFile = ref(null);
const photoPreview = ref("");
const photoInputRef = ref(null);

// -----------------------------------------------------------------------
// Computed
// -----------------------------------------------------------------------
const photoUrl = computed(() => {
    const p = user.value?.photo;
    if (!p) return "/images/avatar.png";
    return makeImg(p);
});

// Lightweight, client-side estimate of how filled-out the profile is.
// Purely presentational — the authoritative flag is still user.is_profile_completed.
const profileCompletion = computed(() => {
    const fields = [
        user.value?.name,
        user.value?.phone,
        user.value?.dob,
        user.value?.gender,
        user.value?.present_address,
        user.value?.national_id,
        user.value?.photo,
        user.value?.email_verified_at,
    ];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
});

// -----------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------
function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDateTime(date) {
    if (!date) return "N/A";
    return new Date(date).toLocaleString("en-BD", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatOnlyDate(d) {
    if (!d) return "N/A";
    return new Date(d).toLocaleDateString("en-BD", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function setSuccess(msg) {
    successMsg.value = msg;
    setTimeout(() => (successMsg.value = ""), 2500);
}
function setError(msg) {
    errorMsg.value = msg;
    setTimeout(() => (errorMsg.value = ""), 3500);
}

// -----------------------------------------------------------------------
// Photo picker
// -----------------------------------------------------------------------
function triggerPhotoPicker() {
    photoInputRef.value?.click();
}

function onPhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    photoFile.value = file;
    photoPreview.value = URL.createObjectURL(file);
}

// -----------------------------------------------------------------------
// API calls
// -----------------------------------------------------------------------
async function refreshProfile() {
    loading.value = true;
    try {
        const res = await api.get("/user");
        user.value = res.data;

        const rawDob = user.value?.dob;
        const rawGender = user.value?.gender;

        form.value.name = user.value?.name ?? "";
        form.value.phone = user.value?.phone ?? "";
        form.value.dob = rawDob ? String(rawDob).slice(0, 10) : "";
        form.value.gender = rawGender ? String(rawGender).toLowerCase().trim() : "";
        form.value.blood_group = user.value?.blood_group ?? "";
        form.value.present_address = user.value?.present_address ?? "";
        form.value.permanent_address = user.value?.permanent_address ?? "";
        form.value.national_id = user.value?.national_id ?? "";
        form.value.religion = user.value?.religion ?? "";
    } catch (e) {
        setError(e?.response?.data?.message || "Failed to load profile");
    } finally {
        loading.value = false;
    }
}

async function updateProfile() {
    saving.value = true;
    try {
        const fd = new FormData();
        fd.append("_method", "PUT");

        Object.entries(form.value).forEach(([k, v]) => {
            if (v !== null && v !== undefined) fd.append(k, v);
        });

        if (photoFile.value) fd.append("photo", photoFile.value);

        const res = await api.post("/profile", fd);
        user.value = res.data?.data ?? user.value;

        if (user.value) {
            form.value.name = user.value.name ?? "";
            form.value.phone = user.value.phone ?? "";
        }

        // photo is now persisted server-side; drop the local blob preview
        photoFile.value = null;
        if (photoPreview.value) URL.revokeObjectURL(photoPreview.value);
        photoPreview.value = "";

        setSuccess("Profile updated");
    } catch (e) {
        const msg = e?.response?.data?.message ||
            (e?.response?.data?.errors ? Object.values(e.response.data.errors).flat()[0] : null) ||
            "Failed to update profile";
        setError(msg);
    } finally {
        saving.value = false;
    }
}

// -----------------------------------------------------------------------
// Theme / navbar / search
// -----------------------------------------------------------------------
function toggleDarkMode() {
    isDark.value = !isDark.value;
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark.value);
}

function toggleMenu() {
    mobileMenu.value = !mobileMenu.value;
}

function handleSearch(query) {
    router.push({ path: "/search", query: { q: query } });
}


function handleEsc(e) {
    if (e.key === "Escape") mobileMenu.value = false;
}

// -----------------------------------------------------------------------
// Lifecycle
// -----------------------------------------------------------------------
onMounted(() => {
    refreshProfile();
    window.addEventListener("keydown", handleEsc);

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleEsc);
    if (photoPreview.value) URL.revokeObjectURL(photoPreview.value);
});
</script>

<style scoped>
.input {
    @apply w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100;
}
.inputDisabled {
    @apply w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600
        dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300;
}
</style>