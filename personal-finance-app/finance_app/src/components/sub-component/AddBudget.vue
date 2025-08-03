
<script setup>
import { ref, reactive, watch, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, numeric, minValue } from '@vuelidate/validators'

import { useBudgetStore } from '../../stores/useBudgetStore'
import { useUserStore } from '../../stores/useUserStore'
import { useTransactionStore } from '../../stores/useTransactionStore'
import CustomSelect from './CustomSelect.vue'

const emit = defineEmits(['add', 'close'])
const onColorSelected = (hex) => {
  formAddBudget.theme = color
}

// Stores
const budgetStore = useBudgetStore()
useUserStore() // If needed
useTransactionStore() // If needed

// Form data
const formAddBudget = reactive({
  category: '',
  maximum: '',
  theme: ''
})

// Categories
const categories = [
  'Entertainment',
  'Bills',
  'Groceries',
  'Dining Out',
  'Transportation',
  'Personal Care',
  'Education',
  'Livestyle',
  'Shopping',
  'General'
]

// Vuelidate rules
const rules = {
  category: { required },
  maximum: { required, numeric, minValue: minValue(0) },
  theme: { required }
}

const availableCategories = computed(() => {
  const usedCategories = budgetStore.budgets.map(b => b.category)
  return categories.filter(category => !usedCategories.includes(category))  
})
// Create validation instance
const v$ = useVuelidate(rules, formAddBudget)

// Handle form submit
const submitBudget = async () => {
  v$.value.$touch()

  if (v$.value.$invalid) return

  const budget = {
    category: formAddBudget.category,
    maximum: Number(formAddBudget.maximum),
    theme: formAddBudget.theme
  }

  try {
    await budgetStore.addNewBudget(budget)
   
    emit('add', budget)
    emit('close')
  } catch (error) {
    console.error('Error adding budget:', error)
  }
}
watch(() => budgetStore.budgets, (newBudgets) => {
  if (newBudgets.length > 0) {
    formAddBudget.theme = newBudgets[0].theme // Set default theme if budgets exist
  }
}, { immediate: true })
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      <section class="action">
        <h1>Add New Budget</h1>
        <button class="btn-secondary" @click="$emit('close')">
          <img src="../../assets/icons/icon-close-modal.svg" alt="close" />
        </button>
      </section>
      <p class="text-sm">
        Choose a category to set a spending budget. These categories can help you monitor spending.
      </p>

      <form @submit.prevent="submitBudget" class="space">
        <div class="category">
          <label for="category">Budget Category</label>
          <select
            name="category"
            id="category"
            v-model="formAddBudget.category"
            class="input"
          >
            <option value="" disabled>Select a category</option>
            <option v-for="category in availableCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
          <p v-if="v$.category.$error" class="error">
            {{ v$.category.$errors[0].$message || 'Category is required' }}
          </p>
        </div>

        <div class="maximum">
          <label for="maximum">Maximum Spend</label>
          <input
            type="number"
            id="maximum"
            class="input"
            v-model="formAddBudget.maximum"
            placeholder="$ e.g. 2000"
          />
          <p v-if="v$.maximum.$error" class="error">
            {{ v$.maximum.$errors[0].$message || 'Invalid amount' }}
          </p>
        </div>

        <div class="theme">
          <label for="theme">Theme</label>
          <CustomSelect v-model="formAddBudget.theme" 
          :used-colors="budgetStore.budgets.map(b => b.theme)"
          />
          <p v-if="v$.theme.$error" class="error">
            {{ v$.theme.$errors[0].$message || 'Theme is required' }}
          </p>
        </div>

        <button type="submit" class="btn-primary">Add Budget</button>
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
overflow-y: auto;
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