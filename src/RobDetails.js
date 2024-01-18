import App from "./App";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function RobDetails() {
    const [robot, setRobo] = useState({});
    const param = useParams();
    const nav = useNavigate();

    useEffect(() => {
        fetch("https://64dcce83e64a8525a0f72b97.mockapi.io/students/" + param.id)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setRobo(res);
            });
    });

    return (
        <>
            <div>
                {robot.ID}
                <br />
                {robot.fullName}
                <br />
                <button onClick={() => {
                    fetch("https://64dcce83e64a8525a0f72b97.mockapi.io/students/" + param.id,
                        { method: "DELETE" })
                        .then(res => nav("/")).then();
                }}>DELETE</button>
                <button onClick={() => {
                    nav('/EditRobo/' + param.id);
                }}>EDIT</button>
            </div >
        </>
    )
}

export default RobDetails;