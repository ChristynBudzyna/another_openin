Rails.application.routes.draw do

 get    'searches'   => 'searches#index'
 root 'welcome#index'

  resources :users, only: [:new, :create, :show]
  resources :shows, only: [:index, :show]

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

end
