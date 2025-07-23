import { defineStore } from 'pinia';
import { fetchBudgets, fetchBudgetById, updateBudget, deleteBudget, addBudgets} from '../services/budgetServices';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

const csrfToken = getCookie('csrftoken');

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    budgets: [],
    is_losading: false,
    csrfToken: csrfToken,
  }),
  actions:{
    async getBudgets() {
      this.is_loading = true;
      try {
        const budgets = await fetchBudgets();
        this.budgets = budgets;
      } catch (error) {
        console.error("Error fetching budgets:", error);
      } finally {
        this.is_loading = false;
      }
    },

    async addNewBudget(budgetData) {
      this.is_loading = true;
      try {
        const newBudget = await addBudgets(budgetData);
        this.budgets.push(newBudget); // Add the new budget to the store
        return true; // Indicate success
      } catch (error) {
        console.error("Error adding budget:", error);
        return false; // Indicate failure
      } finally {
        this.is_loading = false;
      }
    },
    async getBudgetById(budgetId) {
      this.is_loading = true;
      try {
        const budget = await fetchBudgetById(budgetId);
        return budget;
      } catch (error) {
        console.error("Error fetching budget by ID:", error);
        return null; // Indicate failure
      } finally {
        this.is_loading = false;
      }
    },
    async updateBudget(budgetId, budgetData) {
      this.is_loading = true;
      try {
        const updatedBudget = await updateBudget(budgetId, budgetData);
        const index = this.budgets.findIndex(b => b.id === budgetId);
        if (index !== -1) {
          this.budgets[index] = updatedBudget; // Update the budget in the store
        }
        return true; // Indicate success
      } catch (error) {
        console.error("Error updating budget:", error);
        return false; // Indicate failure
      } finally {
        this.is_loading = false;
      }
    },
    async deleteBudget(budgetId) {
      this.is_loading = true;
      try {
        await deleteBudget(budgetId);
        this.budgets = this.budgets.filter(b => b.id !== budgetId); // Remove the budget from the store
        return true; // Indicate success
      } catch (error) {
        console.error("Error deleting budget:", error);
        return false; // Indicate failure
      } finally {
        this.is_loading = false;
      }
    },
  },
}); 