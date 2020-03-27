Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'home/vote_now'
  post 'home/create_post'
end
