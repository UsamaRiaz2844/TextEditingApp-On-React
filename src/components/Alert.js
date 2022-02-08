import React  from 'react'

function Alert(props) {
const capitilize = (word)=>{
        let lower = word.toLowerCase(); 
        return lower.charAt(0).toUpperCase() + lower.slice(1);
}



  return ( 
   
    
  
    <div className='container' style={{height:'40px'}}>
     { props.alert &&
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
     <strong> {capitilize(props.alert.type)} : {capitilize(props.alert.message)}</strong>  
</div> }
    </div>
  )
}

export default Alert
