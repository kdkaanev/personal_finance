import { defineStore } from 'pinia';
import { loginUser, logoutUser,getCurrentUser, saveUserProfile, registerUser} from '../services/authServices';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

const csrfToken = getCookie('csrftoken');


export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    csrfToken: csrfToken,
  }),
  
  actions: {
    async login(loginData) {
      try {
        const response = await loginUser(loginData);
        if (response) {
          this.user = response;// Store user data on successful login
            this.isAuthenticated = true; // Update authentication state
          return true;
      } 
    }
    catch (error) {
        console.error('Login failed:', error);
        
      }
        return false;
    },
     async signup(data) {
      try {
        const response = await registerUser(data);
        if (response) {
          this.user = response; // Store user data on successful signup
          this.isAuthenticated = true; // Update authentication state
          return true;
        }
      } catch (error) {
        console.error('Signup failed:', error);
      }
      return false; // Return false if signup failed
    },
    
    // Option 2: If not logged in, redirect to login page instead

    async logout() {
      const success = await logoutUser();
      if (success) {
        this.user = null; // Clear user state
        console.log("User logged out.");
    }
  },
    
    async fetchCurrentUser() {
      try {
        const userData = await getCurrentUser();
        this.user = userData;
        this.isAuthenticated = true;
      } catch (error) {
        console.error('Fetch current user failed:', error);
        throw error;
      }
    },
    
    async saveProfile(profileData) {
      try {
        await saveUserProfile(profileData);
        console.log(profileData);
      } catch (error) {
        console.error('Save profile failed:', error);
        throw error;
      }
    },
      async reAuthUser() {
      try {
        // Check if the user is already authenticated in the state
        if (this.user) {
          return true;
        }

        // Fetch the CSRF token from cookies
        const csrfToken = getCookie("csrftoken");
        if (!csrfToken) {
          console.warn("CSRF token not found in cookies.");
          return false;
        }

        // Fetch user profile with the CSRF token
        const profile = await getCurrentUser(csrfToken);
        if (profile) {
          this.user = profile; // Update state with user data
          return true;
        }
      } catch (error) {
        console.error("Re-authentication failed:", error);
      }

      return false;
    },
  },
});