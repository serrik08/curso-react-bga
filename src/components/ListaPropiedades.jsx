import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'



// const ListaPropiedades = props => {
//   console.log("123123",props.data)
//   console.log("Filtrado: ",
//     props.data.
//       filter(data => data.beds >= 2)
//     )
//   console.log("Filtrado 2 : ",
//     props.data.
//       filter(data => data.city.indexOf('u') >= 0)
//     )
//   return (
//     <div className="lista-propiedades">
//       {
//         props.data
//           .filter(data => data.city.indexOf('u') >= 0)
//           .map((element,key) => {
//             return(
//               <Propiedad data={element} key={key} />
//             )
//           })
         
//       }

        
//     </div>
//   )
// }

class ListaPropiedades extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <div className="lista-propiedades">
              {
                  
                  this.props.data.map((element, key) => {
                    console.log(this.props.dataSearch);
                      
                              if (this.props.dataSearch) {
                                  if (element.city.includes(this.props.dataSearch) ||
                                      element.title.includes(this.props.dataSearch) ||
                                      element.rating==this.props.dataSearch ||
                                      element.maxGuests==this.props.dataSearch ||
                                      element.type.includes(this.props.dataSearch) ||
                                      element.beds==this.props.dataSearch
                                  ) {
                                      return (
                                          <Propiedad data={element} key={key} />
                                      )
                                  }
                              } else {
                                  return (
                                      <Propiedad data={element} key={key} />
                                  )
                              }
                          

                      
                  })
              }
          </div>
      )

  }
}


export default ListaPropiedades
