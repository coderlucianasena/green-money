import styled from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.div`
    background-color: green;
    height: 150px; //Altura
    text-align: center; //Alinhamento do texto
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 12px;
`;

export const Body = styled.div`
    margin: auto; // Pra ficar no meio
    max-width: 980px; // Largura máxima
    /* min-height: 600px; // Tamanho do "corpo" */
    margin-bottom: 50px; // Pra dar espaço em baixo
`;

export const Logo = styled.div`
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.div`
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
`;