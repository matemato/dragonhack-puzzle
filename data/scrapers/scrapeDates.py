import json
from collections import defaultdict

import requests
from bs4 import BeautifulSoup


if __name__ == "__main__":

    # get source
    url = "https://www.canstarblue.com.au/appliances/shelf-life-guide-foods-fridge/"

    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'lxml')

    tables = soup.find_all("table")

    products_with_dates = []
    num_to_name = {
        0: 'product',
        1: 'cupboard',
        2: 'fridge',
        3: 'freezer',
    }

    # get data from tables
    for food_table in tables:
        table_rows = food_table.find_all("tr")
        for table_row in table_rows[1:]:
            product_with_dates = defaultdict()
            table_data = table_row.find_all("td")
            for number, name in num_to_name.items():
                product_with_dates[name] = "".join(table_data[number].stripped_strings).lower()
            products_with_dates.append(product_with_dates)

with open("products_with_dates.json", "w") as f:
    json.dump(products_with_dates, f)
