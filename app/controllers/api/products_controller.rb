class Api::ProductsController < ApplicationController
    respond_to :json
    before_action :authenticate_api_user!
    before_action :set_product, only: [:update, :destroy]
    def index
        @products = current_api_user.products.order(created_at: :desc)
        @categories = current_api_user.categories
        # render json: {products: @products, categories: @categories}
    end

    def create
        @product = current_api_user.products.new(product_params)
        if @product.save
            respond_with(@product)
        else
            render json: {product: nil, errors: @product.errors.values.flatten}, status: 400
        end
    end

    def update
        if @product.update(product_params)            
            respond_with(@product)
        else
            product = Product.find(params[:id])
            render json: {product: product, errors: @product.errors.values.flatten}, status: 400
        end
    end

    def destroy
        @product.destroy
        render json: {destroyed: true}
    end

    private
    def set_product
        @product = Product.find(params[:id])
    end
    def product_params
        params.require(:product).permit(:name, :cost, :price, :quantity, :category_id)
    end
end
