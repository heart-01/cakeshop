-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Mar 29, 2019 at 09:18 AM
-- Server version: 5.7.23
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mung_ming_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `ID_customer` varchar(10) NOT NULL COMMENT 'รหัสลูกค้า',
  `ID_status` varchar(5) NOT NULL COMMENT 'รหัสสถานะ',
  `name_customer` varchar(50) NOT NULL COMMENT 'ชื่อลูกค้า',
  `tel_customer` varchar(11) NOT NULL COMMENT 'เบอร์โทร',
  `username_customer` varchar(20) NOT NULL COMMENT 'ชื่อผู้ใช้',
  `password_customer` char(32) NOT NULL COMMENT 'รหัสผ่าน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`ID_customer`, `ID_status`, `name_customer`, `tel_customer`, `username_customer`, `password_customer`) VALUES
('1', '1', 'Siwat Jomewattana', '0871548602', 'admin', '1'),
('2', '2', 'Premruthai Aiamjampa', '0828945022', 'member1', '12'),
('3', '2', 'Tanapol Sangmala', '0899999999', 'member2', '123'),
('4', '2', 'Yanisa Jomewattana', '0899999999', 'member3', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID_customer`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
