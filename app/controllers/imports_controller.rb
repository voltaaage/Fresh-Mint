class ImportsController < ApplicationController
  include ImportsHelper
  require 'csv'

  def index
    @imports = Import.all
  end

  def new
    @import = Import.new
  end

  def create
    @import = Import.create

    transactions = create_params['transactions']
    transactions.each do |transaction|
      # TODO: find a nice dynamic way to create these objects
      @import.transactions.create(
        amount: transaction[:amount],
        category: transaction[:category],
        date: transaction[:date],
        description: transaction[:description],
        notes: transaction[:notes],
        original_description: transaction[:original_description],
        transaction_type: transaction[:transaction_type]
      )
    end
    redirect_to imports_path
  end

  def show
    @import = Import.find_by(id: params[:id])
    @transactions = import_transactions.by_month(import_start_date, import_end_date)
    @months = import_months
    data = {
      importId: @import.id,
      transactions: @transactions,
      months: @months
    }

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

  def import_transactions
    @import_transactions ||= Transaction.where(import: @import)
  end

  def import_months
    @import_months ||= @import.months
  end
end
