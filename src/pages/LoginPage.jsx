import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const success = await login(data);
            navigate("/", { state: { message: "Login successful" } });
        } catch (err) {
            alert('Erro de login');
        }
    }

    return (
        <form onSubmit={handleSubmit} action="/backend">
            <h2>Login</h2>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" defaultValue="teste@teste.teste" required />
                </div>
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" required />
                </div>
            </div>

            <p className="form-actions">
                <button type="submit" className="button">
                    Log in
                </button>
            </p>
        </form>
    );
}