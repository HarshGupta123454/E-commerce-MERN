import { createContext, useContext, useReducer, useEffect } from "react";
const Cartcontext = createContext();
const initialState = {
  items: 0,
  product: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CARTITEM":
      const data = action.payload;
      return {
        ...state,
        product: data.products,
        items: data.products.length,
      };
    default:
      return state;
  }
};

export const CartAppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /**get the cart items */
  const getCartItem = async () => {
    const token = localStorage.getItem("authToken");
    fetch("http://localhost:4000/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.json().then((responseData) => {
        if (response.ok) {
          dispatch({ type: "SET_CARTITEM", payload: responseData });
        }
      });
    });
  };
  /**to set the cart items */
  const setCartItem = async (data) => {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("authToken");
      fetch("http://localhost:4000/api/cart", {
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
              getCartItem();
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

  /**get the product details of cart item */
  const getProductDetail = async (id) => {
    const token = localStorage.getItem("authToken");
    try {
      if (token) {
        const data = await fetch(
          `http://localhost:4000/api/product/${id}?type=cart`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );
        const res = await data.json();
        return res;
      }
    } catch (error) {}
  };

  /** to delete the cart item */
  const deleteCartItem = async (id) => {
    const token = localStorage.getItem("authToken");
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:4000/api/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(id),
      })
        .then((response) => {
          return response.json().then((responseData) => {
            if (response.ok) {
              getCartItem();
              resolve({ data: responseData });
            } else {
              reject(responseData.message);
            }
          });
        })
        .catch((error) => reject(error));
    });
  };
  useEffect(() => {
    getCartItem();
  }, []);
  return (
    <Cartcontext.Provider
      value={{
        ...state,
        setCartItem,
        getCartItem,
        getProductDetail,
        deleteCartItem,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export const Usecartcontext = () => {
  return useContext(Cartcontext);
};
