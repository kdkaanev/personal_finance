import axiosFA from "../config/axiosinstance";

axiosFA.defaults.withCredentials = true;
axiosFA.defaults.xsrfHeaderName = "X-CSRFToken";
axiosFA.defaults.xsrfCookieName = "csrftoken";

export async function fetchCSRFToken() {
 const response = await axiosFA.get("http://127.0.0.1:8000/auth/csrf/");
  document.cookie = `csrftoken=${response.data.csrfToken}; path=/`;
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    document.cookie.split(";").forEach(cookie => {
      const trimmed = cookie.trim();
      if (trimmed.startsWith(name + "=")) {
        cookieValue = trimmed.substring(name.length + 1);
      }
    });
  }
  return cookieValue;
}

const ENDPOINT = "budget/";

export async function fetchBudgets() {
  await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    const response = await axiosFA.get(`${ENDPOINT}`, {
      headers: {
        "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
      },
    });
    return response.data; // Return the fetched budgets
  } catch (error) {
    console.error("Error fetching budgets:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}

export async function addBudgets(budgetData) {
  
  await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    
    const response = await axiosFA.post(`${ENDPOINT}`, budgetData, {
      headers: {
        "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
      },
    });
    return response.data; // Return the newly created budget
  } catch (error) {
    console.error("Error adding budget:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}

export async function fetchBudgetById(budgetId) {
  await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    const response = await axiosFA.get(`${ENDPOINT}${budgetId}`, {
      headers: {
        "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
      },
    });
    return response.data; // Return the fetched budget
  } catch (error) {
    console.error("Error fetching budget by ID:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}

export async function updateBudget(budgetId, budgetData) {
  await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    const response = await axiosFA.put(`${ENDPOINT}${budgetId}/`, budgetData, {
      headers: {
        "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
      },
    });
    return response.data; // Return the updated budget
  } catch (error) {
    console.error("Error editing budget:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}


export async function deleteBudget(budgetId) {
  await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    const response = await axiosFA.delete(`${ENDPOINT}${budgetId}/`, {
      headers: {
        "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
      },
    });
    return response.data; // Return the response from the deletion
  } catch (error) {
    console.error("Error deleting budget:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}