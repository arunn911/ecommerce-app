
import styled from "styled-components";

const Container = styled.div`
        height:30px;
        background-color:teal;
        color:white;
        display:flex;
        font-size:14px;
        font-weight:500;
        align-items:center;
        justify-content:center;
`

export default function Announcement() {
    return (
        <Container>
            Super Deal !!! Free Shipping on Orders over Rs.500
            </Container>
    )
}
