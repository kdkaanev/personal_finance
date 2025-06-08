<script>
import { useUserStore } from '../stores/useUserStore'
import DonutChart from '../components/sub-component/DounutChart.vue'

export default {
  name: 'OverviewPage',

  components: {
    DonutChart,
  },

  data() {
    return {
      userStore: useUserStore(),
    }
  },



  computed: {
    userEmail() {
      return this.userStore.user?.email || ''
    },
  },

  methods: {
    goToTransactions() {
      this.$router.push('/transactions')
    },
  },
}
</script>

<template>
  <div class="over-container">
    <section class="title">
      Overview
    </section>
    <section class="summary">
      <div class="balance">
        <div class="balance-title">
          Current Balance
        </div>
        <div class="balance-value">
          $4,836.00
        </div>
      </div>
      <div class="income">
        <div class="income-title">
          Income
        </div>
        <div class="income-value">
          $3,814.25
        </div>
      </div>
      <div class="expenses">
        <div class="expenses-title">
          Expenses
        </div>
        <div class="expences-value">
          $1,700.50
        </div>
      </div>
    </section>
    <section class="content">
      <div class="left-side">
        <section class="pots">
          <div class="pots-title">
            <p>Pots</p>

 
            <button class="see" @click="goToTransactions">
              See Details <img src="../assets/icons/icon-caret-right.svg" alt="">
            </button>
          </div>
          <div class="info">
            <div class="total">
              <img src="../assets/icons/icon-nav-pots.svg" alt="">
              <div class="value">
                <h5>Total saved</h5>
                <div class="amount">
                  $850
                </div>
              </div>
            </div>
            <div class="small">
              <div class="line1">
                <div class="micro green">
                  <h5>Savings</h5>
                  <span class="micro-value">$159</span>
                </div>
                <div class="micro blue">
                  <h5>Gift</h5>
                  <span class="micro-value">$40</span>
                </div>
              </div>
              <div class="line2">
                <div class="micro black">
                  <h5>Concert Ticket</h5>
                  <span class="micro-value">$110</span>
                </div>
                <div class="micro orange">
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
            <button class="see" @click="goToTransactions">
              Vew All <img src="../assets/icons/icon-caret-right.svg" alt="">
            </button>
          </div>
          <div class="transaction-info">
            <div class="profil">
              <img class="profile-pic" src="../assets/avatars/emma-richardson.jpg" alt="">
              <p class="transaction-name">
                Emma Richardson
              </p>
            </div>
            <div class="transaction">
              <p class="summ-plus">
                +$575.5
              </p>
              <p class="date">
                19th Aug 2024
              </p>
            </div>
          </div>
          <div class="transaction-info">
            <div class="profil">
              <img class="profile-pic" src="../assets/avatars/savory-bites-bistro.jpg" alt="">
              <p class="transaction-name">
                Savory Bites Bistro
              </p>
            </div>
            <div class="transaction">
              <p class="summ-minus">
                +$575.5
              </p>
              <p class="date">
                10th Aug 2024
              </p>
            </div>
          </div>
          <div class="transaction-info">
            <div class="profil">
              <img class="profile-pic" src="../assets/avatars/daniel-carter.jpg" alt="">
              <p class="transaction-name">
                Daniel Carter
              </p>
            </div>
            <div class="transaction">
              <p class="summ-minus">
                -42.30
              </p>
              <p class="date">
                18th Aug 2024
              </p>
            </div>
          </div>
          <div class="transaction-info">
            <div class="profil">
              <img class="profile-pic" src="../assets/avatars/sun-park.jpg" alt="">
              <p class="transaction-name">
                Sun Park
              </p>
            </div>
            <div class="transaction">
              <p class="summ-plus">
                +$120.00
              </p>
              <p class="date">
                17th Aug 2024
              </p>
            </div>
          </div>
          <div class="transaction-info">
            <div class="profil">
              <img class="profile-pic" src="../assets/avatars/urban-services-hub.jpg" alt="">
              <p class="transaction-name">
                Urban Services Hub
              </p>
            </div>
            <div class="transaction">
              <p class="summ-minus">
                -65.00
              </p>
              <p class="date">
                17th Aug 2024
              </p>
            </div>
          </div>
        </section>
      </div>
      <div class="right-side">
        <section class="budgets">
          <div class="budget-title">
            <p>Budgets</p>
            <button class="see" href="#">
              See Details <img src="../assets/icons/icon-caret-right.svg" alt="">
            </button>
          </div>
          <section class="budget-info">
            <section class="chart">
              <div class="budget-chart">
                <DonutChart />
              </div>
            </section>
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
          </section>
        </section>
        <section class="recurring-bills">
          <div class="recurring-title">
            <p>Recurring Bills</p>
            <button class="see" href="#">
              See Details <img src="../assets/icons/icon-caret-right.svg" alt="">
            </button>
          </div>
          <section class="summary-bills">
            <div class="bills">
              <p>Paid Bills</p>
              <span>$190.00</span>
            </div>
            <div class="upcoming">
              <p>Total Upcoming</p>
              <span>$194.98</span>
            </div>
            <div class="soon">
              <p>Due Soon</p>
              <span>$59.98</span>
            </div>
          </section>
        </section>
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

  filter: brightness(0) saturate(100%) invert(30%) sepia(79%) saturate(426%) hue-rotate(130deg) brightness(91%) contrast(85%);

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
.budgets{
  /* Budgets */
  /* Budgets */
  /* Frame 501 */
  /* Frame 501 */

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 20px;

width: 428px;
height: 403px;

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;

}
.budget-title{
  /* Budgets */
  /* Small Content Title */
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
.budget-title p{
  /* Budgets */
  /* Budgets */
  /* Budgets */
  /* Budgets */
  /* Budgets */
  /* My Budgets */

width: 80px;
height: 24px;

/* text-preset-2 */
font-family: 'Public Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
/* identical to box height, or 24px */
display: flex;
color: #201F24;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.budget-info{
  /* Frame 34 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 0px;
gap: 16px;

width: 364px;
height: 295px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;

}
.chart{
  /* Chart */
  /* Chart */
  /* Chart */

/* Auto layout */
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;

width: 247px;
height: 240px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.budget-chart{
/* Chart */

width: 240px;
height: 240px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.donut{
  /* Donut Chart */
  /* Shape */

/* Shape */

position: absolute;
width: 187.5px;
height: 187.5px;
left: calc(50% - 187.5px/2 - 0.25px);
top: calc(50% - 187.5px/2 - 0.25px);

background: #FFFFFF;

}
.donut-hole{
  /* Donut Hole */
  /* Donut Hole */
  /* Shape */

/* Shape */

/* Shape */

position: absolute;
width: 162px;
height: 162px;
left: calc(50% - 162px/2 + 0px);
top: calc(50% - 162px/2 + 0px);
fill:#fff;

}
.donut-ring{
  /* Donut Ring */
  /* Donut Ring */
/* Shape */

position: absolute;
width: 187.5px;
height: 187.5px;
left: calc(50% - 187.5px/2 - 0.25px);
top: calc(50% - 187.5px/2 - 0.25px);

background: #FFFFFF;
opacity: 0.25;
stroke: #08eee2;
stroke-width: 3;

}
.donut-ring-big{
  /* Donut Ring Big */
  /* Donut Ring Big */
  /* Shape */
  /* Shape */

position: absolute;
width: 187.5px;
height: 187.5px;
left: calc(50% - 187.5px/2 - 0.25px);
top: calc(50% - 187.5px/2 - 0.25px);

background: #FFFFFF;
opacity: 0.25;
stroke: #010c0b;
stroke-width: 3;
}
.donut-segment{
  /* Donut Segment */
  /* Donut Segment */
  /* Shape */
/* Pie */

position: absolute;
width: 240px;
height: 240px;
left: 3.5px;
top: 0px;
stroke: #277C78;
stroke-width: 3;
stroke-dasharray:  85 15;

}
.chart-text {
  font-family:Public Sans;

  -moz-transform: translateY(0.25em);
  -ms-transform: translateY(0.25em);
  -webkit-transform: translateY(0.25em);
  transform: translateY(0.25em);
}

.chart-number {

  font-size: 0.45em;
  line-height: 1;
  text-anchor: middle;
  -moz-transform: translateY(-0.25em);
  -ms-transform: translateY(-0.25em);
  -webkit-transform: translateY(-0.25em);
  transform: translateY(-0.25em);

}

.chart-label {
  font-size: 0.15em;

  text-anchor: middle;
  -moz-transform: translateY(0.7em);
  -ms-transform: translateY(0.7em);
  -webkit-transform: translateY(0.7em);
  transform: translateY(0.7em);
}
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
.summary-bills{
  /* Frame 535 */
  /* List */
  /* Frame 564 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 364px;
height: 207px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.bills{
  /* Frame 535 */
  /* List */
  /* Frame 564 */
  /* Frame 535 */
  /* Frame 557 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 16px;
gap: 16px;

width: 364px;
height: 61px;

background: #F8F4F0;
border-left: 4px solid #277C78;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.bills p{
  /* Paid Bills */
  /* Total recurring bills */

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

.bills span{
  /* $1,550.00 */

/* $1,230.00 */

width: 57px;
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
.upcoming{
  /* Upcoming Bills */
  /* Upcoming Bills */
  /* Frame 501 */
  /* Frame 501 */
  /* Frame 501 */
  /* Frame 502 */
  /* Frame 558 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 16px;
gap: 16px;

width: 364px;
height: 61px;

background: #F8F4F0;
border-left: 4px solid #F2CDAC;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.upcoming p{
  /* Remaining this month */

width: 102px;
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
.upcoming span{
  /* $1,550.00 */
  /* $1,230.00 */

width: 57px;
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
.soon{
  /* Frame 559 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 16px;
gap: 16px;

width: 364px;
height: 61px;

background: #F8F4F0;
border-left: 4px solid #82C9D7;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.soon p{
  /* Due soon */
  /* Due soon */
  /* Due soon */
  /* Due soon */
  /* Total bills due soon */

width: 62px;
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
.soon span{
  /* $1,550.00 */
  /* $1,230.00 */
  /* $1,230.00 */
  /* $40.00 */

width: 51px;
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
</style>
