class CreateAccepts < ActiveRecord::Migration[7.0]
  def change
    create_table :accepts do |t|
      # t.integer :notification_id
      t.integer :friend_id
      t.belongs_to :notification, null: false, foreign_key: true


      t.timestamps
    end
  end
end
