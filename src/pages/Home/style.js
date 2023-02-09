import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    section:first-child{
        width: 100%;
        height: 40%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    section:last-child{
        width: 100%;
        height: 60%;
        background: var(--veryDarkBlue);

        .todo-box{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 700px;


            .todo-header{
                justify-content: space-between;
                width: 100%;
                height: 20%;

                h1{
                    font-size: 2rem;
                    letter-spacing: .5rem;
                    color: var(--veryLightGray);
                }
            }
            .todo-add{
                width: 100%;
                height: 10%;

                .container-add{
                    height: 100%;
                    background: var(--veryDarkDesaturatedBlue);
                    border-radius: .5rem;
                    
                    .checkbox{
                        width: 15%;
                        height: 100%;
                    }

                    input{
                        width: 85%;
                        height: 90%;
                        margin: 1rem;
                        font-size: 1.5rem;
                        color: var(--veryLightGray);
                        background-color: transparent;
                    }
                }
            }
            .todos{
                width: 100%;
                height: 70%;
            }

        }
    }

`