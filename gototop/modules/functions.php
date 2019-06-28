<?php
// implode - превращение массива в строку 
// explode - превращение строки в массив




// отображение массивов на странице
function d($array)
{
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}
//добавление записи в таблицу
function addOrder()
{ }

function data_convert($data)
{
    $year = array(
        '01' =>  'января',
        '02' =>  'февраля',
        '03' =>  'марта',
        '04' =>  'апреля',
        '05' =>  'мая',
        '06' =>  'июня',
        '07' =>  'июля',
        '08' =>  'августа',
        '09' =>  'сентября',
        '10' =>  'октября',
        '11' =>  'ноября',
        '12' =>  'декабря'
    );

    d($year);
    $date = explode('-', $data);
    d($date[1]);

    foreach ($year as $key => $value) {
        if ($date[1] == $key) {
            $new_date = $date[2] . ' ' . $value . ' ' . $date[0];
            echo $new_date;
            break;
        }
    }
}

function array_summ($a, $b, $c, $d, $e)
{
    $summ = 0;
    $array = array($a, $b, $c, $d, $e);
    foreach ($array as $key => $value) {
        $summ = $summ + $value;
    }
    echo $summ;
}

function summa_1()
{
    $i = $sum = 1;
    while ($i != 112) {
        $i = $i + 3;
        $sum = $sum + $i;
    }
    echo $sum;
}

function summa_2($a, $b)
{
    $sum = 0;
    if ($a <= $b) {
        for ($i = $a; $i <= $b; $i++) {
            $sum = $sum + $i;
        }
        echo $sum;
    } else {
        echo "Сумма не существует!";
    }
}