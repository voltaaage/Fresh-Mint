class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def client
    render html: nil, layout: 'client'
  end
end
