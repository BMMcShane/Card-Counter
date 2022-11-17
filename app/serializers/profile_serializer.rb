class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :friend_code, :bio, :company, :job, :school, :email, :address, :phone_no
  # has_one_attached :picture, dependent: :destroy

  has_one :portrait
  has_many :cards
  has_many :notifications
  has_many :requests, through: :notifications
  has_many :pings, through: :notifications
  has_many :friendships
  has_many :collected_cards
  has_many :links
end
