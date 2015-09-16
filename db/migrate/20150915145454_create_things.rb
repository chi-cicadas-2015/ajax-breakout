class CreateThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
      t.string :text
    end
  end
end
