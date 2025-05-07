<script>

import data from'../../data/data.json'
import CustomSelect from './CustomSelect.vue'
import EditBudget from './AddBudget.vue'
export default {
  components: {
    CustomSelect
    
  },
  name: 'BudgetModal',
  data() {
    return {
      budgets: data.budgets,
      selectedCategory: '',
      selectedTheme: '',
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

      
       
       
      ],
     
    }
  },
  methods: {
    submitBudget() {
      this.$emit('add', {
        name: this.name,
        amount: parseFloat(this.amount),
        category: this.category
      })
      this.$emit('close')
    }
  }
}
</script>

<template>
   <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
  



  <section class="action">
    <h1>Delete ‘Entertainment’?</h1>
    <button class="btn-secondary" @click="$emit('close')">
      <img src="../../assets/icons/icon-close-modal.svg" alt="close">
    </button>
  </section>
  <p class="text-sm">Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.</p>
    <div class="space">
        <button class="btn-primary red" @click="$emit('delete')">Delete</button>
        <button class="close" @click="$emit('close')"><span>No, Go Back</span></button>
    </div>
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
  .red {
    background: #C94736;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }
  .btn-secondary {
    
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }
    .close {
     /* Button/Tertiary */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 12px;

width: 496px;
height: 21px;


/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

        cursor: pointer;
    }
.close span {
    /* See Details */

width: 80px;
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
  </style>/