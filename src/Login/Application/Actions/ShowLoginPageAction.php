<?php
declare(strict_types=1);

namespace App\Login\Application\Actions;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class ShowLoginPageAction extends BaseAction
{
   public function __invoke(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface
   {
        $page = $this->mustache->render(
			"acesso_publico/home.mustache"
		);
	    $response->getBody()->write($page);

	    return $response;
   }
}