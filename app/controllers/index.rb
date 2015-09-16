get '/' do
  @things = Thing.all
  erb :index
end

post '/things' do
  @thing = Thing.new(params[:thing])

  if @thing.save
    if request.xhr?
      erb :"_thingy", layout: false, locals: {thing: @thing}
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


