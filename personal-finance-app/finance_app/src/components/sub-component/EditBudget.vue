<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Edit Budget</h2>
      <BudgetForm
        :schema="formSchema"
        v-model="formData"
        button-text="Save"
        @submit="submitForm"
      />
      <button @click="$emit('cancel')" class="text-sm mt-4 text-gray-600 hover:underline">Cancel</button>
    </div>
  </template>
  
  <script>
  import BudgetForm from './BudgetForm.vue'
  
  export default {
    name: 'EditBudget',
    components: { BudgetForm },
    props: {
      initialData: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        formData: { ...this.initialData },
        formSchema: {
          name: { label: 'Budget Name', required: true },
          amount: { label: 'Amount', type: 'number', required: true },
          category: { label: 'Category', required: true }
        }
      }
    },
    methods: {
      submitForm(data) {
        // Тук може да извикаш API
        this.$emit('success', data)
      }
    }
  }
  </script>
  