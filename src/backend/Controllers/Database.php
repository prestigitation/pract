<?php
class DbConnection {
    private $hostname;
    private $username;
    private $password;
    private $database;
    private $port;
    private $connection;
    public function __construct() {
        $this->hostname = "localhost";
        $this->username = "root";
        $this->password = "root";
        $this->database = "pract";
        $this->port = "3306";
        $this->connection = $this->connect();
    }
    public function connect() {
        try {
            $connection =new mysqli($this->hostname,$this->username,$this->password,$this->database,$this->port);
            return $connection;
        } catch (Exception $e) {
            throw new Exception('Произошла ошибка подключения к базе данных '. $e);
            die();
        }
    }
    public function execute(string $query) {
        try {
             $result = $this->connection->query($query);
             if(gettype($result) == 'boolean') {
                 return $result;
             } else {
                return mysqli_fetch_assoc($result);
             }
        } catch(Exception $e) {
            throw new Exception($e);
        }
    } 
    
}
?>