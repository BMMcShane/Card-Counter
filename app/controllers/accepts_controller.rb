class AcceptsController < ApplicationController

    def index
        render json: Accept.all
    end

    def show
        accept = Accept.find(params[:id])
        render json: accept
    end

    def create
        accept = Accept.create!(accept_params)
        render json: accept, status: :created
    end

    #Probably don't need a destroy if dependent

    private

    def accept_params
        params.permit(:notification_id, :friend_id)
    end
end
