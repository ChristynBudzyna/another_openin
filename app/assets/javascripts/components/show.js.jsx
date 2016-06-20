var Show = React.createClass({
getInitialState: function(){
 return {show:{}};
},
componentWillMount: function(){
  $.ajax({
    url: window.location.href + ".json",
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
          <p>{show.title}</p>
          <p>Composer: {show.composer}</p>
          <p>Lyricist: {show.lyricist}</p>
          <p>Librettist: {show.librettist}</p>
          <p>Description: {show.description}</p>
        </div>
        <div>
        <button className="audio-preview-link" data-show-title={show.title}>sample the cast recording</button>
        <button id="play-button" className="button">play</button>
        <button id="pause-button" className="button">pause</button>
        <button id="next-button" className="button">next</button>
        </div>
      </div>
      )
  }
});