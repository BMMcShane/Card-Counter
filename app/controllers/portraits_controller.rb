class PortraitsController < ApplicationController
    skip_before_action :authorize, only: [:index, :update]

    def index
        render json: Portrait.all
    end

    def update
        portrait = Portrait.find(params[:id])
        portrait.update!(portrait_params)
        render json: portrait, status: :accepted
    end

    private

    def portrait_params
        params.permit(:profile_id, :img_url)
    end

end
