class Card < ApplicationRecord
    belongs_to :profile
    has_many :profiles, through: :collected_cards
end
