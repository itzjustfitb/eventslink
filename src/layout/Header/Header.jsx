import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import siteLogo from "../../assets/images/site-logo.svg";
import magnifyingGlassIcon from "../../assets/icons/magnifying-glass.svg";
import shoppingBagIcon from "../../assets/icons/shopping-bag.svg";
import userIcon from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [activeNav, setActiveNav] = useState("");
  const navigations = [
    {
      label: "Events",
      value: "/events",
    },
    {
      label: "About us",
      value: "/about-us",
    },
    {
      label: "Contact us",
      value: "/contact-us",
    },
  ];

  const items = [
    {
      key: "1",
      label: "EN",
    },
    {
      key: "2",
      label: "AZ",
    },
    {
      key: "3",
      label: "RU",
    },
    {
      key: "4",
      label: "TR",
    },
  ];

  console.log(activeNav);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setSelectedLang(selectedItem.label);
    }
  };

  return (
    <header className="container gap-1 bg-surface-color py-4 flex justify-between md:flex-row">
      <div className="flex justify-between md:gap-9">
        <img src={siteLogo} alt="Site Logo" />
        <ul
          className={`z-20 duration-300 flex flex-col items-center justify-center gap-1 fixed w-full h-full top-0 left-0 bg-surface-color md:bg-transparent md:static  md:w-fit md:h-fit md:flex-row ${
            isOpen ? "left-0" : "left-full"
          }`}
        >
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.value}
              onClick={() => setActiveNav(navigation.label)}
              className={`py-2 px-4 text-3xl md:text-base text-white hover:opacity-70 border-b-2 border-solid ${
                activeNav === navigation.label
                  ? "border-red-400"
                  : "border-transparent"
              }`}
            >
              {navigation.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center lg:gap-16 md:gap-4 justify-end">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
            onClick: handleMenuClick,
          }}
          className="text-white font-poppins hidden md:block "
        >
          <Typography.Link>
            <Space>
              {selectedLang}
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <div className="hidden md:flex gap-6">
          <button className="p-0">
            <img src={magnifyingGlassIcon} alt="Magnifying glass icon" />
          </button>
          <button className="p-0">
            <img src={userIcon} alt="User icon" />
          </button>
          <button className="p-0">
            <img src={shoppingBagIcon} alt="Shopping bag icon" />
          </button>
        </div>
        <div className="z-30 md:hidden ">
          <Hamburger size={20} color="#fff" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
