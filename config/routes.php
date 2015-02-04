<?php

use Cake\Core\Plugin;
use Cake\Routing\Router;

Router::defaultRouteClass('DashedRoute');

Router::scope('/', function ($routes) {
    $routes->redirect('/*', ['prefix' => 'admin']);
//    $routes->connect('/:controller', ['action' => 'index']);
//    $routes->connect('/:controller/:action/*');
});

Router::prefix('admin', function ($routes) {
    $routes->connect('/', ['plugin' => 'System', 'controller' => 'Dashboard', 'action' => 'index']);
    $routes->connect('/:controller', ['action' => 'index']);
    $routes->connect('/:controller/:action/*');
});

Plugin::routes();