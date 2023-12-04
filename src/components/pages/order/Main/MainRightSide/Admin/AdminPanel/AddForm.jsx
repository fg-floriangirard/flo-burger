import { styled } from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext, useState } from "react";

export default function AddForm() {
  const {handleAddProduct} = useContext(OrderContext)

  const [title, setTitle] = useState("New burger")
  const [imageSource, setImageSource] = useState("")
  const [price, setPrice] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    }

    handleAddProduct(newProduct)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleImageChange = (event) => {
    setImageSource(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="preview-image">Pas d'image</div>
      <div className="input-fields">
        <input 
            value={title}
            type="text" 
            placeholder="Nom du produit"
            onChange={handleTitleChange}
        />
        <input 
          value={imageSource}
          type="text" 
          placeholder="URL de l'image"
          onChange={handleImageChange}
        />
        <input 
          value={price}
          type="text" 
          placeholder="Prix du produit"
          onChange={handlePriceChange}
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
