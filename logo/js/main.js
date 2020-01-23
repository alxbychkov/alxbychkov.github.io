document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.burger').addEventListener('click', (e) => {
        let menu = document.querySelector('.mobile-nav');
        e.target.classList.toggle('open');
        if (e.target.classList.contains('open')) {
            menu.classList.add('visible');
        } else {
            menu.classList.remove('visible');
        }
    });
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            let active = document.querySelectorAll('.nav-link.active');
            active.forEach((activeLink) => {
                activeLink.classList.remove('active');
            });
            if (!link.classList.contains('active')) {
                let hash = link.getAttribute('href');
                document.querySelectorAll(`a[href="${hash}"]`).forEach((a) => {
                    a.classList.add('active');
                });
            }
        })
    });
    window.addEventListener('resize', () => {
        let burger = document.querySelector('.burger');
        let mobileNav = document.querySelector('.mobile-nav');
        if ((burger.classList.contains('open')) && (mobileNav.classList.contains('visible'))) {
            burger.classList.remove('open');
            mobileNav.classList.remove('visible');
        }
        if (window.innerWidth < 768) {
            $('.slider').owlCarousel({
                margin:10,
                loop:true,
                nav:true,
                dots:false,
                navText:['<img src="img/arrow.png">','<img src="img/arrow-2.png">'],
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2
                    },
                    768:{
                        items:3
                    }
                }
            })
        } else {
            $('.slider').trigger('destroy.owl.carousel');
        }
    });

    var flag = false;
    var length = 0;
    var requestURL = 'cases.json';
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', requestURL, true);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == "200") {
            var data = JSON.parse(request.responseText);

            flag = true;
            length = data.length;

            for (let i in data) {
                let img = ``;
                let text = `<p class="text">${data[i].text}</p>`;
                let el = document.createElement('div');
                el.classList.add('cases-items-wrap');
                if (data[i].img != "") {
                    img = `
                            <div class="image">
                                <img src="img/${data[i].img}" class="case_image" alt="news_1">
                            </div>    
                            `;
                    text = ``;
                }
                let html = `
                                <div class="cases-items">
                                    ${img}
                                    <div class="cases-items-item">
                                        <p class="date">${data[i].date}</p>
                                        <h3 class="title">${data[i].title}</h3>
                                        ${text}
                                    </div>
                                    <a href="#id=${data[i].id}" class="read-more">
                                        <p>Читать полностью</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="13" viewBox="0 0 39 13">
                                            <path fill="#7F8D9C" fill-rule="nonzero" d="M36.976 7H.5a.5.5 0 0 1 0-1h36.324l-5.959-4.172a.5.5 0 0 1 .5-.866l7.393 5a.5.5 0 0 1 .242.522.552.552 0 0 1-.006.093.5.5 0 0 1-.236.549l-7.393 5a.5.5 0 0 1-.5-.866L36.975 7z"/>
                                        </svg>
                                    </a>
                                </div>                    
                            `;
                el.innerHTML = html;
                document.querySelector('.cases .row').appendChild(el);
            }
            console.log('Cases were loaded successfully.');
        }
    }
    request.send(null);
    setTimeout(() => {
        if (((!flag) && (length == 0)) || ((request.readyState != 4 && request.status != "200"))) {
            let el = document.createElement('div');
            el.classList.add('cases-items-wrap', 'col-12');
            let html = `
                                <div class="cases-items error">
                                    <div class="cases-items-item">
                                        <h3 class="title">Кейсы в данный момент отсутствуют</h3>
                                    </div>
                                </div>                    
                        `;
            el.innerHTML = html;
            document.querySelector('.cases .row').appendChild(el);
            console.log('Cases file are not found...');
        }
        if (window.innerWidth < 768) {
            $('.slider').owlCarousel({
                margin:10,
                loop:true,
                nav:true,
                dots:false,
                navText:['<img src="img/arrow.png">','<img src="img/arrow-2.png">'],
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2
                    },
                    768:{
                        items:3
                    }
                }
            })
        } else {
            $('.slider').trigger('destroy.owl.carousel');
        }
        document.querySelector('.form input[type="submit"]').addEventListener('click', (e) => {
            e.preventDefault();
        })
    }, 100);
});
window.addEventListener('scroll', () => {
    let target = this.pageYOffset;
    let scrollHead = document.querySelector('.head-scroll');
    if (target > 100) {
        scrollHead.classList.add('scrolled');
    } else {
        scrollHead.classList.remove('scrolled');
    }
});

