import React, { useState } from "react";
import styled from "styled-components";
import UiIcon from "../Ui/UiIcon";

export default function DashBoardTopNav() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Contanier>
      <SearchInputContainer>
        <div className="search-icon-container">
          <UiIcon icon="SearchIcon" size={20} />
        </div>
        <input
          placeholder="Search any thing"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value as string);
          }}
        />
      </SearchInputContainer>
      <div className="notification-container">
        <div>Saturday May 3, 2023</div>
        <Notification>
          <div>3</div>
          <UiIcon icon="CircleNotificationsIcon" size={20} />
        </Notification>
      </div>
    </Contanier>
  );
}

const Contanier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  background: var(--color-primary-300);

  .notification-container {
    display: flex;
    margin-right: 5px;

    div {
      margin-right: 20px;
      font-weight: bold;
      color: var(--color-primary-150);
    }
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  left: 10px;
  color: var(--color-primary-150);

  .search-icon-container {
    position: absolute;
    margin-left: 15px;
    left: 0;
    margin-top:3px;
  }

  input {
    outline: 0;
    border-width: 1px;
    width: 200px;
    border: 1px solid var(--color-primary-400);
    border-radius: 5px;
    background: none;
    height: 30px;
    position: relative;
    padding-left: 30px;
    margin-left: 10px;
  }

  input::placeholder {
    color: var(--color-primary-150);
  }

  input:focus {
    border-color: var(--color-primary-150);
  }
`;

const Notification = styled.div`
  position: relative;

  div {
    position: absolute;
    background: var(--color-primary-250);
    width: 15px;
    height: 15px;
    color: white !important;
    border-radius: 100%;
    text-align: center;
    font-size: 12px;
    top: 0;
    left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
`;
