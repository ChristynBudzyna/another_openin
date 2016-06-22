json.array!(@shows) do |show|
  json.extract! show, :id, :title, :composer, :lyricist, :librettist, :description, :length, :show_type, :cast_size, :age_of_actors
  json.url shows_url(show, format: :json)
end
