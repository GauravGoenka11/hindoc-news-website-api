import React,{ useEffect, useState } from "react";



function Feature(props) {

  const y= JSON.parse(props.datas)
  var title=y.data.latestArticle[0].articleTitle;
  var title1=y.data.latestArticle[1].articleTitle;
  var title2=y.data.latestArticle[2].articleTitle;
  var title3=y.data.latestArticle[3].articleTitle;
  var title4=y.data.latestArticle[4].articleTitle;
 
  var img=y.data.trandingArticle[0].articleImg;
  var trendtitle=y.data.trandingArticle[0].articleTitle;

  var img2=y.data.trandingArticle[1].articleImg;
  var trendtitle2=y.data.trandingArticle[1].articleTitle;

  var exploreArticle=y.data.exploreArticle[0].articleTitle;
  var exploreArticle1=y.data.exploreArticle[1].articleTitle;
  var exploreArticle2=y.data.exploreArticle[2].articleTitle;

  
  

  return (
    <div id="features">
      <div className="row">
        <div className="col-4 card card-news ">
          <div class="card-body ">
            <h4 class="card-title">Latest News</h4>
          <hr class="card-hr"/>
          <ul >
            <li>
              {title}
            </li>
            <hr class="card-hr"/>
            <li >
            {title1}
            </li>
            <hr class="card-hr"/>
            <li >
            {title2}
              </li>
            <hr class="card-hr"/>
            <li >
            {title3}
            </li>
            <hr class="card-hr"/>
            <li >
            {title4}
            </li>
          </ul>
          </div>
        </div>

        <div className="col-4 card card-news">
          <div class="card-body">
            <h4 class="card-title">Trending News</h4>
            <hr class="card-hr"/>

            <ul >
              <li >
                <img class="card-img-top" src={img2} alt="Card image cap" />
              </li>
              <li > {trendtitle}</li>
              <hr class="card-hr"/>
              <div className="row">
              <img class="image-corner col-4" src={img2} alt="Card image cap" /> 
                 <li class="col-8">{trendtitle2}</li>
                 </div>
            </ul>
          </div>
        </div>

        <div className="col-4 card-news card card-third">
          <div class="card-body">
            <h4 class="card-title">Explore more in news</h4>
            <hr class="card-hr"/>
            <p class="card-text">
              {exploreArticle}
            </p>
            <hr class="card-hr"/>
            <p class="card-text">
              {exploreArticle1}
            </p>
            <hr class="card-hr"/>
            <p class="card-text">
              {exploreArticle2}
            </p>
          </div>
          

        </div>
        <button type="button" class="btn btn-primary btn-block btn-lg card-button">Explore Hindoc Dr.</button>

      </div>

    </div>
  );
}

export default Feature;
