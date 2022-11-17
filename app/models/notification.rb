class Notification < ApplicationRecord
    belongs_to :profile
    has_one :request, required: false, dependent: :destroy
    has_one :ping, required: false, dependent: :destroy
    has_one :accept, required: false, dependent: :destroy
end
