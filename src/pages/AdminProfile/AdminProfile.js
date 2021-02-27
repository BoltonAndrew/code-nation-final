import react from "react";
import user2 from '../../images/user2.jpg';
import styled, { css } from "styled-components";
const flex = css`
display:flex;
justify-content: center;
align-items: center;
`
const StyledWrapper = styled.div`
height: 100vh;
width:100%;
${flex}
flex-direction: column;
background-color: #E5E9F8;


`
const StyledAvatar = styled.div`
    height: 30%;
    width: 100%;
    /* background-color:yellow; */
    ${flex}
    flex-direction: column;
    
    #profile {
        width:40%;
        height:60%;
        border-radius: 50%;
        background-image: url(${user2});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    h3 {
        text-shadow: 1px 1px 10px  rgba(0,0,0, 0.2);
    }
    hr {
        color: black;
        width: 90%;
    }


`
const StyledForm = styled.form`
    height: 55%;
    width: 100%;
    ${flex}
    flex-direction: column;

    .row {
        height: 100%;
        width: 100%;
        ${flex}
        justify-content:space-between;
        border-bottom: 1px solid rgba(0,0,0, 0.2);
        
        label {
            margin-left: 15px;
            height: 30px;
            font-weight: bold;
            text-shadow: 1px 1px 10px  rgba(0,0,0, 0.2);
            ${flex}
        }
        input {
            margin-right: 15px;
            height: 30%;
            border-radius: 5px;
            border:none;
            box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);

        }

    }
    .row:hover {
        background-color:rgba(106, 97, 171, 0.3);
        box-shadow:3px 3px 10px  rgba(0,0,0, 0.2) ;
    }
`
const StlyedButon = styled.div`
    height: 15%;
    width: 100%;
    ${flex}

    a {
    height: 40%;
    width:30%;
    color: #000;
    text-decoration:none;
    font-size: 0.7em;
    font-weight: bold;
    border-radius: 5px;
    background-color: rgba(106, 97, 171, 0.5);
    box-shadow: none;
    border: none;
    ${flex}
    margin:10px;
    }
    a:visited {
        color: #000;
    }
    a:hover {
    background-color: rgba(106, 97, 171, 0.7);
    }
    a:active {
        background-color: rgba(106, 97, 171, 1);
    }
`

const AdminProfile = () => {

return (
    <StyledWrapper>
        <StyledAvatar>
            <div id="profile"></div>
            <h3>USERNAME</h3>
            <hr/>
        </StyledAvatar>
        <StyledForm>
            <div className="row">
                <label for="username">User name</label>
                <input type="text" id="username" name="username"></input>
            </div>
            <div className="row">
                <label for="email">Email</label>
                <input type="email" id="email" name="email"></input>
            </div>
            <div className="row">
                <label for="pwd">Password</label>
                <input type="password" id="pwd" name="pwd"></input>
            </div>
            <div className="row">
                <label for="pwd">Password</label>
                <input type="password" id="pwd" name="pwd"></input>
            </div>
            <div className="row">
                <label for="username">First Name</label>
                <input type="text" id="firstname" name="firstname"></input>
            </div>
            <div className="row">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname"></input>
            </div>

        </StyledForm>
        <StlyedButon>
            <a href="#">UPDATE PROFILE</a>
            <a href="#">DELETE PROFILE</a>
        </StlyedButon>
    </StyledWrapper>
)
}

export default AdminProfile