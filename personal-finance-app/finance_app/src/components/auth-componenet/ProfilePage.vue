<script>
import { useUserStore } from '../../stores/useUserStore';
import { useRouter } from 'vue-router';
export default {
    name: "ProfilePage",
    setup() {
        const userStore = useUserStore();
        const router = useRouter();

        return {
            userStore,
            router
        };
    },
    methods: {
        onLogout() {
            this.userStore.logout()
                .then(() => {
                    this.router.push('/');
                    // Optionally, you can show a notification or message
                   
                })
                .catch(error => {
                    console.error("Logout failed:", error);
                    // Handle logout error (e.g., show a notification)
                });
        }
    }
}
   
</script>


<template>
    <h1>
    Profile Page
    </h1>
    <button class="logout" @click="onLogout">Logout</button>
</template>