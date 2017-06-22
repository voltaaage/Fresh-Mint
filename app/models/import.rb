class Import < ApplicationRecord
  mount_uploader :import, OriginalFileUploader
  mount_uploader :import, ProcessedFileUploader

  has_many :transactions
end
