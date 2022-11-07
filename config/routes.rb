Rails.application.routes.draw do
  root 'root#index'
  get 'api/v1/messages', to: 'api/v1/messages#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
