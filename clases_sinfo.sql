-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2024 a las 16:40:56
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clases_sinfo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregable_1`
--

CREATE TABLE `entregable_1` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `correo` text NOT NULL,
  `population` text NOT NULL,
  `sexo` text NOT NULL,
  `description` text NOT NULL,
  `novedades` text NOT NULL,
  `termino` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `entregable_1`
--

INSERT INTO `entregable_1` (`id`, `nombre`, `apellido`, `correo`, `population`, `sexo`, `description`, `novedades`, `termino`) VALUES
(1, 'Trodi', 'Blog', 'trodi@gmail.com', 'Alicante', 'hombre', 'Hola, bienvenidos a este canal de Youtube', '1', '1'),
(2, 'Mundo', 'hola', 'hola_mundo@gmail.com', 'Alicante', 'hombre', 'Hola, bienvenidos a este canal de Youtube', '1', '1'),
(3, 'Hello', 'World', 'helllo_world@gmail.com', 'Alicante', 'hombre', 'Hello world', '1', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entregable_1`
--
ALTER TABLE `entregable_1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `entregable_1`
--
ALTER TABLE `entregable_1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
