var ShowList = React.createClass({
getInitialState: function(){
 return {showList: []};
},
componentWillMount: function(){
  $.ajax({
    url:'http://localhost:3000/shows.json',
    dataType: 'json'
  }).done(function(response){
    console.log(response);
    this.setState({showList: response})
  }.bind(this));
},
  render: function(){
    var showList = this.state.showList ? this.state.showList : [];
      return(<div>
        <ul>
          {showList.map(function(show){
            return <ShowPreview data={show} key={show.id} />
          })}
        </ul>
        </div>
      )
  }
});