import React, {useState} from "react";
import "../UserForm.css";

const UserForm = (props) => {
  // nombre, apellido, mail, contrasenia y confirmar contrasenia
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const userData = (e) => {
    e.preventDefault();
  };

  return [
    <form onSubmit={userData}>
      <div className="Box">
        <label>Nombre:</label>
        <input type={"text"} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="Box">
        <label>Apellido:</label>
        <input type={"text"} onChange={(e) => setApellido(e.target.value)} />
      </div>
      <div className="Box">
        <label>Email:</label>
        <input type={"text"} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="Box">
        <label>Contraseña:</label>
        <input type={"password"} onChange={(e) => setPass(e.target.value)} />
      </div>
      <div className="Box">
        <label>Confirmar contraseña:</label>
        <input type={"password"} onChange={(e) => setConfirm(e.target.value)} />
      </div>
    </form>,
    <div className="Wrapper">
      <h1>Datos de tu formulario</h1>
      <table>
        <td className="Left">
          <tr>Nombre: </tr>
          <tr>Apellido: </tr>
          <tr>Email: </tr>
          <tr>Contraseña: </tr>
          <tr>Confirmar Contraseña: </tr>
        </td>
        <td className="Right">
          <tr>{nombre}</tr>
          <tr>{apellido}</tr>
          <tr>{email}</tr>
          <tr>{pass}</tr>
          <tr>{confirm}</tr>
        </td>
      </table>
    </div>,
  ];
};

export default UserForm;
