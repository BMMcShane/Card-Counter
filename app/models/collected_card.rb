class CollectedCard < ApplicationRecord
    belongs_to :profile
    belongs_to :card
end
