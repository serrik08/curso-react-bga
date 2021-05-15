import React from 'react'
import '../styles/main.css'
import { lista } from '../assets/lista'
import Header from './Header'
import Propiedades from './Propiedades'


class Body extends React.Component{
    constructor(props){
        super(props);
        this.state={valueSearch:'',valueSelect:""};
    }
    OnEventClick(value){
        console.log("evento Body: ", value);
      this.setState({valueSearch:value});
    }
    render(){
        return (
            <div className="contenedor">
                <Header OnClickButton={e=>this.OnEventClick(e)}/>
                <Propiedades data={lista} 
                             valueSearch={this.state.valueSearch}/>
            </div>
        )
    }
}

export default Body
