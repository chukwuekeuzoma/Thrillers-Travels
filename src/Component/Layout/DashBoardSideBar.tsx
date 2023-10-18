import React from "react";
import styled from "styled-components";
import UiIcon, { Icons } from "../Ui/UiIcon";
import Uzoma from "../../Assets/Images/Uzoma.jpg";

interface Route {
  iconName: Icons;
  path?: string;
  name: string;
}

export default function DashBoardSideBar() {
  const mainPages: Route[] = [
    {
      name: "Dashboard",
      iconName: "HomeOutlinedIcon",
    },
    {
      name: "Explore City",
      iconName: "AppsIcon",
    },
    {
      name: "Ticket",
      iconName: "EmailIcon",
    },
    {
      name: "Favorites",
      iconName: "FavoriteIcon",
    },
    {
      name: "Settings",
      iconName: "SettingsIcon",
    },
  ];

  return (
    <Sidebar>
      <div className="text-container">
        Mima<span>Booking</span>
      </div>
      <ImageContainer>
        <img src={Uzoma} alt="logo" />
        <div>
          <UiIcon icon="SellIcon" size={25} />
        </div>
        <p>Martins</p>
      </ImageContainer>
      <div className="tab-container">
        {mainPages.map((prop, index) => (
          <Tab key={index}>
            <div className="dot"></div>
            <UiIcon icon={prop.iconName} size={25} />
            <div className="text">{prop.name}</div>
          </Tab>
        ))}
      </div>
      <div className="logout-container">
        <Tab>
          <div className="dot"></div>
          <UiIcon icon="LogoutIcon" size={25} />
          <div className="text">Logout</div>
        </Tab>
      </div>
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  background: var(--color-primary-300);
  width: 200px;
  height: 96vh;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: fixed;

  .text-container {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-primary-50);
  }

  .text-container span {
    color: var(--color-primary-150);
  }

  .tab-container {
    margin-top: 150px;
  }

  .logout-container {
    margin-top: 100px;
    margin-left: -20px;
  }
`;

const ImageContainer = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin-top: 20px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    border-width: 3px;
    border-style: solid;
    border-color: var(--color-primary-300);
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--color-primary-50);
  }

  div {
    color: var(--color-primary-50);
    position: absolute;
    margin-top: -15px;
    margin-left: 30px;
  }

  p {
    color: var(--color-primary-150);
    text-align: center;
    font-weight: bold;
  }
`;

const Tab = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  gap: 5px;
  color: var(--color-primary-150);
  margin-bottom: 15px;
  transition: 0.5;

  .dot {
    height: 7px;
    width: 7px;
    border-radius: 100%;
    transition: 0.5s;
    position: absolute;
    margin-left: -15px;
  }

  &:hover {
    color: var(--color-primary-50);
    font-size: 16px;
    transition: 1s;
    gap: 5px;

    .dot {
      height: 7px;
      width: 7px;
      border-radius: 100%;
      background: var(--color-primary-50);
      transition: 0.5s;
      position: absolute;
      left: 0;
      margin-left: -15px;
    }
  }
`;
