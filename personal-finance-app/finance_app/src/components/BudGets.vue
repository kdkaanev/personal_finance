<script>

import DounutChart from './sub-component/DounutChart.vue';
import data from '../data/data.json';
import BudgetInfo from './sub-component/BudgetInfo.vue';


export default {
  name: 'BudGets',
  components: {
    DounutChart,
    BudgetInfo
 
  },
  data() {
    return {
      allTransactons: data.transactions,
    
    };
  },

  mounted() {
    console.log(this.allTransactons);
  },
  computed: {
   groupedTransactions() {
     const grouped = {};
     this.allTransactons.forEach(transaction => {
       const category = transaction.category;
       if (!grouped[category]) {
         grouped[category] = [];
       }
       grouped[category].push(transaction);
     });
     return grouped;
    },
    
    
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
          
           
          
        </div>
      </section>

      <section class="main-right">

        
    
          <div class="value-entertaiment green">
            <section class="enter-header">  
              <span class="dot"></span>
              <h3>Entertaiment</h3>
              <span><img src="../assets/icons/icon-ellipsis.svg" alt=""></span>
            </section>
            <section class="value">
              <span class="entertaiment-value"><p>maximum of $50</p></span>
              <progress id="file" value="32" max="100"> 32% </progress>
              <div class="info">
                <span class="spent">
                  <p>Spent</p>
                  <span class="spent-value">$15</span>
                </span>
                <span class="remaining">
                  <p>Remaining</p>
                  <span class="remaining-value">$35</span>
                </span>

              </div>
            </section>
            <section class="latest">
              <BudgetInfo :transactions="groupedTransactions['Entertainment'] || []" />
            </section>
              
              
               
              </div>

           
    
     


    
      


      </section>
        
    </div>
  </div>
</template>
