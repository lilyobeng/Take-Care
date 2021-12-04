import React from "react";
import { getQuote } from '../../service/Journals'
import './Affirmation.css'


class Affirmation extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { 
        affirmation: '',
      }
  
      
    }
  
    handleClick = async () => {
      let res = await getQuote();
      this.setState({ affirmation: res.data.affirmation });
    }
  
  
    render() {
  
      return (
        <div className='outer-div'>
          <div>
           <img src="https://i.pinimg.com/originals/7a/2b/64/7a2b641ac486a085c94fbe3d55df4e40.jpg" className="card-img-top" alt="..."></img>
           </div>
           <div className="">
          <div className="quote">
          { this.state.affirmation }
          </div>
          </div>
          <button  onClick={this.handleClick}>Next Affirmation</button>
          </div>
      );
    }
}
  
  export default Affirmation;