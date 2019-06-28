<?php
$title = "My page";
include($_SERVER['DOCUMENT_ROOT'] . '/modules/header.php');
include('modules/functions.php');
include('modules/navmenu.php');

?>


<section class="mainpicture">
    <div class="slider">
        <div class="slider-film">
            <div class="slider-item"></div>
            <div class="slider-item"></div>
            <div class="slider-item"></div>
            <div class="slider-item"></div>
            <div class="slider-item"></div>
        </div>
    </div>

    <div class="mainpicture-wrap">
        <div class="mainpicture-wrapper">
            <div class="previous button focus"></div>
            <div class="mainpicture-text">
                <h1>ВАШ САЙТ - ГЛАВНЫЙ БИЗНЕС-ИНСТРУМЕНТ</h1>
                <p>GO TO TOP - Ваш быстрый старт продаж</p>
                <p class="focus" id="button-aboutus">о нас</p>
            </div>
            <div class="next button focus"></div>
        </div>
    </div>
</section>
<div class="wrapper">
    <section class="maininfo" id="info">
        <div class="maininfo-item">
            <img src="/icon/computer.png" alt="computer" />
            <h2>СОЗДАДИМ ПРОДАЮЩИЙ САЙТ</h2>
            <p>
                Нету сайта? Не беда. Наши специалисты разработают оптимизированный
                продающий сайт для Вашей компании в минимальные сроки.
            </p>
        </div>
        <div class="maininfo-item">
            <img src="icon/networking2.png" alt="" />
            <h2>ВЫБЕРЕМ АУДИТОРИЮ</h2>
            <p>
                Составим аудиторию Ваших потенциальных клиентов для качественных
                продаж.
            </p>
        </div>
        <div class="maininfo-item">
            <img src="icon/settings.png" alt="settings" />
            <h2>НАСТРОИМ СТАТИСТИКУ</h2>
            <p>
                Настроим статистику сайта, будем анализировать действия
                пользователей и улучшать функционал.
            </p>
        </div>
        <div class="maininfo-item">
            <img src="icon/networking.png" alt="networking" />
            <h2>РАЗОВЬЕМ СОЦ.СЕТИ</h2>
            <p>
                Для качественных продаж крайне необходимо вести активную
                деятельность в социальных сетях. Наши специалисты комплексно
                подойдут к вопросу привлечения клиентов через соц.сети.
            </p>
        </div>
        <div class="maininfo-item">
            <img src="icon/laptop.png" alt="laptop" />
            <h2>МИНИМИЗИРУЕМ БЮДЖЕТ</h2>
            <p>
                Главное не тратить деньги в пустую. Мы следим за тем, какая реклама
                дает максимальный результат и стремимся найти самые активные точки
                продаж для минимизации рекламного бюджета.
            </p>
        </div>
        <div class="maininfo-item">
            <img src="icon/startup.png" alt="startup" />
            <h2>ПРИВЛИЧЕМ КЛИЕНТОВ</h2>
            <p>
                Наша цель - максимальное количество клиентов для Ваших продаж. Мы
                работаем по всем направлениям в интернет-маркетинге для того, что-бы
                найти именно Ваших потенциальных клиентов!
            </p>
        </div>
    </section>
</div>
<section class="content_head">
    <div class="content_head-wrap">
        <p>хотите начать зарабатывать в интернете? просто свяжитесь с нами.</p>
        <p class="focus" id="button-connect">связаться</p>
    </div>
</section>
<div class="wrapper">
    <section class="lastworks">
        <h3>ПОСЛЕДНИЕ РАБОТЫ</h3>
        <div class="lastworks-items content mediacontent">
            <img src="images/site1.jpg" alt="site" />
            <img src="images/site2.jpg" alt="site" />
            <img src="images/site3.jpg" alt="site" />
        </div>
    </section>
</div>
<section class="numbers">
    <div class="numbers-wrap">
        <div class="numbers-item">
            <h2>456</h2>
            <span>СЧАСТЛИВЫХ КЛИЕНТОВ</span>
        </div>
        <div class="numbers-item">
            <h2>322</h2>
            <p>ПРОЕКТА</p>
        </div>
        <div class="numbers-item">
            <h2>290</h2>
            <p>САЙТОВ В ТОП</p>
        </div>
        <div class="numbers-item">
            <h2>132</h2>
            <p>САЙТА РАЗРАБОТАНО</p>
        </div>
    </div>
</section>
<div class="wrapper">
    <section class="news" id="news">
        <h3>НОВОСТИ</h3>
        <div class="news-items content mediacontent">
            <div class="news-items-first">
                <img src="images/news1.jpg" alt="news" />
                <div class="news-items-first _newscontent">
                    <p><i>1 января 2018</i></p>
                    <p>
                        Мы начинаем этот год с наших новых разработок в области
                        маркетинга. Ждем вас на наших тренингах и лециях.
                    </p>
                    <a href="/pages/news-1.php">подробнее</a>
                </div>
            </div>
            <div class="news-items-first">
                <img src="images/news2.jpg" alt="news" />
                <div class="news-items-first _newscontent">
                    <p><i>12 марта 2018</i></p>
                    <p>
                        Мы работаем, вы отдыхаете! Теперь мы предоставляем полный спектр
                        услуг по привличению клиентов.
                    </p>
                    <a href="/pages/news-2.php">подробнее</a>
                </div>
            </div>
        </div>
    </section>
</div>
<section class="forms">
    <div class="forms-wrap">
        <h3>напишите нам</h3>
        <form method="POST" action="handlers/form.php" class="forms-items">
            <div class="forms-items-first">
                <input name="fio" type="text" placeholder="ФИО" />
                <input name="email" type="email" placeholder="Email" />
                <input name="phone" type="tel" placeholder="Телефон" />
                <div class="services">
                    <div class="services-item">
                        <label>Заказать сайт<input id="site" type="checkbox" value="site" name="usluga[]"></label>
                    </div>
                    <div class="services-item">
                        <label>Настроить статистику<input id="stat" type="checkbox" value="stat" name="usluga[]"></label>
                    </div>
                    <div class="services-item">
                        <label>Привлечь клиентов<input id="clients" type="checkbox" value="clients" name="usluga[]"></label>
                    </div>
                </div>
                <input type="submit" value="отправить вопрос" />
            </div>
            <div class="forms-items-first">
                <textarea name="message" type="text" placeholder="Ваше сообщение"></textarea>
            </div>
        </form>
    </div>
</section>

<script src="/js/vanilla.js"></script>
<script src="/js/jquery-3.4.0.min.js"></script>
<script src="/js/script.js"></script>
<script src="/js/slider.js"></script>


<?php include('modules/footer.php') ?>