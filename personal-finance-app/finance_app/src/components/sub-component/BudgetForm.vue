<script setup>
  import { reactive, toRefs, watch } from 'vue';
  import ModalPop from './ModalPop.vue';
  import { ref } from 'vue';
  
  const props = defineProps({
    fields: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    buttonText: {
      type: String,
      default: 'Submit'
    }
  });
  
  const emit = defineEmits(['update:modelValue', 'submit']);
  
  // Създаваме локално копие, за да не модифицираме директно props
  const localData = reactive({ ...props.modelValue });
  
  watch(localData, (newVal) => {
    emit('update:modelValue', newVal);
  }, { deep: true });
  
  function handleSubmit() {
    emit('submit', { ...localData });
  }
  const showModal = ref(false);
  const isSubmitted = ref(false);

  const formData = ref({
  name: '',
  amount: '',
  category: ''
});
const formSchema = {
  name: { label: 'Budget Name', required: true },
  amount: { label: 'Amount', type: 'number', required: true },
  category: { label: 'Category', required: true }
};

function openModal(mode) {
  formMode.value = mode;
  showModal.value = true;
  // при edit може да сетнеш данните от база
}

function closeModal() {
  showModal.value = false;
}

function submitForm(data) {
  isSubmitting.value = true;
  setTimeout(() => {
    console.log(`${formMode.value} submitted:`, data);
    isSubmitting.value = false;
    closeModal();
  }, 1500);
}
</script>


<template>
    <form @submit.prevent="handleSubmit" class="space">
      <div v-for="(field, index) in fields" :key="index">
        <label :for="field.name" class="block mb-1 font-medium">{{ field.label }}</label>
        <input
          v-model="localData[field.name]"
          :id="field.name"
          :type="field.type || 'text'"
          :placeholder="field.placeholder"
          class="border p-2 w-full rounded"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        {{ buttonText }}
      </button>
    </form>
  </template>

    <style scoped>
    .space {
        /* Modal - Add New Budget - Empty */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;

position: relative;
width: 560px;
height: 490px;

    }
    </style>

  

  