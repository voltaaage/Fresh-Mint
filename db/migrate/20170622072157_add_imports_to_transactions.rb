class AddImportsToTransactions < ActiveRecord::Migration[5.1]
  def change
    add_reference :transactions, :import, foreign_key: true
  end
end
