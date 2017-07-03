module ImportsHelper
  def parse_csv(file, import)
    transactions = []
    CSV.foreach(file.path) do |row|
      transactions << build_transaction_from_row(row, import)
    end
    import.transactions.create(transactions)
  end

  def build_transaction_from_row(row, import)
    # Core Info
    if row[0] != "Date"
      date = Date.strptime(row[0], '%m/%d/%y')
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
  end
end
