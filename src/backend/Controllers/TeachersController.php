<?php 
require_once __DIR__ .'/Database.php';
class TeachersController {
    public function __construct() {
        $this->connection = new DbConnection();
    }
    public function getTeachers() {
        $teachers = $this->connection->execute("SELECT * from teachers");
        echo json_encode($teachers);
    }
}