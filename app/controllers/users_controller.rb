class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :update, :destroy]
    wrap_parameters format: []
    def index
        render json: User.all, include: ['profile', 'profile.portrait', 'profile.links', 'profile.cards', 'profile.notifications']
    end

    def create
        user = User.create!(user_params)
        code = generate_friend_code
        profile = Profile.create!(user_id: user.id, friend_code: code)
        # profile.picture.attach("../assets/user.jpg")
        Portrait.create!(profile_id: profile.id)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(id: params[:id], username: params[:username], password: params[:password])
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:id, :username, :password)
    end

    def generate_friend_code
        loop do
            new_code = SecureRandom.alphanumeric(5)
            break new_code unless Profile.where(friend_code: new_code).exists?
        end
    end

end
