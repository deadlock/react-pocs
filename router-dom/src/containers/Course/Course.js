import React from "react";
import queryString from "query-string";

const course = (props) => {
  // props.math.params = path params
  // props.location = query params
  const queryParams = queryString.parse(props.location.search);
  
  /*
  not so good
  const params = new URLSearchParams(props.location.search) // entries
   for(let param of params.entries()) {
       console.log(param);      
   }
  */

  return (
    <div>
      <h1>{queryParams.title}</h1>
      <p>You selected the Course with ID: {props.match.params.id} </p>
    </div>
  );
};

export default course;
