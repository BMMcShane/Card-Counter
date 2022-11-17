class CardsController < ApplicationController
    skip_before_action :authorize, only: [:show, :index, :create, :update, :destroy]

    def index
        render json: Card.all
    end

    def show
        card = Card.find(params[:id])
        render json: card
    end

    def create
        card = Card.create!(card_params)
        render json: card, status: :created
    end

    def update
        card = Card.find(params[:id])
        card.update!(card_params)
        render json: card, status: :accepted
    end 

    private

    def card_params
        params.permit(:profile_id, :card_name, :customization_info)
    end
end
