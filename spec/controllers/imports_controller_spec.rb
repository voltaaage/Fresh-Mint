require 'rails_helper'

describe ImportsController, type: :request do
  describe  "GET index" do
    it 'has a 200 status code' do
      get '/imports'

      expect(response.status).to have_http_status(:success)
      expect(response.content_type).to eq("application/json")
    end
  end

  describe  "GET show" do
    let(:import) { Import.create }
    let(:transactions) { create_list(:transaction, 5, import: import) }
    let(:params) do
      {
        id: import.id,
        month: Date.current.month,
        year: Date.current.year
      }.with_indifferent_access
    end

    it 'has a 200 status code' do
      get '/imports/:id', params: params

      expect(response.status).to have_http_status(:success)
      expect(response.content_type).to eq("application/json")
    end
  end
end
