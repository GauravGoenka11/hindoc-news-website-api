import React from "react";

function Offer(props) {
  const y= JSON.parse(props.datas)
  var article=y.data.article.articleTitle;
  var description=y.data.article.articleDescription;
  var articleImg=y.data.article.articleImg;
  
  return (
    <div id="offer">
      <div>
        <h2>What's more on Hindoc Dr.</h2>
      </div>
      <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-4 background ">
              <h3>{article}</h3>
              <p>
                {description}
              </p>
            </div>
            <div className="col-4 img-padding">
              <img class="card-img" src={articleImg} />
            </div>
          </div>
        </div>
        <div className="col-4">
        <div class="card last-card" >
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fa-solid fa-question"></i><strong>  Quizzes : </strong> Play & win hindoc points</li>
              <li class="list-group-item"><i class="fa-solid fa-clipboard-list"></i><strong>   Surveys : </strong> Participate in surveys to earn extra points</li>
              <li class="list-group-item"><i class="fa-solid fa-calculator"></i><strong>   Medical Calculators : </strong> Tagline related Calculators</li>
            </ul>
          </div>
        </div>
        <div className="social-banner">
          <h3><strong>Social Network for doctors- A special feature on Hindoc Dr. </strong><button type="button" class="btn btn-primary btn-lg rounded-pill">Visit</button></h3>
            
        </div>
      </div>
    </div>
    </div>
  );
}

export default Offer;
