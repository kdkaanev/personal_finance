<script>
export default {
  name: "BudgetInfo",
  props: {
    transactions: {
      type: Array,
      
    },
    budgets: {
      type: Object,
   
    },
    pots: {
      type: Array,
     
    }

  },
 
  methods: {
   
  
  }
};


</script>

<template>
     <section class="budget-small">
      <div class="small-header">
              <h3>Lates Spending</h3>
            <button class="see">
              <p>See All</p> 
              <img src="../../assets/icons/icon-caret-right.svg" alt="">
            </button>
            </div>
      <ul>
        <li v-for="(t, index) in transactions" :key="index">
          
           
          
            <span class="name">
              <img :src="t.avatar" alt="avatar">
              <p>{{ t.name }}</p>
            </span>
            <span class="small-value">
              <b>-${{Math.abs(t.amount)}}</b>
              <p>{{ new Date(t.date).toLocaleDateString() }}</p>

            </span>
          
          
        </li>
      </ul>
            </section>
</template>


<style scoped>
.small-header {
  /* Frame 551 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 24px;

width: 504px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.small-header h3 {
  /* Heading 4 */
/* Latest Spending */


width: 126px;
height: 24px;

/* text-preset-3 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 150%;
/* identical to box height, or 24px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.see{
  /* Button */
  /* See Details */
  /* Button/Tertiary */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;


width: 71px;
height: 21px;



/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.see p {
  /* Button/Tertiary/Label */
  /* See Details */
  /* See All */

width: 47px;
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
.see img {
  /* Icon/Arrow Right */
  /* Arrow Right */
 /* ph:caret-down-fill */

width: 12px;
height: 12px;



/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
ul {
  /* List */
  /* Latest Spending */

/* Frame 516 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 504px;
height: 170px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
li {
  /* List Item */
  /* Latest Spending */
  /* Frame 517 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
padding-bottom: 2rem;
gap: 16px;


height: 40px;
border-bottom: 1px solid #e3dfdc;



/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.name {
  /* Name */
  /* Latest Spending */
  /* Frame 518 */
  /* Frame 517 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 80%;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.name img {
  /* Avatar */
  /* Avatar */
  /* Avatar/Default */
  /* Ellipse 13 */

width: 32px;
height: 32px;
border-radius: 50%;

background: url(james-thompson.jpg), #F8F4F0;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.name p {
  /* Name */
  /* Latest Spending */
  /* Frame 519 */
  /* Audiobook service */


height: 18px;

/* text-preset-5-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #201F24;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.small-value {
  /* Small Value */
  /* Latest Spending */
  /* Frame 520 */
  /* Frame 524 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 4px;


width: 68px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.small-value b {
  /* Small Value */
  /* Latest Spending */
  /* Frame 521 */
  /* -$10.00 */


height: 18px;

/* text-preset-5-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */
text-align: right;

color: #201F24;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.small-value p {
  /* Small Value */
  /* Latest Spending */
  /* Frame 522 */
  /* 16 Aug 2024, 14:00 */


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


</style>