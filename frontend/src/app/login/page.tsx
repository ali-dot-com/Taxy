"use client";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import "./module.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      if (form.email !== "" && form.password !== "") {
        if (!validateEmail(form.email)) {
          alert("Invalid email");
          router.push("/login");
        }

        if (!validatePassword(form.password)) {
          alert("Password should be at least 8 characters long");
          router.push("/login");
        }

        const body = form;
        axios
          .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signIn`, body)
          .then((response: any) => {
            console.log(response);
            if (response.status === 200) {
              // Status 200: Success
              console.log("Login successful");
              const accessToken = response.data.token;
              // Save the access token in a cookie
              Cookies.set("accessToken", accessToken, { expires: 7 });
              Cookies.set("username", response.data.username, { expires: 7 });
              router.push("/chat2");
            }
            console.log("Login Response Came");
          })
          .catch((error: any) => {
            if (error.response) {
              if (error.response.status === 401) {
                // Status 401: Unauthorized\
                if (error.response.data.status === 0) {
                  alert(error.response.data.message);
                } else if (error.response.data.status === 2) {
                  console.log(form.email);
                  alert(error.response.data.message);
                  router.push(`/Signup/verify?email=${form.email}`);
                }
                console.log("Unauthorized request");
              } else if (error.response.status === 500) {
                // Status 500: Internal Server Error
                alert(error.response.data.message);
                console.log("Internal server error");
              } else {
                console.log(
                  "Unhandled error status code:",
                  error.response.status
                );
              }
            } else {
              console.log("Unhandled error:", error);
            }
          });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: "#070c1a",
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="row">
          <div
            className="col-lg-6 px-5 d-flex justify-content-center align-items-center"
            style={{ height: "90vh" }}
          >
            <div className="d-flex flex-column">
              <div className="headings text-center mt-3">
                <h1 className="fw-bold">Welcome Back</h1>
                <p style={{ color: "#bbb" }}>
                  Ready to automate Taxations? Log in now and let us do the magic
                </p>
              </div>
              <div>
                <form
                  className="login-form d-flex flex-column align-items-center"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="email-input mt-3">
                    <InputText
                      className="input-field py-3 px-2"
                      placeholder="Email"
                      style={{
                        borderRadius: "5px",
                        background: "#333",
                        color: "#bbb",
                      }}
                      id="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="password-input mt-4">
                    <InputText
                      placeholder="Password"
                      className="input-field py-3 px-2"
                      type="password"
                      required
                      style={{
                        borderRadius: "5px",
                        background: "#333",
                        color: "#bbb",
                      }}
                      id="password"
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                  </div>
                  <Button
                    className="my-5 py-3 input-field login-button"
                    label="Login"
                    style={{
                      borderRadius: "5px",
                      background: "linear-gradient(to right, #d24cd9, #a22da8)",
                      border: "none",
                    }}
                  ></Button>
                </form>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <video
              className="bg-video"
              style={{
                borderRadius: "20px",
                boxShadow: "0px 0px 40px 8px #b93bbf30",
              }}
              autoPlay
              loop
              muted
            >
              <source src="/videos/LLM.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
