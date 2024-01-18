import { useState } from "react";
import { json, Link } from "react-router-dom";

function AddRobo() {

    const [data, setData] = useState({});

    return (
        <>
            <br />
            Enter FullName -
            <input type="text" onChange={(e) => {
                setData({ ...data, fullName: e.target.value })
            }} />
            {/* <br />
            <br />
            Enter ImageURL -
            <input type="text" onChange={(e) => {
                setData({ ...data, image: e.target.value })
            }} /> */}
            <br />
            <br />
            Enter Discription -
            <input type="text" onChange={(e) => {
                setData({ ...data, discription: e.target.value })
            }} />
            <br />
            <br />
            <Link to="/" onClick={() => {
                fetch("https://64dcce83e64a8525a0f72b97.mockapi.io/students",
                    {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )
                    .then(res => res.json())
                    .then(res => setData(res));
            }}>SUBMIT</Link>
        </>
    )
}

export default AddRobo;