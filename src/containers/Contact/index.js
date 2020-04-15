import React from 'react';
import './../../styles/style.css';

let Contact = props => (
    
    <div className= "container" className="article">
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type = "text" className="form-control"></input>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label>Message:</label>
                <textarea class="form-control" rows="5" id="exampleInputMessage"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
)
export default Contact;