class LinksController < ApplicationController
    skip_before_action :authorize, only: [:show, :index, :create, :update, :delete]

    def index
        render json: Link.all
    end

    def show
        link = Link.find(params[:id])
        render json: link
    end

    def create
        link = Link.create!(link_params)
        render json: link, status: :created
    end

    def update
        link = Link.find(params[:id])
        link.update!(link_params)
        render json: link, status: :accepted
    end

    def destroy
        link = Link.find(params[:id])
        link.destroy
        head :no_content
    end

    private

    def link_params
        params.permit(:profile_id, :name, :url, :description)
    end

end
