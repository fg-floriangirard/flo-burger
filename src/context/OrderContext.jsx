import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  
  products : [],
  handleAddProduct: () => {},
  handleDelete: () => {},
  resetProducts: () => {},

  newProduct: [],
  setNewProduct: () => {},
})