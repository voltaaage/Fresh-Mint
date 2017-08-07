source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = '#{repo_name}/#{repo_name}' unless repo_name.include?('/')
  'https://github.com/#{repo_name}.git'
end

gem 'rails', '~> 5.1.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'faker'
  gem 'rspec-core', '~> 3.5.0'
  gem 'rspec-mocks', '~> 3.5.0'
  gem 'rspec-rails', '~> 3.5.0'
  gem 'selenium-webdriver'
end

group :test do
  gem 'mocha'
  gem 'simplecov', '~> 0.13.0', require: false
  gem 'shoulda', '~> 3.5'
  gem 'shoulda-matchers', '~> 2.0'
  gem 'factory_girl'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# API
gem 'active_model_serializers', '~> 0.10.0'

# AWS File Storage
gem 'fog-aws'
gem 'carrierwave', '~> 1.0'

# Environment Variables
gem 'dotenv'

# Lint
gem 'rubocop', '~> 0.47.1', require: false

# JS Environmet
gem 'gon', '~> 6.1.0'

# Rails -> JS route helper sharing
gem 'js-routes', '~> 1.3.2'

# Sass-globbing
gem 'sass-globbing', '~> 1.1'
