<template>
     <section class="budget-small">
              <div class="value-entertaiment green">
                <p>Entertaiment</p>
                <span class="entertaiment-value">$50.00</span>
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
</template>


<style scoped>
.budget-small{
  /* Small */
  /* Small */
  /* Small */
  /* Budgets Small */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-top: 16px;
gap: 16px;

width: 101px;
height: 220px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.value-entertaiment{
  /* Budgets Micro */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 16px;

width: 101px;
height: 43px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.value-entertaiment > p{
  /* Entertainment */

width: 81px;
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
.entertaiment-value{
  /* $25.00 */

width: 50px;
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
.value-bills{
  /* Bills */
  /* Budgets Micro */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 16px;

width: 79px;
height: 43px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.value-bills > p{
  /* Bills */
  /* Bills */

width: 25px;
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
.bills-value{
  /* $25.00 */
  /* $250.00 */

width: 59px;
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
.value-dining{
  /* Dining Out */
  /* Budgets Micro */
  /* Budgets Micro */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 16px;

width: 80px;
height: 43px;

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;

}
.value-dining > p{
  /* Dining Out */
  /* Dining Out */
  /* Dining Out */

width: 60px;
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
.dining-value{
  /* $25.00 */
  /* $250.00 */
  /* $250.00 */

/* $67.00 */

width: 50px;
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
.value-care{
  /* Personal Care */
  /* Budgets Micro */
  /* Budgets Micro */
  /* Budgets Micro */
  /* Budgets Micro */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 16px;

width: 98px;
height: 43px;

/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;

}
.value-care > p{
  /* Personal Care */
  /* Personal Care */
  /* Personal Care */
  /* Personal Care */
  /* Personal Care */

width: 78px;
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
.care-value{
  /* $25.00 */
  /* $250.00 */
  /* $250.00 */
  /* $250.00 */
  /* $65.00 */

width: 56px;
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
.recurring-bills{
  /* Recurring Bills */
  /* Recurring Bills */
  /* Frame 501 */
  /* Frame 501 */
  /* Frame 501 */
  /* Frame 502 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 32px;

width: 428px;
height: 327px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.recurring-title{
  /* Recurring Bills */
  /* Small Content Title */
  /* Small Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 24px;

width: 364px;
height: 24px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.recurring-title p{
  /* Recurring Bills */
 /* Recurring bills */

width: 141px;
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
.green{

/* Color Tag */

border-left: 4px solid #277C78;

/* Color Tag */

/* Inside auto layout */

}
.blue{
 /* Gift */
 /* Gift */
 /* Gift */
 /* Gift */
 /* Gift */
 /* Color Tag */
 border-left: 4px solid  #82C9D7;;

}
.black{
 /* Concert Ticket */
 /* Concert Ticket */
 /* Concert Ticket */
 /* Concert Ticket */
 /* Concert Ticket */
 /* Color Tag */
 border-left: 4px solid #626070;
 /* Color Tag */

}
.orange{
 /* New Laptop */
 /* New Laptop */
 /* New Laptop */
 /* New Laptop */
 /* New Laptop */
 /* Color Tag */
 border-left: 4px solid #F2CDAC;
 /* Color Tag */

}
</style>