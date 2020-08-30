import React, { useState, useEffect } from "react";
import Head from "next/head";
// import useCookie from "../hooks/useCookie";

/* Componenets */
import FormLogin from "../components/form/FormLogin";

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* login schemas */
const FORM_DATA_LOGIN = {
  email: {
    value: "",
    label: "Email",
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: "Please insert valid email",
    },
  },
  password: {
    value: "",
    label: "Password",
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Please insert valid password",
    },
  },
};

export default function Home() {
  // const [cookie] = useCookie("username", "BrandonBaars");
  const [stateFormData, setStateFormData] = useState(FORM_DATA_LOGIN);
  const [stateFormError, setStateFormError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});


  function onSubmitHandler() {

  }

  function onChangeHandler() {

  }

  function onSubmitHandler() {

  }

  return (
    <div className="container">
      <Head>
        <title>Welcome to Next.js with JWT Authentication Application</title>
        <meta name="description" content="A Practical Guide for JWT (JSON Web Tokens) Authentication in Next.js Application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {/* <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h1>{cookie}</h1>
          <button onClick={() => {}}>Store Cookie</button>
        </div> */}

        <h2>JWT Authentication</h2>
        <h3>Login to continue</h3>
        <p className="description">
          Use : <code>email1@email.com</code> or <code>email2@email.com</code>{" "}
          with the password:
          <code>password</code>
        </p>
        <div style={{ maxWidth: "66.6%" }}>
          {/* <form>
              <label htmlFor="email">
                <input
                  name="email"
                  id="name"
                  // defaultValue=""
                  placeholder="Email"
                  style={{ width: "100%" }}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  // defaultValue=""
                  placeholder="Password"
                  style={{ width: "100%" }}
                />
              </label>
              <div>
                <button
                  type="submit"
                  style={{ width: "100%", textTransform: "uppercase" }}
                >
                  Login
                </button>
              </div>
            </form> */}

          <FormLogin props={{
            onSubmitHandler,
            onChangeHandler,
            loading,
            stateFormData,
            stateFormError,
            stateFormMessage,
          }} />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body {
          font-family: "Poppins", sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-control {
          display: block;
          width: 100%;
          padding: 0.375rem 0.75rem;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 3px solid #ced4da;
          border-radius: 0;
          transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
        }
        .form-login,
        .form-register,
        .form-post {
          width: 100%;
          padding-bottom: 2rem;
        }
        .page-error {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          height: 90vh;
          padding: 10rem 2rem;
        }
        .btn {
          padding: 0.375rem 0.75rem;
          margin-bottom: 0.75rem;
        }
        .btn-block {
          display: block;
          width: 100%;
        }
        .btn-lg {
          padding: 0.5rem 1rem;
          font-size: 1.125rem;
          line-height: 1.5;
          border-radius: 0;
        }
        .btn-warning {
          color: #fff;
          background-color: #ffc107;
          border-top: 0;
          border-left: 0;
          border-color: #ffc107;
        }
        .home {
          overflow-x: hidden;
        }
        .home::before {
          top: 0rem;
          right: 0rem;
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          opacity: 0.5;
          border-radius: 50%;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC");
          background-position: top center;
          background-repeat: repeat;
          background-attachment: scroll;
        }
        .home::after {
          top: 16rem;
          right: 1rem;
          content: "";
          position: absolute;
          transform: rotate(-20deg);
          width: 0;
          height: 0;
          opacity: 0.5;
          z-index: -1;
          border-top: 25px solid transparent;
          border-right: 50px solid #cdcdcd;
          border-bottom: 25px solid transparent;
        }

        #__next {
          position: relative;
          overflow-x: hidden;
          z-index: 0;
        }
        #__next::before {
          content: "";
          position: absolute;
          top: 120px;
          bottom: 0;
          z-index: -1;
          width: 420px;
          transform: rotate(-50deg);
          height: 420px;
          opacity: 0.5;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC");
          background-position: top center;
          background-repeat: repeat;
          background-attachment: scroll;
        }
        #__next:after {
          content: "";
          position: absolute;
          bottom: 100px;
          left: 20px;
          width: 120px;
          height: 120px;
          opacity: 0.5;
          z-index: -1;
          border-radius: 50%;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC");
          background-position: top center;
          background-repeat: repeat;
          background-attachment: scroll;
        }

        .navbar {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .headline {
          text-transform: capitalize;
          position: relative;
          color: #333333;
        }

        .headline::before {
          position: absolute;
          bottom: -5px;
          left: 0;
          content: "";
          height: 3px;
          width: 20%;
          background-color: #cdcdcd;
        }

        main.content-detail {
          margin-top: 3rem;
          text-align: left;
          display: inline-block;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main::before {
          content: "";
          position: absolute;
          bottom: 6rem;
          right: 25rem;
          z-index: -1;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          opacity: 0.25;
          border: 4px solid #cdcdcd;
        }
        main::after {
          content: "";
          position: absolute;
          top: 1rem;
          right: 18rem;
          z-index: -1;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          opacity: 0.25;
          border: 4px solid #cdcdcd;
        }

        footer {
          width: 100%;
          height: 80px;
          text-align: center;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer::before {
          bottom: 8rem;
          right: 2rem;
          content: "";
          position: absolute;
          transform: rotate(20deg);
          width: 0;
          height: 0;
          opacity: 0.5;
          z-index: -1;
          border-top: 55px solid transparent;
          border-right: 100px solid #cdcdcd;
          border-bottom: 55px solid transparent;
        }

        footer::after {
          content: "";
          position: absolute;
          // left: 0;
          // right: 0;
          bottom: 180px;
          z-index: -1;
          width: 350px;
          height: 350px;
          transform: rotate(-50deg);
          opacity: 0.5;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC");
          background-position: top center;
          background-repeat: repeat;
          background-attachment: scroll;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: block;
        }

        .account {
          margin-bottom: 1.5rem;
        }

        .account a {
          color: #0070f3;
          text-decoration: underline;
          margin-left: 0.25rem;
          margin-right: 0.25rem;
        }
        .account a:hover {
          text-decoration: none;
        }
        .footer-main {
          background-color: white;
        }

        .form-login {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        span {
          font-size: 0.82rem;
        }

        .title a,
        .sub-title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active,
        .sub-title a:hover,
        .sub-title a:focus,
        .sub-title a:active {
          // text-decoration: underline;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .card {
          position: relative;
          overflow: hidden;
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          background: white;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease,
            box-shadow 0.5s ease;
          box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }

        .card::after {
          content: "";
          position: absolute;
          bottom: -1.95rem;
          right: -1.95rem;
          width: 80px;
          height: 80px;
          opacity: 0.25;
          transform: rotate(-40deg) scale(1);
          border-radius: 50%;
          opacity: 0.5;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC");
          background-position: top center;
          background-repeat: repeat;
          background-attachment: scroll;
          z-index: -1;
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0rem;
          right: 0rem;
          width: 25px;
          height: 25px;
          background-color: #ffffff;
          border: 2px solid #cdcdcd;
          opacity: 0.25;
          transform: rotate(-40deg) translate(2px, 2px);
          border-radius: 50%;
          z-index: -1;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.15);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card span small {
          display: block;
        }

        .logo {
          height: 1em;
        }

        .warning {
          color: #990000;
        }

        .text-center {
          text-align: center;
        }

        // Extra small devices (portrait phones, less than 576px)
        @media (max-width: 575.98px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        // Small devices (landscape phones, 576px and up)
        @media (min-width: 576px) and (max-width: 767.98px) {
        }
        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) and (max-width: 991.98px) {
        }
        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) and (max-width: 1199.98px) {
        }
        // Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1200px) {
        }
      `}</style>
    </div>
  );
}
