class CreateSayings < ActiveRecord::Migration
  def change
    create_table :sayings do |t|
      t.string :text
    end
  end
end
