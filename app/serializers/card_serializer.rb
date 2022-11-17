class CardSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :card_name, :customization_info
end
