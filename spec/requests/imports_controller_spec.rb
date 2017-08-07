require 'rails_helper'

describe ImportsController, type: :request do
  let(:headers) do
    { 'ACCEPT' => 'application/json' }
  end

  describe 'GET index' do
    it 'has a 200 status code' do
      get '/imports', headers: headers

      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq('application/json')
    end
  end

  describe 'GET show' do
    let(:import) { create(:import) }
    let(:transactions) { create_list(:transaction, 5, import: import) }
    let(:params) do
      {
        id: import.id,
        month: Date.current.month,
        year: Date.current.year
      }.with_indifferent_access
    end

    it 'has a 200 status code' do
      get '/imports/:id', params: params, headers: headers

      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq('application/json')
    end
  end
end
