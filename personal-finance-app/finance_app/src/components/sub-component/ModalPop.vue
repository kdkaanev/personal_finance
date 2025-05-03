<!-- src/components/BudgetModal.vue -->
<script>

import data from'../../data/data.json'
import CustomSelect from './CustomSelect.vue'

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
    <div @click.self="$emit('close')">
      <slot  />
    </div>



  </template>
  

  
