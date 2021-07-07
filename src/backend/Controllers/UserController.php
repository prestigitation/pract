<?php
require_once __DIR__ .'/Database.php';
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
    public function login() {
        $conn = $this->connection->execute("SELECT login,id,password FROM users WHERE login="."'".$this->login."' LIMIT 1");
        $user = array_pop($conn);
        $verified_password = password_verify($this->password,$user['password']); // проверяем схожесть хэша с введенным паролем
        if($verified_password) { // если пароль верный, отправляем на клиент данные для хранилища
            echo json_encode([
                'id' => $user['id'],
                'login' => $user['login']
            ]);
        }
    }
    public function getAll() {
        $query = $this->connection->execute("SELECT * from users");
        echo json_encode((array) $query);
    }

    public function findUser() {
        // запрос на роли : select * from users left join roles on users.role_id = roles.id
        $query = $this->connection->execute("select * from users left join (select name as r_name, id as r_id from roles) as rol on rol.r_id=users.role_id WHERE login = '".$_POST['search']."'");
        echo json_encode($query);
    }

    public function findUserById($connection_method='client') { // connection method- куда направляется ответ
        $uri = $_SERVER['REQUEST_URI'];
        $splittedUri = mb_strrpos($uri,'/');
        $userId =(int) mb_substr($uri,$splittedUri+1); // получаем id пользователя путем разбиения с последнего слеша
        $user = $this->connection->execute('SELECT * from users WHERE id='.$userId.' LIMIT 1');
        if($user) {
            if($connection_method=='client') {
                echo json_encode($user[0]);
            } else if($connection_method=='server') {
                return $user[0];
            }
            
        }
    }
    public function changeUserData() {
        // остальные нужные данные находятся в конструкторе
        $newPassword = $_POST['newPassword'];
        $currentPassword = $_POST['currentPassword'];

        $user = $this->findUserById('server');

        $validPassword = password_verify($currentPassword,$user['password']);
        if($validPassword) {
            $updatedPassword = password_hash($newPassword,PASSWORD_DEFAULT);
            $result = "UPDATE users SET ";
            if($this->login) {
                $result .= "login = $this->login, ";
            } else {
                $result.= "login = ".$user['login'].", ";
            }

            if($this->email) {
                $result .= "email = $this->email, ";
            } else {
                $result.= "email = ".$user['email'].", ";
            }

            if($this->FIO) {
                $result .= "FIO = $this->FIO, ";
            } else {
                $result.= "FIO = ".$user['FIO'].", ";
            }

            if($this->phone) {
                $result .= "phone = $this->phone, ";
            } else {
                if($newPassword) {
                    $result .= "password = $updatedPassword, ";
                }
                $result .= "phone = ".$user['phone'];
            }
            $result.=" WHERE id= ".$user['id'];
        }
        

        

        $query = $this->connection->execute($result);
        var_dump($result);
        var_dump($query);

        $avatar = $_FILES['avatar'] ?? null;


    }
}
?>