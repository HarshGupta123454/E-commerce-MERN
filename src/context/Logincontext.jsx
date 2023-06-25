import { createContext, useContext, useReducer } from "react";
const Logincontext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};
const reducer = () => {};
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
  return (
    <Logincontext.Provider value={{ ...state, register }}>
      {children}
    </Logincontext.Provider>
  );
};

export const Uselogincontext = () => {
  return useContext(Logincontext);
};
