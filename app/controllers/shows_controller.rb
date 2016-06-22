class ShowsController < ApplicationController

def index
  @shows = Show.order(:title)
end

def show
  @show = Show.find_by(id: params[:id])
end

def search
  cast_size = params[:cast_size]
  length = params[:length]
  show_type = params[:show_type]
  age_of_actors = params[:age_of_actors]
  music_genre = params[:music_genre]
  dance_heavy = params[:dance_heavy]

 @search_results = Show.where(cast_size: cast_size, length: length, show_type: show_type, age_of_actors: age_of_actors, music_genre: music_genre, dance_heavy: dance_heavy)
  render :template => 'shows/results'
end

end
