import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Menu() {
  const { products, isAdminMode, handleDelete, resetProducts } = useContext(OrderContext)

  if (products.length === 0) {
    if (!isAdminMode) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetProducts} />
  }
  
  return (
    <MenuStyled className="menu">
      {products.map(({id, title, imageSource, price}) => {
        return (
          <Card 
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          leftDescription={formatPrice(price)}
          hasDeleteButton={isAdminMode}
          onDelete={() => handleDelete(id)}
          />         
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  overflow-y: scroll;
`;
