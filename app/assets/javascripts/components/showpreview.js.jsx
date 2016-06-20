
var ShowPreview = React.createClass({
  render: function(){
  return( <div className="show-profile-container">
          <p>{this.props.data.title}</p>
          <p>Composer: {this.props.data.composer}</p>
          <p>Lyricist: {this.props.data.lyricist}</p>
          <p>Librettist: {this.props.data.librettist}</p>
          <p>Description: {this.props.data.description}</p>

      </div>)
}

})
