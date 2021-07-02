<?php require __DIR__ . '/vendor/autoload.php';
require __DIR__. '/Controllers/UserController.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$userController = new UserController();
$routes = array(
    ['path' => '/register', 'method' => 'POST', 'callback' => function () use ($userController) { return $userController->register();}],
    ['path' => '/login', 'method' => 'POST', 'callback' => function () use ($userController) { return $userController->login();}],
);

$route = array_filter($routes,function($route) { // находим маршрут по запрашиваемом URI
    return $route['path'] == $_SERVER['REQUEST_URI'] && $route['method'] == $_SERVER['REQUEST_METHOD'];
});


call_user_func($route[0]['callback'] ?? $route[1]['callback']); // вызываем коллбэк, указанный в массиве 
?>