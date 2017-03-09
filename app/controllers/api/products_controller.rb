class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render json: {products: @products}
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render json: {product: @product, errors: nil}
        else
            render json: {product: nil, errors: @product.errors.values.flatten}
        end
    end

    def update
    end

    def destroy
    end

    private
    def product_params
        params.require(:product).permit(:name, :cost, :price, :quantity)
    end
end
