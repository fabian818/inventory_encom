class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
    # protect_from_forgery with: :exception


    def index
        render layout: 'application'
    end
end
