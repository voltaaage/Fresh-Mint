module ImportsHelper
  def parse_csv(file, import)
    return
    # TODO: Deprecate this

    transactions = []
    CSV.foreach(file.path) do |row|
      transactions << build_transaction_from_row(row)
    end
    import.transactions.create(transactions.compact)
  end

  def build_transaction_from_row(row)
    return nil if row[0] == "Date"

    # Core Info
    date = Date.strptime(row[0], '%m/%d/%Y')
    description = row[1]
    amount = row[3]
    category = row[5]
    transaction_type = row[4]

    # Additional Info
    original_description = row[2]
    notes = row[8]

    return {
      date: date,
      description: description,
      amount: amount,
      category: category,
      original_description: original_description,
      notes: notes,
      transaction_type: transaction_type
    }
  end

  def import_start_date
    month = month_or_default
    year = year_or_default

    Date.new(year, month)
  end

  def import_end_date
    import_start_date.end_of_month
  end

  def month_or_default
    return params['month'].to_i if params['month']

    Time.zone.today.month
  end

  def year_or_default
    return params['year'].to_i if params['year']

    Time.zone.today.year
  end
end
