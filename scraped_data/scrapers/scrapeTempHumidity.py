import json
from collections import defaultdict

import requests
from bs4 import BeautifulSoup


if __name__ == "__main__":

    # get source
    url = "https://www.engineeringtoolbox.com/fruits-vegetables-storage-conditions-d_710.html"

    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'lxml')

    table_rows = soup.find_all("table", attrs={'class': 'tablesorter'})[0].find("tbody").find_all("tr")

    products_with_data = []
    for table_row in table_rows:
        product_dict = defaultdict()
        table_data = table_row.find_all("td")
        idx = 0
        for data in table_data:
            if idx == 0:
                product_dict["product"] = "".join(data.stripped_strings).lower()
            elif idx == 1:
                fahrenheit = "".join(data.stripped_strings)
                if "-" not in fahrenheit:
                    product_dict["optimal_temperature"] = round((int(fahrenheit) - 32) + (5/9), 2)
                else:
                    from_fahrenheit, to_fahrenheit = fahrenheit.split("-")
                    optimal_fahrenheit = (int(from_fahrenheit.strip()) + int(to_fahrenheit.strip()))/2
                    product_dict["optimal_temperature"] = round((optimal_fahrenheit - 32) * (5/9), 2)
            elif idx == 4:
                humidity_string = "".join(data.stripped_strings)
                if "-" not in humidity_string:
                    product_dict["optimal_humidity"] = int(humidity_string)
                else:
                    from_humidity, to_humidity = humidity_string.split("-")
                    product_dict["optimal_humidity"] = int((int(from_humidity) + int(to_humidity))/2)
                    break
            idx += 1
        products_with_data.append(product_dict)

with open("products_with_temperature_humidity.json", "w") as f:
    json.dump(products_with_data, f)
