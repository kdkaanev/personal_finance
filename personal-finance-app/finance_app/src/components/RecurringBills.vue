<template>
 <div class="recurring-container">
  <h2 class="recurring-title">Recurring Bills</h2>
  <div class="main">
    <section class="right-side">
      <div class="total-bills">
        <img class="logo" src="../assets/icons/icon-nav-recurring-bills.svg" alt="">
        <section class="value">
          <h3 class="total">Total Bills</h3>
          <h2 class="total-value">$333</h2>
        </section>
      </div>
      <div class="summary">
        <h2>Summary</h2>
        <div class="pay-info">
          <section class="item">
          <h3 class="pay-title">Paid Bills</h3>
          <div class="pay-value">
            
            <h2 class="pay"><span class="pay">4</span>($100)</h2>
          </div>
        </section>
          <section class="item">
          <h3 class="pay-title">Total Upcoming</h3>
          <div class="pay-value">
         
            <h2 class="pay"><span>2</span>($200)</h2>
          </div>
        </section>
        <section class="item">
          <h3 class="red-title">Due Soon</h3>
          <div class="paid-value">
            
            <h2 class="paid-amount"><span>1</span>($33)</h2>
          </div>
        </section>
        </div>
      
      </div>
    </section>
    <section class="left-side">
      <section>
      <div class="fields">
        <div class="search-container">
          <div class="search">
            <input type="text" placeholder="Search bills">
            <img src="../assets/icons/icon-search.svg" alt="lupa" class="search-icon">
          </div>
        </div>
         <div class="checkbox">
        <div class="checkbox-sort">
       
            <label for="sort">Sort by</label>
         
          
         <div class="select-sort">
          <select id="sort">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
            <option value="higest">Higest</option>
            <option value="lowest">Lowest</option>
          </select>
         </div>
        </div>
          
        
           
         </div>
      </div>
      <div class="body">
        <section class="bills">
          <span class="bill-title">Bill Title</span>
         
          <span class="bill-details">
            <p>Due Date</p>
          
          </span>
          <p class="amount-p">Amount</p>
         
        </section>
        <section class="bills">
          <div class="bill">
            <div class="avatar">
              <img  alt="Avatar">
              <p>Spark Electric Solutions</p>
            </div>
       
            <div class="bill-info">

              <p class="date">Monthly - 2nd <span>✅</span></p>
              

              
            
      

              <div class="amount" :class="{ 'negative': 1 < 0 }">
                {{ 1 < 0 ? '-' : '+' }}${{ Math.abs(1).toFixed(2) }}

              </div>
          
            </div>
            
            
          </div>
        </section>
      </div>
     


 
    </section>
    </section>
  </div>
 </div>
</template>

<style scoped>
.recurring-container {
 /* Bills Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 2rem;
gap: 24px;


max-width: 1440px;
height: 742px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.recurring-title {
  /* Recurring Title */
/* Main Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
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
.requiring-title h2 {
  /* Recurring Title */
  /* Recurring bills */


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
.main {
  /* Main Content */
  /* Bills Content */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 1060px;
max-width: 1440px;
height: 742px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.right-side {
  /* Right Side */
  /* Bills Content */
  /* Left Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

max-width: 337px;
height: 418px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}
.total-bills {
  /* Total Bills */
  /* Right Side */
  /* Total Bills */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 24px;
gap: 32px;
position: relative;

height: 190px;

background: #201F24;;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}

.logo  {
/* Vector */

position: absolute;
left: 10.16%;
right: 10.16%;
top: 16.41%;
bottom: 16.41%;

background: #FFFFFF;

width: 40px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.value {
  /* Value */
  /* Total Bills Texts */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 11px;

width: 289px;
height: 70px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.total {
  /* Total */
  /* Total Bills Texts */
  /* Total Bills Texts */

/* Auto layout */
/* Total bills */

width: 65px;
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
.total-value {
  /* Total Value */
  /* Total Bills Texts */
  /* Total Bills Texts */
  /* $1,550.00 */

width: 137px;
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
order: 1;
flex-grow: 0;
}
.summary {
  /* Summary */
  /* Right Side */
  /* Total Bills */
  /* Summary */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 20px;
gap: 20px;

width: 337px;
height: 204px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
.pay-info {

  /* Summary Texts */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 297px;
height: 120px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.item {
  /* Item */
  /* Summary Texts */
  /* Paid Bills */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;


width: 297px;
height: 18px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
border-radius: 8px;
}
.pay-title {
  /* Pay Title */
/* Paid Bills */


width: 177px;
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
flex-grow: 1;

}
.pay-value {
  /* Pay Value */
  /* Summary Texts */
  /* Paid Bills */
  /* Paid Bills */

/* 2 ($320.00) */


width: 120px;
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
order: 1;
flex-grow: 0;

}
.red-title {
  /* Red Title */
  /* Summary Texts */
  /* Paid Bills */
  /* Due soon */

margin: 0 auto;
width: 177px;
height: 18px;

/* text-preset-5 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #C94736;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}
.paid-value {
  /* Paid Value */
  /* Summary Texts */
  /* Paid Bills */
  /* 2 ($40.00) */

margin: 0 auto;
width: 120px;
height: 18px;

/* text-preset-5-bold */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */
text-align: right;

color: #C94736;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.left-side {
  /* Left Side */
  /* Bills Content */
  /* Right Side */
  /* Right Side */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 24px;


max-width: 1440px;
height: 742px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
}
.fields {
  /* Fields */
  /* Left Side */
  /* Left Side */
  /* Input Fields */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 16px;

width: 635px;
height: 45px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.search{
  /* Desktop - Transactions / Table / Fields / Search */
  /* Main Content Table Fields Search */
  /* Transaction Concent Fields Search */
  /* Input Fields Top Search */

/* Input Field/Input Fields */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;



height: 45px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}

  .search-container {
            position: relative;
            display: inline-block;
        }
        .search-icon {
          position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
          
            cursor: pointer;
            /* Icons/Icons Collection (Phosphor Icons) */

width: 16px;
height: 16px;



        }
.search input{
  /* Desktop - Transactions / Table / Fields / Search / Input */
  /* Main Content Table Fields Search Input */
  /* Transaction Concent Fields Search Input */
  /* Input Field/Input Fields Search */
/* Input Field/Field States */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;

width: 320px;
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
.search input::placeholder{
  /* Desktop - Transactions / Table / Fields / Search / Input / Placeholder */
  /* Main Content Table Fields Search Input Placeholder */
  /* Transaction Concent Fields Search Input Placeholder */
  /* Input Field/Input Fields Search/Placeholder */
  /* Input Field/Field States/Placeholder */
  /* Search transaction */

width: 248px;
height: 21px;

/* text-preset-4 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

color: #98908B;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 1;
}
.checkbox{
  /* Desktop - Transactions / Table / Fields / Checkbox */
  /* Main Content Table Fields Checkbox */
  /* Transaction Concent Fields Checkbox */
  /* Input Fields Top Checkbox */
  /* Frame 575 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 32px;

margin: 0;

height: 45px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.checkbox-sort{
/* Frame 591 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;


height: 45px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.select-sort{
  /* Sort by Latest / Sort by Latest */
  /* Sort by Latest / Option */
  /* Input Field/Input Fields */
  /* Input Field/Input Fields */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 113px;
height: 45px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
#sort {
  /* Sort by Latest / Sort by Latest */
  /* Sort by Latest / Option */
  /* Input Field/Input Fields */

/* Auto layout */
/* Input Field/Field States */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;

width: 113px;
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
label {
  /* Desktop - Transactions / Table / Fields / Checkbox */
  /* Main Content Table Fields Checkbox */
  /* Transaction Concent Fields Checkbox */
  /* Input Fields Top Checkbox */
/* Sort by Latest */

width: 60px;
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
.body {
  /* Body */
  /* Left Side */
  /* Left Side */
  /* Input Fields */
  /* Table Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 635px;
height: 543px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
}
.bills {
  /* Bills */
  /* Body */
  /* Left Side */
  /* Left Side */
  /* Input Fields */
  /* Table Content */
  /* Table Top */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
gap: 32px;
justify-content: space-between;

height: 42px;

border-bottom: 1px solid #F2F2F2;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
.bill-title {
  /* Bill Title */
 /* Recipient / Sender */

width: 319px;
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
flex-grow: 1;
}
.bill-details {
  /* Bill Details */
  /* Recipient / Sender */
  /* Bill Title */
/* Due Date */

width: 120px;
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
.amount-p {
  /* Amount */
  /* Recipient / Sender */
  /* Bill Title */
  /* Due Date */
  /* Amount */

width: 100px;
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
order: 2;
flex-grow: 0;
}
.bill {
  /* Bill */
 /* Bill Content Line */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px;
gap: 32px;

width: 635px;
height: 32px;

border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.avatar {
  /* Avatar */
  /* Bill Content Line */
  /* Bill Content Line */
  /* Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;


height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}
.avatar img {
  /* Avatar */
  /* Bill Content Line */
  /* Bill Content Line */
  /* Title */
  /* Avatar */
/* Ellipse 13 */

width: 32px;
height: 32px;



/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.avatar p {
  /* Avatar */
  /* Bill Content Line */
  /* Bill Content Line */
  /* Title */
  /* Avatar */
  /* Video streaming service */

width: 162px;
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
.transaction-details {
  /* Transaction Details */
  /* Bill Content Line */
  /* Bill Content Line */
  /* Title */
  /* Transaction Details */
  /* Due Date */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 120px;
height: 18px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.bill-info {
  /* Bill Info */
  /* Bill Content Line */
  /* Bill Content Line */
  /* Title */
  /* Transaction Details */
  /* Due Date */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6rem;
}

</style>

