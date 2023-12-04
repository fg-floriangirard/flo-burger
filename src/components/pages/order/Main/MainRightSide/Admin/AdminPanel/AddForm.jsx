import { styled } from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; 
import { theme } from "../../../../../../../theme";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  const {handleAddProduct} = useContext(OrderContext)

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const productToAdd= {
      ...newProduct,
      id: crypto.randomUUID(),
    }

    handleAddProduct(productToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySuccessMessage()
  }

  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 1500)
  }

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="preview-image">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
        )}
      </div>
      <div className="input-fields">
        <input 
          name="title"
          value={newProduct.title}
          type="text" 
          placeholder="Nom du produit"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text" 
          placeholder="URL de l'image"
          onChange={handleChange}
        />
        <input 
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text" 
          placeholder="Prix du produit"
          onChange={handleChange}
        />
      </div>
      <div className="submit">
        <button className="submit-button">Submit</button>
        {isSubmitted && (
          <div className="submit-message">
            <FaCheckCircle />
            <span>Ajouté avec succès</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template: repeat(4, 1fr) / 1fr 3fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  height: 100%;
  width: 80%;

  .preview-image {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .input-fields {
    display: grid;
    grid-area: 1 / 2 / -2 / -1;
  }

  .submit{
    display: flex;
    align-items: center;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;

    .submit-button {
      width: 50%;

    }

    .submit-message {
      border: 1px solid red;
      margin-left: 10px;
    }
  }
`
