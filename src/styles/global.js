import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Primary
        --brightBlue: hsl(220, 98%, 61%);
        --background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

        //Neutral

        //Light Mode
        --veryLightGray: hsl(0, 0%, 98%);
        --veryLightGrayishBlue: hsl(236, 33%, 92%);
        -lightGrayishBlue: hsl(233, 11%, 84%);
        --darkGrayishBlue: hsl(236, 9%, 61%);
        
        //Dark Mode
        --veryDarkBlue: hsl(235, 21%, 11%);
        --veryDarkDesaturatedBlue: hsl(235, 24%, 19%);
        --lightGrayishBlue: hsl(234, 39%, 85%);
        --lightGrayishBlueHover: hsl(236, 33%, 92%); //hover
        --darkGrayishBlue: hsl(234, 11%, 52%);
        --veryDarkGrayishBlue: hsl(233, 14%, 35%);
        --veryDarkGrayishBlue2: hsl(237, 14%, 26%);
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: 0;
        text-decoration: none;
        list-style-type: none;
    }
    html {
        font-size: 18px;

        @media screen {
            @media (max-width: 1000px){
                font-size: 93.75%; // 15px
            }
            @media (max-width: 720px){
                font-size: 87.5%; // 14px
            }
        }
    }
    body {
        //background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, button, texarea, input {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong, button{font-weight: 700; background: none;}
    button {cursor: pointer;}
    //a{color: var(--black)}
    [disable] {opacity: 0.6%; cursor: not-allowed;}

    .center {
        display: flex;
        width: 1440px;
        height: auto;
        margin: 0 auto;
    }
    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`