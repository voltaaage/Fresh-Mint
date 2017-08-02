Rails.application.routes.draw do
    get '*path', to: 'application#client', constraints: ->(req) { !req.xhr? }

  resources :home, only: :index
  resources :imports, only: [:index, :new, :create, :show]

  # get '*path', to: 'application#client'
  root 'application#client'
end
