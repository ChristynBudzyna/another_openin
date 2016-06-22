Rails.application.routes.draw do

 get    'searches'   => 'searches#index'
 root 'welcome#index'

get "/shows/search" => "shows#search"

  resources :users, only: [:new, :create, :show]
  resources :shows, only: [:index, :show]
  resources :searches, only: [:new, :index]

  post '/favorite_show' => 'favorites#create', as: :favorite
  delete '/unfavorite_show' => 'favorites#destroy', as: :unfavorite

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

end
