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
    months.uniq!.sort{|a, b| b[:year] <=> a[:year]}
  end
end
