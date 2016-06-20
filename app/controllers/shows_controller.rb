class ShowsController < ApplicationController

def index
  @shows = Show.all
end

def show
  @show = Show.find_by(id: params[:id])
end

def search
  binding.pry
  params[:good_for_college] = false
  params[:good_for_high_school] = false
  params[:good_for_elementary_school] = false

  @search_results = Show.where(cast_size: params[:cast_size], length: params[:length], show_type: params[:show_type], good_for_elementary_school: params[:good_for_elementary_school], good_for_high_school: params[:good_for_high_school], good_for_college: params[:good_for_college],music_genre: params[:music_genre], dance_heavy: params[:dance_heavy])
end

end
