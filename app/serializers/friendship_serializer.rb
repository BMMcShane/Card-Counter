class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :friend_id
end
