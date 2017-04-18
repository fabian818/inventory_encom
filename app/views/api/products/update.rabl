object :@product
attributes :id, :name, :cost, :price, :quantity, :category_id
child(:category) do
    attributes :id, :name
end