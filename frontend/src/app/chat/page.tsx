"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";

import Logo from "../../../public/images/500px.png";
import LogoSmall from "../../../public/images/50px.png";
import "./chat.css";
import OpenAI from "openai";
import Navbar from "../components/navbar";

export default function Chat() {
  const username = "Human";
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI,
    dangerouslyAllowBrowser: true,
  });

  async function chatWithGpt(systemPrompt: string, message: string) {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful financial assistant. You will help me give detailed insights and information from the given data that will be provided to you by the user. It will be a w-2 form and you will give great insights and informations extracted from the data",
        },
        { role: "user", content: message },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  }

  const chat = [
    {
      title: "Write a script for a training video on how to use a computer",
      id: 1,
      chat: [
        {
          prompt: "Hi, how are you?",
          output: "I'm good, thanks for asking!",
          id: 0,
        },
      ],
    },
  ];

  const temphistory = [
    {
      title:
        "Previous Prompt 1 Previous Prompt 1 Previous Prompt 1 Previous Prompt 1 Previous Prompt 1 Previous Prompt 1",
      id: 1,
    },
    {
      title: "Previous Prompt 2",
      id: 2,
    },
    {
      title: "Previous Prompt 3",
      id: 3,
    },
  ];

  const baseSYSPrompt =
    "You are a helpful financial assistant. You will help me give detailed insights and information from the given data that will be provided to you by the user. It will be a w-2 form and you will give great insights and informations extracted from the data. Here is form-data in JSON format:\n";

  const [newChat, setNewChat] = useState(true);
  const [currentChat, setCurrentChat] = useState(chat);
  const [firstPrompt, setFirstPrompt] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(username);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [history, setHistory] = useState(temphistory);

  const promptInput = async (prompt: string) => {
    if (prompt !== "") {
      setIsLoading(true);

      const promptLoading = toast.loading("Answering Your Question...");
      try {
        let body = null;

        let mes =
          "My Data w-2 data is: \n" + w2Data + "\n My Question is: \n" + prompt;
        let gptOutput = await chatWithGpt(sysPrompt, mes);
        console.log("output: ", gptOutput);

        if (!newChat) {
          const UpdateChat = [...currentChat];
          UpdateChat[0].chat.push({
            prompt: prompt,
            output: gptOutput,
            id: currentChat.length + 1,
          });
          setCurrentChat(UpdateChat);
        } else {
          let currentChat = {
            title: "Chat",
            id: 0,
            chat: [
              {
                prompt: prompt,
                output: gptOutput,
                id: 0,
              },
            ],
          };
          setCurrentChat([currentChat]);
          setNewChat(false);
          setFirstPrompt(1);
        }
        setIsLoading(false);
        toast.dismiss(promptLoading);

        setPrompt("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setPrompt("");
      promptInput(prompt);
      // const sendPrompt = document.getElementById("sendPrompt");
      // sendPrompt?.click();
      // console.log(sendPrompt);
      // console.log(prompt);
    }
  };

  const [uploadedFileName, setUploadedFileName] = useState("");

  const [file, setFile] = useState<File>();
  const [sysPrompt, setSysPrompt] = useState("");
  const [w2Data, setW2Data] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension !== "pdf") {
        alert("Only PDF files are allowed");
        throw new Error("Only PDF files are allowed");
      }

      const base64Data = await readFileAsBase64(file);
      const requestBody = {
        fileDataBase64: base64Data,
      };

      const uploadToast = toast.loading("Uploading & Extracting PDF...");
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      toast.dismiss(uploadToast);
      toast.success("Data Extracted Successfully", {
        duration: 3000,
      });

      setUploadedFileName(file.name);
      setFileUploaded(true);

      res.json().then((data) => {
        delete data.employee_ssn;
        let dataStr = JSON.stringify(data);
        let systemPrompt = baseSYSPrompt + dataStr;
        setSysPrompt(systemPrompt);
        setW2Data(dataStr);
      });
    } catch (e: any) {
      console.error(e);
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          // Extract the Base64 data from the data URL
          const base64Data = reader.result.split(",")[1];
          resolve(base64Data);
        } else {
          reject(new Error("Failed to read file as Base64."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Failed to read file."));
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <Toaster></Toaster>
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row h-100 p-0" style={{ padding: "0" }}>
          <div className="col-sm-2 h-100" style={{ background: "#171717" }}>
            <div className="row p-2 h-100">
              <div
                className="new-chat-btn col-sm-12 px-2 mt-2 d-flex flex-row justify-content-between align-items-center"
                style={{
                  cursor: "pointer",
                }}
              >
                <Image src={Logo} alt="logo" height={30} width={30} />
                <Button
                  label=""
                  icon="pi pi-pencil"
                  className="px-3 py-2"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                  }}
                  onClick={() => {
                    setNewChat(true);
                    setFirstPrompt(0), setCurrentChat([]);
                  }}
                >
                  &nbsp;&nbsp; <small>New Chat</small>
                </Button>
              </div>
              <div className="mt-4 mb-2">
                <small className="text-white fw-bold">Recents</small>
              </div>
              <div className="prev-chat-prompts px-1">
                {history.map((item) => (
                  <div className="d-flex justify-content-around" key={item.id}>
                    <span
                      className="mb-2 mt-2 d-flex justify-content-start align-items-center"
                      // onClick={() => changeCurrentChat(item.id, item.title)}
                    >
                      {item.title}
                    </span>
                    <Button
                      icon="pi pi-trash"
                      className="prev-chat-menu-btn"
                      style={{
                        background: "transparent",
                        border: "none",
                      }}
                      // onClick={() => deleteChat(item.id)}
                    />
                  </div>
                ))}
              </div>

              <div className="p-2 pro-plan">
                <div
                  className="w-100 h-100 p-2"
                  style={{ background: "#212121", borderRadius: "10px" }}
                >
                  <h5 className="fw-bold px-2 m-0 pro-plan-header">
                    Upgrade to PRO
                  </h5>
                  <div className="d-flex flex-column">
                    <small
                      className="mb-1 px-2 pt-1"
                      style={{ color: "#CCCDDD" }}
                    >
                      Get unlimited w-2 uploads...
                    </small>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <Link href="/pricing">
                      <Button
                        className="my-2 py-2 px-5 upgrade-btn"
                        label="Upgrade"
                        severity="help"
                        style={{
                          borderRadius: "10px",
                          width: "100%",
                        }}
                      ></Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 p-0" style={{ background: "#202020" }}>
            <div className="main d-flex flex-column justify-content-between">
              <div>
                <Navbar fileName={uploadedFileName} />
              </div>
              <div>
                {newChat == true && firstPrompt == 0 ? (
                  <div className="col-md-11 chat-section1 px-5 ms-5 mt-5 d-flex flex-column align-items-center">
                    <div>
                      <span className="create text-white fw-bold hello-header">
                        Hello, <span className="create">{user}</span>
                      </span>
                      <span className="fw-bold hello-subheader">
                        <br />
                        Let AI help you with your{" "}
                        <span className="">Taxations</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{ maxHeight: "32rem" }}
                  >
                    <div
                      className="chat-section"
                      style={{
                        minHeight: "100%",
                        maxHeight: "100%",
                        overflowY: "scroll",
                        overflowX: "visible",
                      }}
                    >
                      {currentChat.map((item, key) => (
                        <div
                          style={{ height: "100%", maxHeight: "100%" }}
                          key={item.id.toString()}
                          className="text-decoration-none"
                        >
                          <div
                            className="d-flex px-3"
                            style={{ maxHeight: "100%", minHeight: "100%" }}
                          >
                            <span className="ms-2 mt-2 text-light">
                              {item.chat.map((chat, key) => {
                                return (
                                  <div key={key}>
                                    <p className="px-3 text-light">
                                      <i
                                        className="m-2 p-2 text-light pi pi-user"
                                        style={{
                                          background: "#111111",
                                          borderRadius: "10px",
                                        }}
                                      ></i>
                                      {chat.prompt}
                                    </p>
      
                                      <p className="history-item px-3">
                                        <p
                                          className="raised-icons m-2 p-1 text-light"
                                          style={{
                                            background: "transparent",
                                            borderRadius: "10px",
                                          }}
                                        >
                                          <Image
                                            className="me-2"
                                            src={LogoSmall}
                                            height={25}
                                            width={25}
                                            alt="Logo"
                                          ></Image>
                                          <span
                                            className="fw-bold"
                                            style={{ fontSize: "0.9rem" }}
                                          >
                                            EchoAI
                                          </span>
                                        </p>
                                        {chat.output}
                                        <br />
                                        <br />
                                      </p>
                                    
                                  </div>
                                );
                              })}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="prompt-area mx-5 my-2 d-flex justify-content-center align-items-center"
                style={{ height: "15%" }}
              >
                <div className="w-100 d-flex justify-content-center gap-2 align-items-center">
                  <div className="pb-2 d-flex flex-row justify-content-center align-items-center w-75">
                    <div className="d-flex flex-column w-100">
                      {fileUploaded ? (
                        <></>
                      ) : (
                        <small className="text-danger my-1 fileUploaded">
                          No File Uploaded
                        </small>
                      )}
                      <textarea
                        style={{ resize: "none", height: "4rem" }}
                        name="prompt-input"
                        className={`prompt-input w-100 ${
                          fileUploaded ? "" : "disabled-prompt"
                        }`}
                        placeholder="Tell us about your w-2 report..."
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                        id="prompt-input"
                        onKeyDown={handleKeyDown}
                        required
                        disabled={fileUploaded ? false : true}
                      ></textarea>
                    </div>

                    <form
                      className="ms-2 mt-4 d-flex align-items-center gap-3"
                      onSubmit={onSubmit}
                      style={{
                        width: "45%",
                        borderRadius: "8px",
                      }}
                      encType="multipart/form-data"
                    >
                      <input
                        style={{ width: "40%" }}
                        type="file"
                        className="form-control"
                        id="customFile"
                        name="file"
                        onChange={(e) => setFile(e.target.files?.[0])}
                      />
                      <Button
                        label="Attach"
                        type="submit"
                        className="btn btn-secondary"
                      ></Button>
                      <Button
                        icon="pi pi-arrow-up"
                        className="p-3 send-btn"
                        id="sendPrompt"
                        onClick={() => promptInput(prompt)}
                      ></Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
