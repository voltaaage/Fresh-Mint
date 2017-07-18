Rails.application.routes.draw do
  get '*path', to: 'application#client'
  root 'application#client'
  resources :home, only: :index
  resources :imports
end
