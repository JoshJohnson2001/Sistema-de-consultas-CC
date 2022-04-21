-- ===============================================
-- Authors: Benjamin Johnson
-- Create date: 3/31/2022
-- Name of the database: correcaminosdb
-- ===============================================


--
-- Base de datos: `systemCC`
--
CREATE DATABASE IF NOT EXISTS `systemCC` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `systemCC`;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Product`
--

CREATE TABLE `Product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `subcategory_name` varchar(50) NOT NULL,
  `is_available` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `BusinessStock`
--

CREATE TABLE `BusinessStock` (
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Vehicle`
--

CREATE TABLE `Vehicle` (
  `vehicle_id` int(11) NOT NULL,
  `car_brand` varchar(50) NOT NULL,
  `car_plaque` int(11) NOT NULL,
  `type_of_gas` varchar(50) NOT NULL,
  `purchase_date` date NOT NULL,
  `tank_capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Client`
--

CREATE TABLE `Client` (
  `client_id` int(11) NOT NULL,
  `business_name` varchar(60) NOT NULL,
  `business_type` varchar(50) NOT NULL,
  `business_representative` varchar(60) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `zone` varchar(100) NOT NULL,
  `formal_address` varchar(100) NOT NULL,
  `geological_address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Driver`
--

CREATE TABLE `Driver` (
  `driver_id` int(11) NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  `driver_name` varchar(50) NOT NULL,
  `driver_type` varchar(25) NOT NULL,
  `salary` int(11) NOT NULL,
  `hiring_date` date NOT NULL,
  `zona` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `MaintenanceLog`
--

CREATE TABLE `MaintenanceLog` (
  `maintenance_id` int(11) NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  `maintenance_type` varchar(50) NOT NULL,
  `maintenenace_day` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `OrderC`
--

CREATE TABLE `OrderC` (
  `order_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `OrderDetail`
--

CREATE TABLE `OrderDetail` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Supplier`
--

CREATE TABLE `Supplier` (
  `supplier_id` int(11) NOT NULL,
  `supplier_name` varchar(60) NOT NULL,
  `formal_address` varchar(100) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `have_delivery` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SupplierOrder`
--

CREATE TABLE `SupplierOrder` (
  `supplier_order_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SupplierOrderDetail`
--

CREATE TABLE `SupplierOrderDetail` (
  `supplier_order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SupplierStock`
--

CREATE TABLE `SupplierStock` (
  `supplier_stock_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `BusinessStock`
--
ALTER TABLE `BusinessStock`
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `Client`
--
ALTER TABLE `Client`
  ADD PRIMARY KEY (`client_id`);

--
-- Indices de la tabla `Driver`
--
ALTER TABLE `Driver`
  ADD PRIMARY KEY (`driver_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `MaintenanceLog`
--
ALTER TABLE `MaintenanceLog`
  ADD PRIMARY KEY (`maintenance_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `OrderC`
--
ALTER TABLE `OrderC`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indices de la tabla `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_name` (`product_name`);

--
-- Indices de la tabla `Supplier`
--
ALTER TABLE `Supplier`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indices de la tabla `SupplierOrder`
--
ALTER TABLE `SupplierOrder`
  ADD PRIMARY KEY (`supplier_order_id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- Indices de la tabla `SupplierOrderDetail`
--
ALTER TABLE `SupplierOrderDetail`
  ADD KEY `supplier_order_id` (`supplier_order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `SupplierStock`
--
ALTER TABLE `SupplierStock`
  ADD PRIMARY KEY (`supplier_stock_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `Vehicle`
--
ALTER TABLE `Vehicle`
  ADD PRIMARY KEY (`vehicle_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Client`
--
ALTER TABLE `Client`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `Driver`
--
ALTER TABLE `Driver`
  MODIFY `driver_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `MaintenanceLog`
--
ALTER TABLE `MaintenanceLog`
  MODIFY `maintenance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `OrderC`
--
ALTER TABLE `OrderC`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Product`
--
ALTER TABLE `Product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `Supplier`
--
ALTER TABLE `Supplier`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `SupplierOrder`
--
ALTER TABLE `SupplierOrder`
  MODIFY `supplier_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `SupplierStock`
--
ALTER TABLE `SupplierStock`
  MODIFY `supplier_stock_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `Vehicle`
--
ALTER TABLE `Vehicle`
  MODIFY `vehicle_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `BusinessStock`
--
ALTER TABLE `BusinessStock`
  ADD CONSTRAINT `BusinessStock_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`);

--
-- Filtros para la tabla `Driver`
--
ALTER TABLE `Driver`
  ADD CONSTRAINT `Driver_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicle` (`vehicle_id`);

--
-- Filtros para la tabla `MaintenanceLog`
--
ALTER TABLE `MaintenanceLog`
  ADD CONSTRAINT `MaintenanceLog_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicle` (`vehicle_id`);

--
-- Filtros para la tabla `OrderC`
--
ALTER TABLE `OrderC`
  ADD CONSTRAINT `OrderC_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `Client` (`client_id`);

--
-- Filtros para la tabla `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD CONSTRAINT `OrderDetail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `OrderC` (`order_id`),
  ADD CONSTRAINT `OrderDetail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`);

--
-- Filtros para la tabla `SupplierOrder`
--
ALTER TABLE `SupplierOrder`
  ADD CONSTRAINT `SupplierOrder_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier` (`supplier_id`);

--
-- Filtros para la tabla `SupplierOrderDetail`
--
ALTER TABLE `SupplierOrderDetail`
  ADD CONSTRAINT `SupplierOrderDetail_ibfk_1` FOREIGN KEY (`supplier_order_id`) REFERENCES `SupplierOrder` (`supplier_order_id`),
  ADD CONSTRAINT `SupplierOrderDetail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`);

--
-- Filtros para la tabla `SupplierStock`
--
ALTER TABLE `SupplierStock`
  ADD CONSTRAINT `SupplierStock_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier` (`supplier_id`),
  ADD CONSTRAINT `SupplierStock_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`);
  

--
-- Volcado de datos para la tabla `Client`
--

INSERT INTO `Client` (`client_id`, `business_name`, `business_type`, `business_representative`, `phone_number`, `email`, `zone`, `formal_address`, `geological_address`) VALUES
(1, 'La_Shusma', 'MInisuper', 'Shumchi', 86510458, 'lShu@gmail.com', 'Limon', 'Barrio San Juan calle de piedra primera casa', '65, 65'),
(2, 'Carpin', 'Super', 'Sofia', 27584125, 'carpin@hotmail.com', 'San Jose', 'Tibas por el agueducto quinta casa color verde', '645, -6225'),
(3, 'pulpería_Don Juan', 'pulpería', 'Don Juan', 65893214, 'dJuan@gmail.com', 'Heredia', 'Frente al taller Pancho', '-985,351'),
(4, 'supermercado_LasFlores', 'supermercado', 'Maria Flores', 22548963, 'folres@hotmal.com', 'Guanacaste', 'Contiguo al colegio de 27 de abril casa cafe', '45,-612'),
(5, 'PedroProducts', 'supermercado', 'Pedro Johnson', 89653254, 'pedroProducts@hotmal.com', 'Alajuela', 'Del talle merlin las cañas calle de piedra ultima casa', '81,612');

--
-- Volcado de datos para la tabla `Driver`
--

INSERT INTO `Driver` (`driver_id`, `vehicle_id`, `driver_name`, `driver_type`, `salary`, `hiring_date`, `zona`) VALUES
(2, 3, 'Pablo', 'Repartidor', 150000, '2021-10-07', 'Limon');



--
-- Volcado de datos para la tabla `OrderC`
--

INSERT INTO `OrderC` (`order_id`, `client_id`, `status`, `fecha`) VALUES
(1, 1, 'Completo', NULL),
(2, 2, 'Pendiente', NULL),
(3, 1, 'Completado', NULL),
(6, 1, 'NULL', '2022-04-20');

-- --------------------------------------------------------

--
-- Volcado de datos para la tabla `OrderDetail`
--

INSERT INTO `OrderDetail` (`order_id`, `product_id`, `quantity`) VALUES
(1, 7, 4),
(1, 8, 2),
(3, 1, 10),
(3, 7, 11),
(2, 8, 10);


--
-- Volcado de datos para la tabla `Product`
--

INSERT INTO `Product` (`product_id`, `product_name`, `price`, `category_name`, `subcategory_name`, `is_available`) VALUES
(1, 'pasta de dientes', 1100, 'limpieza', 'liempeza Personal', 'True'),
(7, 'jabon de baño', 535, 'limpieza', 'baño', 'True'),
(8, 'pan ', 1000, 'comida', 'trigo', 'True');


--
-- Volcado de datos para la tabla `Supplier`
--

INSERT INTO `Supplier` (`supplier_id`, `supplier_name`, `formal_address`, `phone_number`, `email`, `have_delivery`) VALUES
(7, 'Jian', 'Barrio San Juan tercera cuadra casa verde', 20133605, 'jian@gmail.com', 'False'),
(8, 'Juan Perez Perez', 'Barrio Santa Eduvigez primera parada casa azul', 832568945, 'pJuan@gmail.com', 'True'),
(9, 'Bryan Lopez', 'Barrio Pacuare frente al taller merlin', 74561325, 'lBryan@gmail.com', 'True');

--
-- Volcado de datos para la tabla `SupplierOrder`
--

INSERT INTO `SupplierOrder` (`supplier_order_id`, `supplier_id`, `order_date`) VALUES
(1, 8, '2022-04-20');

--
-- Volcado de datos para la tabla `SupplierStock`
--

INSERT INTO `SupplierStock` (`supplier_stock_id`, `supplier_id`, `product_id`) VALUES
(1, 8, 8),
(2, 7, 1),
(3, 9, 8),
(4, 9, 7);


--
-- Volcado de datos para la tabla `SupplierOrderDetail`
--

INSERT INTO `SupplierOrderDetail` (`supplier_order_id`, `product_id`, `quantity`) VALUES
(1, 1, 4);
--
-- Volcado de datos para la tabla `Vehicle`
--

INSERT INTO `Vehicle` (`vehicle_id`, `car_brand`, `car_plaque`, `type_of_gas`, `purchase_date`, `tank_capacity`) VALUES
(1, 'Nissan', 98747, 'disel', '2011-05-04', 35),
(2, 'porch', 9911, 'super', '1999-11-01', 55),
(3, 'Toyota', 452654, 'super', '2022-04-20', 40);  
  

-- ------------------------------------------------------
-- 
-- Procedure
--

DELIMITER $$
USE `systemCC`$$
CREATE PROCEDURE `c_orderClient`(IN id_product int, IN quantity_p int, IN client_id int)
BEGIN
    declare b_quianrity int;
	select quantity into @quantity from BusinessStock as b where b.product_id = id_product;
    IF @quantity>=quantity_p then
		select max(order_id) into @order_id from OrderC; 
		INSERT INTO OrderDetail (order_id, product_id, quantity) VALUES (@order_id,id_product,quantity_p);
		update BusinessStock set quantity = @quantity-quantity_p where product_id = id_product;
        update OrderC set status = 'En despacho' where order_id = @order_id;
	else
		select max(order_id) into @order_id from OrderC; 
		INSERT INTO OrderDetail (order_id, product_id, quantity) VALUES (@order_id,id_product,quantity_p);
		update BusinessStock set quantity = @quantity-quantity_p where product_id = id_product;
        update OrderC set status = 'Pendiente' where order_id = @order_id;
    end if;
END$$

DELIMITER ;


-- INSERT INTO OrderC ( client_id, status, fecha) VALUES ( 1,'NULL', current_date ());

-- CALL `c_orderClient`(8,8,2);  
  
COMMIT;
