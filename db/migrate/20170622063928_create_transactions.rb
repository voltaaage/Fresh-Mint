class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.datetime :date
      t.string :description
      t.float :amount
      t.string :category
      t.string :original_description
      t.string :notes
      t.string :transaction_type

      t.timestamps
    end
  end
end
