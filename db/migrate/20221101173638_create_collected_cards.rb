class CreateCollectedCards < ActiveRecord::Migration[7.0]
  def change
    create_table :collected_cards do |t|
      # t.integer :profile_id
      # t.integer :card_id
      t.belongs_to :profile, null: false, foreign_key: true
      t.belongs_to :card, null: false, foreign_key: true


      t.timestamps
    end
  end
end
