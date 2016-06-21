var ShowPreview = React.createClass({
  render: function(){
  return( <div className="show-profile-container">
          <p><a href={"/shows/" + this.props.data.id}>{this.props.data.title}</a></p>
          <p>Composer: {this.props.data.composer}</p>
          <p>Lyricist: {this.props.data.lyricist}</p>
          <p>Librettist: {this.props.data.librettist}</p>

      </div>)
}

})
