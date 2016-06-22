class Show < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites

def is_favorite?(current_user)
    !!self.favorites.find_by(user_id: current_user.id)
  end

end
