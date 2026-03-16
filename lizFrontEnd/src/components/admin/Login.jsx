import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir
import '/src/styles/login/login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redirigir después del login exitoso

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcodeo de las credenciales
    const validEmail = "liz@gmail.com";
    const validPassword = "car123";

    // Verifica si las credenciales son correctas
    if (email === validEmail && password === validPassword) {
      // Si el login es exitoso, redirige al dashboard
      navigate("/admin/dashboard");
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje (puedes hacerlo de forma más elegante)
      alert("Credenciales incorrectas, por favor intenta de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ingresa tu email"
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu Contraseña"
            required
          />
        </div>
        <button className="loginbtn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
