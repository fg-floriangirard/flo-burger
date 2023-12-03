import { styled } from "styled-components"
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";


export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  const orderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
