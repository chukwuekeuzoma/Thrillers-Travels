import styled from "styled-components";
import DashBoardSideBar from "../Component/Layout/DashBoardSideBar";
import DashBoardTopNav from "../Component/Layout/DashBoardTopNav";
import Home from "../Pages/Home"

export default function DashBoardLayout() {
  return (
    <Layout>
      <DashBoardSideBar />
      <Body>
        <DashBoardTopNav />
        <div className="body-inner">
           <Home />
        </div>
      </Body>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */
  max-width: 2000px;
  margin: auto;
`;

const Body = styled.div`
  position: relative;
  margin-left: 220px;
  margin-right: 20px;
  width: 100%;
  border-top: none;

  .body-inner {
    margin-top: 20px;
  }
`;
