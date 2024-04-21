<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $conn = mysqli_connect('localhost', 'root', '', 'clases_sinfo');
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $firstName = $data['firstName'];
    $correo = $data['correo'];
    $population = $data['population'];
    $radio = $data['radio'];
    $textArea = $data['textArea'];
    $novedades = isset($data['novedades']) ? 1 : 0;
    $termino = isset($data['termino']) ? 1 : 0;


    $sql_check = $conn->prepare('SELECT COUNT(*) AS count FROM entregable_1 WHERE nombre = ? AND apellido = ? AND correo = ?');
    $sql_check->bind_param('sss', $name, $firstName, $correo);
    $sql_check->execute();
    $result_check = $sql_check->get_result();
    $row = $result_check->fetch_assoc();
    $count = $row['count'];

    if ($count > 0) {
        showData();
        exit();
    }

    $sql = $conn->prepare('INSERT INTO entregable_1 (nombre, apellido, correo, population, sexo, description, novedades, termino) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    $sql->bind_param('ssssssss', $name, $firstName, $correo, $population, $radio, $textArea, $novedades, $termino);
    $sql->execute();
    showData();
}


function showData()
{
    $conn = mysqli_connect('localhost', 'root', '', 'clases_sinfo');
    $stmt = $conn->prepare('SELECT * FROM entregable_1');
    $stmt->execute();
    $result = $stmt->get_result();

    $arr_data = [];
    while ($row = $result->fetch_assoc()) {
        $arr_temp = [
            'nombre' => $row['nombre'],
            'apellido' => $row['apellido'],
            'email' => $row['correo'],
            'popular' => $row['population'],
            'sexo' => $row['sexo'],
            'description' => $row['description'],
            'nove' => $row['novedades'],
            'ter' => $row['termino'],
        ];
        array_push($arr_data, $arr_temp);
    }

    echo json_encode($arr_data);
}
