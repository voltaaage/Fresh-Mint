require 'rails_helper'

RSpec.describe Import, type: :model do

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

  it { should have_many(:transactions) }

  describe 'months' do
    it 'creates a hash of months' do
      result = import.months
      expected = [
        {:month=>3, :year=>2015},
        {:month=>1, :year=>2017},
        {:month=>8, :year=>2017}
      ]

      expect(result).to eq(expected)
    end
  end

  describe 'months_by_year' do
    it 'creates a hash of years with an array of months' do
      result = import.months
      expected = [
        '2014': [1],
        '2015': [3],
        '2017': [8]
      ]

      expect(result).to eq(expected)
    end
  end
end
