import React, { useEffect, useState } from 'react'

function Header(props) {

  // const[postId,setPostId]=useState();


 const x= JSON.parse(props.datas)
  var title=x.data.news[0].title;
  var description=x.data.news[0].description;
  var url=x.data.news[0].url;
  var img=x.data.news[0].urlToImage;


  return (
    <div id='main'>
      <div className="row">
        <div className="col-3">
      <div className="news-image">
        <img src={img} alt="" />
      </div>
      </div>
      <div className="col-9">
        <div className='name '>
            <h4 className='name-heading'><strong>News</strong></h4>
            <h3><strong>{title}</strong></h3>
            <p className='details'>{description}</p>

            <div >
                <a href={url}>Read full news</a>
            </div>
           
        </div>
        </div>
    </div>
    <hr/>
    </div>
  )
}

export default Header
