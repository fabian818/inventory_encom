Rails.application.routes.draw do
  default_url_options :host => "example.com"
  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'
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
