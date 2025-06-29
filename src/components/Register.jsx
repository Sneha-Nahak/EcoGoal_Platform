import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "./BackButton";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Register = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_AUTH_URL}/register`,
        { name, email, password }
      );

      if (res.data?.token && res.data?.user) {
        alert("Registration successful!");
        login({ token: res.data.token, user: res.data.user });
        navigate(`/${res.data.user.name}`);
      } else {
        alert("Registration failed: Invalid response");
      }
    } catch (error) {
      console.log("Registration error:", error);
      alert("Something went wrong during registration");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(./loginBackground.jpg)",
        objectFit: "cover",
        height: "100vh",
      }}
    >
      <span style={{ marginLeft: "3rem" }}>
        <BackButton />
      </span>
      <StyledWrapper>
        <div
          id="form-ui"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "5rem",
          }}
        >
          <form onSubmit={handleRegister} id="form">
            <div id="form-body">
              <div id="welcome-lines">
                <div id="welcome-line-1">EcoGoals.</div>
                <div id="welcome-line-2">Hello, Warriors!</div>
              </div>
              <div id="input-area">
                <div className="form-inp">
                  <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-inp">
                  <input
                    placeholder="Email Address"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-inp">
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div id="submit-button-cvr">
                <button id="submit-button" type="submit">
                  Register
                </button>
              </div>
              <p className="text-center pt-2 text-emerald-700">Already have an account?</p>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Link to="/login">
                  <button id="submit-button" type="button">Login</button>
                </Link>
              </div>
              <div id="bar" />
            </div>
          </form>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  #form {
    display: grid;
    place-items: center;
    width: 300px;
    height: 472px;
    padding: 25px;
    background-color: #f2f2f2;
    box-shadow: 0px 15px 60px #5cd65c;
    outline: 1px solid #2b9962;
    border-radius: 10px;
  }

  #welcome-lines {
    text-align: center;
    line-height: 1;
  }

  #welcome-line-1 {
    color: #2eb82e;
    font-weight: 600;
    font-size: 40px;
  }

  #welcome-line-2 {
    color: #737373;
    font-size: 18px;
    margin-top: 17px;
  }

  #input-area {
    margin-top: 40px;
  }

  .form-inp {
    padding: 11px 25px;
    background: transparent;
    border: 1px solid #2eb82e;
    line-height: 1;
    border-radius: 8px;
  }

  .form-inp:first-child {
    margin-bottom: 15px;
  }

  .form-inp input {
    width: 100%;
    background: none;
    font-size: 13.4px;
    color: #2eb82e;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-inp input:focus {
    outline: none;
  }

  #submit-button-cvr {
    margin-top: 20px;
  }

  #submit-button {
    display: block;
    width: 100%;
    color: #2eb82e;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    padding: 14px 13px 12px 13px;
    border: 0;
    outline: 1px solid #2eb82e;
    border-radius: 8px;
    line-height: 1;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  #submit-button:hover {
    background-color: #2eb82e;
    color: white;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }
`;

export default Register;