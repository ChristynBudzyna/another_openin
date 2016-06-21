class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :title
      t.string :composer
      t.string :lyricist
      t.string :librettist
      t.text :description
      t.string :cast_size
      t.string :show_type
      t.boolean :good_for_elementary_school
      t.boolean :good_for_high_school
      t.boolean :good_for_college
      t.string :length
      t.boolean :dance_heavy
      t.string :music_genre
      t.string :licensing_company
      t.string :licensing_link

      t.timestamps null: false
    end
  end
end
