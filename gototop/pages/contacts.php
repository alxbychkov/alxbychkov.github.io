<?php
$title = "Contacts";
$texthead = "GO TO TOP";
$text = "GO TO TOP - Ваш быстрый старт продаж";
$undertext = "-КОНТАКТЫ-";
$picture = "back44.png";
include('../modules/header.php');
include('../modules/navmenu.php');
include('../modules/mainpicture.php');
?>



<section class="forms">
    <div class="forms-wrap">
        <h3>О компании</h3>
        <div class="text">
            <p>
                Стимулирование и увеличение продаж – именно такую конечную цель мы
                ставим себе при разработке стратегии продвижения сайтов в поисковых
                системах.
            </p>

            <p>В рамках этого подхода мы решаем следующие задачи:</p>

            <p>подбор качественных ключевых запросов;</p>
            <p>
                увеличение видимости сайта в поисковых системах; продвижение сайта в
                ТОП-10 по стратегически важным ключевым запросам; увеличение
                естественного целевого трафика из поисковых систем; увеличение
                конверсии на посадочных страницах.
            </p>

            <p>
                Основным в разработке стратегии продвижения является создание
                индивидуального решения, максимально соответствующего
                технологическим возможностям и внешним факторам вашего сайта.
            </p>

            <p>
                В управлении проектами мы придерживаемся строгого планирования и
                контроля задач. Технология работы по каждому проекту доступна
                клиентам в нашей информационной системе.
            </p>

            <p>
                Мы считаем, что добиться успеха можно только при условии полного
                понимания всех ключевых элементов проекта. Поэтому мы всегда на
                связи со своими клиентами, регулярные встречи и конструктивные
                диалоги – приоритетный элемент нашего сотрудничества.
            </p>

            <p>
                Стратегия, основанная на взаимовыгодном партнерстве, очень важна для
                нас. Прозрачность финансовых расчетов и их простота создает
                доверительные и долгосрочные отношения.
            </p>

            <p>
                Мы не работаем со сложными системами оплаты с обеспечительными
                платежами, предоплатой и последующими перерасчетами. Все расчеты
                производятся в конце месяца по факту выполненных работ и на
                основании фактически достигнутых показателей.
            </p>
        </div>
    </div>
</section>

<div class="wrapper">
    <section class="news" id="news">
        <h3>Свяжитесь с нами</h3>
        <div class="news-items content mediacontent">
            <div class="news-items-first _contactpage">
                <img src="../images/elena.png" alt="news" />
                <div class="news-items-first _newscontent">
                    <p>
                        <b>Елена Белкина</b><br />

                        <span>директор</span>
                    </p>
                    <p>
                        по вопросам сотрудничества: <br />
                        <a href="mailto:belkina@gototop.ru">belkina@gototop.ru</a>
                    </p>
                </div>
            </div>
            <div class="news-items-first _contactpage">
                <img src="../images/dmitry.png" alt="news" />
                <div class="news-items-first _newscontent">
                    <p>
                        <b>Дмитрий Рогозин</b><br />

                        <span>директор отдела продаж</span>
                    </p>
                    <p>
                        по вопросам развития бизнеса: <br />
                        <a href="mailto:rogozin@gototop.ru">rogozin@gototop.ru</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>

<section class="forms _contactpage">
    <div class="forms-wrap">
        <form method="GET" action="../handlers/form.php" class="forms-items">
            <div class="forms-items-first mainfooter-social-item" id="contact">
                <a href="#">
                    <div class="contact-item metka"></div>
                    <span>Адрес:<br />Москва, Большая Спасская 12</span>
                </a><br />
                <a href="#">
                    <div class="contact-item phone"></div>
                    <span>Телефон:<br />8 (495) 626-46-00</span>
                </a><br />
                <a href="#">
                    <div class="contact-item mail"></div>
                    <span>Email:<br />info@gototop.com</span>
                </a>
            </div>
            <div class="forms-items-first">
                <h3>напишите нам</h3>
                <input name="fio" type="text" placeholder="ФИО" />
                <input name="email" type="email" placeholder="Email" />
                <textarea name="message" type="text" placeholder="Ваше сообщение"></textarea>
                <input type="submit" value="отправить вопрос" />
            </div>
        </form>
    </div>
</section>

<section class="maps-wrap">
    <div class="map"></div>
</section>

<script src="../js/jquery-3.4.0.min.js"></script>
<script src="../js/script.js"></script>

<?php include('../modules/footer.php') ?>