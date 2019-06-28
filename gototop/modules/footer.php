<?php

$link = mysqli_connect('localhost', 'root', '', '21_03_2019_Bychkov');
mysqli_set_charset($link, 'utf8');
$template = [
    'errors' => [],
    'news' => [],
    'contacts' => []
];
$contacts = [];

$query = 'SELECT * FROM `contacts`';
$result = mysqli_query($link, $query);
$rows = mysqli_num_rows($result);
if (isset($rows)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $template['contacts'][] = $row;
        $contacts[] = $row;
    }
    // foreach ($row = mysqli_fetch_assoc($result) as $key => $value) {
    //     $contacts[] = [
    //         $key => $value
    //     ];
    // }
} else {
    $template['errors'][] = 'Новостей НЕТ';
}


$query = 'SELECT * FROM `news`';
$result = mysqli_query($link, $query);
$rows = mysqli_num_rows($result);
if (isset($rows)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $template['news'][] = $row;
    }
} else {
    $template['errors'][] = 'Новостей НЕТ';
}

?>
<footer class="mainfooter" id="contacts">
    <div class="mainfooter-wrap">
        <div class="mainfooter-social content">
            <div class="mainfooter-social-item _aboutus">
                <h4>О НАС</h4>
                <p>
                    Мы оказываем всестороннюю помощь компаниям и физическим лицам —
                    собственникам веб-ресурсов, которые готовы использовать сайт, как
                    эффективный рекламный инструмент, позволяющий развивать бизнес.
                </p>
            </div>
            <div class="mainfooter-social-item _news">
                <h4>ЧИТАЙТЕ В НОВОСТЯХ</h4>
                <?php foreach ($template['news'] as $key => $value) : ?>
                <a href="#"><?= $value['head'] ?></a><br />
                <?php endforeach; ?>
            </div>
            <div class="mainfooter-social-item _contact">
                <h4>КОНТАКТЫ</h4>
                <a href="#"><img src="/icon/placeholder.png"
                        alt="place" /><?= $template['contacts'][0]['adress']; ?></a><br />
                <a href="#"><img src="/icon/telephone.png"
                        alt="phone" /><?= $template['contacts'][0]['phone']; ?></a><br />
                <a href="mailto:info@gototop.com"><img src="/icon/mail.png"
                        alt="mail" /><?= $template['contacts'][0]['email']; ?></a>
            </div>
        </div>
    </div>
</footer>
<footer class="mainfooter-rights">
    <div class="mainfooter-rights-wrap">2018 Все права защищены</div>
</footer>

</body>

</html>