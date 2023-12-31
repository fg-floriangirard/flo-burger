import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { getTabSelected, tabsConfig } from "../tabsConfig";
import { theme } from "../../../../../../../theme";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>
      {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  box-sizing: border-box;
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 40px 5%;
`