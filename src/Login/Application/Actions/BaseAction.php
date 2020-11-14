<?php
declare(strict_types=1);

namespace App\Login\Application\Actions;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Mustache_Engine as Mustache_Engine;

class BaseAction
{
   protected $container;

   protected $mustache;

   public function __construct(ContainerInterface $container, Mustache_Engine $mustache)
   {
       $this->container = $container;
       $this->mustache = $mustache;
   }
}