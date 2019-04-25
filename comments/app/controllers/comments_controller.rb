class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @comment = Comment.create(comments_params)  
    render json: @comment 
  end

  def show
    @comments = Comment.all
    render json: @comments
  end

  private

  def comments_params
    params.require(:comment).permit(:text)
  end
end
