import React, {useEffect, useState} from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";


const Create = (props) => {


    const [form, setForm] = useState({
        name: "",
        image: "",
        chests: null,
        phrase: "",
        position: "Captain",
        pegleg: true,
        eyepatch: true,
        hookhand: true
    }); 

    const [error, setError] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/pirates/create', form)
            .then((res)=> {
                console.log(res)
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setError(err.response.data.err.errors);
            })
    }
    
    

    return(
        <div>
        <div className="Header d-flex justify-content-around w-100">
            <h1 className="headertext">Add New Pirate</h1>
            <Link to={`/`} className="btn btn-lg btn-primary my-auto">View Crew</Link>
        </div>
        <div>
        <form className="mx-auto w-50" onSubmit={onSubmitHandler}>

            <label htmlFor="name">Name: </label><br/>
            <input type="text" name="name" className="form-control w-50 mx-auto" onChange={onChangeHandler} value={form.name}/>
            {
                error.name ?
                <div className="alert alert-danger w-25 mx-auto">{error.name.message}</div>
                : ""
            }

            <label htmlFor="image">Image URL: </label><br/>
            <input type="text" name="image" className="form-control w-50 mx-auto" onChange={onChangeHandler} value={form.image}/>
            {
                error.image ?
                <div className="alert alert-danger w-25 mx-auto">{error.image.message}</div>
                : ""
            }

            <label htmlFor="chests">Number of Chests: </label><br/>
            <input type="number" name="chests" className="form-control w-25 mx-auto" onChange={onChangeHandler} value={form.chests}/>
            {
                error.chests ?
                <div className="alert alert-danger w-25 mx-auto">{error.chests.message}</div>
                : ""
            }

            <label htmlFor="phrase">Pirate Catch Phrase: </label><br/>
            <input type="text" name="phrase" className="form-control w-50 mx-auto" onChange={onChangeHandler} value={form.phrase}/>
            {
                error.phrase ?
                <div className="alert alert-danger w-25 mx-auto">{error.phrase.message}</div>
                : ""
            }

            <label htmlFor="position">Position: </label><br/>
            <select name="position" className="form-control w-50 mx-auto" onChange={onChangeHandler}>
                <option value="Captain">Captain</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
            </select>
            {
                error.position ?
                <div className="alert alert-danger w-25 mx-auto">{error.position.message}</div>
                : ""
            }

            <label htmlFor="pegleg" className="form-check-label">Peg Leg </label><br/>
            <input type="checkbox" name="pegleg" className="form-check-input" onChange={onChangeHandler} checked={form.pegleg}/>
            {
                error.pegleg ?
                <div className="alert alert-danger w-25 mx-auto">{error.pegleg.message}</div>
                : ""
            }
            <br />
            <label htmlFor="eyepatch" className="form-check-label">Eye Patch</label><br/>
            <input type="checkbox" name="eyepatch" className="form-check-input" onChange={onChangeHandler} checked={form.eyepatch}/>
            {
                error.eyepatch ?
                <div className="alert alert-danger w-25 mx-auto">{error.eyepatch.message}</div>
                : ""
            }
            <br />

            <label htmlFor="hookhand" className="form-check-label">Hook Hand</label><br/>
            <input type="checkbox" name="hookhand" className="form-check-input" onChange={onChangeHandler} checked={form.hookhand}/>
            {
                error.hookhand ?
                <div className="alert alert-danger w-25 mx-auto">{error.hookhand.message}</div>
                : ""
            }
            <br />
        
            <Link to={`/`} className="btn btn-sm btn-primary me-5">Cancel</Link>
            <input type="submit" className='btn btn-sm btn-primary'/>
        </form>
        </div>
        </div>
    )
}

export default Create;