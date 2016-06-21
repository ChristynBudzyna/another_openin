class ShowsController < ApplicationController

def index
  @shows = Show.all
end

def show
  @show = Show.find_by(id: params[:id])
end

def search
  cast_size = params[:cast_size]
  length = params[:length]
  show_type = params[:show_type]
  music_genre = params[:music_genre]

 @search_results = Show.where(cast_size: cast_size, length: length, show_type: show_type, music_genre: music_genre)
  render :template => 'shows/results'
end

end
