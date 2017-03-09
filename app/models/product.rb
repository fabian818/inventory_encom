class Product < ApplicationRecord
    before_validation :set_columns
    validates :name, presence: {message: 'El producto debe tener un nombre'}
    def set_columns
        self.price ||= 0
        self.cost ||= 0
        self.quantity ||= 1
    end
end
