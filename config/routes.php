<?php

use Cake\Core\Plugin;
use Cake\Routing\Router;

Router::defaultRouteClass('DashedRoute');

Router::scope('/', function ($routes) {
//    $routes->connect('/', ['controller' => 'Pages', 'action' => 'display', 'home']);
//    $routes->connect('/pages/*', ['controller' => 'Pages', 'action' => 'display']);
    $routes->redirect('/*', ['prefix'=>'admin']);
});

Router::prefix('admin', function ($routes) {
    $routes->connect('/', ['plugin' => 'System', 'controller' => 'Dashboard', 'action' => 'index']);
    $routes->connect('/:controller', ['action' => 'index']);
    $routes->connect('/:plugin/:controller', ['action' => 'index']);
    $routes->connect('/:plugin/:controller/:action/*');
});

Plugin::routes();




