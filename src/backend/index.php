<?php require __DIR__ . '/vendor/autoload.php';
require __DIR__. '/Controllers/UserController.php';
require __DIR__. '/Controllers/TeachersController.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: *");

$userController = new UserController();
$teachersController = new TeachersController();
$routes = array(
    ['path' => '/register', 'method' => 'POST', 'callback' => function () use ($userController) { return $userController->register();}],
    ['path' => '/login', 'method' => 'POST', 'callback' => function () use ($userController) { return $userController->login();}],
    ['path' => '/users', 'method' => 'GET', 'callback' => function () use ($userController) { return $userController->getAll();}],
    ['path' => '/teachers', 'method' => 'GET', 'callback' => function () use ($teachersController) { return $teachersController->getTeachers();}],
    ['path' => '/users/search','method' => 'POST', 'callback' => function () use ($userController) { return $userController->findUser();}]
);

$route = array_filter($routes,function($route) { // находим маршрут по запрашиваемом URI
    return $route['path'] == $_SERVER['REQUEST_URI'] && $route['method'] == $_SERVER['REQUEST_METHOD'];
});



call_user_func(array_pop($route)['callback']); // вызываем коллбэк, указанный в массиве 
?>