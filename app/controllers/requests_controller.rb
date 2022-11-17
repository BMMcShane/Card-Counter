class RequestsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :update, :destroy]

    def index
        render json: Request.all
    end

    def show
        request = Request.find(params[:id])
        render json: request
    end

    def create
        request = Request.create!(request_params)
        render json: request, status: :created
    end

     #Probably wont need if notification is dependent destroy
    def destroy
        request = Request.find(params[:id])
        request.destroy
        head :no_content
    end

    private

    def request_params
        params.permit(:notification_id, :friend_id)
    end
end
