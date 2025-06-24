<!-- src/components/BudgetModal.vue -->
<script>

import data from'../../data/data.json'
import CustomSelect from './CustomSelect.vue'

export default {
  components: {
    CustomSelect
    
  },
  props: {  
    show: {
      type: Boolean,
      default: false
    },
  },
  name: 'BudgetModal',
  data() {
    return {
      budgets: data.budgets,
      selectedCategory: '',
      selectedTheme: '',
      // categories: [
      //     'Entertainment' ,
      //     'Bills',
      //     'Groceries',
      //     'Dining Out',
      //     'Transportation',
      //     'Personal Care',
      //     'Education',
      //     'Livestyle',
      //     'Shopping',

      
       
       
      // ],
     
    }
  },
 
}
</script>


<template>
    <div @click.self="$emit('close')">
      <slot  />
    </div>



  </template>



  

  
