import { createContext, useContext, useReducer } from "react";
const Logincontext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isloading: true,
};
const reducer = (state, action) => {
  console.log("calling");
  switch (action.type) {
    case "LOGIN_CONTROL":
      console.log(state);
      console.log("called");
      return {
        ...state,
        isloading: false,
        isAuthenticated: true,
      };
    case "UNAUTHORIZED":
      return {
        ...state,
        isloading: false,
      };
    case "LOADING_CONTROL":
      return {
        ...state,
        isloading: true,
      };
    default:
      return state;
  }
};
export const Loginappcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const register = async (data) => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json().then((responseData) => {
            if (response.status === 409) {
              reject(responseData.message);
            } else if (response.ok) {
              localStorage.setItem("otpToken", responseData.otpToken);
              resolve({ status: response.status, data: responseData });
            } else {
              reject(responseData.message);
            }
          });
        })

        .catch((error) => {
          reject(error);
        });
    });
  };
  /**handle otp api POST: `/api/otp` */
  const handleOtp = async (otp) => {
    if (otp) {
      dispatch({ type: "LOADING_CONTROL" });
      return new Promise((resolve, reject) => {
        fetch("http://localhost:4000/api/otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("otpToken")}`,
          },
          body: JSON.stringify(otp),
        })
          .then((response) => {
            return response.json().then((responseData) => {
              if (response.status === 401) {
                reject(responseData.message);
              } else if (response.ok) {
                dispatch({ type: "LOGIN_CONTROL" });
                resolve({ status: response.status, data: responseData });
              }
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  };

  /**handle login api POST: `api/login` */
  const handleLogin = async (data) => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json().then((responseData) => {
            if (response.status === 401) {
              reject(responseData.message);
            } else if (response.ok) {
              dispatch({ type: "LOGIN_CONTROL" });
              resolve({ status: response.status, data: responseData });
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  /**to chech weather user is authenticated or not GET: `api/me` */
  const checkAuth = async () => {
    fetch(`http://localhost:4000/api/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }).then((response) => {
      return response
        .json()
        .then((responseData) => {
          if (response.ok) {
            dispatch({ type: "LOGIN_CONTROL" });
          } else if (response.status === 401) {
            dispatch({ type: "UNAUTHORIZED" });
          }
        })
        .catch((error) => {});
    });
  };
  /**forogt password */
  const handleForgot = async (data) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:4000/api/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        return response
          .json()
          .then((responseData) => {
            if (response.ok) {
              resolve({ status: response.status, data: responseData });
            } else {
              reject(responseData.message);
            }
          })
          .catch((error) => {
            reject({ error });
          });
      });
    });
  };
  /**handle forgot otp */
  const handleForgotOtp = async (data) => {
    const token = localStorage.getItem("otpToken");
    return new Promise((resolve, reject) => {
      fetch("http://localhost:4000/api/forgot/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json().then((responseData) => {
            if (response.ok) {
              resolve({ status: response.status, data: responseData });
            } else {
              reject(responseData.message);
            }
          });
        })
        .catch((error) => {
          reject({ error });
        });
    });
  };

  /**handle reset password  */
  const handleResetPassword = async (data) => {
    const token = localStorage.getItem("otpToken");
    return new Promise((resolve, reject) => {
      fetch("http://localhost:4000/api/forgot/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json().then((responseData) => {
            if (response.ok) {
              resolve({ status: response.status, data: responseData });
            } else {
              reject(responseData.message);
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return (
    <Logincontext.Provider
      value={{
        ...state,
        register,
        handleOtp,
        handleLogin,
        checkAuth,
        handleForgot,
        handleForgotOtp,
        handleResetPassword,
      }}
    >
      {children}
    </Logincontext.Provider>
  );
};

export const Uselogincontext = () => {
  return useContext(Logincontext);
};
