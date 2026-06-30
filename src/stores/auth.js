import { ref, computed } from "vue";
import api, { makeImg } from "../services/api";

const authUser = ref(
    JSON.parse(localStorage.getItem("user")) || null
);

const isLoggedIn = computed(() => !!authUser.value);

const avatarUrl = computed(() =>
    authUser.value?.photo
        ? makeImg(authUser.value.photo)
        : "/images/avatar.png"
);

async function loadUser() {
    const token = localStorage.getItem("token");

    if (!token) {
        authUser.value = null;
        return;
    }

    try {
        const { data } = await api.get("/user");

        authUser.value = data;

        localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
        logout();
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authUser.value = null;
}

export function useAuth() {
    return {
        authUser,
        isLoggedIn,
        avatarUrl,
        loadUser,
        logout,
    };
}