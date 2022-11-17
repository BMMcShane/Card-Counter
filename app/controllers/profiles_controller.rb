class ProfilesController < ApplicationController
    skip_before_action :authorize, only: [:show, :create, :index, :update]


    def index 
        render json: Profile.all, include: ['portrait', 'links', 'cards', 'notifications','notifications.request', 'notifications.ping', 'friendships']
    end

    def show
        profile = Profile.find_by(id: params[:id])
        render json: profile, include: ['portrait', 'links', 'cards', 'friendships', 'notifications','notifications.request', 'notifications.ping']

    end

    def create
        code = Profile.generate_friend_code
        profile = Profile.create!(user_id: params[:user_id], friend_code: code)
        render json: profile, status: :created
    end

    def update
        profile = Profile.find(params[:id])
        profile.update!(profile_params)
        render json: profile, include: ['portrait', 'links', 'cards','notifications'], status: :accepted
    end


    private

    def profile_params
        params.permit(:id, :user_id, :name, :bio, :company, :job, :school, :email, :address, :phone_no)
    end

    def generate_friend_code
        loop do
            number = SecureRandom.alphanumeric(5)
            break number unless Profile.where(friend_code: number).exists?
        end
    end

end
