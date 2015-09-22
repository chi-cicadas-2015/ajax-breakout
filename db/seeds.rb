require 'faker'

50.times do
  Saying.create!(text: Faker::Hacker.say_something_smart)
end