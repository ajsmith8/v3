class AddFollowed < ActiveRecord::Migration
  def up
    add_column :relationships, :followed_id, :integer
  end

  def down
  end
end
