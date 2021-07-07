<?php
require_once __DIR__ .'/Database.php';
class RolesController {
    public function __construct() {
        $this->connection = new DbConnection();
    }

    public function getAll() {
        $query = $this->connection->execute('SELECT * from roles');
        echo json_encode($query);
    }

    public function attachRole() {
        $role_id =(int) $_POST['role_id'];
        $user_id =(int) $_POST['user_id'];
        $query = $this->connection->execute("UPDATE users SET role_id = ".$role_id." WHERE id = ".$user_id);
        echo json_encode($query);
    }

    public function checkAdmin() {
        var_dump($_REQUEST);
    }
}