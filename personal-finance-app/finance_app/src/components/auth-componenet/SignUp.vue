<script>

import { useUserStore } from '../../stores/useUserStore';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useRouter, useRoute } from 'vue-router';


export default {
  name: "SignUp",
  emits: ['switch-modal'],
 
  props: {
    userName: {
      type: String,
      required: true,
    }
  },
  computed: {
    isMinimized() {
      return this.isMinimized;
    },
  },
  mounted() {
    // You can add any initialization logic here if needed
  },
  watch: {
    userName(newValue) {
      // React to changes in userName if needed
    }
  },
  // Define the reactive properties for the form
  name: 'SignUp',
  components: {},
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();

    const v$ = useVuelidate({
      forms: {
        email: { required},
        password: { required},
        repearPassword: { required,}
      }
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
        email: '',
        password: '',
        repearPassword: ''
      },
      errors: {}
    }
  },
  validations() {
    return {
      forms: {
        email: { required},
        password: { required},
        repearPassword: { required,}
      }
    };
  },
  methods: {
    signUp() {
      this.v$.$touch();
      if (this.v$.$invalid) return;
      if (this.forms.password !== this.forms.repearPassword) {
        alert("Passwords do not match");
        return;
      }
      this.errors = {}; // Reset errors before submission
      // Call the signup method from the user store
      this.userStore.signup(this.forms)
        .then(() => {
          this.$emit('close'); // Close the modal
          this.router.push('/home');
          this.userStore.reAuthUser(); // Re-authenticate the user
        })
      .catch(err => {
      
        if (err.response && err.response.status === 400) {
          
          const data = err.response.data;
          for (const key in data) {
            this.errors[key] = data[key][0]; // get first error for each field

          }
         // Mark all fields as touched to show validation errors

        }
        if (data.email && data.email[0] === "Email is already in use.") {
          alert("Email is already in use. Please log in.");
          return;
        }
      });
    },
    goToLogin() {
      this.$emit('switch-modal', 'login'); // Close the modal
    }
  }
}
</script>




<template>
   <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
  



  <section class="action">
    <h1>Sign Up</h1>
   
  </section>

  <form @submit.prevent="signUp" class="space">
    <div  :errors="v$.forms.email.$errors" >
      <label for="email"  >Email</label>
    <input name="email" id="email" v-model="v$.forms.email.$model" type="email" required>
    <div v-if="errors.email" class="text-red-500">{{ errors.email }}</div>
 
  
  
    </div>
    <div :errors="v$.forms.password.$errors" >
      <label for="password" >Create Password</label>
      <input type="password" id="password" v-model="v$.forms.password.$model"   required>
    </div>
     <div :errors="v$.forms.repearPassword.$errors">
      <label for="password" >Repear Password</label>
      <input type="password" id="repear-password" v-model="v$.forms.repearPassword.$model"   required>
    </div>
    <button type="submit" class="btn-primary">Sign Up</button>
    
    <div class="text-sm">
      <p >Already have an account? </p>
        <b class="change" @click="goToLogin">Log In</b>
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
  </style>