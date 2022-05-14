import time
import ssl
import socketpool
import wifi
import board
import adafruit_requests as requests
import adafruit_bme680
import adafruit_ltr390
import neopixel

ssid = "Plume DragonHack"
password = "aljaz123"

pixel_pin = board.NEOPIXEL
num_pixels = 1

pixels = neopixel.NeoPixel(pixel_pin, num_pixels, brightness=0.31, auto_write=False)

json_data = {}



def post_to_ifttt(data, event, key):
    print("-"*40 + "IFTT " + event)
    print("posting this data: " + str(data))
    response = https.post("https://maker.ifttt.com/trigger/" + event + "/json/with/key/" + key, json=data)
    pixels.fill((0,0,50))
    pixels.show()
    print(response.text)
    print()



def post_to_url(data, url):
    print("-"*40 + str(url))
    print("posting this data: " + str(data))

    response = https.post(url, json=data)
    pixels.fill((0,0,50))
    pixels.show()

    print(response.text)
    print()

def post_to_url_with_auth(data, url, auth):
    print("-"*40 + str(url))

    print("posting this data: " + str(data))
    header = {"Authorization": auth}

    response = https.post(url, json=data, headers=header)
    pixels.fill((0,0,50))
    pixels.show()

    print(response.text)
    print()

def get_url_with_auth(url, auth):
    print("-"*40 + str(url))
    header = {"Authorization": auth}

    response = https.get(url, headers=header)
    pixels.fill((0,0,50))
    pixels.show()

    print(response.text)
    print()


pixels.fill((100, 30, 0))
pixels.show()
print("connecting to: " + ssid)
wifi.radio.connect(ssid, password)
pixels.fill((0, 50, 255))
pixels.show()
print("connected")
print("My local ip address: " + str(wifi.radio.ipv4_address))

socket = socketpool.SocketPool(wifi.radio)
# https = requests.Session(socket, ssl.create_default_context())
http = requests.Session(socket)

# Create sensor object, communicating over the board's default I2C bus
i2c = board.STEMMA_I2C()
bme680 = adafruit_bme680.Adafruit_BME680_I2C(i2c, debug=False)
ltr = adafruit_ltr390.LTR390(i2c)


def get_users_products():
    r1 = http.get('http://10.20.22.174/api/getAllProductsPy.php')
    return r1.json()


products_data = get_users_products()

r2 = http.get('http://10.20.22.174/scraped_data/products_with_temperature_humidity.json')
products_with_temp_and_humidity = r2.json()


def get_optimal_temp_humidity():

    temperatures_sum = 0
    humidity_sum = 0
    products_count = 0
    # calculate optimal temperature and humidity for all items in fridge
    for product in products_data["data"]:
        for product_temp_hum in products_with_temp_and_humidity:
            if product["name"] in product_temp_hum["product"]:
                print(product["name"])
                temperatures_sum += product_temp_hum["optimal_temperature"]
                print(product_temp_hum["optimal_temperature"])
                humidity_sum += product_temp_hum["optimal_humidity"]
                print(product_temp_hum["optimal_humidity"])
                products_count += 1
                break

    optimal_temperature = round(temperatures_sum / products_count)
    optimal_humidity = round(humidity_sum / products_count)
    return optimal_temperature, optimal_humidity

# get average temperature and humidity
temperatures = 0
humidities = 0
for i in range(10):
    json_data = {"lux": ltr.lux, "temperature": bme680.temperature, "humidity": bme680.relative_humidity,
                 "pressure": bme680.pressure, "gas": bme680.gas}
    temperatures += json_data["temperature"]
    humidities += json_data["humidity"]
average_temperature = temperatures / 10
average_humidity = humidities / 10

# optimal_temp, optimal_humidity = get_optimal_temp_humidity()

r2 = http.get('http://10.20.22.174/scraped_data/products_coeficients.json')
products_coefs = r2.json()

additional_days_per_product = dict()

# calculate days that are added based on difference from optimal temperature and humidity
for product in products_data["data"]:
    for product_with_coefs in products_coefs:
        if product["name"] in product_with_coefs["product"]:
            for product_with_optimal in products_with_temp_and_humidity:
                if product["name"] in product_with_optimal["product"]:
                    if average_temperature > product_with_optimal["optimal_temperature"]:
                        additional_days_per_product[product["name"]] = \
                            int(product_with_coefs["less_temp_coef"] * 0.1 * (
                                    average_temperature - product_with_optimal["optimal_temperature"]))
                    else:
                        additional_days_per_product[product["name"]] = \
                            int(product_with_coefs["high_temp_coef"] * 0.2 * (
                                    product_with_optimal["optimal_temperature"]-average_temperature))
                    if average_humidity > product_with_optimal["optimal_humidity"]:
                        additional_days_per_product[product["name"]] += \
                            int(product_with_coefs["less_hum_coef"] * 0.1 * (
                                        average_temperature - product_with_optimal["optimal_humidity"]))
                    else:
                        additional_days_per_product[product["name"]] += \
                            int(product_with_coefs["high_hum_coef"] * 0.2 * (
                                        product_with_optimal["optimal_humidity"] - average_temperature))
                    break
            break

print(additional_days_per_product)

print(http.post("http://10.20.22.174/api/adafruit.php", json=additional_days_per_product).text)

# while True:
#     url = 'http://localhost/api/adafruit.php'
#     pixels.fill((0,50,0))
#     pixels.show()
#     json_data = {"lux": ltr.lux, "temperature": bme680.temperature, "humidity": bme680.relative_humidity, "pressure": bme680.pressure, "gas": bme680.gas }
#
#     print(json_data)
#     print(http.post("http://10.20.22.174/api/adafruit.php", json=json_data).text)
#
#     optimal_temp, optimal_humidity = get_optimal_temp_humidity()
#     print(optimal_temp)
#     print(optimal_humidity)
#
#     time.sleep(100)
