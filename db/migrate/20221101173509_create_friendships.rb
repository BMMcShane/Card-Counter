class CreateFriendships < ActiveRecord::Migration[7.0]
  def change
    create_table :friendships do |t|
      # t.integer :profile_id
      t.integer :friend_id
      # t.string :name
      t.belongs_to :profile, null: false, foreign_key: true


      t.timestamps
    end
  end
end
