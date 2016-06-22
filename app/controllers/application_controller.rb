class ApplicationController < ActionController::Base
   helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    current_user != nil
  end

 def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = "https://anotheropenin.herokuapp.com/shows.json"
    headers['Access-Control-Request-Method'] = %w{GET POST OPTIONS}.join(",")
  end

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
