<!-- src/components/BudgetModal.vue -->
<template>
    <div class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal-content">
        <h2 class="text-xl font-bold mb-4">Add Budget</h2>
        <form @submit.prevent="submitBudget" class="space-y-3">
          <input v-model="name" type="text" placeholder="Budget Name" class="input" />
          <input v-model="amount" type="number" placeholder="Amount" class="input" />
          <input v-model="category" type="text" placeholder="Category" class="input" />
          <div class="flex justify-end gap-2">
            <button type="button" @click="$emit('close')" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BudgetModal',
    data() {
      return {
        name: '',
        amount: '',
        category: ''
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
  