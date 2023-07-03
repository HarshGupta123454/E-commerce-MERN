import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import { registervalidation } from "./Helper/validate";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MailIcon from "@mui/icons-material/Mail";
import { Uselogincontext } from "./context/Logincontext";
import { toast } from "react-toastify";
const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};

  .register {
    color: #424242;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 1rem;
  }

  .form-div {
    width: 734px;
    height: 461px;
    background-color: white;
    border-radius: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .paragraph-text {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
      text-align: left;
      margin-bottom: 12px;
    }
    .signin {
      margin-top: 1rem;
    }
    .input-group {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 4px;
      width: 618px;
      height: 60px;
      padding-left: 5px;
      .svg {
        width: 25px;
        height: 25px;
        color: #5d49ab;
      }
      .input {
        max-width: 100%;
        width: 100%;
        padding-left: 10px;
        box-shadow: none;
        text-transform: lowercase;
        background-color: inherit;
        outline: none;
        font-size: 15px;
        border: none;
      }
      .eye {
        color: #888;
        margin-right: 15px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
      }
      .eye:hover {
        color: #5d49ab;
      }
    }
    .button-submit {
      margin-top: 12px;
      background-color: #5d49ab;
      width: 618px;
      height: 40px;
      color: white;
      border: 1px solid #5d49ab;
      transition: all 0.4s ease;
      cursor: pointer;
    }
    .button-submit:hover {
      color: #5d49ab;
      background-color: white;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .form-div {
      width: 90%;
    }
    .input-group {
      width: 100% !important;
    }
    form {
      width: 80%;
    }
    .button-submit {
      width: 100% !important;
    }
    .paragraph-text {
      font-size: 16px !important;
    }
  }
`;
export default function Register() {
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const { register } = Uselogincontext();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validateOnBlur: false,
    validateOnChange: false,
    validate: registervalidation,
    onSubmit: async (values) => {
      try {
        await toast.promise(register(values), {
          pending: {
            render() {
              return "please wait";
            },
          },
          success: {
            render({ data }) {
              navigate("/register/otp", { state: { type: "registerOtp" } });
              return `${data.data.msg}`;
            },
          },
          error: {
            render({ data }) {
              // When the promise reject, data will contains the error
              return `${data}`;
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Wrapper>
        <h2 className="register">Register</h2>
        <div className="form-div">
          <form onSubmit={formik.handleSubmit}>
            <p className="paragraph-text">Name</p>
            <div className="input-group">
              <img src="user.svg" alt="avtar" style={{ paddingLeft: "5px" }} />
              <input
                className="input"
                type="text"
                {...formik.getFieldProps("name")}
                placeholder="Enter name"
              />
            </div>
            <p className="paragraph-text">Email</p>
            <div className="input-group">
              <div style={{ paddingLeft: "5px" }}>
                <MailIcon className="svg" />
              </div>
              <input
                className="input"
                type="email"
                {...formik.getFieldProps("email")}
                placeholder="Enter email"
              />
            </div>
            <p className="paragraph-text">Password</p>
            <div className="input-group">
              <img
                src="password_icon.svg"
                alt="avtar"
                style={{ paddingLeft: "5px" }}
              />
              <input
                className="input"
                type={togglePassword ? "text" : "password"}
                {...formik.getFieldProps("password")}
                placeholder="Enter password"
              />
              {togglePassword ? (
                <VisibilityOutlinedIcon
                  className="eye"
                  onClick={() => setTogglePassword(!togglePassword)}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="eye"
                  onClick={() => setTogglePassword(!togglePassword)}
                />
              )}
            </div>
            <button type="submit" className="button-submit">
              submit
            </button>
          </form>
          <div>
            <p className="paragraph-text signin">
              Already a existing user? <NavLink to={"/login"}>SignIn</NavLink>
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
