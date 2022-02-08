import { buildQueries } from '@testing-library/react'
import React , {useState} from 'react'


export default function About(props) {
    // const [myStyle , setMyStyle] = useState({
    //     backgroundColor : 'white',
    //     color : 'black'
        
    // })
    
const aboutdark ={
  color : props.mode === 'dark' ? 'white' : "#0a2b4c" ,
  backgroundColor: props.mode === 'light' ? 'white' : "#0a2b4c",
  border: '1px solid white'
}


    // let darkmode = ()=>{
    //     if (myStyle.color === 'black'){
    //         setMyStyle({
    //             backgroundColor : 'black',
    //         color : 'white' ,
    //         border : '1px solid white',
           
    //         })
    //         setBtnTxt("Enable Light Mode")
    //     }else{
    //         setMyStyle({
    //             backgroundColor : 'white',
    //         color : 'black'
    //         })
    //         setBtnTxt("Enable Dark Mode")
    //     }
        
    // }
  return (
   <>
    <div className='container my-5'  >
        <br />
        <h1 style={aboutdark}>About Us</h1>
      <div id="accordion" style={aboutdark}>
  <div className="card" style={aboutdark} >
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button  className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          About Us 
        </button>
      </h5>
    </div>

    <div  style={aboutdark} id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card" style={aboutdark}>
    <div className="card-header"  id="headingTwo">
      <h5 className="mb-0">
        <button className="btn  collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         About This Tool 
        </button>
      </h5>
    </div>
    <div style={aboutdark}  id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card"  style={aboutdark}>
    <div style={aboutdark} className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn  collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Compatible With Your Browser
        </button>
      </h5>
    </div>
    <div style={aboutdark} id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body" >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
<br />
    </div>

{/* <div className="container my-4">
<button className="btn btn-danger" onClick={darkmode}>{btntxt}</button>
</div> */}
    </>
  )
}
