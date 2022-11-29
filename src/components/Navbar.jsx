import CartWidget from './CartWidget'
import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return ( 
    <>
        <NavContainer>
            <h2>Escuela de <span> Peluquería </span> </h2>
            <div>
                <a href="">Historia</a>
                <a href="">Productos</a>
                <a href="">Carreras</a>
                <a href="">Contacto</a>
                <a href=""><CartWidget /></a>
            </div>
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`

    h2{
        color: wheat;
        font-weight: bold;
    }
    padding: .4rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: wheat;
        text-decoration: none;
        margin-right: 1rem;
    }
    a:hover{
        font-weight: bold;
        color: white;
    }



`