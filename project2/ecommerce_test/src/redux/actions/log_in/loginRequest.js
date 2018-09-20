
import { authHeader } from './authHeader';

export const logInRequest = {
    login,
    logout,
    register,
    getById,
    update,
    getAll

};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:8000/credential/login`, requestOptions)
        .then(user => user.json())

        // return fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/credential/login`, requestOptions)


        .then(user => {
            
            localStorage.setItem('user', JSON.stringify(user));
            let loginUser = JSON.parse(localStorage.getItem('user'));
            alert(`Succesfuly login as ${loginUser[0].role}  `);


            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/users/${id}`, requestOptions);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/`, requestOptions);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:8000/users/register`, requestOptions);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:8000/users/${user.id}`, requestOptions);
}

