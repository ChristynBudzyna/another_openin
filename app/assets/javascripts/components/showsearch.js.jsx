var ShowSearch = React.createClass({
  render:function() {
    return (
      <form action="/shows/search" method="get">
       <h2>preferred cast size</h2>
  <fieldset>
    <label className="radio-inline" value="small"><input type="radio" name="cast_size" value="small" />small</label>
    <label className="radio-inline"><input type="radio" name="cast_size" value="medium" />
      medium</label>
    <label className="radio-inline"><input type="radio" name="cast_size" value="large"/>
      large</label>
  </fieldset>

 <h2>preferred show length</h2>
  <fieldset>
    <label className="radio-inline"><input type="radio" name="length" value="full-length"/>
      full length</label>
    <label className="radio-inline"><input type="radio" name="length" value="one-act"/>
      one act</label>
   <label className="radio-inline"><input type="radio" name="length" value="ten-minute"/>
      ten minute</label>
  </fieldset>

 <h2>book musical or revue?</h2>
 <fieldset>
    <label className="radio-inline"><input type="radio" name="show_type" value="book musical"/>
      book musical</label>
    <label className="radio-inline"><input type="radio" name="show_type" value="revue"/>
      revue</label>
  </fieldset>

 <h2>age of actors</h2>
 <fieldset>
    <label className="radio-inline"><input type="radio" name="age_of_actors" value="children"/>
      children</label>
    <label className="radio-inline"><input type="radio" name="age_of_actors" value="adults"/>
      adults</label>
  </fieldset>

 <h2>musical genre</h2>
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

   <h2>dance heavy?</h2>
  <fieldset>
   <label className="radio-inline"><input type="radio" name="dance_heavy" value="true"/>
      yes</label>
    <label className="radio-inline"><input type="radio" name="dance_heavy" value="false"/>
    no</label>
  </fieldset>

   <input type="submit" value="find my next show" className="btn btn-default"/>
      </form>
      )
  }
})