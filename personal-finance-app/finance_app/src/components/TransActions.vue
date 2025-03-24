<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          date: '2021-01-01',
          transaction: 'Salary',
          amount: 100000,
          balance: 100000,
        },
        {
          id: 2,
          date: '2021-01-02',
          transaction: 'Rent',
          amount: -20000,
          balance: 80000,
        },
        {
          id: 3,
          date: '2021-01-03',
          transaction: 'Food',
          amount: -5000,
          balance: 75000,
        },
        {
          id: 4,
          date: '2021-01-04',
          transaction: 'Transport',
          amount: -5000,
          balance: 70000,
        },
        {
          id: 5,
          date: '2021-01-05',
          transaction: 'Salary',
          amount: 100000,
          balance: 170000,
        },
        {
          id: 6,
          date: '2021-01-06',
          transaction: 'Rent',
          amount: -20000,
          balance: 150000,
        },
        {
          id: 7,
          date: '2021-01-07',
          transaction: 'Food',
          amount: -5000,
          balance: 145000,
        },
        {
          id: 8,
          date: '2021-01-08',
          transaction: 'Transport',
          amount: -5000,
          balance: 140000,
        },
        {
          id: 9,
          date: '2021-01-09',
          transaction: 'Salary',
          amount: 100000,
          balance: 240000,
        },
        {
          id: 10,
          date: '2021-01-10',
          transaction: 'Rent',
          amount: -20000,
          balance: 220000,
        },
        {
          id: 11,
          date: '2021-01-11',
          transaction: 'Food',
          amount: -5000,
          balance: 215000,
        },
        {
          id: 12,
          date: '2021-01-12',
          transaction: 'Transport',
          amount: -5000,
          balance: 210,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="trans-container">
    <div class="title">
      <p>Transactions</p>
    </div>
    <section class="trans-data">
      <header class="header">
        <label for="search">
          <input id="search" type="text" placeholder="Search transaction">
        </label>
      </header>
      <table>
        <thead>
          <tr>
            <th>Recipient / Sender</th>
            <th>Category</th>
            <th>Transaction Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.transaction }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.balance }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped>
.trans-container {
/* Main Content */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 40px;
gap: 32px;

width: 1140px;
height: 1135px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
z-index: 1;

}
.title {
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
.title > p {
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

.trans-data {
/* Transaction Data */
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
.header {
/* Header */
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
</style>
