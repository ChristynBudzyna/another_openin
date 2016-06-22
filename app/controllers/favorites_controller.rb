class FavoritesController < ApplicationController

def create
 favorite = Favorite.find_or_create_by(user_id: current_user.id, show_id: params[:show_id])
 show = Show.find_by(id: params[:show_id])
 redirect_to user_path(current_user.id)
end

end
