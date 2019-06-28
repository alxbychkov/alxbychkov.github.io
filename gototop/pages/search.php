<?php

$title = "Search form";
include('../modules/functions.php');
include('../modules/header.php');
include('../modules/navmenu.php');

$link = mysqli_connect('localhost', 'root', '', '21_03_2019_Bychkov');
mysqli_set_charset($link, 'utf8');

$template = [
    'errors' => [],
    'users' => []
];

if (isset($_GET['search'])) {
    $name = $_GET['search'];
    if ($name != '') { // !empty($name)
        $query = "SELECT * FROM `users` WHERE `email` LIKE '%{$name}%'
        OR `name` LIKE '%{$name}%'
        OR `phone` LIKE '%{$name}%'";
        $result = mysqli_query($link, $query);
        $rows = mysqli_num_rows($result);
        if ($rows == 0) {
            $template['errors'][] = 'Пользователь не найден';
        } else {
            while ($row = mysqli_fetch_assoc($result)) {
                // $template['users'][] = mysqli_fetch_assoc($result);
                // $rows--;
                $template['users'][] = $row;
            }
        }
    } else {
        $template['errors'][] = 'Вы ничего не ввели';
    }
}

?>
<div class="search wrapper">
    <form method="GET" class="form">
        <input type="text" placeholder="What?" name="search">
        <input type="submit" value="Search">
    </form>
    <div class="search-info">
        <?php
        d($template['users']);
        // if (!empty($template['users'])) {
        //     foreach ($template['users'] as $index => $value) {
        //         echo $value;
        //     }
        // }

        ?>
        <h2>Результаты поиска:</h2>
        <?php foreach ($template['users'] as $key => $value) : ?>
            <div class="table" style="display: table">
                <div class="table-row" style="display: table-row">
                    <div class="table-cell" style="display: table-cell; border: 1px solid black; padding: 7px">
                        <?= $key + 1 ?></div>
                    <div class="table-cell" style="display: table-cell; border: 1px solid black; padding: 7px">
                        <?= $value['name'] ?>
                    </div>
                    <div class="table-cell" style="display: table-cell; border: 1px solid black; padding: 7px">
                        <?= $value['email'] ?></div>
                    <div class="table-cell" style="display: table-cell; border: 1px solid black; padding: 7px">
                        <?= $value['phone'] ?></div>
                </div>
            </div>
        <? endforeach; ?>
    </div>
</div>
<?php include('../modules/footer.php'); ?>