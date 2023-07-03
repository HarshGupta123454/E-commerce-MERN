import React from "react";
import styled from "styled-components";
export default function Contact() {
  const Wrapper = styled.section`
    text-align: center;
    padding: 7rem 0 7rem 0;
    .contact-heading {
      color: ${({ theme }) => theme.colors.btn};
    }
    .container {
      margin-top: 6rem;
      gap: 2rem;
      iframe {
        height: 100%;
      }
      .contact-inputs {
        background-color: ${({ theme }) => theme.colors.bg};
        padding: 2rem;
      }
      .inputs {
        width: 90%;
      }
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .map {
        display: none;
      }
      .inputs {
        max-width: 90%;
        width: 90% !important;
      }
      .contact-inputs {
        justify-content: center;
        align-items: center;
      }
      input[type="submit"] {
        width: 16rem;
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="contact-heading">Contact Us</h2>
      <div className="container grid grid-two-column">
        <div className="map">
          <iframe
            title="image"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/xlevqlzz" method="POST">
            <div className="contact-inputs">
              <input
                type="text"
                placeholder="username"
                className="inputs"
                name="username"
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                className="inputs"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="Message"
                style={{ minHeight: "20rem" }}
                className="inputs"
                required
                autoComplete="off"
                placeholder="Enter you message"
              ></textarea>

              <input type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
