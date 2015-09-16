get '/' do
  erb :index
end

get '/things' do
  @thing = Thing.all.sample
  @thing.to_json
end