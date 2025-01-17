_💡 Problem Statement_
We want you to build a simple app that:

- Displays information about the weather:
  1. Icon
  2. Temperature
  3. A "fun" _Phrase_
- Matches the style as provided in Mock.png:
  ![Mock.png](https://i.imgur.com/AevO37y.png)
- Allows user to swap between °F and °C
  - ⚠️ Swapping between Temperature Units should not change the _Phrase_.

_♘ Boilerplate_
We provide a React boilerplate for you to start. If you're more comfortable using a different framework, or working with vanilla JavaScript, feel free to make changes to the boilerplate.

_☀️ WeatherAPI_
You'll find a `WeatherAPI` module, which is meant to emulate working with an API. It has three methods:

- `getZipcodes()` returns all available zipcodes
- `getRandomZipcode()` returns a random zipcode
- `async getCurrentWeather(zipcode: string)` returns the "current" weather for the zipcode provided, or from a random zipcode if none is provided

_🛠 Helpers_
You'll notice we've given you some helpers to make your life easier, they include:

- `getTemperatureUnit`, returns the temperature with the degrees appended, accepts a _temperatureUnit_ (`c` or `f`) and optionally a _temperature_
- `getCondition`: returns a condition that _Phrases_ can use.
- `getPhrases`: returns _Phrases_ that match the data provided.

##### Data Structure

_🗒 Data Structure_
An example of the _Weather_ format is below.

```
"94103": {
  "timezone": "America/Los_Angeles",
  "icon": "PartlyCloudyDay",
  "temperature": 18.5
},
```

_💬 Phrase Structure_
Additionally, an example of a _Phrase_ is as follows:

```
{
  "color": "#007EFF",
  "condition": "Clear",
  "min": 5,
  "title": "It's pretty alright today.",
  "subtitle": "Not amazeballs but also not ghastly.",
  "highlight": ["pretty"],
  "max": 15
},
```

We'll use the string in `highlight` combined with the `title` to color the highlighted phrase with the `color` specified.

**⚠️ Note:** `condition`, `min` and `max` are optional variables used to determine what phrase to show.

_📸 Icons_
You'll find all of the icons in the `src/icons` folder. These are SVGs that are exported as React components, so you can use them like this:

```
import * as Icons from "./icons";
...
<Icons.ClearDay>
```

If you're not on React, we've also included the base SVGs, in `src/icons/svg`.
