class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def client
    render template: 'home/index', layout: 'client'
  end
end
