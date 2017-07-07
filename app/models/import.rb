class Import < ApplicationRecord
  mount_uploader :import, OriginalFileUploader
  mount_uploader :import, ProcessedFileUploader

  has_many :transactions, dependent: :destroy

  def months
    months = transactions.map do |transaction|
      {
        month: transaction.date.month,
        year: transaction.date.year
      }
    end
    months.uniq!
  end
end
