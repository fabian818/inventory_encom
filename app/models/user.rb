class User < ActiveRecord::Base
    devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable, :omniauthable
    include DeviseTokenAuth::Concerns::User

    has_many :products
    has_many :categories

    after_create :create_category

    def create_category
        self.categories.create(name: 'Categoría general')
    end
end
