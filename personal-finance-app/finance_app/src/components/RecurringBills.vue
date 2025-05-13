<template>
 <div class="recurring-container">
  <h2 class="recurring-title">Recurring Bills</h2>
  <div class="main">
    <section class="right-side">
      <div class="total-bills">
        <span class="logo"></span>
        <section class="value">
          <h3 class="total">Total Bills</h3>
          <h2 class="total-value">$333</h2>
        </section>
      </div>
      <div class="summary">
        <h2>Summary</h2>
        <section class="pay">
          <h3 class="pay-title">Pay</h3>
          <div class="pay-value">
            <span class="pay-number">4</span>
            <h2 class="pay-amount">$100</h2>
          </div>
        </section>
        <section class="upcoming">
          <h3 class="upcoming-title">Upcoming</h3>
          <div class="upcoming-value">
            <span class="upcoming-number">2</span>
            <h2 class="upcoming-amount">$200</h2>
          </div>
        </section>
        <section class="paid">
          <h3 class="paid-title">Paid</h3>
          <div class="paid-value">
            <span class="paid-number">1</span>
            <h2 class="paid-amount">$33</h2>
          </div>
        </section>
      </div>
    </section>
    <section class="left-side">
      <section class="table">
      <div class="fields">
        <div class="search-container">
          <div class="search">
            <input type="text" placeholder="Search transaction">
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
          
         <div class="checkbox-category">
          <label for="category">Category</label>
          
          <div class="select-category">
           <select id="category">
             <option value="all">All Transactions</option>
             <option value="entertainment">Entertainment</option>
             <option value="general">General</option>
             <option value="bills">Bills</option>
             <option value="groceries">Groceries</option>
             <option value="dining-out">Dining Out</option>
             
             <option value="transportation">Transportation</option>
             <option value="personal-care">Personal Care</option>
             <option value="education">Education</option>
             <option value="lifestyle">Lifestyle</option>
             <option value="shopping">Shopping</option>
             <option value="general">General</option>
             </select>
          </div>
         </div>
        
           
         </div>
      </div>
      <div class="body">
        <section class="transaction">
          <p class="avatar type">Recipient / Sender</p>
         <div class="details">
          <span class="transaction-details">
            <p>Category</p>
          <p>Transaction Date</p>
          </span>
          <p class="amount-p">Amount</p>
         </div>
        </section>
        <section class="transactions">
          <div class="transaction">
            <div class="avatar">
              <img  alt="Avatar">
              <p>name</p>
            </div>
            <div class="details">
              
             <span class="transaction-details">
              <p>category</p>
              <p>date</p>
             </span>
            
            </div>
            
          </div>
        </section>
      </div>
     


 
    </section>
    </section>
  </div>
 </div>
</template>
