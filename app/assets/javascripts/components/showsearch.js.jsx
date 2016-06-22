var ShowSearch = React.createClass({
  render:function() {
    return (
      <form action="/searches" method="get">
       <h3>preferred cast size</h3>
  <fieldset>
    <label className="radio-inline" value="small"><input type="radio" name="cast_size" value="small" />small</label>
    <label className="radio-inline"><input type="radio" name="cast_size" value="medium" />
      medium</label>
    <label className="radio-inline"><input type="radio" name="cast_size" value="large"/>
      large</label>
  </fieldset>

 <h3>preferred show length</h3
>
  <fieldset>
    <label className="radio-inline"><input type="radio" name="length" value="full-length"/>
      full length</label>
    <label className="radio-inline"><input type="radio" name="length" value="one-act"/>
      one act</label>
   <label className="radio-inline"><input type="radio" name="length" value="ten-minute"/>
      ten minute</label>
  </fieldset>

 <h3>book musical or revue?</h3
>
 <fieldset>
    <label className="radio-inline"><input type="radio" name="show_type" value="book musical"/>
      book musical</label>
    <label className="radio-inline"><input type="radio" name="show_type" value="revue"/>
      revue</label>
  </fieldset>

 <h3>age of actors</h3>
 <fieldset>
    <label className="radio-inline"><input type="radio" name="age_of_actors" value="children"/>
      children</label>
    <label className="radio-inline"><input type="radio" name="age_of_actors" value="adults"/>
      adults</label>
  </fieldset>

 <h3>musical genre</h3>
  <fieldset>
    <label className="radio-inline"><input type="radio" name="music_genre" value="classic musical theatre"/>
      classic musical theatre</label>
    <label className="radio-inline"><input type="radio" name="music_genre" value="contemporary musical theatre"/>
      contemporary musical theatre
      </label>
    <label className="radio-inline"><input type="radio" name="music_genre" value="pop/rock"/>
      pop/rock</label>
    <label className="radio-inline"><input type="radio" name="gender_balance" value="rap/hip hop"/>
      rap/hip hop</label>
    <label className="radio-inline"><input type="radio" name="gender_balance" value="operetta"/>
      operetta</label>
    <label className="radio-inline"><input type="radio" name="gender_balance" value="other"/>
      other</label>
  </fieldset>

   <h3>dance heavy?</h3>
  <fieldset>
   <label className="radio-inline"><input type="radio" name="dance_heavy" value="true"/>
      yes</label>
    <label className="radio-inline"><input type="radio" name="dance_heavy" value="false"/>
    no</label>
  </fieldset>
  <br/>
   <input type="submit" value="search" className="btn btn-default"/>
      </form>
      )
  }
})