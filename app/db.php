<?php
declare(strict_types=1);

use DI\Container;
require __DIR__ . '/../redbean/rb.php';

return function (Container $container) {
    $settings = $container->get('settings');
    $settings = $settings["db"];

    R::setup(
        'mysql:host=' . $settings['host'] . ';dbname=' . $settings['dbname'],
        $settings['user'],
        $settings['password']
    );
};