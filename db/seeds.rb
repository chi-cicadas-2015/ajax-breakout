require 'faker'

50.times do
  Thing.create!(text: Faker::Hacker.say_something_smart)
end