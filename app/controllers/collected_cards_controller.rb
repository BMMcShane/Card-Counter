class CollectedCardsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]

    def create
        collect_card = CollectedCard.create!(collected_cards_params)
        render json: collect_card, status: :created
    end

    def destroy
        collect_card = CollectedCard.find(params[:id])
        collect_card.destroy
        head :no_content
    end

    private

    def collected_cards_params
        params.permit(:profile_id, :card_id)
    end

end
