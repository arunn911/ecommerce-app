import { css } from "styled-components"


export const midscreen = (props) => {

    return css `
        @media only screen and (max-width:1050px){
            ${props}
        }
    `;
    
    };


export const mobile = (props) => {

return css `
    @media only screen and (max-width:450px){
        ${props}
    }
`;

};
