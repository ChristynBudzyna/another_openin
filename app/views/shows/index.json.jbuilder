json.array!(@shows) do |show|
  json.extract! show, :id, :title, :composer, :lyricist, :librettist, :description
  json.url shows_url(show, format: :json)
end
