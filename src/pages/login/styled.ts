import styled from "styled-components";

export const SignInStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width: 100vw;
    height: 100vh;

    .login-entrar {
       padding: 10px 20px;
    }
`

export const SignInBox = styled.div`
    background-color: #FFE79B;
    width: 400px;   
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


 

    .login-title{
        font-size: 1.8rem;
    }

    .form {
        margin-top: 10px;
    }




    .login-entrar{
        margin-top: 10px;
        border-radius: 8px;
        background-color: #93B5ED;
        color: #fff;
        transition: .3s ease;


        &:hover {
            cursor: pointer;
            background-color: #fff; 
            color: #93B5ED;
        }
    }

     .esqueci-a-senha {
            margin-top: 10px;
            
            a {
                text-decoration: none;
                color: #000;
                transition: .3s ease;

                &:hover{
                    color: #868686;
                }
            }
        }


       

    @media(max-width: 800px) {
        width: 80vw;
    }
`