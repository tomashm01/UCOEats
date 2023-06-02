-- phpMyAdmin SQL Dump
-- version 2.7.0-pl2
-- http://www.phpmyadmin.net
-- 
-- Servidor: oraclepr.uco.es
-- Tiempo de generación: 02-06-2023 a las 17:21:33
-- Versión del servidor: 5.1.73
-- Versión de PHP: 5.3.3
-- 
-- Base de datos: `i92himat`
-- 

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `categorias`
-- 

CREATE TABLE `categorias` (
  `id` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA DE CATEGORIAS';

-- 
-- Volcar la base de datos para la tabla `categorias`
-- 

INSERT INTO `categorias` VALUES ('c112973b-07f2-4e78-9a38-a20587599bba', 'Bebidas');
INSERT INTO `categorias` VALUES ('e37c6a63-772e-40da-b0e6-f644c769521e', 'Bocadillos');
INSERT INTO `categorias` VALUES ('e66e647d-8164-41bc-820a-78fbbc5db368', 'Desayunos');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `pedidos`
-- 

CREATE TABLE `pedidos` (
  `id` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `userID` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `dateCreation` datetime NOT NULL,
  `dateDelivery` datetime NOT NULL,
  `state` enum('creado','preparacion','terminado') COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userID` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA DE PEDIDOS';

-- 
-- Volcar la base de datos para la tabla `pedidos`
-- 

INSERT INTO `pedidos` VALUES ('3055fed8-dac9-4d79-bf21-e17c9f02dd8b', '7f3eef8a-3aac-4606-9774-99835cec30cd', 2, '2023-05-31 12:36:35', '2023-05-31 12:51:35', 'creado');
INSERT INTO `pedidos` VALUES ('787d7aa3-7c35-4805-9f58-899c4d29816c', '7f3eef8a-3aac-4606-9774-99835cec30cd', 1, '2023-05-31 12:36:26', '2023-05-31 12:51:26', 'creado');
INSERT INTO `pedidos` VALUES ('d4ff6f06-af77-4377-87ef-b08e9a77922c', '39063b7c-8e48-4b0d-bc63-1a21b3860e4d', 1, '2023-05-11 14:38:34', '2023-05-11 14:53:34', 'creado');
INSERT INTO `pedidos` VALUES ('de200a46-b6f8-4c4f-a8cd-3be4ed9aafaa', '41f80529-56a8-4d11-a817-5b525c730016', 2, '2023-05-11 14:45:34', '2023-05-11 15:00:34', 'creado');
INSERT INTO `pedidos` VALUES ('ec2a369a-5abd-44e4-9514-68348d29a47d', '7f3eef8a-3aac-4606-9774-99835cec30cd', 2, '2023-06-01 15:48:17', '2023-06-01 16:03:17', 'creado');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `pedidosProducto`
-- 

CREATE TABLE `pedidosProducto` (
  `id` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `deliveryID` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `productID` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `deliveryID` (`deliveryID`),
  KEY `productID` (`productID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA INTERMEDIA PEDIDO-PRODUCTO';

-- 
-- Volcar la base de datos para la tabla `pedidosProducto`
-- 

INSERT INTO `pedidosProducto` VALUES ('5a03f51b-3d9b-42f3-bc85-4524cd13eaf2', '3055fed8-dac9-4d79-bf21-e17c9f02dd8b', '234fcc07-855f-4b06-b083-0807efe80a5f', 1, 20);
INSERT INTO `pedidosProducto` VALUES ('97514eaa-4ab0-489a-a6ae-3165ea5070f0', 'de200a46-b6f8-4c4f-a8cd-3be4ed9aafaa', '234fcc07-855f-4b06-b083-0807efe80a5f', 1, 20);
INSERT INTO `pedidosProducto` VALUES ('9791f22c-f96b-4c81-adf4-03e810fb3211', 'ec2a369a-5abd-44e4-9514-68348d29a47d', '234fcc07-855f-4b06-b083-0807efe80a5f', 1, 20);
INSERT INTO `pedidosProducto` VALUES ('a22a3367-c1f1-43e8-8548-26d8818e35d5', 'ec2a369a-5abd-44e4-9514-68348d29a47d', '4029dcdf-1a53-43cc-b46d-c36b2ee74a7f', 1, 15);
INSERT INTO `pedidosProducto` VALUES ('a92597cb-0d38-4d24-acf4-5c91c6450a90', '3055fed8-dac9-4d79-bf21-e17c9f02dd8b', '4029dcdf-1a53-43cc-b46d-c36b2ee74a7f', 1, 15);
INSERT INTO `pedidosProducto` VALUES ('c3b516d9-b3b6-4c43-b5c5-aa147c9b3e5c', '787d7aa3-7c35-4805-9f58-899c4d29816c', '4029dcdf-1a53-43cc-b46d-c36b2ee74a7f', 1, 15);
INSERT INTO `pedidosProducto` VALUES ('c5529171-38d8-4192-ad96-b4d48972deda', 'de200a46-b6f8-4c4f-a8cd-3be4ed9aafaa', '4029dcdf-1a53-43cc-b46d-c36b2ee74a7f', 1, 15);
INSERT INTO `pedidosProducto` VALUES ('cead1a97-1666-4133-8e4e-c13a0eb9f420', 'd4ff6f06-af77-4377-87ef-b08e9a77922c', '234fcc07-855f-4b06-b083-0807efe80a5f', 1, 20);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `productos`
-- 

CREATE TABLE `productos` (
  `id` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoryID` varchar(64) COLLATE utf8_spanish_ci DEFAULT NULL,
  `imageURL` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryID` (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA DE PRODUCTOS';

-- 
-- Volcar la base de datos para la tabla `productos`
-- 

INSERT INTO `productos` VALUES ('234fcc07-855f-4b06-b083-0807efe80a5f', 'Serranito', 20, 10, 'e37c6a63-772e-40da-b0e6-f644c769521e', 'https://images.pexels.com/photos/133578/pexels-photo-133578.jpeg');
INSERT INTO `productos` VALUES ('4029dcdf-1a53-43cc-b46d-c36b2ee74a7f', 'bocadillo de Jamón', 15, 4, 'e37c6a63-772e-40da-b0e6-f644c769521e', 'https://images.pexels.com/photos/263116/pexels-photo-263116.jpeg');
INSERT INTO `productos` VALUES ('5e383afd-1980-4c3b-8142-2149af02341e', 'Fanta', 1, 20, 'c112973b-07f2-4e78-9a38-a20587599bba', 'https://images.pexels.com/photos/13950097/pexels-photo-13950097.jpeg');
INSERT INTO `productos` VALUES ('e66e647d-8164-41bc-820a-78fbbc5db365', 'Bocadillo Completo XL', 12, 4, 'e37c6a63-772e-40da-b0e6-f644c769521e', 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `usuarios`
-- 

CREATE TABLE `usuarios` (
  `id` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `surname` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `type` enum('admin','user') COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA DE USUARIOS';

-- 
-- Volcar la base de datos para la tabla `usuarios`
-- 

INSERT INTO `usuarios` VALUES ('39063b7c-8e48-4b0d-bc63-1a21b3860e4d', 'Paco', 'Flores', 'paco@uco.es', '$2a$10$8t955Uu5h/lepNbAEH9/pOVxcXgokkS8Efgt4oTQxQMsNAR2NHvvq', 638638638, 'admin');
INSERT INTO `usuarios` VALUES ('41f80529-56a8-4d11-a817-5b525c730016', 'Alvaro', 'Pino', 'i02pinma@uco.es', '$2a$10$RlkNHPDGg9a2DUaSKkoIduLJLUR5AylpD3Itz97B5VUmHc1dIAkYy', 123456789, 'user');
INSERT INTO `usuarios` VALUES ('7f3eef8a-3aac-4606-9774-99835cec30cd', 'Abraham', 'Cordoba', 'i02copea@uco.es', '$2a$10$4r9mpvGkGhMj2AqsA445Du0ByjPFdrokWUfSAug2Zbtdj2GkHxftS', 123456789, 'user');
INSERT INTO `usuarios` VALUES ('c68c042f-3c72-4fb5-b45c-98254e10dca0', 'Pepe', 'Morales', 'i92himat@uco.es', '$2a$10$5xn42Lw9k.cblOw53UPkNeHn7oWKWu48Fd4NNcjx5eeYJNQeLgeq.', 618287363, 'user');

-- 
-- Filtros para las tablas descargadas (dump)
-- 

-- 
-- Filtros para la tabla `pedidos`
-- 
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- 
-- Filtros para la tabla `pedidosProducto`
-- 
ALTER TABLE `pedidosProducto`
  ADD CONSTRAINT `PP_ibfk_1` FOREIGN KEY (`deliveryID`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PP_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- 
-- Filtros para la tabla `productos`
-- 
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

