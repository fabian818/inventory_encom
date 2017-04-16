object false

child :@products => :products do
    collection :@products
    attributes :id, :name, :cost, :price, :quantity, :category_id
    child(:category) do
        attributes :id, :name
    end
end

child :@categories => :categories do
  collection :@categories
  attributes :id, :name
end