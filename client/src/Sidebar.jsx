import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Sidebar = () =>{
    return <>
    <div className="col">
    <form>
  <div className="mb-3 p-3" >
    <label for="exampleInputEmail1" className="form-label">Field Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">Please enter the field to get filter out</div>
  </div>
  <button type="submit" className="btn btn-primary w-100 m-2 ">Filter</button>
</form>
    </div>
    </>
}