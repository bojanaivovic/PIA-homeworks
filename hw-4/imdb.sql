-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2021 at 10:36 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `genres` varchar(255) NOT NULL,
  `title` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `description` longtext NOT NULL,
  `directors` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `production` varchar(50) NOT NULL,
  `runtime` varchar(11) NOT NULL,
  `scenarist` varchar(255) NOT NULL,
  `rating` varchar(11) NOT NULL,
  `stars` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `genres`, `title`, `year`, `description`, `directors`, `image`, `production`, `runtime`, `scenarist`, `rating`, `stars`) VALUES
(1, 'action', 'Lucy', 2014, 'A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.', 'Luc Besson', 'images/lucy.jpg', 'EuropaCorp', '1h 28min', 'Luc Besson', '6.4', 'Scarlett Johansson, Morgan Freeman, Choi Min-sik'),
(2, 'action , crime', 'The Foreigner', 2017, 'A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers\' identities.', 'Martin Campbell', 'images/theForeigner.jpg', 'STX Films', '1h 53min ', 'Martin Campbell', '7.0', ' Katie Leung, Jackie Chan, Rufus Jones'),
(3, 'action', 'Princess Mononoke', 1997, 'On a journey to find the cure for a Tatarigami\'s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.', ' Hayao Miyazaki', 'images/princessMononoke.jpg', 'Studio Ghibli', ' 2h 14min ', ' Hayao Miyazaki', '8.4', ' Yôji Matsuda, Yuriko Ishida, Yûko Tanaka'),
(4, 'action, horror', 'World War Z', 2013, 'Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.', 'Marc Forster', 'images/worldWarZ.jpg', 'Skydance Productions', '1h 56min', 'Marc Forster', '7.0', ' Brad Pitt, Mireille Enos, Daniella Kertesz'),
(5, 'crime, romance', ' Sweet Pain', 2019, 'Carlo, a young music composer from a wealthy family, is going through an emotional crisis. When he moves to a new house he recalls the events and factors that led to his condition: the moment he met Maria, his first marriage, his obsession with music, his marriage, infidelity and the consequences of it. While the past returns in the form of memories, Carlo fights to recover his life and desire to compose music. Dolorosa Gioia tells the story of the tragic life of Renaissance music composer Carlo Gesualdo, although the story is set in the present.', ' Gonzalo López', 'images/sweetPain.jpg', 'GA&A', '1h 18min ', ' Gonzalo López', '9.6', ' Manuel Aguilar, Josep Maria Alegre, Angel Alvarez'),
(6, 'crime', 'The Godfather', 1972, 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.', 'Francis Ford Coppola', 'images/godfather.jpg', 'Paramount Pictures', ' 2h 55min', 'Francis Ford Coppola', '9.2', 'Marlon Brando, Al Pacino, James Caan'),
(7, 'crime, adventure', 'The Dark Knight', 2018, 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'Christopher Nolan', 'images/darkknight.jfif', 'Warner Bros. Pictures', '2h 32min ', '	\r\nJonathan Nolan', '9.0', 'Christian Bale, Heath Ledger, Aaron Eckhart'),
(8, 'crime', 'Joker', 2019, 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', ' Todd Phillips', 'images/joker.jpg', 'Warner Bros.', ' 2h 2min ', 'Jeff Groth', '8.5', 'Joaquin Phoenix, Robert De Niro, Zazie Beetz'),
(9, 'drama, horror, crime', 'The Shining', 1980, 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.', ' Stanley Kubrick', 'images/shining.jpg', 'The Producer Circle', '2h 26min ', 'Ray Lovejoy', '8.4', ' Jack Nicholson, Shelley Duvall, Danny Lloyd'),
(10, 'drama, romance', ' Eternal Sunshine of the Spotless Mind', 2004, 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.', 'Michel Gondry', 'images/Eternal Sunshine of the Spotless Mind.jpg', 'GA&A', ' 1h 48min ', 'Michel Gondry', '8.3', 'Jim Carrey, Kate Winslet, Tom Wilkinson'),
(12, 'drama', 'Fight club', 1999, 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', ' David Fincher', 'images/fight club.jpg', 'Fox 2000 Pictures', '2h 19min', ' David Fincher', '8.8', 'Brad Pitt, Edward Norton, Meat Loaf ');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `admin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `name`, `admin`) VALUES
(2, 'bojanaivovic', 'bojanaivovic7@gmail.com', '$2y$10$LGuDbUmx/zZM6mY40shldOjWpz7luJGr.DqL/E39ZqmgllXNR64yq', 'Bojana Ivović', ''),
(3, 'islavica', 'slavica.ivovicc@gmail.com', '$2y$10$QhLyRcwE/NPpSlm3JXHbRu5Pn9voU47VLmMV4dJTf4wg/AdTV4nfi', 'Slavica', ''),
(4, 'tivovic', 'tivovic@gmail.com', '$2y$10$HZES4.wmuyy723vZD6QsYeY5jlnxdGKkmN3W7NXmmAJeqoFdYzs9i', 'Tamara', ''),
(5, 'markos', 'marko.radivojevic@gmail.com', '$2y$10$rM43nwJ85wYiaj1dsWX1XelMHhW7/4NG8pdOsjpVAPELzhMfwvZyW', 'Marko', ''),
(6, 'defosse', 'ana.maksimovic@gmail.com', '$2y$10$V1MBTJNU7t2ZwYXEDdcX1e1O2rAN86VBCEZonaf3NCbLsA/Dp2ErW', 'Ana', 'admin'),
(11, 'bojanaivovic', 'bbojanaivovic@gmail.com', '$2y$10$KrONhv7vAb/XPzm8/u2VpOKXBSuLo6cZ/TOegywDpqLzWkD0gnp2O', 'Bojana', ''),
(12, 'ljiljamatic', 'ljilja.matic@gmail.com', '$2y$10$W2zsBi2q2YrYx/5/2IXSweCwu7MjaudaMhMAXuE8LkgL4oJsWdLcq', 'Ljilja', ''),
(13, 'simicka', 'simicka3@gmail.com', '$2y$10$G1WApuVHzYdq4uRWc6an7.zfnDhGTOIOqJr577ly5Mrwm.VGiyXPG', 'Andjela Simic', ''),
(14, 'dacamaca', 'dacamaca@gmail.com', '$2y$10$l13DwjZBIncycNZqiNvLKeOhOx1itB8SbZobjZYo0yooxrVfZaUIe', 'Daca', ''),
(15, 'monikk', 'monikadim@gmail.com', '$2y$10$4tNXA4kP/c31W0xOcOexr.UvJ6FvoIk91of416a14xItsVE2EeACa', 'Monika Dimitrijevic', ''),
(16, 'aleksaradenkovic', 'alekraden@gmail.com', '$2y$10$h.j8awjcsRbxUCCORYr2eOaPlLKo50bOV9W2x2gmZ6CqGZPwpkeoa', 'Aleksa Radenkovic', ''),
(17, 'natalijanakic', 'natalija.nakic@gmail.com', '$2y$10$hByv.ZkG3f/P6qLBTq8qouEaErhKGUpPnSpi1FSgW1fb57YR4G416', 'Natalija Nakic', 'admin'),
(18, 'matkomatijevic', 'matkomatijevic@gmail.com', '$2y$10$DE60YFBeCNNXwcs6VKRhRO7Nv4VG5O.yDQbONoxDkcb2Ij/7veYXu', 'Matko', ''),
(19, 'pesicnikola', 'pesicnikola@gmail.com', '$2y$10$6.leQo1n6HDtTKgjfiJEku.5IpwLhpX6o//H9mCuQFkiDuJehZzbK', 'Nikola Pesic', ''),
(20, 'jokakoka', 'jovana.joksi@gmail.com', '$2y$10$j60jCQVrrrkO2KA30AgpuOw0w2bXPBe8MNN0WGvWJytf.uzbcvTNq', 'Jovana Joksimovic', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
