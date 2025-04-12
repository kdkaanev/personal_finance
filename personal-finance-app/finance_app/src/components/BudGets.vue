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
      budgets: data.budgets,
      pots: data.pots,
    
    };
  },

  mounted() {
    console.log(this.allTransactons);
    console.log(this.budgets);
    console.log(this.pots);
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
      <button class="add-budget">
        <span>+ Add New Budget</span>
      </button>
    </section>
    <div class="main">
      <section class="main-left">
        <section class="chart">
            <DounutChart />

          </section>
        <div class="summary">
        </div>
      </section>

      <section class="main-right">

        
    
          <div v-for="budget in budgets" :key="budget" class="budgets">
            <section class="enter-header">  
             <div class="name">
              <span class="dot" :style="{ backgroundColor: budget.theme }"></span>
              <h3>{{ budget.category }}</h3>
             </div>
              <span><img src="../assets/icons/icon-ellipsis.svg" alt=""></span>
            </section>
            <section class="value">
              <span class="entertaiment-value"><p>Maximum of {{ budget.maximum }}</p></span>
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
              <BudgetInfo :transactions="(groupedTransactions[budget.category] || []).slice(-3)" />
            </section>
              
              
               
              </div>

           
    
     


    
      


      </section>
        
    </div>
  </div>
</template>

<style scoped>
.budget-container {
  /* Main Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 40px;
gap: 32px;


height: 2264px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
z-index: 1;

}
.title {
  /* Title */
  /* Main Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 0px;
gap: 24px;

max-width: 1440px;
height: 56px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


}
.title h2 {
  /* Title */
  /* Main Content Title Text */
  /* Budgets */

width: 128px;
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
.add-budget {
  /* Add New Budget Button */
  /* Main Content Title Button */
/* Frame 529 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;

width: 155px;
height: 53px;

background: #201F24;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.add-budget span {
  /* Add New Budget Button Text */
  /* Main Content Title Button Text */
  /* + Add New Budget */

width: 123px;
height: 21px;

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
.main {
  /* Main Content Body */
  /* Main Content */
  /* Frame 499 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;


max-width: 1440px;
height: 2132px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.main-left {
  /* Main Content Body Left */
  /* Main Content Body */
  /* Left Side */

/* Auto layout */
/* Left Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 428px;
height: 599px;


background: #FFFFFF;
border-radius: 12px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.chart {
  /* Chart */
  /* Main Content Body Left */
  /* Frame 500 */
  /* Chart */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;

width: 364px;
height: 280px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.summary {
  /* Summary */
  /* Main Content Body Left */
  /* Frame 501 */
  /* Spending Summary */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 364px;
height: 223px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

.main-right {
  /* Main Content Body Right */
  /* Main Content Body */
  /* Right Side */
  /* Right Side */

/* Auto layout */
/* Right Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 608px;
height: 2132px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}
.budgets {
  /* Budget Card */
  /* Main Content Body Right */
  /* Frame 502 */
  /* Budget Card */
  /* Budget */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 20px;

width: 608px;
height: 510px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.enter-header {
  /* Entertainments Header */
  /* Budget Card */
  /* Frame 503 */
  /* Entertainments Header */
  /* Title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 20px;

width: 544px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.name {
  /* Entertainments Header Name */
  /* Budget Card */
  /* Frame 503 */
  /* Entertainments Header */
  /* Title */
  /* Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;


width: 316px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.dot{
  /* Dot */
  /* Budget Card */
  /* Frame 504 */
  /* Dot */
  /* Ellipse 16 */

width: 16px;
height: 16px;


border-radius: 50%;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
border-radius: 50%;
}
.name h3 {
  /* Entertainments Header Name Text */
  /* Budget Card */
  /* Frame 503 */
  /* Entertainments Header */
  /* Title */
  /* Title */
  /* Entertainment */

width: 139px;
height: 24px;

/* text-preset-2 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
/* identical to box height, or 24px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.value {
  /* Entertainments Value */
  /* Budget Card */
  /* Frame 505 */
  /* Entertainments Value */
  /* Value */
  /* Amount Bar */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 544px;
height: 128px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
</style>
