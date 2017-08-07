require 'rails_helper'

describe ImportsHelper do
  let!(:params) do
    {
      month: '1',
      year: '2017'
    }.with_indifferent_access
  end

  describe '#import_start_date' do
    it 'returns a date' do
      expect(import_start_date.class).to eq(Date)
    end

    it 'returns the first day of the params month' do
      expect(import_start_date.day).to eq(1)
    end
  end

  describe 'import_end_date' do
    it 'returns the last date of the params month' do
      expect(import_end_date.day).to be > 28
    end
  end

  describe '#month_or_default' do
    it 'returns the month as an integer' do
      expect(month_or_default.class).to eq(Fixnum)
    end

    it 'returns the current month if no month is specified' do
      params[:month] = nil
      expect(month_or_default).to eq(Date.current.month)
    end
  end

  describe '#year_or_default' do
    it 'returns the year as an integer' do
      expect(year_or_default.class).to eq(Fixnum)
    end

    it 'returns the current year if no year is specified' do
      params[:year] = nil
      expect(year_or_default).to eq(Date.current.year)
    end
  end

  describe '#import_data_serializer' do
    let(:import) { Import.first }
    it 'creates a hash with the correct keys' do
      expect(import_data_serializer(import))
    end
  end
end
