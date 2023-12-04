import { styled } from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext, useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  const {handleAddProduct} = useContext(OrderContext)

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleSubmit = (event) => {
    event.preventDefault()

    const productToAdd= {
      ...newProduct,
      id: crypto.randomUUID(),
    }

    handleAddProduct(productToAdd)
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
          <div>Pas d'image</div>
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
      <button className="submit-button">Submit</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 1px solid red;
  display: grid;
  grid-template: repeat(4, 1fr) / 1fr 3fr;
  height: 100%;
  width: 80%;

  .preview-image {
    background: purple;
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
  }

  .input-fields {
    display: grid;
    background: blue;
    grid-area: 1 / 2 / -2 / -1;
  }

  .submit-button {
    background: yellow;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }
`
