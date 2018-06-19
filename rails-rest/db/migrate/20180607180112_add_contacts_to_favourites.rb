class AddContactsToFavourites < ActiveRecord::Migration[5.1]
  def change
    add_reference :favourites, :contact, foreign_key: true
  end
end
