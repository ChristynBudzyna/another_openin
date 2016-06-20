Rails.application.routes.draw do

 get    'searches'   => 'searches#index'
 root 'welcome#index'

get "/shows/search" => "shows#search"

  resources :users, only: [:new, :create, :show]
  resources :shows, only: [:index, :show]
  resources :favorites, only: [:create, :destroy]

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

end
