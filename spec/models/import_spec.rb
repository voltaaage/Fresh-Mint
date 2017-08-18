require 'rails_helper'

RSpec.describe Import, type: :model do
  it { should have_many(:transactions) }

  let!(:import) { create(:import) }
  let!(:transaction_1) do
    create(:transaction, import: import, date: Date.new(2017, 1, 1))
  end
  let!(:transaction_2) do
    create(:transaction, import: import, date: Date.new(2015, 3, 1))
  end
  let!(:transaction_3) do
    create(:transaction, import: import, date: Date.new(2015, 3, 15))
  end
  let!(:transaction_4) do
    create(:transaction, import: import, date: Date.new(2017, 8, 10))
  end

  describe 'months' do
    it 'creates a hash of months' do
      result = import.months
      expected = [
        { month: 1, year: 2017 },
        { month: 3, year: 2015 },
        { month: 8, year: 2017 }
      ]

      expect(result).to eq(expected)
    end
  end

  describe 'years_months_collection' do
    it 'creates a hash of years with an array of months' do
      result = import.years_months_collection
      expected = [
        { year: 2017, months: [1, 8] },
        { year: 2015, months: [3] }
      ]

      expect(result).to eq(expected)
    end
  end
end
