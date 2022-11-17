class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true

    has_one :profile, dependent: :destroy
end
