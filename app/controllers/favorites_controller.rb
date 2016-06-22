class FavoritesController < ApplicationController

def create
 favorite = Favorite.find_or_create_by(user_id: current_user.id, show_id: params[:show_id])
 show = Show.find_by(id: params[:show_id])
 redirect_to user_path(current_user.id)
end

def destroy
  @show = Show.find_by(id: params[:favorite][:show_id])
  @favorite = Favorite.find_by(user_id:current_user.id, show_id: @show.id)
  @favorite.destroy
  redirect_to show_path(@show)
end

end
