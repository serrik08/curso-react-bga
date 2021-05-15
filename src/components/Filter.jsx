import React, {useState} from "react";
import "../styles/filter.css";
import imagenSearch from '../assets/search.svg'

// const Filter = ({props}) => {
//   function handleSearchBarChange(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }
//   return (
//     <div className="filter">
//         <div className="container-title">
//             <span className="title--filter">Buscador</span>
//             <input className="input-filter" type="text"
//                 placeholder="Ciudad"/>
//             <button onClick={handleSearchBarChange}>X</button>
//         </div>
//     </div>
//   );
// }
// export default Filter;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCriteria: "",location:"" };
  }

  render() {
    return (
      <div className="container-body-search">
        <div id="selectId" className="container-select">
          <span className="title--filter">Buscador</span>
        </div>
        <div id="inputId" className="container-select">
          <input className="container-search"
            type="text"
            width="100"
            height="100"
            onChange={e => this.setState({ dataCriteria: e.target.value })} />
        </div>
        <div id="buttonId" className="container-select">
          <a href="#"
            onClick={e => this.props.clickButton(this.state.dataCriteria)}
            placeholder="buscar...">
              <i className="fas fa-search"></i>buscar</a>
        </div>

      </div>
    )
  }
}

export default Filter
