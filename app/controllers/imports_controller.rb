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
    @transactions = Transaction.where(import: @import)
  end

  private

  def import_params
    params.require(:import).permit(:original_file)
  end
end
