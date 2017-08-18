namespace :test do
  desc 'Run mocha client tests'
  task :client do
    sh('npm run test')
  end

  desc 'Run rspec server tests'
  task :server do
    sh('bundle exec rspec')
    sh('rubocop')
  end
end

Rake::Task['test'].clear
desc 'Run all tests'
task :tests do
  errors = []
  %w(test:client test:server).each do |task_name|
    begin
      Rake::Task[task_name].execute
    rescue RuntimeError => err
      errors << err.message
    end
  end

  raise errors.join("\n") if errors.any?
end
