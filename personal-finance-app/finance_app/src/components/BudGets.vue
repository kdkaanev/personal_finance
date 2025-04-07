<script>

import DounutChart from './sub-component/DounutChart.vue';

export default {
  name: 'BudGets',
  components: {
    DounutChart
 
  },
  data() {
    return {
      // Add any data properties you need here
    };
  },
  methods: {
    // Add any methods you need here
  }
};
</script>


<template>
  <div class="budget-container">
    <section class="title">
     <h2>Budget</h2>
    </section>
    <div class="main">
      <section class="main-left">
        <div class="summary">
          <section class="chart">
            <DounutChart />

          </section>
          
            <section class="budget-small">
              <div class="value-entertaiment green">
                <p>Entertaiment</p>
                <span class="entertaiment-value"><b>$15</b> <p>of $50</p></span>
              </div>

              <div class="value-bills blue">
                <p>Bills</p>
                <span class="bills-value">$750.00</span>
              </div>
              <div class="value-dining orange">
                <p>Dining Out</p>
                <span class="dining-value">$250.00</span>
              </div>
              <div class="value-care black">
                <p>Personal Care</p>
                <span class="care-value">$100.00</span>
              </div>
            </section>
          
        </div>
      </section>
      <section class="main-right"></section>
        
    </div>
  </div>
</template>
