PSEUDOCODE TEMPERATURE CONVERTER PROGRAM

DECLARE
var temperature : string
var suhu : int

var CelciustoReamur : integer
var CelciustoFahrenheit : integer
var CelciustoKelvin : integer

var reamurResult : integer
var fahrenheitResult : integer
var kelvinResult : integer

ALGORITMA

OUTPUT "masukkan satuan suhu awal anda : "
INPUT temperature

IF temperature = "celcius" THEN

    OUTPUT "masukkan suhu dalam celcius : "
    INPUT suhu
    CelciustoReamur <-- (4/5) * suhu
    reamurResult <-- CelciustoReamur
    CelciustoFahrenheit <-- ((9/5) * suhu) + 32
    fahrenheitResult <-- CelciustoFahrenheit
    CelciustoKelvin <-- suhu + 273.15
    kelvinResult <-- CelciustoKelvin

    OUTPUT "hasil suhu anda dalam reamur adalah : ", reamurResult
    OUTPUT "hasil suhu anda dalam farenheit adalah : ", fahrenheitResult
    OUTPUT "hasil suhu anda dalam kelvin adalah : ", kelvinResult

ENDIF

ENDPROGRAM
