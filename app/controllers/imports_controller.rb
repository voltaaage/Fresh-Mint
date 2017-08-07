class ImportsController < ApplicationController
  include ImportsHelper
  require 'csv'

  def index
    @imports = Import.all
    render json: @imports, status: :ok
  end

  def new
    @import = Import.new
  end

  def create
    @import = Import.create

    transactions = create_params['transactions']
    transactions.each do |transaction|
      # TODO: find a nice dynamic way to create these objects
      date = Date.strptime(transaction[:date], '%m/%d/%Y')
      @import.transactions.create(
        amount: transaction[:amount],
        category: transaction[:category],
        date: date,
        description: transaction[:description],
        notes: transaction[:notes],
        original_description: transaction[:original_description],
        transaction_type: transaction[:transaction_type]
      )
    end

    render json: @import, status: :ok
  end

  def show
    @import = Import.find_by(id: params[:id])
    data = import_data_serializer(@import)

    render json: data, status: :ok
  end

  private

  def import_params
    params.require(:import).permit(:month, :year)
  end

  def create_params
    params.permit(transactions: transaction_keys)
  end

  def transaction_keys
    [
      :amount,
      :category,
      :date,
      :description,
      :notes,
      :original_description,
      :transaction_type
    ]
  end
end
