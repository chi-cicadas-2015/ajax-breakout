class Thing < ActiveRecord::Base
  validates :text, presence: true
end