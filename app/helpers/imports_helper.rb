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
      categories: group_into_categories(transactions),
      years_months: import.years_months_collection
    }
  end

  def group_into_categories(transactions)
    groups = CATEGORY_GROUPS.deep_dup
    transactions.each do |transaction|
      category = CATEGORY_GROUP_MAP[transaction.category]

      if groups[category]
        groups[category] << transaction
      else
        groups['None'] << transaction
      end
    end

    groups
  end
end
