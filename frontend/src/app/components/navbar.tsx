import { useState, useRef } from "react";
import { Menu } from "primereact/menu";
// import Cookies from "js-cookie";

import "./navbar.css";

interface NavbarProps {
  fileName: string;
}

export default function Navbar({ fileName }: NavbarProps) {
  const menuRight = useRef<Menu | null>(null);
  // const username = Cookies.get("username");  //for profile menu
  const username = "Human 6512885";
  const [user, setUser] = useState(username);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-3">
        <div className="d-flex flex-column text-white">
          {fileName == "" ? (
            <div className="fw-bold text-danger">No File Found!</div>
          ) : (
            <div className="fw-bold">Uploaded File</div>
          )}
          <small style={{ color: "#ccc" }}>{fileName}</small>
        </div>
        <div style={{ color: "#DDDDDD" }} className="">
          <span className="fw-bold" style={{ fontSize: "1.5rem" }}>
            TAXY
          </span>
          <small style={{ color: "#aaaaaa" }}>&nbsp;standard 3.5</small>
        </div>
        <div className="profile-div">
          <Menu
            style={{
              height: "min-content",
              width: "min-content",
            }}
            className="profile-menu mt-2"
            popup
            ref={menuRight}
            id="popup_menu_left"
            popupAlignment="left"
          />
          <button
            className="profile-btn d-flex align-items-center px-3 h-100 py-2"
            onClick={(e) => menuRight.current?.toggle(e)}
          >
            <div className="flex flex-column align">
              <span className="font-bold">{user}</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
