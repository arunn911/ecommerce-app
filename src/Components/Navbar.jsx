import { Search } from '@material-ui/icons'
import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components'
import { mobile, midscreen } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router';


const Container = styled.div`
        height:60px;
        ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
        padding:10px 20px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        ${mobile({ padding: "10px 0px" })}

`
const Left = styled.div`
        flex:1;
        display:flex;
        align-items:center;
`
const Language = styled.span`
        font-size:14px;
        cursor:pointer;
        ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
        border:0.5px solid lightgray;
        display:flex;
        align-items:center;
        margin-left:25px; 
        margin-right:25px; 
        padding:5px;
        ${midscreen({display:'none'})}
        
`
const Input = styled.input`
        border:none;
        ${mobile({ width: "50px" })}
`

const Center = styled.div`
        flex:1;
        text-align:center;
`
const Logo = styled.h1`
        font-weight:900;
        ${midscreen({ fontSize: "20px"})}
        ${mobile({ fontSize: "15px", fontWeight: "900" })}
       
        
`
const Right = styled.div`
        flex:1;
        display:flex;
        alingn-items:center;
        justify-content:flex-end;
        ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
        font-size: 14px;
        cursor:pointer;
        margin-left:25px;
        ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Icon = styled.div`
cursor:pointer;
`

export default function Navbar() {
        const quantity = useSelector(state => state.cart.quantity);
        const history = useHistory();
        const logout = () => {
                localStorage.clear();
                setTimeout(() => {
                        history.push('/')
                },500)
        }


        // console.log(quantity)
        return (
                <Container>
                        <Wrapper>
                                <Left><Language>EN</Language>
                                        <SearchContainer>
                                                <Input placeholder="Serach" />
                                                <Search style={{ color: "gray", fontSize: 16 }} />
                                        </SearchContainer>
                                        <Link to="/">
                                                <Icon>  <HomeIcon /> </Icon>
                                        </Link>
                                </Left>
                                <Center>
                                        <Logo>
                                                HAPIEE SHOPIEE.
                                        </Logo>
                                </Center>
                                <Right>
                                        <MenuItem onClick={logout}>
                                                LOGOUT
                                        </MenuItem>
                                        <Link style={{textDecoration:'none',color:'black'}} to="/login">
                                                <MenuItem>
                                                        LOGIN
                                                </MenuItem>
                                        </Link>
                                        {quantity > 0 ? (<Link to="/cart">
                                                <MenuItem>
                                                        <Badge badgeContent={quantity} color="primary">
                                                                <ShoppingCartOutlinedIcon />
                                                        </Badge>
                                                </MenuItem>
                                        </Link>) : ''}
                                </Right>
                        </Wrapper>
                </Container>


        )
}
