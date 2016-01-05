require 'faker'

10.times do
  Saying.create!(text: Faker::Hacker.say_something_smart)
end