<script>

import LogIn from '../components/auth-componenet/LogIn.vue';
import SignUp from '../components/auth-componenet/SignUp.vue';
import ModalPop from '../components/sub-component/ModalPop.vue';

    export default {
        name: 'AuthPage',
        components: {
            ModalPop,
            SignUp,
            LogIn,

        },
        data() {
            return {
                showModal: false,
                currentComponent: null,
                modalType: 'signup', // 'login' or 'signup'
            };
        },
        methods: {
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
        }
    },
    computed: {
        currentComponent() {
            if (this.modalType === 'signup') {
                return 'SignUp';
            } else {
                return 'LogIn';
            }
        }
    }
};
</script>


<template>
   <article class="container">
    <div class="logo">
        <div class="logo-svg">
            <img src="../assets/icons/logo-large.svg" alt="Logo" />
            <section class="text">
                <p class="large-text">Keep track of your money
and save for your future</p>
                <p class="small-text">Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>
            </section>
        </div>
       
    </div>

     <div class="action">
         <div class="btn">
            <button class="btn-primary" @click="modalType = 'signup'; toggleModal()">Sign Up</button>
            <button class="btn-primary" @click="modalType = 'login'; toggleModal()">Log In</button>
         </div>
   
    <ModalPop v-if="showModal" @close="closeModal">
       <component
        :is="currentComponent"
        @switch-modal="switchModal"
        @login-success="handleSuccess"
        @success="handleSuccess"
        @cancel="closeModal"
        @close="closeModal"
      />
    </ModalPop>
        <div class="info">
            <p>Welcome to the authentication page!</p>
    <p>Please sign up or log in to continue.</p>
    <p>Use the button bellow to open the modal for authentication.</p>
    <p>Once you are authenticated, you will be redirected to the home page.</p>
    <p>Thank you for using our finance app!</p>
   
        </div>
     </div>


   </article>
</template>


<style scoped>
.container {
  font-family:Public Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
 /* Desktop - Home */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
isolation: isolate;

position: relative;
width: 1440px;

background: #F8F4F0;

}
.logo {
/* Frame 33 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
gap: 8px;

width: 600px;
max-width: 600px;
height: 960px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;

}
.logo-svg {
  /* Frame 33 */

/* Auto layout */
/* Sidebar/Sidebar */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 40px;
gap: 24px;

width: 560px;
height: 920px;

background: url(../assets/illustration-authentication.svg), #201F24;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


}
.text {
  /* Text Section */
 /* Spending Summary */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 40px;

margin: 0 auto;
width: 480px;
height: 143px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.large-text {
  /* Large Text */
  /* Spending Summary */

width: 480px;
height: 77px;

/* text-preset-1 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;
/* or 38px */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.small-text {
  /* Small Text */
  /* Spending Summary */
/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet. */

width: 480px;
height: 42px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* or 21px */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.action {
  /* Action Section */
  /* Spending Summary */
  /* Main Content */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px 40px;
gap: 40px;


height: 960px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;
}
.action h1 {
  /* Action Title */
  /* Spending Summary */
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
align-self: stretch;
flex-grow: 0;
}
.info {
  /* Info Section */
  /* Spending Summary */
/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;
width: 480px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.info p {
  /* Info Text */
  /* Spending Summary */
  /* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet. */
  width: 480px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 150%;      
}     
.btn {
  /* Button Section */
  /* Spending Summary */
/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;
width: 480px;
height: 48px;
/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
}  
.btn-primary {
  /* Primary Button */
  /* Spending Summary */
  /* Button/Primary */
    /* Button/Primary */
width: 240px;
height: 48px;
/* Primary Button */
background: #201F24;
border-radius: 8px;
cursor: pointer;
/* text-preset-2 */
text-align: center;
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 150%;
/* or 24px */
color: #FFFFFF;
/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}


</style>