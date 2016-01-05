get '/' do
  @sayings = Saying.order("id desc")
  erb :index
end

post '/sayings' do

  @saying = Saying.new(params[:saying])

  if request.xhr?
    if @saying.save
      erb :"_saying", locals: {saying: @saying}, layout: false
    else
      status 422
      body "bad stuff happened"
    end
  else
    if @saying.save
        redirect '/'
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


