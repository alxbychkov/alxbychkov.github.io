document.addEventListener('DOMContentLoaded',()=>{
    const range = document.querySelector('.scroll-range')
    const field = document.querySelector('.field')
    const game = document.querySelector('.game')
    var imageSize = document.querySelector('.game').offsetWidth-2
    var icons = []
    var iconsPos = []
    var rows = 6
    var posInResize = []
    var memory = []


    range.addEventListener('input',e=>{
        let size = e.currentTarget.value
        render(size)
    })

    range.addEventListener('change',e=>{
        let size = e.currentTarget.value
        setTimeout(()=>{
            render(size,true)
        }, 1000);
        rows = +size
        posInResize = []
    })

    render(rows,true)
    icons = []
    iconsPos = []

    function render(rows,mix = false){
        const fields = rows*rows
        let col = 0

        field.innerHTML = ``
        field.style.height = `${imageSize+2}px`
        for (let i=0; i<rows; i++) {
            var a = []
            for (let j=0; j<rows; j++) {
                var data = {
                    width: `${imageSize/rows}px`,
                    height: `${imageSize/rows}px`,
                    backSize: `${100*rows}%`,
                    backPos: `-${(imageSize)/rows*j-2*j}px -${(imageSize)/rows*i-2*i}px`,
                    posX: ``,
                    posY: ``,
                    index: `${col}`
                }
                var pos = {
                    x: `${(imageSize)/rows*j}px`,
                    y: `${(imageSize)/rows*i}px`
                }
                a.push(data.backPos)
                icons.push(data)
                iconsPos.push(pos)
                col++
            }
            posInResize.push(a)
        }
        
        mix ? shuffle(icons) : ''

        for (let i=0; i<fields; i++) {
            let item = document.createElement('div')
            item.classList.add('field-item')
            icons[i].index == (fields-1) ? item.classList.add('last') : ''
            item.setAttribute('index',icons[i].index)
            item.style.width = `${icons[i].width}`
            item.style.height = `${icons[i].height}`
            item.style.backgroundSize = `${icons[i].backSize}`
            item.style.backgroundPosition = `${icons[i].backPos}`
            if (mix) {
                item.style.top = '50%'
                item.style.left = `50%`
                // item.style.top = `${iconsPos[i].y}`
                // item.style.left = `${iconsPos[i].x}`

            } else {
                item.style.top = `${iconsPos[i].y}`
                item.style.left = `${iconsPos[i].x}`
            }
            var iconsPosNew = iconsPos
            // setTimeout(() => {
                item.style.top = `${iconsPosNew[i].y}`
                item.style.left = `${iconsPosNew[i].x}`
            // }, 600);
            field.appendChild(item)
        }

        if (mix) {
            document.querySelectorAll('.field-item').forEach((item)=>{
                // item.classList.add('shuffle')
            })
        }

        window.addEventListener('resize',()=>{
            let items = document.querySelectorAll('.field-item')
            imageSize = document.querySelector('.game').offsetWidth-2
            for (let i=0; i<rows; i++) {
                for (let j=0; j<rows; j++) {
                    posInResize[i][j] = `-${(imageSize)/rows*j-2*j}px -${(imageSize)/rows*i-2*i}px`
                }
            }
            
            var merged = posInResize.flat(1)

            items.forEach((item,index)=>{
                item.style.width = `${imageSize/rows}px`
                item.style.height = `${imageSize/rows}px`
                if ( imageSize < 400 ) {
                    // item.style.backgroundSize = `${imageSize/4*rows}%`
                    item.style.backgroundPosition = merged[item.getAttribute('index')]
                    field.style.height = `${imageSize+2}px`
                }
            })
        })
        icons = []
        iconsPos = []
    }
    
    function renderFromHistory(obj) {
        let fields = obj.length
        field.innerHTML = ``
        for (let i=0; i<fields; i++) {
            let item = document.createElement('div')
            item.classList.add(obj[i].class)
            obj[i].index == fields-1 ? item.classList.add('last') : ''
            item.setAttribute('index',obj[i].index)
            item.style.width = obj[i].width
            item.style.height = obj[i].height
            item.style.backgroundSize = obj[i].backSize
            item.style.backgroundPosition = obj[i].backPos
            item.style.top = obj[i].posY
            item.style.left = obj[i].posX
            field.appendChild(item)
        }
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function isInteger(num) {
        return (num^0) === num
    }

    function swap(el1,el2) {
        let t = el1
        let data = {
            width: t.style.width,
            height: t.style.height,
            backSize: t.style.backgroundSize,
            backPos: t.style.backgroundPosition,
            posX: t.style.left,
            posY: t.style.top,
            index: t.getAttribute('index')
        }

        el1.style.width = el2.style.width
        el1.style.height = el2.style.height
        el1.style.backgroundSize = el2.style.backgroundSize
        el1.style.backgroundPosition = el2.style.backgroundPosition
        el1.setAttribute('index',el2.getAttribute('index'))
        el1.classList.add('last')

        el2.style.width = data.width
        el2.style.height = data.height
        el2.style.backgroundSize = data.backSize
        el2.style.backgroundPosition = data.backPos
        el2.setAttribute('index',data.index)
        el2.classList.remove('last')

    }


document.addEventListener('click',e=>{
    let item = e.target // ячейка
    let empty = document.querySelector('.last')
    let table = document.querySelectorAll('.field-item') // NodeList ячеек
    let tableArr = Array.prototype.slice.call(table) // массив ячеек
    let elIndex = tableArr.indexOf(item) // номер элемента в массиве ячеек (номер элемента в дереве)
    let lastEl = rows*rows-1

    let left = ((typeof tableArr[elIndex-1] != 'undefined') && (!isInteger((elIndex)/rows))) ? tableArr[elIndex-1].getAttribute('index') : -1
    let right = ((typeof tableArr[elIndex+1] != 'undefined') && (!isInteger((elIndex+1)/rows))) ? tableArr[elIndex+1].getAttribute('index') : -1
    let top = (typeof tableArr[elIndex-rows] != 'undefined') ? tableArr[elIndex-rows].getAttribute('index') : -1
    let bottom = (typeof tableArr[elIndex+rows] != 'undefined') ? tableArr[elIndex+rows].getAttribute('index') : -1

    let curX = item.style.left
    let curY = item.style.top

    let emptyX = empty.style.left
    let emtpyY = empty.style.top



    if(e.target.parentNode.className == 'field') {
        if (left == lastEl || right == lastEl || top == lastEl || bottom == lastEl) {
            table.forEach(item=>{
                let mData = {
                    width: item.style.width,
                    height: item.style.height,
                    backSize: item.style.backgroundSize,
                    backPos: item.style.backgroundPosition,
                    posX: item.style.left,
                    posY: item.style.top,
                    index: item.getAttribute('index'),
                    class: 'field-item'
                }
                memory.push(mData)
            })
            swap(item,empty)
            memory = []
        } else {
            if (item.className == 'field-item' ) {
                item.classList.add('bounce')
                setTimeout(()=>{
                    item.classList.remove('bounce')
                },600)
            }
        }
    }

})


function animate(item) {
    let start = Date.now(); // запомнить время начала
    
    let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // закончить анимацию через 1 секунды
            return;
        }

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);

    }, 10);

        // в то время как timePassed идёт от 0 до 1000
        // left изменяет значение от 0px до 400px
        function draw(timePassed) {
        item.style.left = timePassed / 7 + 'px';
        item.style.top = timePassed / 7 + 'px';
        }
}


})
