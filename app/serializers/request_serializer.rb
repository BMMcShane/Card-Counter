class RequestSerializer < ActiveModel::Serializer
  attributes :id, :notification_id, :friend_id
end
