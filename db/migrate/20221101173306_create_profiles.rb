class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      # t.integer :user_id
      t.string :name
      t.string :friend_code
      t.string :bio
      t.string :company
      t.string :job
      t.string :school
      t.string :email
      t.string :address
      t.string :phone_no
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
