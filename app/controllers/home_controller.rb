class HomeController < ApplicationController
  def index
    @heading_text = 'This is the Heading'
    @body = 'This is the body'
  end
end
