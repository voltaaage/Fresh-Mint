class ImportsController < ApplicationController
  def index
    @imports = Import.all
  end

  def new
    @import = Import.new
  end

  def create
    @import = Import.new(import_params)

    @import.save

    redirect_to imports_path
  end

  private

  def import_params
    params.require(:import).permit(:original_file)
  end
end
