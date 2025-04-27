print("\n PROGRAM KONVERSI SUHU\n")

temperature = str

CelciustoReamur = int
CelciustoFahrenheit = int
CelciustoKelvin = int

ReamurtoCelcius = int
ReamurtoFahrenheit = int
ReamurtoKelvin = int

FahrenheittoCelcius = int
FahrenheittoReamur = int
FahrenheittoKelvin = int

KelvintoCelcius = int
KelvintoReamur = int
KelvintoFahrenheit = int

celciusResult = int
reamurResult = int
fahrenheitResult = int
kelvinResult = int

temperature = str(input("masukkan satuan suhu awal anda : "))

if(temperature == "celcius"):
    celcius = int(input("masukkan suhu dalam celcius : "))
    CelciustoReamur = (4/5) * celcius
    reamurResult = CelciustoReamur
    CelciustoFarenheit = ((9/5) * celcius) + 32
    fahrenheitResult = CelciustoFahrenheit
    CelciustoKelvin = celcius + 273.15
    kelvinResult = CelciustoKelvin
    print("hasil suhu anda dalam reamur adalah : ", reamurResult)
    print("hasil suhu anda dalam farenheit adalah : ", fahrenheitResult)
    print("hasil suhu anda dalam kelvin adalah : ", kelvinResult)

if(temperature == "reamur"):
    reamur = int(input("masukkan suhu dalam reamur : "))
    ReamurtoCelcius = (5/4) * reamur
    celciusResult = ReamurtoCelcius
    ReamurtoFahrenheit = ((9/4) * reamur) + 32
    fahrenheitResult = ReamurtoFahrenheit
    ReamurtoKelvin = ((5/4) * reamur) + 273
    kelvinResult = ReamurtoKelvin
    print("hasil suhu anda dalam celcius adalah : ", celciusResult)
    print("hasil suhu anda dalam farenheit adalah : ", fahrenheitResult)
    print("hasil suhu anda dalam kelvin adalah : ", kelvinResult)

elif(temperature == "fahrenheit"):
    fahrenheit = int(input("masukkan suhu dalam fahrenheit : "))
    FahrenheittoCelcius = (5/9) * (fahrenheit - 32)
    celciusResult = FahrenheittoCelcius
    FahrenheittoReamur = (4/9) * (fahrenheit - 32)
    reamurResult = FahrenheittoReamur
    FahrenheittoKelvin = (5/9) * (fahrenheit - 32) + 273
    kelvinResult = FahrenheittoKelvin
    print("hasil suhu anda dalam celcius adalah : ", celciusResult)
    print("hasil suhu anda dalam reamur adalah : ", reamurResult)
    print("hasil suhu anda dalam kelvin adalah : ", kelvinResult)

elif(temperature == "kelvin"):
    kelvin = int(input("masukkan suhu dalam kelvin : "))
    KelvintoCelcius = kelvin - 273
    celciusResult = KelvintoCelcius
    KelvintoReamur = (4/5) * (kelvin - 273)
    reamurResult = KelvintoReamur
    KelvintoFahrenheit = (9/5) * (kelvin - 273) + 32
    fahrenheitResult = KelvintoFahrenheit
    print("hasil suhu anda dalam celcius adalah : ", celciusResult)
    print("hasil suhu anda dalam reamur adalah : ", reamurResult)
    print("hasil suhu anda dalam farenheit adalah : ", fahrenheitResult)

else :
    print("silahkan masukkan satuan suhu dengan benar!")



