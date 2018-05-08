from flask import Flask, render_template
from config import *
from db_queries import *
from data_analysis import *

db = openConnection(db_hostname, db_name, db_port)

def relation_stars_with_textlength():
    global db

    rere = Reviews(name = db_reviews_table_name)

    data = rere.toDataFrame(rere.find_all(db))

    seaborn(data)

relation_stars_with_textlength()
#top = find_count(db, "reviews")

#print(top)
