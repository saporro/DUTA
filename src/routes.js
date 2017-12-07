import {About} from './components/pages/About';
import {Menu} from './components/pages/Menu';
import {Str} from './components/pages/Str';
import {Int} from './components/pages/Int';
import {Agi} from './components/pages/Agi';

import {Axe} from './components/pages/str/Axe';
import {Crixalis} from './components/pages/str/Crixalis';
import {Azgalor} from './components/pages/str/Azgalor';
import {Dirge} from './components/pages/str/Dirge';
import {Magnus} from './components/pages/str/Magnus';
import {Kunka} from './components/pages/str/Kunka';
import {Tresdin} from './components/pages/str/Tresdin';
import {Rexxar} from './components/pages/str/Rexxar';
import {Omniknight} from './components/pages/str/Omniknight';
import {Sven} from './components/pages/str/Sven';

import {Yurnero} from './components/pages/agi/Yurnero';
import {Kardel} from './components/pages/agi/Kardel';
import {Mirana} from './components/pages/agi/Mirana';
import {Morphling} from './components/pages/agi/Morphling';
import {Luna} from './components/pages/agi/Luna';
import {Naga} from './components/pages/agi/Naga';
import {Lancer} from './components/pages/agi/Lancer';
import {Gondar} from './components/pages/agi/Gondar';
import {Lanaya} from './components/pages/agi/Lanaya';
import {Traxex} from './components/pages/agi/Traxex';

import {Rubick} from './components/pages/int/Rubick';
import {Zeus} from './components/pages/int/Zeus';
import {Puck} from './components/pages/int/Puck';
import {Invoker} from './components/pages/int/Invoker';
import {Nortrom} from './components/pages/int/Nortrom';
import {Alleria} from './components/pages/int/Alleria';
import {Raijin} from './components/pages/int/Raijin';
import {Akasha} from './components/pages/int/Akasha';
import {Leshrac} from './components/pages/int/Leshrac';
import {Batrider} from './components/pages/int/Batrider';

export const routes = [{
    path: '/about/',
    component: About
},{
    path: '/menu/',
    component: Menu
},{
    path: '/str/',
    component: Str
},{
    path: '/int/',
    component: Int
},{
    path: '/agi/',
    component: Agi
},

// Str type
{
    path: '/axe/',
    component: Axe
},{
    path: '/crixalis/',
    component: Crixalis
},{
    path: '/azgalor/',
    component: Azgalor
},{
    path: '/dirge/',
    component: Dirge
},{
    path: '/magnus/',
    component: Magnus
},{
    path: '/kunka/',
    component: Kunka
},{
    path: '/tresdin/',
    component: Tresdin
},{
    path: '/rexxar/',
    component: Rexxar
},{
    path: '/omniknight/',
    component: Omniknight
},{
    path: '/sven/',
    component: Sven
},

// Agi type
{
    path: '/yurnero/',
    component: Yurnero
},{
    path: '/kardel/',
    component: Kardel
},{
    path: '/mirana/',
    component: Mirana
},{
    path: '/morphling/',
    component: Morphling
},{
    path: '/luna/',
    component: Luna
},{
    path: '/naga/',
    component: Naga
},{
    path: '/lancer/',
    component: Lancer
},{
    path: '/gondar/',
    component: Gondar
},{
    path: '/lanaya/',
    component: Lanaya
},{
    path: '/traxex/',
    component: Traxex
},

// Int
{
    path: '/rubick/',
    component: Rubick
},{
    path: '/zeus/',
    component: Zeus
},{
    path: '/puck/',
    component: Puck
},{
    path: '/invoker/',
    component: Invoker
},{
    path: '/nortrom/',
    component: Nortrom
},{
    path: '/alleria/',
    component: Alleria
},{
    path: '/raijin/',
    component: Raijin
},{
    path: '/akasha/',
    component: Akasha
},{
    path: '/leshrac/',
    component: Leshrac
},{
    path: '/batrider/',
    component: Batrider
},
];