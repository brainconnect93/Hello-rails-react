json.extract! message, :id, :greetings, :created_at, :updated_at
json.url message_url(message, format: :json)
