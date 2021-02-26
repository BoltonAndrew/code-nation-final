import react from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
height: 100vh;
width:100%;
background-color: #E5E9F8;
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;

form {
    margin-top:20px;
    height:5%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    input {
        width:70%;
        height:90%;
        margin-right: 5px;
        border-radius: 15px;
        background-color: rgba(255,255,255, 0.6);
        border:none;
        box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);

    }
    button {
        height: 90%;
        width:17%;
        border-radius: 15px;
        border:none;
        background-color: rgba(106, 97, 171, 0.5);
        box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);


    }
    button:hover {
    background-color: rgba(106, 97, 171, 0.7);
}
    button:active {
        background-color: rgba(106, 97, 171, 1);
    }

}
.results {
    margin-top:20px;
    height: 85%;
    width:90%;
    border-radius: 20px;
    background-color: rgba(255,255,255, 0.6);
    box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);

}

`



const AddFriend = ({ user }) => {
    
    return(
        <StyledDiv>
            <form>
                <input>
                
                </input>
                <button>Search</button>
            </form>
            <div className="results">

            </div>
        </StyledDiv>
    )
}

export default AddFriend