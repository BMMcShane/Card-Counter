class CreatePings < ActiveRecord::Migration[7.0]
  def change
    create_table :pings do |t|
      # t.integer :notification_id
      t.integer :collector_id
      t.integer :card_id
      t.belongs_to :notification, null: false, foreign_key: true


      t.timestamps
    end
  end
end
