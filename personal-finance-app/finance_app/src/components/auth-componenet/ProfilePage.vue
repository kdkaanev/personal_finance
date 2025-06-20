<script>
import { useUserStore } from '../../stores/useUserStore';
import { useRouter } from 'vue-router';
import ModalPop from '../sub-component/ModalPop.vue';
import EditProfileForm from './EditProfileForm.vue';
export default {
    data() {
        return {
            showModal: false,
            currentComponent: 'EditProfileForm',
            modalType: 'edit',
        };
    },
    emits: ['logout', 'next', 'cancel', 'close', 'update'],
    props: {
        userName: {
            type: String,
            required: true,
        }, 
        userEmail: {
            type: String,
            required: true,
        },
        

    },
    components: {
        ModalPop,
        EditProfileForm
    },
    name: "ProfilePage",
    setup() {
        const userStore = useUserStore();
        const router = useRouter();

        return {
            userStore,
            router
        };
    },
    mounted() {
        this.userStore.reAuthUser();
    },
    computed: {
        userEmail() {
            return this.userStore.user.email || 'User';
        },
        userProfile() {
            return this.userStore.user.profile || {};
        }
    },
    
    methods: {
        onProfileUpdate(data) {
        
          this.userProfile.first_name = data.first_name;
          this.userProfile.last_name = data.last_name;
         
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
        closeModal() {
            this.showModal = false;
        },
        handleSuccess() {
            this.showModal = false;
            // Add your success handling logic here
        },
        switchModal(type) {
            this.modalType = type;
            this.showModal = true;
        },
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
        },
       
    },
  
  
}
   
</script>


<template>
  <div class="profile-page-wrapper">
    <div class="profile-container">
      <div class="main">
        <section class="title">
          <h2>Profile</h2>
          <button class="logout" @click="onLogout"><span>LogOut</span></button>
        </section>

        <div class="main-left">
          <h3>Welcome, {{ userEmail }}</h3>
          <div class="info"><h3>First Name:</h3><p>{{ userProfile.first_name }}</p></div>
          <div class="info"><h3>Last Name:</h3><p>{{ userProfile.last_name }}</p></div>
          <button @click="toggleModal()" class="edit"><span>Edit Profile</span></button>
        </div>
      </div>
    </div>

    <div class="main-right">
      <ModalPop v-if="showModal" @close="closeModal">
        <component
          :is="currentComponent"
          @switch-modal="switchModal"
          @login-success="handleSuccess"
          @success="handleSuccess"
          @cancel="closeModal"
          @close="closeModal"
          @update="onProfileUpdate"
        />
      </ModalPop>
    </div>
  </div>
</template>



<style scoped>
.profile-page-wrapper {
  /* Profile Page Wrapper */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: fit-content;

  background: #F8F4F0;
}
.budget-container {
  /* Main Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 40px;
gap: 32px;






/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
z-index: 1;

}
.title {
  /* Title */
  /* Main Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 0px;
gap: 24px;


height: 56px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


}
.title h2 {
  /* Title */
  /* Main Content Title Text */
  /* Budgets */

width: 128px;
height: 38px;

/* text-preset-1 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;
/* or 38px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.logout {
  /* Add New Budget Button */
  /* Main Content Title Button */
/* Frame 529 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;
cursor: pointer;

width: 155px;
height: 53px;

background: #201F24;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.logout span {
  /* Add New Budget Button Text */
  /* Main Content Title Button Text */
  /* + Add New Budget */

width: 123px;
height: 21px;

/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
text-align: center;
color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.main {
  /* Main Content Body */
  /* Main Content */
  /* Frame 499 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;
margin: 2rem;


max-width: 1440px;



/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.main-left {
  /* Main Content Body Left */
  /* Main Content Body */
  /* Left Side */

/* Auto layout */
/* Left Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding-bottom: 1rem;
gap: 24px;

width: 428px;
height: fit-content;


background: #FFFFFF;
border-radius: 12px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.info {
  /* Info Section */
  /* Main Content Body Left Info Section */
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 16px;
width: 100%;
background: #F8F4F0;
border-radius: 8px;
}
.info h3 {
  /* Info Section Title */
  /* Main Content Body Left Info Section Title */
  /* First Name : */
width: 100px;
height: 21px;
/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
color: #201F24;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.info p {
  /* Info Section Text */
  /* Main Content Body Left Info Section Text */
  /* John */
width: 200px;
height: 21px;
/* text-preset-4 */   
}          
.edit {
  /* Edit Profile Button */
  /* Main Content Body Left Edit Profile Button */
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;
cursor: pointer;

width: 100%;
height: 53px;

background: #201F24;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.edit span {
  /* Edit Profile Button Text */
  /* Main Content Body Left Edit Profile Button Text */
  width: 123px;
height: 21px;
/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
color: #FFFFFF;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}

</style>