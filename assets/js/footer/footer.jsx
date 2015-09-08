var React = require('react');
var Home = require('../home/home.jsx');
require('./footer.css');

var Footer = React.createClass({
  render : function(){
    return  (
      <div className="footer">
        <div className="col-xs-12">
          <div className="caption">
            <h3 className="text-center">
              <h5 className="text-center">Hecho posible por:</h5>
              <ul className="list-inline social-links text-center">
                <li className="icon twitter"><a href="https://www.twitter.com/fforres" target="_blank"><i className="fa fa-fw fa-twitter"></i><p>fforres</p></a></li>
                <li className="icon itunes"><a href="https://itunes.apple.com/cl/podcast/id1009061967" target="_blank"><i className="fa fa-fw fa-microphone"></i><p>NodersCast</p></a></li>
                <li className="icon twitter"><a href="https://www.twitter.com/noders" target="_blank"><i className="fa fa-fw fa-twitter"></i><p>Noders</p></a></li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Footer;
