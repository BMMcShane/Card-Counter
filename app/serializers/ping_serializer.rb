class PingSerializer < ActiveModel::Serializer
  attributes :id, :notification_id, :collector_id, :card_id
end
