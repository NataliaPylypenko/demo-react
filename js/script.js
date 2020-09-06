const state = {
    time : new Date(),
    lots : [
        {
            id : 1,
            name : 'Apple',
            description : 'Apple description',
            price: 15
        },
        {
            id : 2,
            name : 'Orange',
            description : 'Orange description',
            price: 40
        },
    ]
}

// ###################################

function App({ state }) {
    const node = document.createElement('div');
    node.className = 'app';

    node.append(Header());
    node.append(Clock({
        time : state.time
    }));
    node.append(Lots({
        lots : state.lots
    }));

    return node;
}


function Header() {
    const node = document.createElement('header');
    node.className = 'header';

    node.append(Logo());

    return node;
}

function Logo () {
    const node = document.createElement('img');
    node.className = 'logo';

    node.src = 'images/logo.png';

    return node;
}

function Clock({ time }) {
    const node = document.createElement('div');
    node.className = 'clock';

    const value = document.createElement('span');
    value.className = 'value';
    value.innerText = time.toLocaleTimeString();

    node.append(value);

    const icon = document.createElement('span');

    if(time.getHours() >= 8 && time.getHours() <= 20) {
        icon.className = 'icon day';
    }
    else {
        icon.className = 'icon night';
    }

    node.append(icon);

    return node;
}

function Lots ({ lots }) {
    const node = document.createElement('div');
    node.className = 'lots';

    lots.forEach((lot) => {
        node.append(Lot ({
            lot
        }));
    });

    return node;
}

function Lot ({ lot }) {
    const node = document.createElement('article');
    node.className = 'lot';

    const price = document.createElement('div');
    price.className = 'price';
    price.innerText = lot.price;
    node.append(price);

    const name = document.createElement('h1');
    name.innerText = lot.name;
    node.append(name);

    const description = document.createElement('p');
    description.innerText = lot.description;
    node.append(description);

    return node;
}

// ###################################

render(
    App({ state }),
    document.getElementById('root')
);

// ###################################

setInterval(() => {
    const time = new Date();
    const clock = document.getElementById('root').querySelector('.app > .clock');

    clock.querySelector('.value').innerText = time.toLocaleTimeString();
}, 1000);

// ###################################

function render (newDom, realDomRoot) {
    realDomRoot.append(newDom);
}