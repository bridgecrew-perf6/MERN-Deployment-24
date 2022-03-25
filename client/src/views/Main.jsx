import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = (props) => {
    const [pirates, setPirates] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/findAll")
        .then(res=>{
            console.log(res);
            setPirates(res.data)
        })
        .catch(err=> {
            console.log(err.response)
        })
    }, [pirates])

    const onDeleteHandler = (_id, arrIndex) =>{
        // console.log("deleting" + _id)
        if(window.confirm("Are you sure you want to delete this pirate?")){
        axios.delete(`http://localhost:8000/api/pirates/${_id}`)
            .then(res=>{
                console.log(res);
                const copyState = [...pirates];
                copyState.splice(arrIndex,1);
                setPirates(copyState);
            })
            .catch(err=>console.log(err.response))
        }
    }

    return(
        <div>
            <div class="Header d-flex justify-content-around w-100">
                <h1 className="headertext">Pirate Crew</h1>
                <Link to={`/pirates/create`} className="btn btn-lg btn-primary my-auto">Add New</Link>
            </div>
            <table className="table table-light w-75 mx-auto">
                <tbody>
                {
                    pirates.sort((a,b)=>a.name.localeCompare(b.name)).map((item,i)=>{

                        return <tr className="m-5" key={i}>
                            <td><img src={item.image} alt={item.name} /></td>
                            <td className="m-auto"><h3>{item.name}</h3></td>
                            <td className="m-auto"><Link to={`/pirates/${item._id}`} className="btn btn-sm btn-info">View Pirate</Link> | <button onClick={() => onDeleteHandler(item._id,i)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            </div>
    )
}

export default Main;