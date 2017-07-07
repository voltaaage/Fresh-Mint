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
    @import = Import.new(import_params)

    @import.save

    parse_csv(import_params[:original_file], @import)

    redirect_to imports_path
  end

  def show
    @import = Import.find_by(id: params[:id])
    @transactions = import_transactions.by_month(import_start_date, import_end_date)
    @months = import_months
  end

  private

  def import_params
    params.require(:import).permit(:original_file, :month, :year)
  end

  def import_transactions
    @import_transactions ||= Transaction.where(import: @import)
  end

  def import_months
    @import_months ||= @import.months
  end
end
