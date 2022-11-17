Rails.application.routes.draw do
  resources :pings
  resources :accepts
  resources :requests
  resources :notifications
  resources :collected_cards
  resources :cards
  resources :friendships
  resources :portraits
  resources :links
  resources :profiles
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/self", to: "profiles#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
