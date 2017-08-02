class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :bootstrap_client, only: :client

  def client
    render html: nil, layout: 'client'
  end

  protected

  def bootstrap_client
    gon.push(
      environment: Rails.env,
      domain: request.domain,
      options: {},
      meta: {
        csrf_param:  request_forgery_protection_token,
        csrf_token:  form_authenticity_token
      }
    )
  end
end
