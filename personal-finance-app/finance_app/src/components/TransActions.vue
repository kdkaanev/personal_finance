<script>

export default {
  name: 'Transactions',
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('finance_app\src\data\data.json');
      this.data = await response.json();
    }
    catch (error) {
      console.error('Error:', error);
    }
  },

};
</script>

<template>
  <section class="container">
    <div class="title">
      <p>Transactions</p>
    </div>
    <section class="table">
      <div class="fields">
        <input type="text" placeholder="Search">
        <select id="" name="" />
        <select id="" name="" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ transaction.notes }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<style scoped>
.container{
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
.table{
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
tr{
  /* Row */
  /* Table Row */
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
</style>
