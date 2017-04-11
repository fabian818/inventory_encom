class Product < ApplicationRecord
    before_validation :set_columns
    after_validation :set_round
    validates :name, presence: {message: 'El producto debe tener un nombre'}
    validates :cost, numericality: {message: 'El costo debe ser numérico'}
    validates :quantity, numericality: {message: 'La cantidad debe ser numérica y entera', only_integer: true}

    def set_columns
        self.price ||= 0
        self.cost ||= 0
        self.quantity ||= 1
    end

    def set_round
        self.price = self.price.round(2)
        self.cost = self.cost.round(2)
    end
end
