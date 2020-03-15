var API_KEY = 'oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig';
var xhr = new XMLHttpRequest(),
    data,
    url,
    page = 0,
    elements = [];

document.addEventListener('scroll', () => {
    if (nextPage()) {
        render(API_KEY, page);
    }
});

function nextPage() {
    var containerHeight = document.querySelector('.container').offsetHeight,
        screenHeight = window.outerHeight,
        screenScroll = window.pageYOffset;
    if ((containerHeight - screenHeight) < screenScroll) {
        page++;
        return true;
    }
}

function render(API_KEY, page) {
    url = `https://api.unsplash.com/photos?page=${page}&client_id=${API_KEY}`;

    xhr.open('get', url, false);
    xhr.onload = function () {
        if (xhr.readyState == 4 && (~~(xhr.status / 100)) == 2) {
            data = JSON.parse(xhr.responseText);
            let ln = data.length;
            for (let i = 0; i < ln; i++) {
                elements.push({
                    href: data[i].user.links.html,
                    name: data[i].user.name,
                    username: '@' + data[i].user.username,
                    avatar: data[i].user.profile_image.small,
                    photo: data[i].urls.small,
                    likes: data[i].likes,
                });
            }
        }
    }
    xhr.send(null);
}

render(API_KEY, page);

var app = new Vue({
    el: '#app',
    data: {
        elements
    },
    computed: {
        now: function () {
            return Date.now()
        }
    },
    methods: {
        cur_page: function () {
            return this.elements.length / 10;
        },
    }
})

