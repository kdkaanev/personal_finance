<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import { useUserStore } from '../../stores/useUserStore';
import { useRouter, useRoute } from 'vue-router';
import { ErrorCodes, onMounted } from 'vue';

export default {
  name: "LogIn",
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();

    const v$ = useVuelidate({
      email: { required },
      password: { required }
    });

    return {
      v$,
      userStore,
      router,
      route
    };
  },
  data() {
    return {
      forms: {
        email: "",
        password: ""
      }
    };
  },
  validations() {
    return {
      forms: {
        email: { required },
        password: { required }
      },
     
    };
  },
  methods: {
    onLogIn() {
      this.v$.$touch();
      if (this.v$.$invalid) return;

      this.userStore.login(this.forms)
        .then(() => {
          this.$emit('close');
          this.router.push('/home');
        })
        .catch(error => {
          console.error("Login failed:", error);
          // Handle login error (e.g., show a notification)
        });
    },
    goToSignUp() {
      this.$emit('switch-modal', 'signup'); // Close the modal
    },  
  },
  mounted() {
    this.userStore.reAuthUser();
  },
};
</script>


<template>
   <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
  



  <section class="action">
    <h1>Login</h1>
   
  </section>

  <form @submit.prevent="onLogIn" class="space">
    <div :errors="v$.forms.email.$errors">
      <label for="email" :errors="v$.forms.email.$errors" >Email</label>
    <input name="email" id="email" v-model="v$.forms.email.$model" type="email" required>
  
  
    </div>
    <div :errors="v$.forms.password.$errors">
      <label for="password" >Password</label>
      <input type="password" id="password" v-model="v$.forms.password.$model"   required>
    </div>
   
    <button type="submit" class="btn-primary">Login</button>

    
    <div class="text-sm">
      <p >Need to create an account? </p>
        <b class="change" @click="goToSignUp">Sign Up</b>
    </div>
   
  </form>
  </div> 
</div>

</template>


<style scoped>
  .maximum input {
    /* Maximum Spend */
    /* Content */
    /* Input Field/Input Fields */
    /* Budget Name */
    /* Input Field/Field States */



/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;
cursor: pointer;


width: 496px;
height: 45px;

background: #FFFFFF;
border: 1px solid #98908B;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
  }
  input {
    /* Input Field/Field States */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;

width: 496px;
height: 45px;
cursor: pointer;

background: #FFFFFF;
border: 1px solid #98908B;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

  }
  label {
    /* Budget Category */
    /* Content */
    /* Input Field/Input Fields */
    /* Budget Name */

width: 496px;
height: 18px;

/* text-preset-5-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
  }
  .category {
    /* Category */
    /* Content */
    /* Input Field/Input Fields */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 496px;
height: 67px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
  }   
  .space {
    /* Space */
    /* Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 496px;
height: 233px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

  }
  .text-sm {
  /* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet. */

/* Frame 34 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 1rem;
padding: 0px;
gap: 8px;

width: 496px;
height: 21px;


/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

  }
  .text-sm p {
    /* e.g. 2000 */


height: 21px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

  }
  
  .action h1 {
  /* Add New Budget */


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
  .action {
    /* title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 20px;

width: 496px;
height: 38px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

  }
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 50;
  }
 
  .modal-content {
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 20px;
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    width: 560px;
    max-width: 560px;
    height: 490px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);


  }
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.375rem;
  }
  .btn-primary {
  /* Button/Primary */

/* Auto layout */
/* Button/Primary */

/* Auto layout */
/* Frame 529 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;
margin-top: 1rem;

width: 496px;
height: 53px;

background: #201F24;
border-radius: 8px;
cursor: pointer;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
/* Add Budget */



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
  .btn-secondary {
    
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }
    .change {
    /* Sign Up */
    /* Content */
    /* Button/Tertiary/Label */
    /* e.g. 2001 */

width: 53px;
height: 21px;

/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
text-decoration-line: underline;

color: #201F24;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
cursor: pointer;
  }
  </style>