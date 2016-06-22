var ShowPreview = React.createClass({
  render: function(){
  return( <div className="show-profile-container">
            <div className="panel panel-default show-panel">
              <div className="panel-heading show-panel-headings">
                <a href={"/shows/" + this.props.data.id}>{this.props.data.title}</a>
              </div>
              <div className="panel-body">
              <p>{this.props.data.description}</p>
              <a href={"/shows/" + this.props.data.id}><button className="btn btn-default">Learn More</button></a>
              </div>
            </div>
          </div>)
  }
})
