-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 26, 2023 at 06:17 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `claire_aid`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2b$10$jF5LUSATyY1WWTMUQohSUerYIr2UvpKvzjNWmdE3YvK1WkejcMk5e');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `org` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`id`, `firstname`, `lastname`, `org`, `email`, `createdAt`) VALUES
(32187, 'Rod', 'Cassin', 'Kozey LLC', 'norma.considine@example.net', '1984-09-21 20:32:52'),
(17629, 'Blanche', 'Cremin', 'Bayer-Bahringer', 'hbergnaum@example.net', '2005-04-10 11:38:03'),
(10093, 'Mckenna', 'Welch', 'Sipes Inc', 'malinda.streich@example.com', '2014-03-12 00:36:42'),
(19043, 'Dusty', 'Mitchell', 'Russel, Metz and Kassulke', 'gennaro14@example.net', '1976-02-03 10:59:33'),
(11422, 'Antoinette', 'Prohaska', 'Torp-Jakubowski', 'bruen.jackie@example.net', '1975-05-26 22:19:17'),
(2374, 'Tevin', 'Lynch', 'Mante-Schamberger', 'ilene.effertz@example.org', '2019-08-07 22:33:39'),
(36529, 'Cordie', 'Douglas', 'Rutherford and Sons', 'hahn.katarina@example.com', '1987-10-05 23:34:36'),
(15943, 'Marcella', 'Heller', 'Kiehn, Grant and Goldner', 'bonita.parisian@example.net', '1982-08-10 00:51:31'),
(2515, 'Dillan', 'Schuster', 'Cartwright LLC', 'gordon.wilderman@example.net', '1990-06-04 04:29:57'),
(12164, 'Meda', 'Hagenes', 'Howell, Steuber and Bins', 'ygoodwin@example.org', '1977-10-20 18:53:20'),
(28172, 'Montana', 'Upton', 'Predovic, Bednar and Wilkinson', 'no\'keefe@example.net', '2011-05-15 08:57:06'),
(11423, 'Mollie', 'Morar', 'Stanton-Schuppe', 'kuphal.westley@example.org', '1992-07-15 18:00:41'),
(15877, 'Mack', 'Bergnaum', 'Gutmann-Conn', 'sammy.kautzer@example.net', '1971-09-22 07:51:12'),
(48046, 'Cleta', 'Reynolds', 'Kilback Group', 'carolina25@example.org', '2020-06-26 21:00:28'),
(7074, 'Wilmer', 'Brown', 'Bergnaum, Doyle and Wisozk', 'hfay@example.net', '2012-12-20 00:03:47'),
(32490, 'Mireya', 'Ryan', 'Schowalter-Kiehn', 'davion19@example.com', '2002-05-14 18:31:19'),
(45926, 'Presley', 'Block', 'Ebert Ltd', 'deangelo.haley@example.org', '2011-02-24 08:44:41'),
(24159, 'Wilburn', 'Bashirian', 'Blick-Williamson', 'marlee.monahan@example.com', '1988-02-09 05:06:09'),
(24611, 'Citlalli', 'Heller', 'Feil Ltd', 'tlehner@example.com', '2002-08-16 19:15:18'),
(4500, 'Dayton', 'Gorczany', 'Dach-Schmeler', 'zhettinger@example.net', '1996-04-11 18:12:22'),
(33758, 'Henry', 'Jones', 'Botsford Group', 'amie38@example.net', '1984-01-18 08:39:43'),
(6078, 'Kathryne', 'Okuneva', 'Hills Group', 'queenie.sauer@example.com', '2005-07-22 18:19:56'),
(37447, 'Keith', 'Fay', 'Torp and Sons', 'jamarcus69@example.net', '1970-02-04 03:18:35'),
(39793, 'Sabina', 'Fahey', 'Herzog LLC', 'leonor97@example.com', '2019-12-01 06:37:41'),
(584, 'Kristin', 'Veum', 'Langosh, Rice and Gaylord', 'manley03@example.net', '1973-03-20 08:52:46'),
(21675, 'Emilie', 'Vandervort', 'Johnson-Boyle', 'yboehm@example.org', '1977-09-24 02:08:15'),
(31357, 'Brett', 'Towne', 'Larson-Leannon', 'qhackett@example.com', '2013-12-14 05:42:10'),
(24146, 'Ned', 'Padberg', 'Rice LLC', 'torp.sallie@example.com', '1986-01-18 02:32:38'),
(3354, 'Arden', 'Lehner', 'Grady-Wintheiser', 'littel.augustine@example.com', '1989-08-04 21:44:50'),
(33113, 'Elva', 'Bauch', 'Hamill and Sons', 'feil.justice@example.org', '1970-03-16 07:13:11'),
(11870, 'Michelle', 'Senger', 'Jones-Hyatt', 'rosemary.price@example.net', '1972-04-12 12:07:54'),
(32356, 'Jett', 'Stracke', 'Erdman, Windler and Gerlach', 'rex26@example.com', '2022-03-15 19:29:20'),
(31370, 'Crawford', 'Lueilwitz', 'Wintheiser PLC', 'pansy.wuckert@example.net', '1999-07-06 10:18:43'),
(13928, 'Stuart', 'Olson', 'Emmerich and Sons', 'domenico.bechtelar@example.org', '2009-04-14 07:38:30'),
(49932, 'Kaia', 'Kilback', 'West-Lockman', 'keshawn48@example.com', '1983-12-20 15:48:12'),
(20716, 'Marquis', 'Torphy', 'Labadie-Gerhold', 'wilton.ritchie@example.net', '2011-05-25 08:35:39'),
(42793, 'Jess', 'Wehner', 'Bogan and Sons', 'casey41@example.com', '2011-07-15 16:35:44'),
(5385, 'Kyle', 'Heller', 'Prosacco-Crona', 'annabell10@example.org', '2011-10-13 07:06:52'),
(36488, 'Laurine', 'Krajcik', 'Goodwin, Veum and O\'Conner', 'alessandra.veum@example.org', '1974-01-17 04:43:00'),
(36363, 'Cameron', 'Barrows', 'Bergstrom Group', 'denesik.vanessa@example.org', '1973-12-13 19:10:20'),
(35114, 'Ilene', 'Sanford', 'Weber, O\'Connell and Upton', 'browe@example.net', '1980-03-30 16:22:19'),
(14997, 'Barrett', 'Wyman', 'Bradtke LLC', 'helen.konopelski@example.com', '1975-12-13 21:59:45'),
(534, 'Wanda', 'Trantow', 'Quigley-Koch', 'sharon60@example.org', '1983-01-29 01:05:45'),
(40565, 'Lorenzo', 'Tillman', 'Heidenreich-Kemmer', 'delilah.hand@example.org', '1971-01-12 19:03:46'),
(1009, 'Ralph', 'Beer', 'Douglas and Sons', 'hugh.botsford@example.org', '1980-04-25 03:26:32'),
(48899, 'Myron', 'Zieme', 'Green, Pouros and Torphy', 'demarco.hilpert@example.com', '1993-12-21 18:15:59'),
(15449, 'Justen', 'Wehner', 'Hansen-Little', 'markus.nolan@example.com', '1986-07-29 03:39:33'),
(2970, 'Kale', 'Harvey', 'Kessler-Emmerich', 'cmarks@example.net', '2001-04-15 20:01:06'),
(27690, 'Forest', 'Schamberger', 'Wehner Group', 'hhermann@example.net', '2003-11-01 06:17:51'),
(8509, 'Vivianne', 'Walter', 'Metz-Johnson', 'orland52@example.org', '1996-02-12 07:27:15'),
(12752, 'Sammy', 'Cummings', 'Bradtke, Monahan and Windler', 'gorczany.jarvis@example.org', '1979-12-10 12:36:44'),
(15821, 'Khalid', 'Kessler', 'Skiles-Mayer', 'royce.goyette@example.net', '1995-09-03 09:50:21'),
(46192, 'Bonnie', 'Greenholt', 'Watsica, Prohaska and Adams', 'mckenzie.brianne@example.org', '1978-12-25 03:20:15'),
(19521, 'Margret', 'Brown', 'Mueller PLC', 'iyost@example.com', '2008-04-03 22:41:45'),
(29275, 'Pinkie', 'Huels', 'Mueller-Lind', 'brady.volkman@example.net', '2013-04-04 15:36:59'),
(4740, 'Amina', 'Green', 'Herzog Group', 'parker.twila@example.org', '1987-01-20 00:28:29'),
(36082, 'Ona', 'Rosenbaum', 'Cartwright-Zulauf', 'kamron.schowalter@example.com', '1995-04-04 12:32:07'),
(22916, 'Deangelo', 'Stoltenberg', 'Veum, Eichmann and Wiegand', 'owiegand@example.com', '1987-02-06 14:02:13'),
(48599, 'Fern', 'Schumm', 'Toy Ltd', 'ayana.graham@example.org', '2011-07-12 06:40:32'),
(6344, 'Aylin', 'Huels', 'Ferry and Sons', 'hackett.krystal@example.net', '2011-11-08 05:22:36'),
(38332, 'Grover', 'Von', 'Zemlak Group', 'laufderhar@example.org', '1982-01-10 14:45:56'),
(37111, 'Lionel', 'Shields', 'Medhurst-Kovacek', 'jamey14@example.net', '1977-05-30 23:58:00'),
(29330, 'Cali', 'Mueller', 'Grimes Group', 'hboyer@example.com', '1988-09-04 07:50:14'),
(38314, 'Flavie', 'Kunze', 'Leffler, Dietrich and Klein', 'marina83@example.net', '2001-05-31 21:01:07'),
(6433, 'Antonette', 'Monahan', 'Wisoky, Roberts and Waelchi', 'lbaumbach@example.net', '1989-11-12 18:34:30'),
(36119, 'Garrison', 'Hoeger', 'Daugherty-Jerde', 'paige25@example.org', '2013-12-22 11:52:19'),
(38839, 'Jay', 'Turcotte', 'Gerlach LLC', 'zemlak.kraig@example.com', '2013-04-08 12:46:54'),
(26265, 'Adelia', 'Schoen', 'Conn Inc', 'bogisich.martin@example.org', '2002-06-06 23:25:06'),
(30196, 'Isabell', 'Gorczany', 'Stamm and Sons', 'vreichert@example.org', '2011-05-07 17:31:07'),
(11091, 'Shad', 'Cummerata', 'Gorczany PLC', 'myriam30@example.org', '2010-01-01 19:44:22'),
(48026, 'Lemuel', 'Gleason', 'Hettinger-Vandervort', 'kmorissette@example.com', '1984-05-04 15:13:35'),
(41994, 'Vladimir', 'Bernier', 'Bartoletti PLC', 'pattie.rogahn@example.net', '1995-07-09 21:08:01'),
(12210, 'Ulises', 'Bailey', 'Swift, Harber and Kihn', 'gina.walsh@example.com', '2014-03-09 13:24:11'),
(10090, 'Felton', 'Rutherford', 'Stehr PLC', 'kaelyn.powlowski@example.com', '2008-07-21 09:06:35'),
(45024, 'Sabrina', 'Becker', 'Koepp, Casper and Monahan', 'harris.arlene@example.com', '1975-07-05 16:58:25'),
(37398, 'Orion', 'Harvey', 'Pagac-Friesen', 'dbreitenberg@example.net', '2004-06-10 17:41:59'),
(8092, 'Eliseo', 'Blanda', 'Morissette, Ankunding and Bogisich', 'ankunding.chanelle@example.org', '2004-08-15 08:43:05'),
(6125, 'Jerad', 'Davis', 'Klein PLC', 'mayer.rebekah@example.net', '1992-07-08 01:45:55'),
(43376, 'Mose', 'Walter', 'Zboncak and Sons', 'katrine.cole@example.com', '1990-05-30 15:17:32'),
(36673, 'Ara', 'Buckridge', 'Muller LLC', 'americo21@example.org', '1989-10-31 02:00:07'),
(30785, 'Nola', 'Lubowitz', 'Walter-Jenkins', 'emmy92@example.org', '1996-10-06 01:45:12'),
(21396, 'Anabel', 'Heaney', 'Friesen, Hamill and Stanton', 'eichmann.lisa@example.org', '1979-08-07 10:20:59'),
(178, 'Briana', 'Moen', 'Fahey, Heidenreich and Trantow', 'vcummerata@example.com', '2019-10-21 13:21:22'),
(754, 'Salma', 'Ryan', 'Marquardt-Durgan', 'schimmel.francesca@example.com', '2008-11-07 21:18:11'),
(18836, 'Travis', 'Blanda', 'Glover PLC', 'padberg.elmer@example.net', '2002-09-01 11:59:08'),
(2659, 'Maud', 'Champlin', 'Macejkovic, Rodriguez and Mann', 'isaac77@example.com', '2020-05-21 09:26:43'),
(45021, 'Mandy', 'Hegmann', 'Kunde-Robel', 'rmraz@example.com', '2022-10-02 11:50:49'),
(6157, 'Jakayla', 'Walter', 'Quitzon Ltd', 'waylon26@example.net', '1993-07-11 17:57:24'),
(34585, 'Velva', 'Abernathy', 'Gerlach Inc', 'tamia54@example.com', '2008-11-25 07:11:23'),
(16261, 'Darren', 'Littel', 'Lebsack Inc', 'zena30@example.com', '1972-04-04 16:22:48'),
(39154, 'Antonia', 'Wintheiser', 'Quitzon and Sons', 'ottilie63@example.org', '1991-02-23 03:30:01'),
(39547, 'Shea', 'Carter', 'Turcotte-Bartoletti', 'waldo86@example.net', '2005-07-22 11:59:18'),
(12006, 'Dusty', 'Gislason', 'Rogahn, Luettgen and Herzog', 'uabshire@example.com', '1989-08-21 01:32:54'),
(33653, 'Brielle', 'Jacobson', 'Miller Inc', 'eloise.zemlak@example.com', '1975-04-08 14:01:19'),
(40583, 'Elmore', 'Borer', 'Rohan-Hettinger', 'ellen.goldner@example.com', '2005-11-02 02:53:33'),
(35933, 'Elvie', 'Hoeger', 'Bartell-Ledner', 'nwillms@example.org', '2018-11-23 13:59:36'),
(7335, 'Kattie', 'Sanford', 'Johnson-Jenkins', 'lindgren.carolyne@example.net', '1988-01-10 06:28:05'),
(28854, 'Arvel', 'Tillman', 'Armstrong, Hayes and Jacobson', 'kcremin@example.org', '1989-04-05 06:36:48'),
(6180, 'Donny', 'Schoen', 'Jakubowski-Ledner', 'megane24@example.com', '1994-09-07 05:15:12'),
(17262, 'Delaney', 'Koelpin', 'Morar-McLaughlin', 'quigley.geo@example.org', '1975-06-26 17:07:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
