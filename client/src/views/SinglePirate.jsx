import React, { useState, useEffect  } from "react";
import { useParams, Link, useHistory} from "react-router-dom";
import axios from "axios";


const SinglePirate = (props) => {
    const {_id} = useParams();
    const [pirate, setPirate] = useState({});
    const history = useHistory();
    const[updated, setUpdated] = useState(false)

    useEffect(()=> {
        axios.get("http://localhost:8000/api/pirates/" + _id)
            .then(res=>{
                console.log(res);
                setPirate(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [updated])

    const onDeleteHandler = () => {
        if(window.confirm("Are you sure you want to delete this pirate?")){
            axios.delete(`http://localhost:8000/api/pirates/${_id}`)
            .then(res=>{
                history.push("/");
            })
            .catch(err=>console.log(err.response));
        }
    }
        
    const peglegHandler = () => {
        console.log("button clicked")
        if(pirate.pegleg) {
            const data = {
                pegleg : false
            }
            //make a patch request to update a pirate
            axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, data)
            .then((res)=> {
                console.log(res)
                updated ? setUpdated(false) : setUpdated(true)
            })
            .catch(err=>{
            console.log(err.response.data.err.errors);
            })
        }
        else{
            const data = {
                pegleg : true
            }
            //make a patch request to update a pirate
            axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, data)
            .then((res)=> {
                console.log(res)
                updated ? setUpdated(false) : setUpdated(true)
            })
            .catch(err=>{
            console.log(err.response.data.err.errors);
            })
        }
    }

    const eyepatchHandler = () => {
        console.log("button clicked")
        if(pirate.eyepatch) {
            const data = {
                eyepatch : false
            }
            //make a patch request to update a pirate
            axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, data)
            .then((res)=> {
                console.log(res)
                updated ? setUpdated(false) : setUpdated(true)
            })
            .catch(err=>{
            console.log(err.response.data.err.errors);
            })
        }
        else{
            const data = {
                eyepatch : true
            }
            //make a patch request to update a pirate
            axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, data)
            .then((res)=> {
                console.log(res)
                updated ? setUpdated(false) : setUpdated(true)
            })
            .catch(err=>{
            console.log(err.response.data.err.errors);
            })
        }
    }

    const hookhandHandler = () => {
        console.log("button clicked")
        if(pirate.hookhand) {
            const data = {
                hookhand : false
            }
            //make a patch request to update a pirate
            axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, data)
            .then((res)=> {
                console.log(res)
                updated ? setUpdated(false) : setUpdated(true)
            })
            .catch(err=>{
            console.log(err.response.data.err.errors);
            })
        }
        else{
            const data = {
                hookhand : true
            }
            //make a patch request to update a pirate
            axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, data)
            .then((res)=> {
                console.log(res)
                updated ? setUpdated(false) : setUpdated(true)
            })
            .catch(err=>{
            console.log(err.response.data.err.errors);
            })
        }
    }

    return(
        <div>
            <div className="Header d-flex justify-content-around w-100">
            <h1 className="headertext">{pirate.name}</h1>
            <Link to={`/`} className="btn btn-lg btn-primary my-auto">View Crew</Link>
            </div>
            <div className="container">
                <div className="column1">
                    <img className="singleimg" src={pirate.image} alt="picture of pirate" />
                    <h2>"{pirate.phrase}"</h2>
                </div>

                <div className="column2">
                    <h1>About</h1>
                    <p>Position: {pirate.position}</p>
                    <p>Treasures: {pirate.chests}</p>
                    <p>Peg Leg: {pirate.pegleg ? "Yes" : "No"}</p>
                    {
                        pirate.pegleg ? <button onClick={peglegHandler}> No </button> : <button onClick={peglegHandler}>Yes</button>
                    }
                    <p>Eye Patch: {pirate.eyepatch ? "Yes" : "No"}</p>
                    {
                        pirate.eyepatch ? <button onClick={eyepatchHandler}>No</button> : <button onClick={eyepatchHandler}>Yes</button>
                    }
                    <p>Hook Hand: {pirate.hookhand ? "Yes" : "No"}</p>
                    {
                        pirate.hookhand ? <button onClick={hookhandHandler}>No</button> : <button onClick={hookhandHandler}>Yes</button>
                    }
                </div>
            </div>
            {/* <Link className="btn btn-danger btn-lg m-3" onClick={onDeleteHandler}>Delete</Link> */}
            {/* <Link className="btn btn-primary btn-lg m-3" to={`/`}>Back</Link> */}
            <h2></h2>
        </div>
    )
}

export default SinglePirate;