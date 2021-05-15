import React from 'react'
import Home from '../components/Home'
import '../styles/main.css'
import { lista } from '../assets/lista'

class Propiedades extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
      return (
          <div className="contenedor">
              <Home 
                    title={"Casas en Bolivia"} 
                    data={lista} 
                    valueSearch={this.props.valueSearch}/>
          </div>
      )
  }
}

export default Propiedades
