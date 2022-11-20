import styled from "styled-components";
import { Box } from '@mui/material';

export const Header = styled(Box)`
    flex-grow: 1;
    height: 70px;
    .MuiToolbar-root{
        background-color: #27FF7E !important;
        color: #000;
    } 
    
    .MuiTypography-root {
        font-weight: 700;

    }
`;

export const Layout = styled.div`
    margin: 80px 5% 0 5%;
`;
