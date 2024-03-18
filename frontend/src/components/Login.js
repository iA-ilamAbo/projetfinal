import React from 'react';

function Login(props) {
    return (
        <form className='content'>
            <label htmlFor='email'>Email:</label>
            <input name='email' type='text' />

            <label htmlFor='password'>Mot de passe:</label>
            <input name='password' type='password' />

            <button>Connexion</button>
        </form>
    );
}

export default Login;
