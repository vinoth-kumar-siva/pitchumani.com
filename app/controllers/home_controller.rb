class HomeController < ApplicationController
	skip_before_action :authenticate_user!
	skip_before_action :verify_authenticity_token
  def index
    @support = Vote.where("user_id IS NOT NULL").count
    @comments = Comment.last(5)
  end

  def vote_now
    p '12333'
  	@user = User.find(params[:user_id])
  	@vote = @user.vote
  	if @vote
      p ' avaible'
  		render :json => { message: "You have already voted!", alert: "error", status: 200}
  	else
  		@user.create_vote
  		@support = Vote.where("user_id IS NOT NULL").count
  		render :json => { message: "Your vote has been registered successfully!", alert: "success", support: @support, status: 200}
  	end
  end

  def create_post
    @user = User.find(params[:user_id])
    Comment.create(user_id:params[:user_id], text: params[:message])
    @comments = Comment.all 
    render :json => { message: "Your vote has been registered successfully!", alert: "success", support: @comments, status: 200}
	end
end
