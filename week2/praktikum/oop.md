PSEUDOCODE TEMPERATURE CONVERTER PROGRAM (OOP VERSION)

Class KalkulatorSuhu

Attribute :
temperature : string
celcius : integer
reamur : integer
fahrenheit : integer
kelvin : integer
rumus : integer

Method :

    HitungCelcius(): Float
        IF temperature = "reamur" THEN
            rumus <-- (4/5) * celcius
        ELSE IF temperature = "fahrenheit" THEN
            rumus <-- ((9/5) * celcius) + 32
        ELSE IF temperature = "kelvin" THEN
            rumus <-- celcius + 273.15
        RETURN rumus

    HitungReamur(): Float
        IF temperature = "celcius" THEN
            rumus <-- (5/4) * reamur
        ELSE IF temperature = "fahrenheit" THEN
            rumus <-- ((9/4) * reamur) + 32
        ELSE IF temperature = "kelvin" THEN
            rumus <-- ((5/4) * reamur) + 273
        RETURN rumus

    HitungFahrenheit(): Float
        IF temperature = "celcius" THEN
            rumus <-- (5/9) * (fahrenheit - 32)
        ELSE IF temperature = "reamur" THEN
            rumus <-- (4/9) * (fahrenheit - 32)
        ELSE IF temperature = "kelvin" THEN
            rumus <-- (5/9) * (fahrenheit - 32) + 273
        RETURN rumus

    HitungKelvin(): Float
        IF temperature = "celcius" THEN
            rumus <-- kelvin - 273
        ELSE IF temperature = "reamur" THEN
            rumus <-- (4/5) * (kelvin - 273)
        ELSE IF temperature = "fahrenheit" THEN
            rumus <-- (9/5) * (kelvin - 273) + 32
        RETURN rumus
