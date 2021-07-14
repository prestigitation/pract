<?php require __DIR__ . '/vendor/autoload.php';
require __DIR__. '/Controllers/UserController.php';
require __DIR__. '/Controllers/TeachersController.php';
require __DIR__. '/Controllers/RolesController.php';
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Methods: GET, POST, PATCH',DELETE");

header("Access-Control-Allow-Headers: *");

$userController = new UserController();
$teachersController = new TeachersController();
$rolesController = new RolesController();
$routes = array(
    ['path' => '/register', 'method' => 'POST', 'callback' => function () use ($userController) { return $userController->register();}],
    ['path' => '/login', 'method' => 'POST', 'callback' => function () use ($userController) { return $userController->login();}],
    
    
    ['path' => '/users', 'method' => 'GET', 'callback' => function () use ($userController) { return $userController->getAll();}],
    ['path' => '/users/roles','method' => 'POST', 'callback' => function () use ($rolesController) { return $rolesController->attachRole();}],
    ['path' => '/users/search','method' => 'POST', 'callback' => function () use ($userController) { return $userController->findUser();}],
    ['path' => '/users/role','method' => 'POST', 'callback' => function () use ($rolesController) {return $rolesController->checkAdmin();}],
    ['regex' => "@.users.\d{0,60}@",'method' => 'GET','callback' => function () use($userController) { return $userController->findUserById();}],
    ['regex' => "@.users.\d{0,60}@",'method' => 'POST','callback' => function () use($userController) { return $userController->changeUserData();}],
    
    ['path' => '/teachers/search','method' => 'POST', 'callback' => function() use($teachersController) { return $teachersController->searchOne();}],
    ['path' => '/teachers', 'method' => 'GET', 'callback' => function () use ($teachersController) { return $teachersController->getTeachers();}],
    ['path' => '/teachers/update','method' => 'POST','callback' => function() use($teachersController) {return $teachersController->updateOne();}],
    ['path' => '/teachers/create','method' => 'POST','callback' => function() use($teachersController) {return $teachersController->createOne();}],
    ['regex' => '@.teachers.\d{0,60}@','method' => "DELETE", 'callback' => function() use($teachersController) {return $teachersController->deleteOne();}],

    ['path' => '/roles','method' => 'GET', 'callback' => function() use ($rolesController) {return $rolesController->getAll();}]
);

$route = array_filter($routes,function($route) { // находим маршрут по запрашиваемом URI
    return (isset($route['path'])) 
    ? 
    ($route['path'] == $_SERVER['REQUEST_URI'] && $route['method'] == $_SERVER['REQUEST_METHOD']) 
    : false 
    
    ||  (isset($route['regex'])
    
    ?
    (preg_match($route['regex'],$_SERVER['REQUEST_URI']) && $route['method'] == $_SERVER['REQUEST_METHOD']) 
    : false);
});




call_user_func(array_shift($route)['callback']); // вызываем коллбэк, указанный в массиве 
?>