<?php
declare(strict_types=1);

use DI\ContainerBuilder;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\UidProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Mustache_Engine as Mustache_Engine;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        LoggerInterface::class => function (ContainerInterface $c) {
            $settings = $c->get('settings');

            $loggerSettings = $settings['logger'];
            $logger = new Logger($loggerSettings['name']);

            $processor = new UidProcessor();
            $logger->pushProcessor($processor);

            $handler = new StreamHandler($loggerSettings['path'], $loggerSettings['level']);
            $logger->pushHandler($handler);

            return $logger;
        },
        Mustache_Engine::class => function (ContainerInterface $c) {
            $path_to_statics= "/";

            if ($_ENV["PRODUCTION"] != 'false'){
                $path_to_statics= "/easymd/public/";
            }
            $mustache = new Mustache_Engine(array(
                'template_class_prefix' => '__MyTemplates_',
                'cache' => __DIR__.'/../tmp/cache/mustache',
                'cache_file_mode' => 775, // Please, configure your umask instead of doing this :)
                'cache_lambda_templates' => true,
                'loader' => new Mustache_Loader_FilesystemLoader(__DIR__.'/../templates'),
                'partials_loader' => new Mustache_Loader_FilesystemLoader(__DIR__.'/../templates'),
                'helpers' => array(
                    "path_to_statics" => $path_to_statics
                ),
                'escape' => function($value) {
                    return htmlspecialchars($value, ENT_COMPAT, 'UTF-8');
                },
                'charset' => 'ISO-8859-1',
                //'logger' => new Mustache_Logger_StreamLogger('php://stderr'),
                'strict_callables' => true,
                'pragmas' => [Mustache_Engine::PRAGMA_FILTERS],
            ));
            return $mustache;
        }
    ]);
};
