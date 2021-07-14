<?php 
require_once __DIR__ .'/Database.php';
class TeachersController {
    public function __construct() {
        $this->connection = new DbConnection();
    }
    public function getTeachers() {
        $teachers = $this->connection->execute("SELECT * from teachers");
        echo json_encode((array) $teachers);
    }

    public function searchOne() {
        $teacher = $this->connection->execute("SELECT * from teachers WHERE ".$_POST['searchType']." ='".$_POST['search']."' LIMIT 1");
        echo json_encode($teacher);
    }

    public function updateOne() {
        if($_POST['position'] || $_POST['name'] || $_POST['surname']) {
            $req = "UPDATE teachers SET ";
            if(isset($_POST['position'])) {
                if(isset($_POST['name']) || isset($_POST['surname'])) {
                    $req.=" position = '".$_POST['position']."', ";
                } else {
                    $req.=" position = '".$_POST['position']."' ";
                }
            }
            if(isset($_POST['name'])) {
                if(isset($_POST['surname'])) {
                    $req.=" name = '".$_POST['name']."', ";
                } else {
                    $req.=" name = '".$_POST['name']."' ";
                }
            }
            if(isset($_POST['surname'])) {
                $req.=" surname = '".$_POST['surname']."' ";
            }

            $req.=" WHERE id=".$_POST['teacher_id'];
        }
        $conn = $this->connection->execute($req);
        $avatarsDestination = __DIR__."/../../../public/teachers/";
        if(isset($_FILES['avatar'])) {
            move_uploaded_file($_FILES['avatar']['tmp_name'],$avatarsDestination.(int)$_POST['teacher_id']['id'].".jpeg");
        }
        echo json_encode($conn);
    }

    public function createOne() {
        $conn = $this->connection->execute("
        INSERT INTO teachers(`surname`,`name`,`position`) VALUES 
        ('".$_POST['surname']."','".$_POST['name']."','".$_POST['position']."')");
    }

    public function deleteOne() {
        $uri = $_SERVER['REQUEST_URI'];
        $deletedId = mb_substr($uri,strripos($uri,'/') + 1);// парсим id из строки запроса и вытаскиваем из нее id
        $conn = $this->connection->execute("DELETE FROM teachers WHERE id = $deletedId");
        return $conn;
    }
}