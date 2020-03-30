class AddMobileNumberToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :mobile_number, :string
    add_index :users, :mobile_number, unique: true
  end
end
