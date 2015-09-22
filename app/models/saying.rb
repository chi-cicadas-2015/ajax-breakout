class Saying < ActiveRecord::Base
  validates :text, presence: true
end