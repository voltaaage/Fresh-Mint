module ImportsHelper
  def import_start_date
    month = month_or_default
    year = year_or_default

    Date.new(year, month)
  end

  def import_end_date
    import_start_date.end_of_month
  end

  def month_or_default
    return Date.current.month unless params['month']

    params['month'].to_i
  end

  def year_or_default
    return Date.current.year unless params['year']

    params['year'].to_i
  end

  def import_data_serializer(import)
    transactions = Transaction
      .where(import: import)
      .by_month(import_start_date, import_end_date)

    {
      import_id: import.id,
      transactions: transactions,
      months: import.months
    }
  end
end
