import styled from 'styled-components';

export const Table = styled.table`
    width: 100%; //largura
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC; // cm esfumaçado
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>` // Ao adc ? ela se torna opcional
    width: ${props => props.width ? `${props.width}px` : 'auto'}; // Se eu tiver props eu uso, caso contrário uso o auto
    padding: 10px 0;
    text-align: left;
`;