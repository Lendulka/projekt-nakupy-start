console.log('funguju!');

import { ShopList } from './ShopList/index.js'

const mainElement = document.querySelector('main')

fetch('https://nakupy.kodim.app/api/sampleweek/mon')
    .then((response) => response.json())
    .then((data) => {
        mainElement.append(
            ShopList({
                dayName: data.result.dayName,
                items: data.result.items
            })
        )
    })

fetch('https://nakupy.kodim.app/api/sampleweek/tue')
    .then((response) => response.json())
    .then((data) => {
        // tady by šlo použít destrukturování
        mainElement.append(
            ShopList({
                dayName: data.result.dayName,
                items: data.result.items
            })
        )
    })



