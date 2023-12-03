import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext)


  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }
  
  const handleAddClick = () => {
    setIsCollapsed(false)
    setIsAddSelected(true)
    setIsEditSelected(false)
  }
  
  const handleEditClick = () => {
    setIsCollapsed(false)
    setIsEditSelected(true)
    setIsAddSelected(false)
  }
  
  return (
    <AdminTabsStyled>
      <Tab 
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab 
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />} 
        onClick={handleAddClick}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={handleEditClick}
        className={isEditSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  padding: 0 20px;
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 5px;
  }
`
