import { styled } from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu } from "../../../fakeData/fakeMenu"
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  const [products, setProducts] = useState(fakeMenu.MEDIUM)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  const handleAddProduct = (newProduct) => {
    const productsCopy = [...products]
    const productsUpdated = [newProduct, ...productsCopy]
    setProducts(productsUpdated)
  }

  const handleDelete = (productId) => {
    const productsCopy = [...products]
    const productsUpdated = productsCopy.filter((product) => product.id !== productId)
    setProducts(productsUpdated)
  }

  const resetProducts = () => { 
    setProducts(fakeMenu.MEDIUM)
  }

  const orderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAddProduct,
    handleDelete,
    resetProducts,
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
