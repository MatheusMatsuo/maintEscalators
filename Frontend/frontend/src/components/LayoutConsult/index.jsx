import React from 'react';
import { Link } from "react-router-dom";


export const LayoutConsult = ({  id,codigo, quantidade, afiliado }) => {
  return (
    <div className="Item-container">
      <li className="Item-field"
        >Codigo: {codigo} Quantidade: {quantidade}  Afiliado: {afiliado}</li>
        <Link to={`/edit/${id}`}>
      <button className="btn-consult">Editar</button>
      </Link>´
    </div>
  );
};


