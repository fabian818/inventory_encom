require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Inventary
    class Application < Rails::Application
        config.middleware.use Rack::Cors do
            allow do
                origins '*'
                resource '*',
                :headers => :any,
                :expose  => ['access-token', 'expiry', 'token-type', 'uid', 'client'],
                :methods => [:get, :post, :options, :delete, :put]
            end
        end
    end
end
