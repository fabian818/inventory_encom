class Api::ProductsController < ApplicationController
    before_action :authenticate_api_user!
    def index
        @products = current_api_user.products.all
        render json: {products: @products}
    end

    def create
        @product = current_api_user.products.new(product_params)
        if @product.save
            render json: {product: @product, errors: nil}, status: 200
        else
            render json: {product: nil, errors: @product.errors.values.flatten}, status: 400
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
