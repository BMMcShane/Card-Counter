class Profile < ApplicationRecord
    belongs_to :user
    # has_one_attached :picture, dependent: :destroy, required: false

    has_one :portrait, dependent: :destroy
    has_many :friendships, dependent: :destroy
    has_many :cards, dependent: :destroy
    has_many :links, dependent: :destroy
    has_many :notifications, dependent: :destroy
    has_many :requests, through: :notifications, dependent: :destroy
    has_many :pings, through: :notifications, dependent: :destroy
    has_many :accepts, through: :notifications, dependent: :destroy
    has_many :collected_cards, dependent: :destroy
    has_one :card, through: :collected_cards

    # def generate_friend_code
    # end
end
