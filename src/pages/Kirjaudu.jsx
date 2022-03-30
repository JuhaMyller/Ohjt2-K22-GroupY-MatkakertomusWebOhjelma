import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/ResuableComponents/Input';
import Button from '../components/ResuableComponents/Button';
import { Link } from 'react-router-dom';
import kirjaudubg from './kirjaudubg.png'

const Kirjaudu = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Wrapper>
            <div className='container'>
                <h3>Kirjaudu</h3>
                <Input
                    className="username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={setUsername}
                    placeholder="Sähköposti"
                    styles={{
                        background: "white"
                    }}
                />
                <Input

                    type="password"
                    id="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="Salasana"
                    styles={{
                        background: "white"
                    }}
                ></Input>
                <p>Eikö sinulla ole käyttäjää? <Link to="/rekisteroidy" className='link'>Rekisteröidy</Link></p>
                <Button className="Kirjaudu" styles={{ background: "#fa7171" }}>Kirjaudu</Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-image: url(${kirjaudubg});
background-size: cover;
background-position: center top;
width: 100vw;
height: 92vh;
display:flex;
justify-content: center;
align-items: center;

.container {
    background: #ecebeb;
    margin-left: 37vw;
    margin-right: 37vw;
    text-align: center;
    margin-bottom: 20vh;
    padding: 50px;
    box-shadow: 3px 3px 3px #7a7474;
}
.container h3 {
    margin-bottom: 20px;
}
.icon {
    position: absolute;
}
.container Input , .container p {
    margin-top: 10px;
    margin-bottom: 15px;
}
.link {
    color: blue;
}


`;

export default Kirjaudu;