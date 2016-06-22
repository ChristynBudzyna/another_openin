var ShowPreview = React.createClass({
  render: function(){
  return( <div className="show-profile-container">
            <div className="panel panel-default show-panel">
              <div className="panel-heading show-panel-headings">
                <a href={"/shows/" + this.props.data.id}>{this.props.data.title}</a>
              </div>
              <div className="panel-body">
              <p>{this.props.data.description}</p>
                <ul className="tags">
                  <li className="tag"> {this.props.data.length}</li>
                  <li className="tag">{this.props.data.show_type}</li>
                  <li className="tag">{this.props.data.cast_size}</li>
                  <li className="tag">{this.props.data.age_of_actors}</li>
                </ul>
                <a href={"/shows/" + this.props.data.id}><button className="btn btn-default">Learn More</button></a>
              </div>
            </div>
          </div>)
  }
})
