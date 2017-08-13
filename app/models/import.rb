class Import < ApplicationRecord
  mount_uploader :import, OriginalFileUploader
  mount_uploader :import, ProcessedFileUploader

  has_many :transactions, dependent: :destroy

  def months
    months = transactions.map do |transaction|
      {
        month: transaction.date.try(:month),
        year: transaction.date.try(:year)
      }
    end
    months.uniq!
  end

  def years_months_collection
    years_months_collection = []
    transactions.map do |transaction|
      date = transaction.date
      add_month(years_months_collection, date) if date
    end

    years_months_collection.sort!{|a, b| b[:year] <=> a[:year]}
    years_months_collection.each do |years_months|
      years_months[:months].sort!
    end

    years_months_collection
  end

  def add_month(years_months_collection, date)
    transaction_year = date.year
    transaction_month = date.month

    year_index = find_year_index(years_months_collection, transaction_year)

    if year_index
      if !years_months_collection[year_index][:months].include?(transaction_month)
        years_months_collection[year_index][:months] << transaction_month
      end
    else
      years_months_collection << {
        year: transaction_year,
        months: [transaction_month]
      }
    end
  end

  def find_year_index(years_months_collection, year)
    years_months_collection.find_index{ |year_collection| year_collection[:year] == year }
  end
end
