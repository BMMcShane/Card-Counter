class CreateLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :links do |t|
      # t.integer :profile_id
      t.string :url
      t.string :name
      t.string :description
      t.belongs_to :profile, null: false, foreign_key: true

      t.timestamps
    end
  end
end
