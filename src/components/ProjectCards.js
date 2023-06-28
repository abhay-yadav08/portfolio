import React from 'react'
import { Col } from "react-bootstrap"

// export default function ProjectCards({ title, description, imgUrl }) {
//   return (
//     <div>
      

//       <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>


//     </div>
//   )
// }


export default function ProjectCards(props) {
    return (
      <div>
        
  
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={props.imgUrl} />
          <div className="proj-txtx">
            <h4>{props.title}</h4>
            <span>{props.description}</span>
          </div>
        </div>
      </Col>
  
  
      </div>
    )
  }
