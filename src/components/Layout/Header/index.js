import { useState } from "react";
import { Button } from "antd";
import './styles.css';
import logo from "../../../assets/images/logo.png";

function Header() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 xl:px-20">
        <div>
          <img src={logo} alt="logo here " className="h-24 w-30" />
        </div>
        <div className="hidden md:flex items-center">
          <Button
            type="primary"
            className="h-10 font-medium text-lg mr-2 md:mr-4 lg:mr-6 customButton rounded-xl"
          >
            Log in To Dashboard
          </Button>
          <Button
            type="primary"
            className="bg-[#4A4AF3] rounded-xl h-10 font-medium text-lg HoverEffect" href="#contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
