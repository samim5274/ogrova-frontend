<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
        localStorage.setItem("token", token);
        router.replace("/");
    } else {
        router.replace("/login");
    }
});
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        Logging in...
    </div>
</template>