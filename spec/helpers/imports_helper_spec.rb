require 'rails_helper'

describe ImportsHelper do
  describe 'build_transaction_from_row' do
    context 'when the row is a header row' do
      let(:row) do
        [
          'Date',
          'Description',
          'Original Description',
          'Amount',
          'Transaction Type',
          'Category',
          'Account Name',
          'Labels',
          'Notes'
        ]
      end

      it 'returns nil if row[0] is date' do
        expect(helper.build_transaction_from_row(row)).to be_nil
      end
    end

    context 'when the row is a valid transaction' do
      let(:row) do
        [
          '2/19/2017',
          'AAAA'
        ]
      end

      it 'creates a valid date' do
        result = helper.build_transaction_from_row(row)
        expected_date = Date.new(2017, 02, 19)

        expect(result[:date]).to eq(expected_date)
      end
    end
  end
end
