<script>

import DounutChart from './sub-component/DounutChart.vue';
import data from '../data/data.json';
import BudgetInfo from './sub-component/BudgetInfo.vue';

import ModalPop from './sub-component/ModalPop.vue';
import AddBudget from './sub-component/AddBudget.vue';
import EditBudget from './sub-component/EditBudget.vue';
import DeleteBudget from './sub-component/DeleteBudget.vue';





export default {
  name: "DropdownMenu",
  name: 'BudGets',
  components: {
    DounutChart,
    BudgetInfo,
    ModalPop,
    EditBudget,
    AddBudget,
    DeleteBudget

 
  },
  data() {
    return {
      allTransactons: data.transactions,
      budgets: data.budgets,
      pots: data.pots,
      showModal: false,
      modalType: 'add',
      currentModal: null,
      activeCardId: null,
      menuVisible: false,
      currentComponent: null,

     
      
    
    };
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
    segments() {
    return this.budgets.map(budget => {
      const spent = this.allTransactons
        .filter(tx => tx.category === budget.category)
        .reduce((sum, tx) => sum + Math.abs(tx.amount), 0)

      const percent = Math.min((spent / this.getTotalLImits()) * 100, 100)

      return {
        value: Math.round(percent),
        color: budget.theme,
        name: budget.category,
        spent: spent,
        budget: budget.maximum,
     

      }
    })
  },
  currentComponent() {
    let component;
    if (this.modalType === 'add') {
      component = AddBudget;
    } else if (this.modalType === 'edit') {
      component = EditBudget;
    }else if (this.modalType === 'delete') {
      component = DeleteBudget;
    }
    
    return component;
    
  },

  
    
    
  },
methods: {
  openModal(type,) {
    console.log(type)
    this.modalType = type;
    this.showModal = true;

  
  },
  closeModal() {
    this.showModal = false;
  
  },
  handleSuccess(data) {
    console.log('Budget saved:', data);
    this.closeModal();
    // Тук можеш да добавиш логика за обновяване на данните
  },
  getSpent(category) {
    const transactions = this.groupedTransactions[category] || [];
    const spent = transactions.reduce((total, transaction) => total - transaction.amount, 0);
    return spent;
  },
  getUsagePercentage(category) {
    const budget = this.budgets.find(b => b.category === category);
    if (!budget) return 0;
    const spent = this.getSpent(category);
    const result = (spent / budget.maximum) * 100;
    return Math.min(Math.max(result, 0), 100);
  },
  getTotalLImits() {
    return this.budgets.reduce((total, budget) => total + budget.maximum, 0);
  },
  getTotalSpent() {
    return this.segments.reduce((total, segment) => total + segment.spent, 0);

  },
  toggleMenu(category) {
      this.activeCardId = this.activeCardId === category ? null : category;
      
    },
    

},
mounted() {
  // Example usage


 
  
},

};
 



  
 
</script>


<template>
  
  
 




  <div class="budget-container">
    <ModalPop v-if="showModal" @close="closeModal">
      <component
        :is="currentComponent"
        @success="handleSuccess"
        @cancel="closeModal"
        @close="closeModal"
      />
    </ModalPop>
   
    <section class="title">
     <h2>Budget</h2>
      <button @click="openModal('add')" class="add-budget">
        <span>+ Add New Budget</span>
      </button>
    </section>
    <div class="main">
      <section class="main-left">
        <section class="chart">
            <DounutChart  
  :segments="segments"
  :transactions="allTransactons"
  :budgets="budgets"

            />
         

          </section>
          <div class="spending-summary">
              <h3>Spending Summary</h3>
              <section class="spending-info">
              <div v-for="budget in budgets" :key="budget" class="spending">
                <div class="spending-category">
                  <div class="line" :style="{ backgroundColor: budget.theme }"></div>
                  <h4>{{ budget.category }}</h4>
                </div>
             
                <div class="spending-value">
                  
                  
                    <b>${{ getSpent(budget.category) }}</b>
                    <p>of {{ budget.maximum }}</p>
                  
                </div>
               

              </div>
              </section>
            </div>

        
      </section>

      <section class="main-right">

        
    
          <div v-for="budget in budgets" :key="budget.category" class="budgets">
            <section class="header">  
             <div class="name">
              <span class="dot" :style="{ backgroundColor: budget.theme }"></span>
              <h3>{{ budget.category }}</h3>
             </div>
              <div class="edit-budget relative" @click="toggleMenu(budget.category)"><img src="../assets/icons/icon-ellipsis.svg" alt="">
                <div v-if="activeCardId === budget.category">
      <ul class="absolute">
        <li @click="openModal('edit')" class="px-edit px-p">Edit Budget</li>
        
        <li @click="openModal('delete')" class="px-delete">Delete Budget</li>
        
      </ul>
    </div>
              
              </div>
            </section>
            <section class="value">
              <span class="max-value"><p>Maximum of ${{ budget.maximum }}</p></span>
              <div class="progress-bar-container">
  <div
    class="progress-bar-fill"
    :style="{
      width: getUsagePercentage(budget.category) + '%',
      backgroundColor: budget.theme
    }"
  ></div>
</div>
              <div class="info">
                <span class="line" :style="{ backgroundColor: budget.theme }"></span>
                <span class="spent">
                  <p>Spent</p>
                  <span class="spent-value">${{ getSpent(budget.category) }}</span>
                </span>
                <span class="line" </span>
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
cursor: pointer;

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
.edit-budget{
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.absolute {

  /* Dropdown - Edit Delete Budget  - For Mobile Only */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 16px;

position: relative;

height: 91px;
max-height: 300px;

background: #FFFFFF;
/* drop-shadow */
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
border-radius: 8px;

}
.px-edit {
  /* Edit Budget */
  /* Dropdown - Edit Delete Budget  - For Mobile Only */
  /* Edit Budget Text */
  /* Green */

width: 77px;
height: 21px;

padding-bottom: 2rem;
/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.px-p {
  /* Dropdown - Edit Delete Budget  - For Mobile Only */
  /* Divider Line */
  border-bottom: 1px solid grey;
  /* Line 1 */}
.px-delete {
  /* Delete Budget */
  /* Dropdown - Edit Delete Budget  - For Mobile Only */
  /* Delete Budget Text */
  /* Red */
  /* Frame 591 */

/* Auto layout */
/* Green */

width: 94px;
height: 21px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #C94736;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
li

{
  cursor: pointer;
  list-style: none;
}
li:hover {
  background-color: #f0f0f0;
}
li:active {
  background-color: #e0e0e0;
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
padding-bottom: 1rem;
gap: 24px;

width: 428px;
height: fit-content;


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


height: 280px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.spending-summary {
  /* Spending Summary */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Summary */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;
margin: 1rem;

height: 223px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.spending-summary h3 {
  /* Spending Summary Text */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Summary Text */
  /* Spending Summary */
  /* Spending Summary */

width: 189px;
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
order: 0;
flex-grow: 0;
}
.spending-info {
  /* Spending Info */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Info */
  /* Details */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;


height: 183px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.spending {
  /* Spending */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Info */
  /* Details */
  /* List */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

gap: 24px;

border-bottom: 1px solid #e3dfdc;
padding-bottom: 1rem;



/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.spending-category {
  /* Spending Category */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Info */
  /* Details */
  /* List Text */
  /* Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;



height: 21px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
}
.spending-category h4 {
  /* Spending Text */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Info */
  /* Details */
  /* List Text */

/* Entertainment */

width: 93px;
height: 21px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.spending-value {
  /* Spending Value */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Info */
  /* Details */
  /* /* Amount */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content:flex-end;

align-items: center;
padding: 0px;
gap: 8px;



height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.spending-value p {
  /* Spending Value Text */
  /* Chart */
  /* Frame 501 */
  /* Spending Summary */
  /* Spending Info */
  /* Details */
  /* Amount Text */
/* of $50.00 */

width: 55px;
height: 18px;

/* text-preset-5 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 1;
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
.header {
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
/* Amount Bar */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;


height: 128px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.max-value {
  /* Entertainments Value Max */
  /* Budget Card */
  /* Frame 506 */
  /* Entertainments Value */
  /* Value */
  /* Amount Bar */
  /* Maximum of $1000 */
  /* Maximum of $50.00 */

width: 131px;
height: 21px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.info {
  /* Spent and Free */

/* Auto layout */
/* Spent and Free */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 544px;
height: 43px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;


}
.line {
  /* Line */
  /* Spent and Free */
  /* Spent and Free */
  /* Line */
  /* Line 1 */
  /* Shape */

width: 4px;
height: 100%;

background-color: #f8f4f0;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.spent {
  /* Spent */
  /* Spent and Free */
  /* Spent */
  /* Spent */

/* Auto layout */
display: flex;
flex-direction: column;

padding: 0px;
gap: 8px;


height: 43px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}
.info p {
  /* Spent Text */
  /* Spent and Free */
  /* Spent */
  /* Spent Text */
  /* Spent */
  /* Spent */

width: 34px;
height: 18px;

/* text-preset-5 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.spent-value {
  /* Spent Value */
  /* Spent and Free */
  /* Spent */
  /* Spent Text */
  /* Spent Value */
  /* $100.00 */
  /* $25.00 */

width: 47px;
height: 21px;

/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.remaining {
  /* Free */
  /* Spent and Free */
  /* Free */
  /* Free */
  /* Free */

/* Auto layout */
display: flex;
flex-direction: column;


padding: 0px;
gap: 8px;


height: 43px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
}
.remaining-value {

  
  /* Spent and Free */
  /* Free */
  /* Free Text */
  /* $50.00 */

width: 51px;
height: 21px;

/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.latest {
  /* Latest Spending */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 20px;
gap: 20px;

width: 544px;
height: 254px;

background: #F8F4F0;
border-radius: 12px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
}
.progress-bar-container {
/* Bar */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px;

width: 100%;
height: 32px;

background: #F8F4F0;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}

.progress-bar-fill {
/* Shape */

width: 108px;
height: 24px;

background: #82C9D7;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}


  /* Free */
  /* Free */
</style>
