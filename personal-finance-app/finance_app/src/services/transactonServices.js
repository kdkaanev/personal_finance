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

const ENDPOINT = "transactions/";

export async function fetchTransactions() {
  await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    const response = await axiosFA.get(ENDPOINT);
    return response.data; // Return the fetched transactions
  }
  catch (error) {
    console.error("Error fetching transactions:", error);
    throw error; // Re-throw the error for further handling if needed 
}
  }



export async function addTransaction(data) {
 await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
  const csrfToken = getCookie("csrftoken");
  if (!csrfToken) {
    throw new Error("CSRF token not found. Please ensure you are authenticated.");
  }
  try {
    const response = await axiosFA.post(ENDPOINT, 
      data,
      {
        headers: {
          "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
        },
      });
    return response.data; // Return the added transaction
  }
  catch (error) {
    console.error("Error adding transaction:", error);
    throw error; // Re-throw the error for further handling if needed
  } 
}
export async function deleteTransaction(id) {
  try {
    await fetchCSRFToken(); // Ensure CSRF token is fetched before making requests
    const csrfToken = getCookie("csrftoken");
    if (!csrfToken) {
      throw new Error("CSRF token not found. Please ensure you are authenticated.");
    }
    await axiosFA.delete(`${ENDPOINT}${id}/`);
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}
