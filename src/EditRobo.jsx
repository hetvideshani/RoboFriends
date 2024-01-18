import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';


function EditRobo() {
    const [data, setData] = useState({});
    const param = useParams();

    useEffect(() => {
        fetch("https://64dcce83e64a8525a0f72b97.mockapi.io/students/" + param.id)
            .then(res => res.json())
            .then(res => setData(res));
    }, [])

    return (
        <>
            <br />
            Enter FullName -
            <input type="text" value={data.fullName} onChange={(e) => {
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
            <input type="text" value={data.discription} onChange={(e) => {
                setData({ ...data, discription: e.target.value })
            }} />
            <br />
            <br />
            <Link to="/" onClick={() => {
                fetch("https://64dcce83e64a8525a0f72b97.mockapi.io/students/" + param.id,
                    {
                        method: "PUT",
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

export default EditRobo;