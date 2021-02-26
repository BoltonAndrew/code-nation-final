import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { searchUsers} from '../../utils';


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
    const [searchText, setSearchText] = useState("")
    const [userList, setUserList] = useState([])

    const handleSubmit =  (event) => {
        event.preventDefault();

        if(searchText === "") {
        } else {findUsers()}
    }

    const handleChange = (e) => {
        setSearchText(`${e.target.value}`)
    }

    useEffect(()=>{}, [searchText])

    const findUsers = async () => {
        const response = await searchUsers(searchText)
        setUserList(response.userList)
    }
    const handleClick = async (e) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/addfriend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                       'Authorization': `Bearer ${localStorage.getItem('MyToken')}`},
            body: JSON.stringify({
                userName: userList[e.target.value],
            }),
        });
        const data = await response.json()
        console.log(data)
    }
    return(
        <StyledDiv>
            <form onSubmit={handleSubmit}>
                <input value={searchText} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Search</button>
            </form>
            <div className="results">
            {userList.map((u, index)=>{
                return (
                    <div key={index+1999} className="row-wrap">
                        <p key={index}>{u}</p>
                        <button key={index + 999} value={index} onClick={(e) => handleClick(e)}>Add Friend</button>
                    </div>
                )
                })}
            </div>
        </StyledDiv>
    )
}

export default AddFriend