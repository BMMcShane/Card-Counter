class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      # t.integer :profile_id
      t.string :card_name
      t.string :customization_info
      t.belongs_to :profile, null: false, foreign_key: true


      t.timestamps
    end
  end
end
