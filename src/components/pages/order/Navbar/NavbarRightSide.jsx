import { styled } from "styled-components"
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../../../theme";
import { useContext } from "react";
import {FaUserSecret} from "react-icons/fa";
import OrderContext from "../../../context/OrderContext";

export default function NavbarRightSide() {
  const {isAdminMode, setIsAdminMode} = useContext(OrderContext)
  const showPopup = () => {
    if (!isAdminMode) {
      toast('Mode admin activé', {
        icon: <FaUserSecret size={30} />,
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    setIsAdminMode(!isAdminMode) 
  }
    

  return (
    <NavbarRightSideStyled>
      <ToggleButton 
      isChecked={isAdminMode}
      labelIfUnchecked="Activer le mode admin" 
      labelIfChecked="Désactiver le mode admin"
      onToggle={showPopup}
      />
      <Profile />
      <ToastContainer className="toaster" bodyClassName="body-toast"/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .toaster {
  max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
