<script>
export default {
  name: "BudgetInfo",
  props: {
    transactions: {
      type: Array,
      required: true
    },
    budgets: {
      type: Object,
      required: true
    },
    pots: {
      type: Array,
      required: true
    }

  },
 
  methods: {
    // Add any methods you need here
  }
};


</script>

<template>
     <section class="budget-small">
      <div class="smal-header">
              <h3>Lates Spending</h3>
            <button class="see">
              See Details <img src="../assets/icons/icon-caret-right.svg" alt="">
            </button>
            </div>
      <ul>
        <li v-for="(t, index) in transactions" :key="index">
          
           
          <div class="small-info">
            <span class="name">
              <img :src="t.avatar" alt="avatar">
              <p>{{ t.name }}</p>
            </span>
            <span class="value">
              <b>${{ t.amount }}</b>
              <p>{{ new Date(t.date).toLocaleDateString() }}</p>

            </span>
          </div>
          
        </li>
      </ul>
            </section>
</template>


<style scoped>
</style>