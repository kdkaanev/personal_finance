<script>

export default {
  name: 'Transactions',
  data() {
    return {
      transactions: [
    {
      "avatar": "./assets/avatars/emma-richardson.jpg",
      "name": "Emma Richardson",
      "category": "General",
      "date": "2024-08-19T14:23:11Z",
      "amount": 75.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/savory-bites-bistro.jpg",
      "name": "Savory Bites Bistro",
      "category": "Dining Out",
      "date": "2024-08-19T20:23:11Z",
      "amount": -55.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/daniel-carter.jpg",
      "name": "Daniel Carter",
      "category": "General",
      "date": "2024-08-18T09:45:32Z",
      "amount": -42.30,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/sun-park.jpg",
      "name": "Sun Park",
      "category": "General",
      "date": "2024-08-17T16:12:05Z",
      "amount": 120.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/urban-services-hub.jpg",
      "name": "Urban Services Hub",
      "category": "General",
      "date": "2024-08-17T21:08:09Z",
      "amount": -65.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/liam-hughes.jpg",
      "name": "Liam Hughes",
      "category": "Groceries",
      "date": "2024-08-15T18:20:33Z",
      "amount": 65.75,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/lily-ramirez.jpg",
      "name": "Lily Ramirez",
      "category": "General",
      "date": "2024-08-14T13:05:27Z",
      "amount": 50.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/ethan-clark.jpg",
      "name": "Ethan Clark",
      "category": "Dining Out",
      "date": "2024-08-13T20:15:59Z",
      "amount": -32.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/james-thompson.jpg",
      "name": "James Thompson",
      "category": "Entertainment",
      "date": "2024-08-11T15:45:38Z",
      "amount": -5.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/pixel-playground.jpg",
      "name": "Pixel Playground",
      "category": "Entertainment",
      "date": "2024-08-11T18:45:38Z",
      "amount": -10.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/ella-phillips.jpg",
      "name": "Ella Phillips",
      "category": "Dining Out",
      "date": "2024-08-10T19:22:51Z",
      "amount": -45.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/sofia-peterson.jpg",
      "name": "Sofia Peterson",
      "category": "Transportation",
      "date": "2024-08-08T08:55:17Z",
      "amount": -15.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/mason-martinez.jpg",
      "name": "Mason Martinez",
      "category": "Lifestyle",
      "date": "2024-08-07T17:40:29Z",
      "amount": -35.25,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/green-plate-eatery.jpg",
      "name": "Green Plate Eatery",
      "category": "Groceries",
      "date": "2024-08-06T08:25:44Z",
      "amount": -78.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/sebastian-cook.jpg",
      "name": "Sebastian Cook",
      "category": "Transportation",
      "date": "2024-08-06T10:05:44Z",
      "amount": -22.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/william-harris.jpg",
      "name": "William Harris",
      "category": "Personal Care",
      "date": "2024-08-05T14:30:56Z",
      "amount": -10.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/elevate-education.jpg",
      "name": "Elevate Education",
      "category": "Education",
      "date": "2024-08-04T11:15:22Z",
      "amount": -50.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/serenity-spa-and-wellness.jpg",
      "name": "Serenity Spa & Wellness",
      "category": "Personal Care",
      "date": "2024-08-03T14:00:37Z",
      "amount": -30.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/spark-electric-solutions.jpg",
      "name": "Spark Electric Solutions",
      "category": "Bills",
      "date": "2024-08-02T09:25:11Z",
      "amount": -100.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/rina-sato.jpg",
      "name": "Rina Sato",
      "category": "Bills",
      "date": "2024-08-02T13:31:11Z",
      "amount": -50.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/swift-ride-share.jpg",
      "name": "Swift Ride Share",
      "category": "Transportation",
      "date": "2024-08-01T18:40:33Z",
      "amount": -18.75,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/aqua-flow-utilities.jpg",
      "name": "Aqua Flow Utilities",
      "category": "Bills",
      "date": "2024-07-30T13:20:14Z",
      "amount": -100.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/ecofuel-energy.jpg",
      "name": "EcoFuel Energy",
      "category": "Bills",
      "date": "2024-07-29T11:55:29Z",
      "amount": -35.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/yuna-kim.jpg",
      "name": "Yuna Kim",
      "category": "Dining Out",
      "date": "2024-07-29T13:51:29Z",
      "amount": -28.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/flavor-fiesta.jpg",
      "name": "Flavor Fiesta",
      "category": "Dining Out",
      "date": "2024-07-27T20:15:06Z",
      "amount": -42.75,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/harper-edwards.jpg",
      "name": "Harper Edwards",
      "category": "Shopping",
      "date": "2024-07-26T09:43:23Z",
      "amount": -89.99,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/buzz-marketing-group.jpg",
      "name": "Buzz Marketing Group",
      "category": "General",
      "date": "2024-07-26T14:40:23Z",
      "amount": 3358.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/technova-innovations.jpg",
      "name": "TechNova Innovations",
      "category": "Shopping",
      "date": "2024-07-25T16:25:37Z",
      "amount": -29.99,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/bytewise.jpg",
      "name": "ByteWise",
      "category": "Lifestyle",
      "date": "2024-07-23T09:35:14Z",
      "amount": -49.99,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/nimbus-data-storage.jpg",
      "name": "Nimbus Data Storage",
      "category": "Bills",
      "date": "2024-07-21T10:05:42Z",
      "amount": -9.99,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/emma-richardson.jpg",
      "name": "Emma Richardson",
      "category": "General",
      "date": "2024-07-20T17:30:55Z",
      "amount": -25.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/daniel-carter.jpg",
      "name": "Daniel Carter",
      "category": "General",
      "date": "2024-07-19T12:45:09Z",
      "amount": 50.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/sun-park.jpg",
      "name": "Sun Park",
      "category": "General",
      "date": "2024-07-18T19:20:23Z",
      "amount": -38.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/harper-edwards.jpg",
      "name": "Harper Edwards",
      "category": "Shopping",
      "date": "2024-07-17T14:55:37Z",
      "amount": -29.99,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/liam-hughes.jpg",
      "name": "Liam Hughes",
      "category": "Groceries",
      "date": "2024-07-16T10:10:51Z",
      "amount": -52.75,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/lily-ramirez.jpg",
      "name": "Lily Ramirez",
      "category": "General",
      "date": "2024-07-15T16:35:04Z",
      "amount": 75.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/ethan-clark.jpg",
      "name": "Ethan Clark",
      "category": "Dining Out",
      "date": "2024-07-14T20:50:18Z",
      "amount": -41.25,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/rina-sato.jpg",
      "name": "Rina Sato",
      "category": "Entertainment",
      "date": "2024-07-13T09:15:32Z",
      "amount": -10.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/james-thompson.jpg",
      "name": "James Thompson",
      "category": "Bills",
      "date": "2024-07-12T13:40:46Z",
      "amount": -95.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/ella-phillips.jpg",
      "name": "Ella Phillips",
      "category": "Dining Out",
      "date": "2024-07-11T18:05:59Z",
      "amount": -33.75,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/yuna-kim.jpg",
      "name": "Yuna Kim",
      "category": "Dining Out",
      "date": "2024-07-10T12:30:13Z",
      "amount": -27.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/sofia-peterson.jpg",
      "name": "Sofia Peterson",
      "category": "Transportation",
      "date": "2024-07-09T08:55:27Z",
      "amount": -12.50,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/mason-martinez.jpg",
      "name": "Mason Martinez",
      "category": "Lifestyle",
      "date": "2024-07-08T15:20:41Z",
      "amount": -65.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/sebastian-cook.jpg",
      "name": "Sebastian Cook",
      "category": "Transportation",
      "date": "2024-07-07T11:45:55Z",
      "amount": -20.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/william-harris.jpg",
      "name": "William Harris",
      "category": "General",
      "date": "2024-07-06T17:10:09Z",
      "amount": 20.00,
      "recurring": false
    },
    {
      "avatar": "./assets/images/avatars/elevate-education.jpg",
      "name": "Elevate Education",
      "category": "Education",
      "date": "2024-07-05T11:15:22Z",
      "amount": -50.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/serenity-spa-and-wellness.jpg",
      "name": "Serenity Spa & Wellness",
      "category": "Personal Care",
      "date": "2024-07-03T14:00:37Z",
      "amount": -30.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/spark-electric-solutions.jpg",
      "name": "Spark Electric Solutions",
      "category": "Bills",
      "date": "2024-07-02T09:25:51Z",
      "amount": -100.00,
      "recurring": true
    },
    {
      "avatar": "./assets/images/avatars/swift-ride-share.jpg",
      "name": "Swift Ride Share",
      "category": "Transportation",
      "date": "2024-07-02T19:50:05Z",
      "amount": -16.50,
      "recurring": false
    }
  ],
  currentPage: 1,
  itemsPerPage: 10,
      
    };
  },
  computed: {
  paginatedTransactions() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.transactions.slice(start, end);
  },
  totalPages() {
    return Math.ceil(this.transactions.length / this.itemsPerPage);
  }
}

    };
    

</script>

<template>
  <div class="trans-container">
    <section class="title">
     <h2>Transactions</h2>
    </section>
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
          <div v-for="transaction in paginatedTransactions" :key="transaction.name" class="transaction">
            <div class="avatar">
              <img :src="transaction.avatar" alt="Avatar">
              <p>{{ transaction.name }}</p>
            </div>
            <div class="details">
              
             <span class="transaction-details">
              <p>{{ transaction.category }}</p>
              <p>{{ new Date(transaction.date).toLocaleDateString() }}</p>
             </span>
              <span class="amount" :class="{ 'negative': transaction.amount < 0 }">
                {{ transaction.amount < 0 ? '-' : '+' }}${{ Math.abs(transaction.amount).toFixed(2) }}

              </span>
            </div>
            
          </div>
        </section>
      </div>
      <div class="pagination">
  <button class="pagination-btn btn" @click="currentPage--" :disabled="currentPage === 1"><span><img src="../assets/icons/icon-caret-left.svg" alt=""></span> Prev</button>
  <span><div>
  <span class="page-numbers">
    <button class="number-btn btn"
    v-for="page in totalPages"
    :key="page"
    @click="currentPage = page"
    :class="{ 'active': page === currentPage }"
  >
    {{ page }}
  </button>
  </span>
</div>
</span>
  <button class="pagination-btn btn" @click="currentPage++" :disabled="currentPage === totalPages"> Next <span><img src="../assets/icons/icon-caret-right.svg" alt=""></span></button>
</div>

    </section>
    
  </div>
  
</template>

<style scoped>
.trans-container{
  /* Desktop - Transactions */

/* Auto layout */
/* Main Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 40px;
gap: 32px;
width: 1140px;
height: 1064px;

}
.title{
  /* Desktop - Transactions / Title */
  /* Main Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 0px;
gap: 24px;
width: 100%;
height: 56px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.title h2{
  /* Desktop - Transactions / Title / Text */
  /* Main Content Title Text */
  /* Transactions */

width: 198px;
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
.table{
  /* Desktop - Transactions / Table */
  /* Main Content Table */
  /* Transaction Concent */

/* Auto layout */
/* Transaction Concent */

/* Auto layout */
box-sizing: border-box;
display: flex;
  flex-direction: column;
  align-items: flex-start;
 
  gap: 24px;

  width: 100%; /* Instead of 1296px */
 
  min-width: 0;
  padding: 24px 32px;
  margin: 0 auto;

  height:100vh;
  background: #FFFFFF;
  border-radius: 12px;

  flex: 0 1 auto;
  order: 2;
}
.fields{
  /* Desktop - Transactions / Table / Fields */
  /* Main Content Table Fields */
  /* Transaction Concent Fields */
  /* Input Fields Top */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 16px;

width: 100%;
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

width: 169px;
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
.checkbox-category{
  /* Desktop - Transactions / Table / Fields / Checkbox */
  /* Main Content Table Fields Checkbox */
  /* Transaction Concent Fields Checkbox */
  /* Input Fields Top Checkbox */
  /* Frame 575 */
  /* Frame 592 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 245px;
height: 45px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.select-category{
  /* Sort by Latest / Sort by Latest */
  /* Sort by Latest / Option */
  /* Input Field/Input Fields */
  /* Input Field/Input Fields */
  /* Input Field/Input Fields */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 177px;
height: 45px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
#category {
  /* Sort by Latest / Sort by Latest */
  /* Sort by Latest / Option */
  /* Input Field/Input Fields */
  /* Input Field/Field States */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 16px;

width: 177px;
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
.body{
  /* Desktop - Transactions / Table / Body */
  /* Main Content Table Body */
  /* Transaction Concent Body */
  /* Table List */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;


height: 696px;


/* Inside auto layout */
flex: none;

align-self: stretch;
flex-grow: 0;

}
.header{
  /* Desktop - Transactions / Table / Body / Header */
  /* Main Content Table Body Header */
  /* Transaction Concent Body Header */
  /* Table List Header */
  /* Table Top */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
gap: 32px;

width: 100%;
height: 42px;

border-bottom: 1px solid #F2F2F2;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.transactions{
  /* Desktop - Transactions / Table / Body / Transactions */
  /* Main Content Table Body Transactions */
  /* Transaction Concent Body Transactions */
  /* Table List Items */
  /* Table List */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 100%;



/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.transaction{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction */
  /* Main Content Table Body Transactions Transaction */
  /* Transaction Concent Body Transactions Transaction */
  /* Table List Items List Item */
  /* List */

/* Auto layout */
/* Table Top */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 12px 16px;
gap: 32px;
width: 100%;
height: 42px;

border-bottom: 1px solid #F2F2F2;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


}
.avatar{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Avatar */
  /* Main Content Table Body Transactions Transaction Avatar */
  /* Transaction Concent Body Transactions Transaction Avatar */
  /* Table List Items List Item Avatar */
  /* List Item Avatar */
  /* Avatar */
  /* Recipient or Sender */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;

width: 50%;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.avatar img{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Avatar / Image */
  /* Main Content Table Body Transactions Transaction Avatar Image */
  /* Transaction Concent Body Transactions Transaction Avatar Image */
  /* Table List Items List Item Avatar Image */
  /* List Item Avatar Image */
  /* Ellipse 13 */

width: 40px;
height: 40px;

background: url(emma-richardson.jpg), #F8F4F0;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.avatar p{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Avatar / Text */
  /* Main Content Table Body Transactions Transaction Avatar Text */
  /* Transaction Concent Body Transactions Transaction Avatar Text */
  /* Table List Items List Item Avatar Text */
  /* List Item Avatar Text */
  /* Recipient or Sender */
  /* Bravo Zen Spa */

width: 121px;
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

.details{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Details */
  /* Main Content Table Body Transactions Transaction Details */
  /* Transaction Concent Body Transactions Transaction Details */
  /* Table List Items List Item Details */
  /* List Item Details */
  /* Recipient or Sender */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 240px;
width: 50%;
height: 40px;
justify-content: space-between;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.transaction-details{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Details / Text */
  /* Main Content Table Body Transactions Transaction Details Text */
  /* Transaction Concent Body Transactions Transaction Details Text */
  /* Table List Items List Item Details Text */
  /* List Item Details Text */
  /* Category and Date */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
}
.transaction-details p{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Details / Text */
  /* Main Content Table Body Transactions Transaction Details Text */
  /* Transaction Concent Body Transactions Transaction Details Text */
  /* Table List Items List Item Details Text */
  /* List Item Details Text */
  /* Category and Date */

  /* Personal Care */


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
.amount{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Details / Amount */
  /* Main Content Table Body Transactions Transaction Details Amount */
  /* Transaction Concent Body Transactions Transaction Details Amount */
  /* Table List Items List Item Details Amount */
  /* List Item Details Amount */
  /* Recipient or Sender */
/* Amount */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 8px;

width: 30%;
height: 21px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;

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

.negative{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Details / Amount */
  /* Main Content Table Body Transactions Transaction Details Amount */
  /* Transaction Concent Body Transactions Transaction Details Amount */
  /* Table List Items List Item Details Amount */
  /* List Item Details Amount */
  /* Recipient or Sender */
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
.amount-p{
  /* Desktop - Transactions / Table / Body / Transactions / Transaction / Details / Amount */
  /* Main Content Table Body Transactions Transaction Details Amount */
  /* Transaction Concent Body Transactions Transaction Details Amount */
  /* Table List Items List Item Details Amount */
  /* List Item Details Amount */
  /* Recipient or Sender */
  /* +$450.00 */
  /* Amount */

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
order: 3;
flex-grow: 0;
}
  .type{

/* Recipient / Sender */


/* text-preset-5 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */

color: #696868;


/* Inside auto layout */


  }
.pagination{
  /* Desktop - Transactions / Table / Body / Pagination */
  /* Main Content Table Body Pagination */
  /* Transaction Concent Body Pagination */
  /* Table List Pagination */
  /* Pagination/Pagination */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px 0px 0px;
gap: 16px;

width: 100%;
height: 64px;


/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
}
.pagination-btn{
  /* Desktop - Transactions / Table / Body / Pagination / Previous */
  /* Main Content Table Body Pagination Previous */
  /* Transaction Concent Body Pagination Previous */
  /* Table List Pagination Previous */
  /* Pagination/Pagination Previous */
  /* Pagination/Pagination Button - Next */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;

width: 94px;
height: 40px;

background: #FFFFFF;
border: 1px solid #98908B;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
cursor: pointer;
}
.page-numbers{
  /* Desktop - Transactions / Table / Body / Pagination / Page Numbers */
  /* Main Content Table Body Pagination Page Numbers */
  /* Transaction Concent Body Pagination Page Numbers */
  /* Table List Pagination Page Numbers */
  /* Pagination/Pagination Page Numbers */
  /* Frame 566 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

margin: 0 auto;

height: 40px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.number-btn{
  /* Pagination/Pagination Number */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 16px;

width: 40px;
height: 40px;

background: #FFFFFF;
border: 1px solid #98908B;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
cursor: pointer;

}
.btn:hover{
  background: #98908B;
  transition: background-color 1s ease;
}т
.active {
  background: #201F24;
  color: #FFFFFF;
}







</style>