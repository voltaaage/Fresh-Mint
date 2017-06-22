class CreateImports < ActiveRecord::Migration[5.1]
  def change
    create_table :imports do |t|
      t.string :original_file
      t.string :processed_file

      t.timestamps
    end
  end
end
