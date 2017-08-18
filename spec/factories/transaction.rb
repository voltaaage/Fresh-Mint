require 'faker'

FactoryGirl.define do
  factory :transaction do
    date Faker::Date.between(1.year.ago, Date.current)
    description Faker::Commerce.product_name
    amount Faker::Number.decimal(2)
    category CATEGORIES[CATEGORIES.keys.sample].sample
    original_description Faker::HowIMetYourMother.catch_phrase
    notes Faker::HowIMetYourMother.character
    transaction_type %w(credit debit).sample
  end
end
