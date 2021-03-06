Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'static_pages#root'
namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :favorites, only: [:create, :destroy]
    resources :reservations, only: [:create, :index, :destroy, :update]
    resources :reviews, only: [:create, :index, :destroy, :update]

    get "search", to: "restaurants#search"
  end
end
