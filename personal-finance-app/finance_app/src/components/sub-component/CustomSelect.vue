<script>
import data from '../../data/data.json';

export default {
  data() {
    return {
      budgets: data.budgets,
      selectedBudget: data.budgets[0],
      isOpen: false
    };
  },
  methods: {
    selectBudget(budget) {
      this.selectedBudget = budget;
      this.isOpen = false;
    },

  getColorName(hex) {
    const colorMap = {
        '#F2CDAC': 'Navy',
        '#277C78': 'Green',
        '#826cb0': 'Purple',
        '#93674f': 'Brown',
        '#934f6f': 'Magneta',
        '#82C9D7': 'Blue',
        '#626070': 'Grey',
        '#7f9161': 'Army',
        '#af81ba': 'Pink',
        '#cab361': 'Yellow',



      // Add more mappings as needed
    };
    return colorMap[hex] || 'Unknown';
  }


  }
};
</script>



<template>
    <section class="theme">
        <h3 class="label">Theme</h3>
        <div>
        
        <div @click="isOpen = !isOpen" class="select-dropdown">
        
            <section class="info">
                <span 
       class="dot" 
       :style="{ backgroundColor: selectedBudget?.theme || '#ccc' }"
     ></span>
     {{ getColorName(selectedBudget?.theme) }}
            </section>
   
     
     <span class="caret"><img src="../../assets/icons/icon-caret-down.svg" alt="down"></span>

        </div>
  
      <ul v-if="isOpen" class="dropdown-list">
        <li 
          v-for="budget in budgets" 
          :key="budget.category" 
          @click="selectBudget(budget)"
          class="dropdown-item"
        >
        
           <span class="name-theme">
            <div class="dot" :style="{ backgroundColor: budget.theme }"></div>
            {{ getColorName(budget.theme) }}
           </span>
    
       
            <span class="status"><img src="../../assets/icons/icon-selected.svg" alt=""></span>
        
        </li>
      </ul>
    </div>
    </section>
 
  </template>
  

  <style scoped>
  .name-theme {
   /* Frame 574 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;
/* Green */

width: 412px;
height: 21px;

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
order: 2;
flex-grow: 1;



height: 21px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

  }
  .info-panel {
    /* Input Field/Field States */
    /* Frame 574 */
    /* Green */

width: 396px;
height: 21px;

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
order: 2;
flex-grow: 1;

  }
  .info {
    /* Input Field/Field States */
    /* Frame 574 */

/* Auto layout */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #201F24;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;

width: 424px;
height: 21px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
    }
  .select-dropdown {
    /* Input Field/Field States */

box-sizing: border-box;

/* Auto layout */
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;
cursor: pointer;

width: 496px;
height: 45px;

background: #FFFFFF;
border: 1px solid #98908B;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
    }
    .theme {
      /* Input Field/Input Fields */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 496px;
height: 67px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
    }
.label {
  /* Label */
  /* Color Tag */


height: 18px;

/* text-preset-5-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #696868;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
  .dropdown {
    /* Input Field/Field States */

box-sizing: border-box;

/* Auto layout */
display: inline-block;
position: relative;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;


height: 45px;

background: #FFFFFF;
border: 1px solid #98908B;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

  }
  
 
  
  .dropdown-list {
    position: absolute;
    /* All Color */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 12px 20px;
gap: 12px;
width: 100%;
overflow-y: auto;
max-height: 160px;

position: relative;



background: #FFFFFF;
/* drop-shadow */
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
border-radius: 8px;

    z-index: 10;
  }
  
  .dropdown-item {
    padding: 6px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* Frame 576 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 16px;




/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

  }
  
  .dropdown-item:hover {
    background: #f0f0f0;
  }
  
  .dot {
  /* Color Tag */

width: 16px;
height: 16px;


border-radius: 50%;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

  }
  </style>
  