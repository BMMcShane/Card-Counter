class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :kind
  has_one :request, optional: true
  has_one :ping, optional: true
  has_one :accept, optional: true
end
