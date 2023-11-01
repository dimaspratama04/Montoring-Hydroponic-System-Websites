/*
 Navicat Premium Data Transfer

 Source Server         : MySQL Monitoring Web Docker
 Source Server Type    : MySQL
 Source Server Version : 80100 (8.1.0)
 Source Host           : 147.139.181.28:3306
 Source Schema         : db_project

 Target Server Type    : MySQL
 Target Server Version : 80100 (8.1.0)
 File Encoding         : 65001

 Date: 01/11/2023 09:12:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` time NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES (1, 'dimas', 'dimas', 'dimas@gmail.com', NULL, NULL);
INSERT INTO `accounts` VALUES (2, 'admin', 'admin', 'admin@gmail.com', NULL, NULL);

-- ----------------------------
-- Table structure for datas
-- ----------------------------
DROP TABLE IF EXISTS `datas`;
CREATE TABLE `datas`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `deviceKey` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `topic1_VALUE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `topic2_VALUE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `topic3_VALUE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` time NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of datas
-- ----------------------------
INSERT INTO `datas` VALUES (1, '6ivha', '0', '0', '0', NULL, NULL);
INSERT INTO `datas` VALUES (2, '6ivha', '15', '0', '0', NULL, NULL);
INSERT INTO `datas` VALUES (3, '6ivha', '15', '10', '0', NULL, NULL);
INSERT INTO `datas` VALUES (4, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (5, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (6, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (7, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (8, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (9, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (10, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (11, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (12, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (13, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (14, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (15, '6ivha', '15', '10', '1500', NULL, NULL);
INSERT INTO `datas` VALUES (16, '6ivha', '15', '10', '1500', NULL, NULL);

-- ----------------------------
-- Table structure for devices
-- ----------------------------
DROP TABLE IF EXISTS `devices`;
CREATE TABLE `devices`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `deviceKey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `deviceName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `deviceIp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` time NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of devices
-- ----------------------------
INSERT INTO `devices` VALUES (1, '6ivha', 'DEV001', '192.168.1.1', NULL, NULL);

-- ----------------------------
-- Table structure for logschedule
-- ----------------------------
DROP TABLE IF EXISTS `logschedule`;
CREATE TABLE `logschedule`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `deviceKey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `deviceName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `on` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `off` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` time NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of logschedule
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
