<?php

$title = "Message form";
include('../modules/functions.php');
include('../modules/header.php');
include('../modules/navmenu.php');

$link = mysqli_connect('localhost', 'root', '', '21_03_2019_Bychkov');
mysqli_set_charset($link, 'utf8');


// d($_POST);
// d($_SERVER);

$error = '';
$services = '';
$user_id = '';
$user = '';
?>

<section class="forms">
    <div class="forms-wrap" style="text-align: center; font-size: 1.3em">
        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (strlen($_POST['fio']) < 50) {
                echo "<p>Здравствуйте, {$_POST['fio']}!</p> ";
                echo "<p>Мы вам обязательно перезвоним по номеру: {$_POST['phone']} и отправим всю информацию на email : {$_POST['email']}.</p>";

                $query = "SELECT * FROM `users` WHERE `email` = '{$_POST['email']}'";
                $result = mysqli_query($link, $query);
                $rows = mysqli_num_rows($result);
                // $query = "INSERT INTO `users` (`id`, `name`, `email`, `phone`) VALUES (NULL, {$_POST['fio']}, {$_POST['email']}, {$_POST['phone']})";

                if ($rows == 0) {
                    $result = mysqli_query($link, "INSERT INTO `users` (`id`, `name`, `email`, `phone`) VALUES (NULL, '{$_POST['fio']}', '{$_POST['email']}', '{$_POST['phone']}')");
                    $user_id = mysqli_insert_id($link);

                    // (SELECT `id` FROM `users` ORDER BY `id` DESC LIMIT 1 )  сортировка в обртаном порядке и берем одну запись
                    if ($result == true) {
                        // echo "Данные успешно сохранены";
                    } else {
                        $error .= "не удалось сохранить данные";
                    }
                } else {
                    $error .= "вы уже есть в базе данных";
                    $result = mysqli_query($link, "SELECT `id` FROM `users` WHERE `email` = '{$_POST['email']}'");
                    $user = mysqli_fetch_array($result);
                    // $user = mysqli_fetch_assoc($result);
                    // $user_id = $user['id'];
                    $user_id = $user[0];
                }

                if (isset($_POST['usluga'])) {
                    foreach ($_POST['usluga'] as $index => $value) {
                        $services = $services . $value  . ' ';
                    }
                }

                // $services = implode(',', $_POST['usluga']); другой способ 

                // date NOW()
                mysqli_query($link, "INSERT INTO `orders` (`id`, `question`, `services`, `user_id`, `date`) VALUES (NULL, '{$_POST['message']}', '$services', $user_id, NOW())");
                // INSERT INTO 'users' ('id', 'name', 'email', 'phone') VALUES (NULL, $_POST['fio'], $_POST['email'], $_POST['phone'])
            } else {
                $error .= ' Incorrect FIO ';
            }
        } else {
            $error .= ' Ata - ta ';
        }
        // echo $error;
        ?>
        <?php if (!empty($_POST['usluga'])) : ?>
            <p>Вы выбрали следующие услуги:</p>
            <div class="uslugi-wrap">

                <?php
                foreach ($_POST['usluga'] as $index => $value) : ?>
                    <?php if ($value == 'site') : ?>
                        <div class="form-item">
                            <img src="/icon/computer.png" alt="computer" />
                            <h2>Заказать сайт</h2>
                        </div>
                    <?php endif; ?>
                    <?php if ($value == 'stat') : ?>
                        <div class="form-item">
                            <img src="/icon/settings.png" alt="settings" />
                            <h2>Настроить статистику</h2>
                        </div>
                    <?php endif; ?>
                    <?php if ($value == 'clients') : ?>
                        <div class="form-item">
                            <img src="/icon/startup.png" alt="startup" />
                            <h2>Привлечь клиентов</h2>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
<?php include('../modules/footer.php'); ?>