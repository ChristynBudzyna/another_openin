var Show = React.createClass({
getInitialState: function(){
 return {show:{}};
},
componentWillMount: function(){
  $.ajax({
    url: "anotheropenin.herokuapp.com/shows/" + window.location.href + ".json",
    dataType: 'json'
  }).done(function(response){
    this.setState({show:response});
  }.bind(this));
},
  render: function(){
    var show = this.state.show ? this.state.show : {};
      return(
      <div className="show-container">
        <div className="show-details">
          <div className="panel panel-default">
          <div className="panel-body">
          <h1>{show.title}</h1>
          <ul className="show-button-list">
            <li className="button-list-item">
              <a href={show.licensing_link}><button className="btn btn-default">Visit {show.licensing_company} for Licensing Information</button></a>
            </li>
            <li className="button-list-item">
              <button className="audio-preview-link btn btn-default" data-show-title={show.title}>Listen To Music From the Show</button>
              <button id="play-button" className="btn btn-default">play</button>
              <button id="pause-button" className="btn btn-default">pause</button>
              <button id="next-button" className="btn btn-default">next</button>
            </li>
          </ul>
          <p id="error-message">Sorry, Spotify does not have music for this show.</p>
          <hr/>

            <p>Composer: {show.composer} |
             Lyricist: {show.lyricist} |
             Librettist: {show.librettist}</p>
          <p> {show.description}</p>

        </div>
        <ul className="tags">
          <li className="tag"> {show.length}</li>
          <li className="tag">{show.show_type}</li>
          <li className="tag">{show.cast_size} cast</li>
          <li className="tag">{show.age_of_actors}</li>
        </ul>

        </div>
        </div>
      </div>
      )
  }
});