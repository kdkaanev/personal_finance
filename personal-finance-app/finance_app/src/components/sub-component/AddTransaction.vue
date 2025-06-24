<script>
import { ref } from 'vue';
import { useUserStore } from '../../stores/useUserStore';
import useVuelidate from '@vuelidate/core';
import { useTransactionStore } from '../../stores/useTransactionStore';
import { required } from '@vuelidate/validators';
export default {
  name: 'EditProfileForm',
  
  emits: ['close','update'],


data() {
  return {
    userStore: useUserStore(),
      transactionStore: useTransactionStore(),
      v$: useVuelidate(),
     categories: [
          'Entertainment' ,
          'Bills',
          'Groceries',
          'Dining Out',
          'Transportation',
          'Personal Care',
          'Education',
          'Livestyle',
          'Shopping',
            'General'

      
       
       
      ],
       formAddTransaction: {
        avatar: '',
        name: '',
        selectedCategory: '',
        typeCategory: '',
        amount: '',
        selectedRecurring: false
      }

   
    
  };
},
validations() {
    return {
      formAddTransaction: {
        avatar: {},
        name: { required },
        selectedCategory: { required },
        typeCategory: { required },
        amount: { required },
        selectedRecurring: { required }
      }
    };
  },
  mounted() {
    // Re-authenticate user when component is mounted
    //const user = this.userStore.reAuthUser()
   
  },
  methods: {
  async submitTransaction() {
        const newTransaction = {
            avatar: this.formAddTransaction.avatar,
            name: this.formAddTransaction.name,
            category: this.formAddTransaction.selectedCategory,
            type: this.formAddTransaction.typeCategory,
            amount: parseFloat(this.formAddTransaction.amount),
        };
        try {
            await this.transactionStore.addTransaction(newTransaction);
            
           
            this.$emit('close');
            
        } catch (error) {
            console.error('Error adding transaction:', error);
            // Handle error, e.g., show a notification
        }
  
    }
  },
  
  
};

</script>


<template>
   <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
  



  <section class="action">
    <h1>Add Transaction</h1>
    <button class="btn-secondary" @click="$emit('close')">
      <img src="../../assets/icons/icon-close-modal.svg" alt="close">
    </button>
  </section>
  <p class="text-sm">Add info for new transaction</p>
  <form @submit.prevent="submitTransaction" class="space">
    <div class="category" :errors="v$.formAddTransaction.avatar.$errors">
      <label for="avatar"  >Avatar</label>
      <input type="url" id="avatar" v-model="v$.formAddTransaction.avatar.$model" class="input" placeholder="https://example.com/avatar.jpg" >
      
    </div>
    <div class="category" :errors="v$.formAddTransaction.name.$errors">
      <label for="name"  >Recipient / Sender</label>
      <input type="text" id="name" v-model="v$.formAddTransaction.name.$model" class="input" >
      
    </div>
    <div class="category" :errors="v$.formAddTransaction.selectedCategory.$errors">
      <label for="category"  >Transaction Category</label>
    <select name="category" id="category" v-model="v$.formAddTransaction.selectedCategory.$model" class="input">
  
      <option v-for="category in  categories " :key="category" :value="category" >
        {{ category }}
    </option>
    </select>
    </div>
    <div >
       <label for="typeCategory"  >Transaction Type</label>
      <div class="radio-buttons" :errors="v$.formAddTransaction.typeCategory.$errors">
        <input type="radio" id="typeCategory" v-model="v$.formAddTransaction.typeCategory.$model" value="income" > Income
        <input type="radio" id="typeCategory" v-model="v$.formAddTransaction.typeCategory.$model" value="expense"> Expense
      </div>
    </div>
    <div class="category" :errors="v$.formAddTransaction.amount.$errors">
      <label for="amount"  >Amount</label>
      <input type="number" id="amount" v-model="v$.formAddTransaction.amount.$model"  class="input" placeholder="$ e.g.2000" required>
    </div>
    <label for="theme"  >Recurring</label>
    <div class="radio-buttons" :errors="v$.formAddTransaction.selectedRecurring.$errors">
        
        <input type="checkbox" id="recurring" v-model="v$.formAddTransaction.selectedRecurring.$model" value="light"> yes
      
    </div>
    
    
   
    <button type="submit" class="btn-primary">Save Changes</button>
   
   
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
  select {
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
  .category p {
    /* 30 characters left */
    /* Content */
    /* 30 of 30 characters left */

width: 496px;
height: 18px;

/* text-preset-5 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */
text-align: right;

color: #696868;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

    /* Input Field/Input Fields */
    /* Budget Name */
    /* Input Field/Field States */
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

width: 496px;
height: 42px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* or 21px */

color: #696868;


/* Inside auto layout */


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
    height: 750px;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 50;
    border-radius: 16px;
  }
 
  .modal-content {
    height: 100%;
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

    /* Modal Content */
    /* Content */
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
  .radio-buttons {
    /* Radio Buttons */
    /* Content */
    /* Input Field/Input Fields */
/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding: 0px;
gap: 4px;   

height: 67px;
}

</style>