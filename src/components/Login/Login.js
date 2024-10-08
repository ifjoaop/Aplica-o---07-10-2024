import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const users = [
  { ra: '010621003', senha: '12345' },
];

const Login = () => {
  const [ra, setRa] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Tentando login com RA:', ra, 'e Senha:', senha);

    const user = users.find((user) => user.ra === ra && user.senha === senha);
    console.log('Usuário encontrado:', user);

    if (user) {
      localStorage.clear();
      localStorage.setItem('user', user.ra);
      console.log('Login bem-sucedido, redirecionando para /marvel');
      navigate('/marvel');
    } else {
      alert('RA ou senha inválidos!');
      setRa('');
      setSenha('');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>RA:</label>
          <input
            type="text"
            value={ra}
            onChange={(e) => setRa(e.target.value)}
            required
            placeholder="Insira aqui o seu número de RA"
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Digite a sua senha"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
