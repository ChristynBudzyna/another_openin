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
      return(<div className="show-container">
          <p>{show.title}</p>
          <p>Composer: {show.composer}</p>
          <p>Lyricist: {show.lyricist}</p>
          <p>Librettist: {show.librettist}</p>
          <p>Description: {show.description}</p>
      </div>
      )
  }
});