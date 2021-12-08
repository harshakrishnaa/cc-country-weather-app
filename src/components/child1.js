import React from "react";

class Child1 extends React.Component {

  constructor() {
        super();
        this.state = {
          value:false
        }
    }
  
 handleChange(e) {
  const value={[e.target.name]: e.target.value};
  console.log(value['country'].length+"=="+value);
  if (value['country'].length>1)
         this.setState({value : true})
  else
    this.setState({value : false})
    }

render(){
    return(
      <div className="login-wrapper">
      <h1>Enter the city name</h1>
    <form action="http://localhost:3000/Child2" method="GET">
      <input type="text" onChange={(e) => this.handleChange(e)} name="country" placeholder="Country..." required/>
      <button type="submit" disabled={!this.state.value}> Get Weather</button>
    </form>
    </div>
  )
}
}

export default Child1;