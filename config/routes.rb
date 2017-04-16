Rails.application.routes.draw do
  default_url_options :host => "example.com"
  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'
  end

  namespace :api, defaults: { format: :json } do
    post 'products/create'
    get 'products/index'
    delete 'products/destroy'
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
