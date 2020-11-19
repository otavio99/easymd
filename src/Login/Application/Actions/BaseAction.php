<?php
declare(strict_types=1);

namespace App\Login\Application\Actions;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Mustache_Engine as Mustache_Engine;
use Psr\Log\LoggerInterface;

class BaseAction
{
   protected $container;

   protected $mustache;

   protected $logger;

   public function __construct(ContainerInterface $container, Mustache_Engine $mustache, LoggerInterface $logger)
   {
       $this->container = $container;
       $this->mustache = $mustache;
       $this->logger = $logger;
   }
}