import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { forgotValidation } from "./Helper/validate";
import MailIcon from "@mui/icons-material/Mail";
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
    height: 208px;
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
export default function Forgot() {
  const formik = useFormik({
    initialValues: { email: "" },
    validateOnBlur: false,
    validateOnChange: false,
    validate: forgotValidation,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Wrapper>
        <h2 className="register">Forgot Password</h2>
        <div className="form-div">
          <form onSubmit={formik.handleSubmit}>
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
            <button type="submit" className="button-submit">
              Next
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
