import React from 'react'
import Logo from '../components/Logo';
import Filter from '../components/Filter'
import '../styles/main.css'

class Header extends React.Component{
  constructor(props){
     super(props);
     this.eventOnChange=this.eventOnChange.bind(this);
  }

  eventOnChange(event) {
     console.log("evento Header: ", event);
     // this.setState({ valueSearch: event });
     // console.log("evento Header2: ", this.state.valueSearch);
    this.props.OnClickButton(event);
  }
  
  render(){
     return (
        <div className="contenedor">
           <div className="contenedor-header">
              <Logo />
              <Filter clickButton={e => this.eventOnChange(e)} 
                      />
           </div>
        </div>
     )
  }
}

export default Header
