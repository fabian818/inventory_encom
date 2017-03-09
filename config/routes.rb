Rails.application.routes.draw do
  namespace :api do
    get 'products/index'
  end

  namespace :api do
    post 'products/create'
  end

  namespace :api do
    get 'products/update'
  end

  namespace :api do
    get 'products/destroy'
  end


  get '*path' => 'application#index'
  get '/' => 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
