class LinkSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :url, :name, :description
end
