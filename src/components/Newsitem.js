import React  from 'react'

const Newsitem =(props)=>{


    // let {title,description,imageurl,newsurl,author,date,source} = props;

    return (
      <div>

<div className="card">

  <div className="container"  style={ {display:'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: '0'}   }>
         <span class="badge rounded-pill bg-danger">{props.source}</span>
  </div>
  
  <img src={!props.imageurl ? "https://image.cnbcfm.com/api/v1/image/107076115-1656607245059-IMG_1969re.jpg?v=1695684932&w=1920&h=1080" : props.imageurl} className="card-img-top" alt="..."/>
     <div className="card-body" >
       <h5 className="card-title" >{props.title} </h5>
        <p className="card-text">{props.description}</p>
        <p className='card-text'><small className='text-muted'>By {props.author ? props.author:"undefined"} on {new Date(props.date).toGMTString()}</small> </p>
        <a href={props.newsurl} target='_blank' className="btn  btn-sm btn-primary">Read More</a>
  </div>
</div>
        
      </div>
    )
  }


export default Newsitem
