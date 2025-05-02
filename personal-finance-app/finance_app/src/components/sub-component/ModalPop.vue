<!-- src/components/BudgetModal.vue -->
<script>

import data from '../../data/data.json '
export default {
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
        <h2 class="text-xl font-bold mb-4">Add New Budget</h2>
        <p class="text-sm text-gray-500 mb-4">Choose a category to set a spending budget. These categories can help you monitor spending.</p>
        <form @submit.prevent="submitBudget" class="space-y-3">
          <div class="category">
            <label for="category"  >Budget Category</label>
          <select name="category" id="category" v-model="selectedCategory">

            <option v-for="category in  categories " :key="category" :value="category" >
            {{ category }}
          </option>
          </select>
          </div>
          <div class="maximum">
            <label for="maximum" >Maximum Spend</label>
            <input type="number" id="maximum" v-model="amount" class="input" placeholder="$ e.g.2000" required>
          </div>
          <div class="theme">
            <label for="theme">Theme</label>
            <select name="theme" id="theme" v-model="selectedTheme">
              
            </select>
          </div>
         
         
        </form>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
  }
  .modal-content {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.375rem;
  }
  .btn-primary {
    background: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
  }
  .btn-secondary {
    background: #e5e7eb;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
  }
  </style>
  