class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      # t.integer :profile_id
      t.integer :kind
      t.belongs_to :profile, null: false, foreign_key: true


      t.timestamps
    end
  end
end
