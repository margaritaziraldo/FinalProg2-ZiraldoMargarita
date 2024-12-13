-- Crear la base de datos
CREATE DATABASE seleccion;

-- Usar la base de datos
USE seleccion;

-- Crear la tabla equipos
CREATE TABLE teams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreClub VARCHAR(100) UNIQUE
);

-- Insertar los datos en la tabla equipos
INSERT INTO teams (nombreClub) VALUES
('Inter Miami CF'),
('Benfica'),
('Aston Villa'),
('Atlético de Madrid'),
('Manchester City'),
('Chelsea'),
('Tottenham Hotspur'),
('Manchester United');

-- Crear la tabla jugadores
CREATE TABLE players (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    foto VARCHAR(100),
    posicion VARCHAR(50),
    idEquipo INT,
    FOREIGN KEY (idEquipo) REFERENCES teams(id)
);

-- Insertar los datos en la tabla jugadores
INSERT INTO players (id, nombre, apellido, foto, posicion, idEquipo) VALUES
(1, 'Lionel', 'Messi', 'messi.jpg', 'delantero', 1),
(2, 'Ángel', 'Di María', 'fideo.jpg', 'delantero', 2),
(3, 'Emiliano', 'Martínez', 'dibu.jpg', 'portero', 3),
(4, 'Nicolás', 'Otamendi', 'ota.jpg', 'defensa', 2),
(5, 'Rodrigo', 'De Paul', 'depaul.jpg', 'mediocampista', 4),
(6, 'Julián', 'Álvarez', 'juli.jpg', 'delantero', 5),
(7, 'Enzo', 'Fernández', 'enzo.jpg', 'mediocampista', 6),
(8, 'Nahuel', 'Molina', 'nahuel.jpg', 'defensa', 4),
(9, 'Cristian', 'Romero', 'cuti.jpg', 'defensa', 7);
