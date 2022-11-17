class PingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :update, :destroy]

    def index
        render json: Ping.all
    end

    def show
        ping = Ping.find(params[:id])
        render json: ping
    end

    def create
        ping = Ping.create!(ping_params)
        render json: ping, status: :created
    end

    #Probably wont need if notification is dependent destroy
    def destroy
        ping = Ping.find(params[:id])
        ping.destroy
        head :no_content
    end

    private

    def ping_params
        params.permit(:notification_id, :card_id, :collector_id)
    end
end
