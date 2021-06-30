<?php
require __DIR__ .'/Database.php';
class UserController {
    private $login;
    private $password;
    private $connection;
    private $phone;
    private $FIO;
    public function __construct() {
        $this->phone = $_POST['phone'] ?? null;
        $this->FIO = $_POST['FIO'] ?? null;
        $this->login = $_POST['login'] ?? null;
        $this->password = $_POST['password'] ?? null;
        $this->email = $_POST['email'] ?? null;
        $this->connection = new DbConnection();
    }
    // параметры, получаемые по умолчанию
    public function register() {
        //var_dump($_REQUEST);
        try {
            $conn = $this->connection->execute("INSERT INTO users(login,email,password,FIO,phone) VALUES ('".$this->login."','".$this->email."',"."'".password_hash($this->password, PASSWORD_DEFAULT)."','".$this->FIO."',"."'".$this->phone."');");
            if($conn) { // если запрос успешно выполнился, достаем последний элемент из таблицы и отдаем его
                $user = $this->connection->execute("SELECT id,login,email FROM `users` ORDER BY id DESC LIMIT 1");
                echo json_encode($user);
            }
        } catch(Exception $e) {
            throw new Exception($e);
            die(); 
        }
    }
}
?>