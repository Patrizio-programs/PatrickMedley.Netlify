import React from 'react';
import ReactDOM from "react-dom";

export const page = () => {
  return (
    <div>Hello World</div>
  )
}


ReactDOM.render(<page />, document.getElementById('root'))