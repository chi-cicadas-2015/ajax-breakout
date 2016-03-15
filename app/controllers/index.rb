get '/' do
  @sayings = Saying.order("id desc")
  @saying = Saying.new
  erb :index
end

post '/sayings' do
  @saying = Saying.new(params[:saying])

  if request.xhr?
    if @saying.save
      erb :"sayings/_saying", locals: { saying: @saying }, layout: false
    else
      status 422
      body @saying.errors.full_messages
    end
  else
    if @saying.save
      redirect '/'
    else
      erb :"sayings/_new", locals: { saying: @saying }
    end
  end
end

get '/sayings/new' do
  @saying = Saying.new
  erb :"sayings/_new", locals: { saying: @saying }
end

get '/sayings/:id' do
  @saying = Saying.find(params[:id])
  @saying.to_json
end

get '/sayings/:id/edit' do
  @saying = Saying.find(params[:id])
  erb :"sayings/_edit", layout:false
end

put '/sayings/:id' do
  @saying = Saying.find(params[:id])

  unless @saying.update_attributes(params[:saying])
    status 422
  end
end


