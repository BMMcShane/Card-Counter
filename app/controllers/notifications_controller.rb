class NotificationsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :update, :destroy]

    def index
        render json: Notification.all
    end

    def show
        note = Notification.find(params[:id])
        render json: note
    end

    def create
        notification = Notification.create!(notification_params)
        render json: notification, status: :created
    end

    def destroy
        note = Notification.find(params[:id])
        note.destroy
        head :no_content
    end

    private

    def notification_params
        params.permit(:profile_id, :kind)
    end
end
