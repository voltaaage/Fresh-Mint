class Transaction < ApplicationRecord
  belongs_to :import

  scope :by_month, ->(start_date, end_date) do
    where('date > ? AND date < ?', start_date, end_date)
  end
end
