// stores/useTransactionStore.js
import { defineStore } from 'pinia';
import { addTransaction, deleteTransaction, fetchTransactions, updateTransaction, fetchTransactionById } from '../services/transactonServices';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

const csrfToken = getCookie('csrftoken');

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
    isLoading: false,
    csrfToken: csrfToken,
  }),
  actions: {
    async getTransactions() {
      this.isLoading = true;
      try {
        const res = await fetchTransactions();
        if (res) {
          this.transactions = res; // Store fetched transactions
          return true; // Indicate success

        }

      }
      catch (error) {
        console.error('Error fetching transactions:', error);
        return false; // Indicate failure
      } finally {
        this.isLoading = false; // Reset loading state
      }
    },
    
    async getTransactionById(transactionId) {
      this.isLoading = true;
      try {
        const res = await fetchTransactionById(transactionId);
        if (res) {
          return res; // Return the fetched transaction
        }
      } catch (error) {
        console.error('Error fetching transaction by ID:', error);
        return null; // Indicate failure
      } finally {
        this.isLoading = false; // Reset loading state
      }
    },

    async addTransaction(data) {
      this.isLoading = true;
      try {
        const res = await addTransaction(data);
        if (res) {
          this.transactions.push(res); // Add new transaction to the store
          return true; // Indicate success
        }
      } catch (error) {
        console.error('Error adding transaction:', error);
        return false; // Indicate failure
      } finally {
        this.isLoading = false; // Reset loading state
      }
      return false; // Return false if adding transaction failed
    },
    async editeTransaction(data, transactionId) {
      this.isLoading = true;
      try {
        const res = await updateTransaction(data, transactionId);
        if (res) {
          // Find the index of the transaction to update
          const index = this.transactions.findIndex(transaction => transaction.id === transactionId);
          if (index !== -1) {
            this.transactions[index] = res; // Update the transaction in the store
          }
          return true; // Indicate success
        }
      } catch (error) {
        console.error('Error updating transaction:', error);
        return false; // Indicate failure
      } finally {
        this.isLoading = false; // Reset loading state
      }
      return false; // Return false if updating transaction failed
    },
    
    async deleteTransaction(id) {
      this.isLoading = true;
      try {
        await deleteTransaction(id);
        this.transactions = this.transactions.filter(transaction => transaction.id !== id); // Remove deleted transaction from the store
        return true; // Indicate success
      } catch (error) {
        console.error('Error deleting transaction:', error);
        return false; // Indicate failure
      } finally {
        this.isLoading = false; // Reset loading state
      }
    }
  }
});
