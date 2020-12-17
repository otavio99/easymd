<?php
declare(strict_types=1);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

use App\Login\Application\Actions\ShowLoginPageAction as ShowLoginPageAction;

return function (App $app) {

    $app->get('/', ShowLoginPageAction::class);
    
};
