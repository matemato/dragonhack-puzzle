
import csv

# SOURCE URL: https://pxweb.stat.si/SiStatData/pxweb/en/Data/-/0411005S.px/
import json
from collections import defaultdict

food_price_file = open("food_price.csv")

csvreader = csv.reader(food_price_file)

product_prices = defaultdict()

for row in csvreader:
    product, price = row[0].lower().split(";")
    product_prices[product] = float(price)

with open("products_prices.json", "w") as f:
    json.dump(product_prices, f)
