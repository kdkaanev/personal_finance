// stores/useTransactionStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
    isLoading: false,
  }),
  actions: {
    async fetchTransactions() {
      this.isLoading = true;
      try {
        const res = await axios.get('/api/transactions');
        this.transactions = res.data;
      } finally {
        this.isLoading = false;
      }
    },
    async addTransaction(data) {
      const res = await axios.post('/api/transactions', data);
      this.transactions.push(res.data);
    },
    async deleteTransaction(id) {
      await axios.delete(`/api/transactions/${id}`);
      this.transactions = this.transactions.filter(t => t.id !== id);
    }
  }
});
