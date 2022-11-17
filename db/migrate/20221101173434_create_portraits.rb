class CreatePortraits < ActiveRecord::Migration[7.0]
  def change
    create_table :portraits do |t|
      # t.integer :profile_id
      t.string :img_url
      t.belongs_to :profile, null: false, foreign_key: true

      t.timestamps
    end
  end
end
