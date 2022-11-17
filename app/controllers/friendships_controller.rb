class FriendshipsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy, :index]

    def create
        # user_profile = Profile.find(params[:profile_id])
        # friend_profile = Profile.find(params[:friend_id])
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created

        # Reverse Friendship creation? Research ~~~
    end

    def index
        render json: Friendship.all
    end

    def destroy
    end

    private

    def friendship_params
        params.permit(:id, :profile_id, :friend_id)
    end

end
