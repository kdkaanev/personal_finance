import axiosFA from '../config/axiosinstance';

axiosFA.defaults.withCredentials = true;
axiosFA.defaults.xsrfHeaderName = "X-CSRFToken";
axiosFA.defaults.xsrfCookieName = "csrftoken";


async function fetchCSRFToken() {
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

const ENDPOINT = 'auth/'


export async function registerUser(user) {
    try {
        const response = await axiosFA.post(`${ENDPOINT}signup/`, {
          email: user.email,
          password: user.password,
        });
    
        console.log('User registered:', response.data);
        alert('Registration successful!'); // Show success message
        
      } catch (error) {
         if (error.response && error.response.status === 400) {
          const data = error.response.data;
          for (const key in data) {
            // Optionally handle/display errors per field
            console.error(`Registration error [${key}]:`, data[key][0]);
          }
          alert('Registration failed: ' + (error.response?.data?.email || error.message));
        } else {
          console.error('Registration error:', error.response?.data || error.message);
          alert('Registration failed: ' + (error.response?.data || 'Try again.'));
        }
        throw error; // Re-throw the error for further handling if needed
      }
}

export async function loginUser({email, password}, expires=30) {
    try {
      await fetchCSRFToken();
     
        const response = await axiosFA.post(`${ENDPOINT}signin/`, {
          email: email,
          password: password,
          expires,

        }, {
           
            headers: {
              "X-CSRFToken": getCookie("csrftoken"),
            },
        });
        
    
       
        alert('Login successful!'); // Show success message
        return response.data;
        
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        alert('Login failed: ' + (error.response?.data?.detail || 'Try again.'));
    }
}
export async function getCurrentUser() {
  await fetchCSRFToken();

  try {
   
    const res = await axiosFA.get(`${ENDPOINT}me/`, {
      withCredentials: true,
      
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    
    });
    return res.data;
  }
  catch (e) {
    console.error('Ops something went wrong', e);
  }
}
export async function saveUserProfile(profileData) {
    await fetchCSRFToken();
  try {
    const response = await axiosFA.patch(`${ENDPOINT}me/`, profileData,{
      withCredentials: true,
      
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    
    });
    return response.data;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
}

export async function logoutUser() {
  await fetchCSRFToken();
  try {
    
    const response = await axiosFA.post(`${ENDPOINT}signout/`, {}, {

      withCredentials: true,
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
    alert('Logout successful!'); // Show success message
    // Optionally clear the CSRF token cookie
    
    console.log("Logout successful:", response.data);
    return true;
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
    return false;
  }
}