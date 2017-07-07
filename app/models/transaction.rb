class Transaction < ApplicationRecord
  belongs_to :import

  scope :by_month, (lambda do |start_date, end_date|
    where('date > ? AND date < ?', start_date, end_date)
  end)

end
