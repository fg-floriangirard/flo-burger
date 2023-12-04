import { styled } from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled >
      <div className="preview-image">Image</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom du produit"/>
        <input type="text" placeholder="URL de l'image"/>
        <input type="text" placeholder="Prix du produit"/>
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
