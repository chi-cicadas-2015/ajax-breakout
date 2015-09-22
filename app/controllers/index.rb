get '/' do
  @sayings = Saying.order("id desc")
  erb :index
end

post '/sayings' do
  @saying = Saying.new(params[:saying])

  if @saying.save
    if request.xhr?
      erb :"_saying", layout: false, locals: {saying: @saying}
    else
      redirect '/'
    end
  else
    if request.xhr?
      status 422
    else
      erb :index
    end
  end
end

get '/sayings/:id' do
  @saying = Saying.find(params[:id])
  @saying.to_json
end

get '/sayings/:id/edit' do
  @saying = Saying.find(params[:id])
  erb :"_edit", layout:false
end

put '/sayings/:id' do
  @saying = Saying.find(params[:id])

  unless @saying.update_attributes(params[:saying])
    status 422
  end
end


