console.log('funguju!');

import { ShopList } from './ShopList/index.js'

const mainElement = document.querySelector('main')

mainElement.append(
    ShopList({ day: 'mon', dayResult: 'loading' }),
    ShopList({ day: 'tue', dayResult: 'loading' })
)




