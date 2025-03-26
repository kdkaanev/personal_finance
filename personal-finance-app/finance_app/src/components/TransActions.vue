<script>

export default {
  name: 'Transactions',
  data() {
    return {
      "transactions": [
    {
      "avatar": "../assets/avatars/emma-richardson.jpg",
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
      
    };
  }
    };


</script>

<template>
  <section class="trans-container">
    <div class="title">
      <p>Transactions</p>
    </div>
    <section class="table">
      <div class="fields">
        <input type="text" placeholder="Search">
        <select id="" name="" />
        <select id="" name="" />
      </div>
    <section class="data">
      <div class="header">
          <p>Recipient / Sender</p>
          <p>Category</p>
          <p>Transaction Date</p>
          <p>Amount</p>
        </div>
      <ul class="list">
       
      <li v-for="item in transactions" :key="item.id">
        <img :src="item.avatar" alt="avatar" />
        <p>{{ item.name }}</p>
        <p>{{ item.category }}</p>
        <p>{{ item.date }}</p>
        <p>{{ item.amount }}</p>
      </li>
    </ul>
    </section>
  </section>
  </section>
</template>

<style scoped>
.trans-container{
  /* Main Content */

/* Auto layout */
/* Main Content */

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
  /* Title */
  /* Main Content Title */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
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
}
.title p{
  /* Title */
  /* Main Content Title */
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
  /* Table */
  /* Transaction Concent */

/* Transaction Concent */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 24px;

width: 1060px;
max-width: 1440px;
height: 983px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.fields{
  /* Fields */
  /* Search, Filter, Add */
  /* Input Fields Top */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 16px;

width: 996px;
height: 45px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.list{
  /* List */
  /* Transaction List */
  /* Table List */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 996px;
height: 696px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.list li{
  /* List Item */
  /* Transaction Item */
  /* Table Item */
  /* List */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px;
gap: 32px;

width: 996px;
height: 40px;

border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.header{
  /* Header */
  /* Transaction Header */
  /* Table Header */
  /* List */
  /* Table Top */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
gap: 32px;

width: 996px;
height: 42px;

border-bottom: 1px solid #F2F2F2;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.header p{
  /* Header */
  /* Transaction Header */
  /* Table Header */
  /* List */
  /* Table Top */

/* Recipient / Sender */


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
</style>
