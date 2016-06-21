var ShowSearch = React.createClass({
  render:function() {
    return (
      <form action="/shows/search" method="get">
       <h2>preferred cast size</h2>
  <fieldset>
    <input type="radio" name="cast_size" value="small" />
      small
    <input type="radio" name="cast_size" value="medium" />
      medium
    <input type="radio" name="cast_size" value="large"/>
      large
  </fieldset>

 <h2>preferred show length</h2>
  <fieldset>
    <input type="radio" name="length" value="full length"/>
      full length
    <input type="radio" name="length" value="one-act"/>
      one act
    <input type="radio" name="length" value="ten minute"/>
      ten minute
  </fieldset>

 <h2>book musical or revue?</h2>
 <fieldset>
    <input type="radio" name="show_type" value="book musical"/>
      book musical
    <input type="radio" name="show_type" value="revue"/>
      revue
  </fieldset>

 <h2>age of actors</h2>
 <fieldset>
    <input type="radio" name="age_of_actors" value="children"/>
      children
    <input type="radio" name="age_of_actors" value="adults"/>
      adults
  </fieldset>

 <h2>musical genre</h2>
  <fieldset>
    <input type="radio" name="music_genre" value="classic musical theatre"/>
      classic musical theatre
    <input type="radio" name="music_genre" value="contemporary musical theatre"/>
      contemporary musical theatre
    <input type="radio" name="music_genre" value="pop/rock"/>
      pop/rock
    <input type="radio" name="gender_balance" value="rap/hip hop"/>
      rap/hip hop
    <input type="radio" name="gender_balance" value="operetta"/>
      operetta
    <input type="radio" name="gender_balance" value="other"/>
      other
  </fieldset>

   <h2>dance heavy?</h2>
  <fieldset>
   <input type="radio" name="dance_heavy" value="true"/>
      yes
    <input type="radio" name="dance_heavy" value="false"/>
    no
  </fieldset>

   <input type="submit" value="find my next show" className="button"/>
      </form>
      )
  }
})