<template>
<div class="over-container">
  <section class="title"> Overview</section>
  <section class="summary">
    <div class="balance">
      <div class="balance-title">Current Balance</div>
      <div class="balance-value">$4,836.00</div>
    </div>
    <div class="income">
      <div class="income-title">Income</div>
      <div class="income-value">$3,814.25</div>
    </div>
    <div class="expenses">
      <div class="expenses-title">Expenses</div>
      <div class="expences-value">$1,700.50</div>
    </div>
  </section>
  <section class="content">
    <div class="left-side">
     <section class="pots">
      <div class="pots-title">
        <p>Pots</p>
       
        <button class="see" href="#">See Details <img src="../assets/picture/icon-caret-right.svg" alt=""></button>
        
      </div>
      <div class="info">
        <div class="total">
          <img src="../assets/picture/icon-nav-pots.svg" alt="">
          <div class="value">
            <h5>Total saved</h5>
            <div class="amount">$850</div>
          </div>
        </div>
        <div class="small">
          <div class="line1">
            <div class="micro saving">
              <h5>Savings</h5>
              <span class="micro-value">$159</span>
            </div>
            <div class="micro gift">
              <h5>Gift</h5>
              <span class="micro-value">$40</span>
            </div>
          </div>
          <div class="line2">
            <div class="micro concert">
              <h5>Concert Ticket</h5>
              <span class="micro-value">$110</span>
            </div>
            <div class="micro new">
              <h5>New Laptop</h5>
              <span class="micro-value">$10</span>
            </div>
          </div>
          </div>

      </div>
    </section>
     <section class="transactions">
      <div class="transactions-title">
        <p>Transactions</p>
        <button class="see" href="#">Vew All <img src="../assets/picture/icon-caret-right.svg" alt=""></button>
      </div>
      <div class="transaction-info">
        <div class="profil">
          <img class="profile-pic" src="../assets/avatars/emma-richardson.jpg" alt="">
        <p class="transaction-name">Emma Richardson</p>
        </div>
        <div class="transaction">
          <p class="summ-plus">+$575.5</p>
          <p class="date">19th Aug 2024</p>
        </div>
      </div>
      <div class="transaction-info">
        <div class="profil">
          <img class="profile-pic" src="../assets/avatars/savory-bites-bistro.jpg" alt="">
        <p class="transaction-name">Savory Bites Bistro</p>
        </div>
        <div class="transaction">
          <p class="summ-minus">+$575.5</p>
          <p class="date">10th Aug 2024</p>
        </div>
      </div>
      <div class="transaction-info">
        <div class="profil">
          <img class="profile-pic" src="../assets/avatars/daniel-carter.jpg" alt="">
        <p class="transaction-name">Daniel Carter</p>
        </div>
        <div class="transaction">
          <p class="summ-minus">-42.30</p>
          <p class="date">18th Aug 2024</p>
        </div>
      </div>
      <div class="transaction-info">
        <div class="profil">
          <img class="profile-pic" src="../assets/avatars/sun-park.jpg" alt="">
        <p class="transaction-name">Sun Park</p>
        </div>
        <div class="transaction">
          <p class="summ-plus">+$120.00</p>
          <p class="date">17th Aug 2024</p>
        </div>
      </div>
      <div class="transaction-info">
        <div class="profil">
          <img class="profile-pic" src="../assets/avatars/urban-services-hub.jpg" alt="">
        <p class="transaction-name">Urban Services Hub</p>
        </div>
        <div class="transaction">
          <p class="summ-minus">-65.00</p>
          <p class="date">17th Aug 2024</p>
        </div>
      </div>
  
  
  
  
  
     </section>
    </div>
    <div class="right-side">
      <section class="budgets">
      </section>
      <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
  <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
  <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>

  <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3"></circle>
</svg>
    </div>
  </section>
</div>
</template>



<style scoped>
h5{
  /* Total Saved */

width: 100px;
height: 21px;
margin: 0px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #696868;


/* Inside auto layout */
/* flex: none;
order: 0;
flex-grow: 0; */

}
.over-container{
  /* Main Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 40px;
gap: 32px;

width: 1140px;
height: 1064px;


/* Inside auto layout */
/* flex: none;flex: none;
order: 1;
flex-grow: 1;
z-index: 1; */

}
.title{
  /* Title */ 
  /* Main Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 0px;
gap: 24px;

width: 1060px;
max-width: 1440px;
height: 56px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/* Overview */

width: 141px;
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
.summary{
  /* Summary */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 1060px;
max-width: 1440px;
height: 119px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
/* Balance */
.balance{
  /* Balance */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 12px;

width: 337.33px;
height: 119px;

background: #201F24;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.balance-title{
  /* Current Balance */

width: 106px;
height: 21px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.balance-value{
  /* Frame 522 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 11px;

width: 289.33px;
height: 38px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
/* $1,836.00 */

width: 166px;
height: 38px;

/* text-preset-1 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;
/* or 38px */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
/* Income */
.income{
/* Income */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 12px;

width: 337.33px;
height: 119px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}
.income-title{
  /* Income *//* Income */

width: 48px;
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
.income-value{
  /* Frame 522 */
  /* Frame 522 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 11px;

width: 289.33px;
height: 38px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
/* $1,836.00 */
/* $2,350.00 */

width: 160px;
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
/* Expenses */
.expenses{
  /* Expenses */
  /* Expenses */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 12px;

width: 337.33px;
height: 119px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 1;

}
.expenses-title{
  /* Expenses */
  /* Expenses */

width: 63px;
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
.expences-value{
 /* Frame 522 */

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/* $514.00 */

width: 154px;
height: 38px;

/* text-preset-1 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;
/* or 38px */

color: #201F24;flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.content{
  /* Content */
  /* Content */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 1060px;
max-width: 1440px;
height: 761px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.left-side{
/* Left Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 608px;
height: 761px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.pots{
  
  /* Frame 501 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 20px;

width: 608px;
height: 218px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.pots-title{
  /* Pots */
  /* Small Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 24px;

width: 544px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;



}
.pots-title p{
  /* Saving Pot */


width: 43px;
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


  /* Pots */
  /* Pots */
}
.see{
/* Button/Tertiary */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 4px;


width: 98px;
height: 21px;
/* See Details */
/* See Details */

width: 74px;
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


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

  }
.info{
/* Frame 535 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 20px;

width: 544px;
height: 110px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.total{
  /* Total saved */
  /* Total saved */
  /* Total Saved */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 16px;

width: 247px;
height: 110px;

background: #F8F4F0;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.total img{
  /* Frame 522 */
  /* ph:tip-jar-light */

width: 40px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}

.value{
  /* Frame 522 */
/* Savings Small */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 277px;
height: 102px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}
.amount{
  /* $1,836.00 */
  /* $1,836.00 */
  /* $850 */

width: 86px;
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
.small{
  /* Small */
  /* Small */
  /* Savings Small */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 277px;
height: 102px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}
.line1{
  /* Line 1 */
  /* Line 1 */
  /* Line 1 */
  /* Line 1 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding-left: 4px;
gap: 16px;

width: 277px;
height: 43px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.micro{
  /* Savings */
  /* Savings */
  /* Savings */
  /* Savings */
  /* Savings Micro */

/* Auto layout */


display: flex;
flex-direction: column;
align-items:flex-start;
padding-left: 16px;


width: 130.5px;
height: 43px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.saving{

 /* Color Tag */


 border-left: 4px solid #277C78;

 /* Color Tag */




/* Inside auto layout */




}
.gift{
  /* Gift */
  /* Gift */
  /* Gift */
  /* Gift */
  /* Gift */
  /* Color Tag */
  border-left: 4px solid  #82C9D7;;


}
.concert{
  /* Concert Ticket */
  /* Concert Ticket */
  /* Concert Ticket */
  /* Concert Ticket */
  /* Concert Ticket */
  /* Color Tag */
  border-left: 4px solid #626070;
  /* Color Tag */




}
.new{
  /* New Laptop */
  /* New Laptop */
  /* New Laptop */
  /* New Laptop */
  /* New Laptop */
  /* Color Tag */
  border-left: 4px solid #F2CDAC;
  /* Color Tag */

}



.micro-value{
  /* $850 */
  /* $850 */
  /* $850 */
  /* $850 */
  /* $850 */
  /* $159 */

width: 35px;
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
.line2{
  /* Line 2 */
  /* Line 2 */
  /* Line 2 */
  /* Line 2 */
  /* Line 2 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 4px;
gap: 16px;

width: 277px;
height: 43px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.transactions{
  /* Transactions */
  /* Transactions */
  /* Frame 502 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 32px;

width: 608px;
height: 519px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.transactions-title{
  /* Transactions */
  /* Small Content Title */
  /* Small Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 11px;

width: 544px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.transactions-title p{
  /* Transactions */
  /* Transactions */
  /* Transactions */
  /* Transactions */


width: 124px;
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
.transaction-info{
  /* Frame 535 */
  /* List */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

width: 100%;
height: 47px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.profil{
  /* Frame 522 */
  /* Frame 522 */
  /* Frame 522 */
  /* Frame 522 */
  /* Image and Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;

margin: 0 auto;
width: 474px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.profile-pic{
  /* Emma Richardson */
  /* Profile Picture */

width: 40px;
height: 40px;
border-radius: 50%;

background: url(emma-richardson.jpg), #F8F4F0;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.transaction-name{
  /* Frame 523 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 8px;


height: 21px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.transaction{
  /* Frame 523 */
  /* Value and Date */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 8px;



height: 47px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.summ-plus{
  /* -$25.00 */

width: 59px;
height: 21px;

/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
text-align: right;

color: #277C78;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.summ-minus{
  /* -$25.00 */
  /* +$450.00 */

width: 57px;
height: 21px;

/* text-preset-4-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
text-align: right;

color: #201F24;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.date{
  /* 10th Aug 2024 */
  /* 29 Aug 2024, 21:45 */

width: 100%;
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

.right-side{
  /* Right Side */
  /* Right Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 428px;
height: 754px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;

}

</style>
