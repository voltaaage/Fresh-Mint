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
    return params['month'].to_i if params['month']

    Time.zone.today.month
  end

  def year_or_default
    return params['year'].to_i if params['year']

    Time.zone.today.year
  end
end
