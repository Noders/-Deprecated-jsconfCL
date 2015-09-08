var React = require('react');
require('./home.css');


var JSLogoSVG = React.createClass({
  render : function(){
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 650 650">
          <path d="m375.2 380.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
        </svg>
      </div>
    )
  }
});

var Inscribete = React.createClass({
  render:function(){
    return(
        <form className="form-horizontal">
          <div className="form-group form-group-lg">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <input className="form-control" type="text" placeholder="Inscríbete aquí"/>
              <a href="#" className="btn btn-large btnInscribir"> Inscríbete </a>
            </div>
          </div>
        </form>
    )
  }
})

var poweredBy = React.createClass({
  render: function(){
    return(
      <p className="site-slogan">Powered by <a href="http://www.noders.com" target="_blank"><img src="/assets/img/noders3-rectangle-150.png"/></a></p>
    )
  }
})
var Title = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 block display-table full-height">
        <div className="text-center display-cell">
          <div className="text-center">
            <h1 className="site-name">#SeViene</h1>
            <h2 className="site-desc"><span className="event">JSConf CL</span><span className="date">2016</span></h2>
            <div className="col-xs-6 col-xs-offset-3">
            <hr/>
          </div>
           <Inscribete/>
          </div>
         
        </div>
      </div>
    );
  }
});


module.exports =  
React.createClass({
  render: function() {
        return (
          <div>
            <Title/>
          </div>
        );
  }
});