<script>
import data from '../data/data.json';
export default {
  name: 'PotsCart',
  data() {
    return {
      pots: data.pots,
      potsTotal: data.potsTotal,
      potsCount: data.potsCount,
      potsCart: data.potsCart,
      potsCartTotal: data.potsCartTotal,
      potsCartCount: data.potsCartCount,
      activeCardId: null,
      menuVisible: false,
    };
  },
  methods: {
    openModal(action) {
      this.$emit('open-modal', action);
    },
    toggleMenu(potName) {
      this.activeCardId = this.activeCardId === potName ? null : potName;
      
    },
    getUsagePercentage(pot) {
      if (pot.total === 0) return 0;
      return ((pot.total / pot.target) * 100).toFixed(2);
    },
  },
};

</script>



<template>
  <div class="pots-container">
    <section class="title">
     <h2>Pots</h2>
      <button @click="openModal('add')" class="add-pot">
        <span>+ Add New Pot</span>
      </button>
    </section>
     <div class="main">
      <div v-for="pot in pots" :key="pot.name" class="pots">
       <section class="header">
        <div class="name">
          <span class="dot" :style="{ backgroundColor: pot.theme }"></span>
              <h3>{{ pot.name }}</h3>
        </div>
        <div class="edit-pot relative" @click="toggleMenu(pot.name)"><img src="../assets/icons/icon-ellipsis.svg" alt="">
                <div v-if="activeCardId === pot.name" >
      <ul class="absolute">
        <li @click="openModal('edit')" class="px-edit px-p">Edit Pot</li>
        
        <li @click="openModal('delete')" class="px-delete">Delete Pot</li>
        
      </ul>
    </div>
              
              </div>
       </section>
       <section class="value">
        <div class="saved">
          <h3>Total Saved</h3>
          <span class="total-value">${{ pot.total.toFixed(2) }}</span>
        </div>
        <div class="target">
          <div class="progress-bar-container">
  <div
    class="progress-bar-fill"
    :style="{
      width: getUsagePercentage(pot) + '%',
      backgroundColor: pot.theme
    }"
  ></div>
</div>
<div class="percent">
  <span >{{ getUsagePercentage(pot) }}%</span>
  <p>Target of ${{ pot.target }}</p>
</div>
<section class="buttons">
  <button @click="openModal('add')" class="add-pot-btn">
    <span>+ Add Money</span>
  </button>
  <button @click="openModal('withdraw')" class="withdraw-pot">
    <span>Withdraw</span>
  </button>

</section>
         
    
        </div>
      </section>
      </div>
     </div>
    
    
  </div>
</template>


<style scoped>
.pots-container {
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

.add-pot {
  /* Add New Pot */
  /* Button */
  /* Primary Button */


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
.add-pot span {
  /* Add New Pot Button Text */
  /* Main Content Title Button Text */
  /* + Add New Pots */

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
  /* Main */
display: grid;
grid-template-columns: repeat(2, 1fr);;
gap: 24px;

}
.pots{

  /* Pots */
  /* Main Content */
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;

width: 518px;
height: 303px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.header {
  /* Header */
  /* Main Content Header */
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 20px;


height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.name {
  /* Name */
  /* Main Content Header Name */
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
.edit-pot{
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

.value {
  /* Value */
  /* Main Content Value */
  /* Pot Chart and Bar */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 32px;

width: 470px;
height: 114px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


}
.saved {
  /* Saved */
  /* Main Content Value Saved */
  /* Total Saved */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 11px;

width: 470px;
height: 38px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.saved h3 {
  /* Total Saved */
  /* Main Content Value Saved Text */
  /* Total Saved */
  /* Total Saved */

width: 76px;
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
.total-value {
  /* Total Value */
  /* Main Content Value Saved Text */
  /* $1,000.00 */

/* $159.00 */


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
order: 1;
flex-grow: 0;
}
.target {
  /* Target */
  /* Main Content Value Target */
  /* Pot Chart and Bar */
  /* Bar */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 13px;

width: 470px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.progress-bar-container {
/* Bar */

/* Auto layout */
/* Bar */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

width: 470px;
height: 8px;

background: #F8F4F0;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


}

.progress-bar-fill {
/* Shape */

/* Shape */

width: 37.4px;
height: 8px;


border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


}
.percent {
  /* Percent */
  /* Main Content Value Target Text */
  /* 100% */
  /* Target Texts */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 470px;
height: 18px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.percent span {
  /* 100% */
  /* Main Content Value Target Text */
  /* 100% */
  /* 7.95% */

width: 231px;
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
flex-grow: 1;
}
.percent p {

  /* Target of $1,000.00 */
  /* Main Content Value Target Text */
  /* Target of $1,000.00 */
  /* Target of $2,000 */

width: 231px;
height: 18px;

/* text-preset-5 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */
text-align: right;

color: #696868;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
}
.buttons {
  /* Buttons */
  /* Main Content Value Target */
  /* Pot Chart and Bar */
  /* Buttons */
  /* Target of $2,000 */

width: 231px;
height: 18px;

/* text-preset-5 */
/* Buttons */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 470px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.add-pot-btn {
  /* Add Money */
  /* Main Content Value Target Button */
  /* Add Money Button */
  /* Primary Button */
  /* Button/Secondary */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;

width: 227px;
height: 53px;

background: #F8F4F0;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}
.add-pot-btn span {
  /* Add Money Button Text */
  /* Main Content Value Target Button Text */
  /* Add Money Button Text */
  /* + Add Money */
  /* + Add Money Button Text */
  /* + Add Money */

width: 87px;
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
order: 0;
flex-grow: 0;
}
.withdraw-pot {
  /* Withdraw */
  /* Main Content Value Target Button */
  /* Withdraw Button */
  /* Button/Secondary */
 /* Button/Secondary */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;

width: 227px;
height: 53px;

background: #F8F4F0;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
}
.withdraw-pot span {
  /* Withdraw Button Text */
  /* Main Content Value Target Button Text */
  /* Withdraw Button Text */
  /* Withdraw */
   /* Withdraw */

width: 65px;
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
order: 0;
flex-grow: 0;
}
.withdraw-pot:hover {
  background-color: #e0e0e0;
}
.withdraw-pot:active {
  background-color: #d0d0d0;
}
.add-pot-btn:hover {
  background-color: #e0e0e0;
}
.add-pot-btn:active {
  background-color: #d0d0d0;
}
</style>
