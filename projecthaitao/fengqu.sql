/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : fengqu

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-05-20 15:57:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `shop1`
-- ----------------------------
DROP TABLE IF EXISTS `shop1`;
CREATE TABLE `shop1` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop1
-- ----------------------------
INSERT INTO `shop1` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20160718/c3d490c1-f465-41fa-9322-585e2a724f72.jpeg', '1', '1');
INSERT INTO `shop1` VALUES ('2', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/414443/5b17777e1e1a66fb489265a03caa9d4f.jpeg', '澳大利亚CANCERCOUNCIL澳美皙儿童防晒霜', '￥159');
INSERT INTO `shop1` VALUES ('3', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/436691/209bbe00b4c33f488062c5c8d7214a02.jpeg', '美国Burt’s Bees小蜜蜂 神奇紫草膏 消炎止痒抗过敏 15g *2', '￥109');
INSERT INTO `shop1` VALUES ('4', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/37311/fa031c2445a5cb8a7547ac2905e5cbae.jpeg@', '澳洲Bellamy\'s贝拉米 婴儿配方奶粉3段900g*3', '￥569');
INSERT INTO `shop1` VALUES ('5', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/1946/102da40d00a845bdca56e916faa77022.jpg@64', '德国Aptamil 爱他美1段奶粉0-6个月800g*2', '￥555');
INSERT INTO `shop1` VALUES ('6', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/103664/6ee74d56327f1c3f8a1549abb6d2cb2d.jpeg', '新西兰A2 Platinum酪蛋白婴儿奶粉3段(1-3周岁宝宝）900g*3', '￥600');
INSERT INTO `shop1` VALUES ('7', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/67063/12f34ab6674f03cbe1967f827009e661.jpeg@', '韩国Su:m37°呼吸 惊喜水分礼盒套', '￥700');
INSERT INTO `shop1` VALUES ('8', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/2420/5b93a390e3e73c19386f1c1c179f9a9d.jpg@64', '韩国Banilaco芭妮兰 致柔卸妆膏 100ml', '￥95');
INSERT INTO `shop1` VALUES ('9', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/373983/c8a065b1b4559eb59481d248986730b0.jpeg', '德国Balea芭乐雅 玻尿酸安瓶 7ml*8', '￥80');

-- ----------------------------
-- Table structure for `shop2`
-- ----------------------------
DROP TABLE IF EXISTS `shop2`;
CREATE TABLE `shop2` (
  `id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop2
-- ----------------------------
INSERT INTO `shop2` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20160408/9be693b3-3471-46c9-9dfd-a25fbf5bb122.jpeg', '1', '1');
INSERT INTO `shop2` VALUES ('2', 'https://img0.fengqucdn.com/cmsres/20180511/676c3bbe-0121-4209-91f4-d2b5fa9eeb7a.jpeg', '1', '1');
INSERT INTO `shop2` VALUES ('3', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/373983/c8a065b1b4559eb59481d248986730b0.jpeg', '德国Balea芭乐雅 玻尿酸安瓶 7ml*8', '￥90');
INSERT INTO `shop2` VALUES ('4', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/162508/1f6de46bec2b2c3b1cebe7e1298e1278.jpeg', '法国Lancome兰蔻 天鹅颈睫毛膏 防晕款', '￥96');
INSERT INTO `shop2` VALUES ('5', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/194284/de1a2902e53a957812bfd762358be323.jpeg', '日本Pampers紫色帮宝适日本产科御用有机棉纸尿裤L40*2', '￥189');
INSERT INTO `shop2` VALUES ('6', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/1946/1472812161c1694314708574ecafa9b4.jpg@64', '德国Aptamil 爱他美1段奶粉0-6个月800g*2', '￥666');
INSERT INTO `shop2` VALUES ('7', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/2420/5b93a390e3e73c19386f1c1c179f9a9d.jpg@64', '韩国Banilaco芭妮兰 致柔卸妆膏 100ml', '￥95');
INSERT INTO `shop2` VALUES ('8', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/387418/80fdd5ec628efa2ba522ced1cb0eaa3f.jpeg', '澳大利亚 艾朗仕精英起泡葡萄酒', '￥588');

-- ----------------------------
-- Table structure for `shop3`
-- ----------------------------
DROP TABLE IF EXISTS `shop3`;
CREATE TABLE `shop3` (
  `id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop3
-- ----------------------------
INSERT INTO `shop3` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20160408/a1715b0b-e748-406c-b1f0-bb4bdedbcf0e.jpeg', '1', '1');
INSERT INTO `shop3` VALUES ('2', 'https://img0.fengqucdn.com/cmsres/20180511/592a965f-5968-45e2-904d-b984ebd5d497.jpeg', '1', '1');
INSERT INTO `shop3` VALUES ('3', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/373983/c8a065b1b4559eb59481d248986730b0.jpeg', '德国Balea芭乐雅 玻尿酸安瓶 7ml*8', '￥90');
INSERT INTO `shop3` VALUES ('4', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/162508/1f6de46bec2b2c3b1cebe7e1298e1278.jpeg', '法国Lancome兰蔻 天鹅颈睫毛膏 防晕款', '￥96');
INSERT INTO `shop3` VALUES ('5', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/194284/de1a2902e53a957812bfd762358be323.jpeg', '日本Pampers紫色帮宝适日本产科御用有机棉纸尿裤L40*2', '￥189');
INSERT INTO `shop3` VALUES ('6', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/1946/1472812161c1694314708574ecafa9b4.jpg@64', '德国Aptamil 爱他美1段奶粉0-6个月800g*2', '￥666');
INSERT INTO `shop3` VALUES ('7', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/2420/5b93a390e3e73c19386f1c1c179f9a9d.jpg@64', '韩国Banilaco芭妮兰 致柔卸妆膏 100ml', '￥95');
INSERT INTO `shop3` VALUES ('8', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/170307/f8cadac1d297e3bbf2f54ecb986a0b39.jpeg', '日本旭景酒造 纪州本格红芋梅酒', '￥168');

-- ----------------------------
-- Table structure for `shop4`
-- ----------------------------
DROP TABLE IF EXISTS `shop4`;
CREATE TABLE `shop4` (
  `id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop4
-- ----------------------------
INSERT INTO `shop4` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20160408/ac8ac26f-6955-4051-8d40-b27620b88825.jpeg', '1', '1');
INSERT INTO `shop4` VALUES ('2', 'https://img0.fengqucdn.com/cmsres/20180511/cbdf1975-870b-4575-9ea1-6ff4a4e21b1f.jpeg', '1', '1');
INSERT INTO `shop4` VALUES ('3', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/373983/c8a065b1b4559eb59481d248986730b0.jpeg', '德国Balea芭乐雅 玻尿酸安瓶 7ml*8', '￥90');
INSERT INTO `shop4` VALUES ('4', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/162508/1f6de46bec2b2c3b1cebe7e1298e1278.jpeg', '法国Lancome兰蔻 天鹅颈睫毛膏 防晕款', '￥96');
INSERT INTO `shop4` VALUES ('5', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/194284/de1a2902e53a957812bfd762358be323.jpeg', '日本Pampers紫色帮宝适日本产科御用有机棉纸尿裤L40*2', '￥189');
INSERT INTO `shop4` VALUES ('6', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/1946/1472812161c1694314708574ecafa9b4.jpg@64', '德国Aptamil 爱他美1段奶粉0-6个月800g*2', '￥666');
INSERT INTO `shop4` VALUES ('7', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/2420/5b93a390e3e73c19386f1c1c179f9a9d.jpg@64', '韩国Banilaco芭妮兰 致柔卸妆膏 100ml', '￥95');
INSERT INTO `shop4` VALUES ('8', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/301134/d0fde312a7704f20d6103595fea0c58d.jpeg', '泰国Koh-Kae大哥 鸡肉味花生豆230g*3', '￥60');

-- ----------------------------
-- Table structure for `shop5`
-- ----------------------------
DROP TABLE IF EXISTS `shop5`;
CREATE TABLE `shop5` (
  `id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop5
-- ----------------------------
INSERT INTO `shop5` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20160408/36c13eaa-6d24-4b45-b64a-7bb44add9106.jpeg', '1', '1');
INSERT INTO `shop5` VALUES ('2', 'https://img0.fengqucdn.com/cmsres/20180328/17fad859-dd7e-48d1-b610-baefed552a1b.jpeg', '1', '1');
INSERT INTO `shop5` VALUES ('3', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/373983/c8a065b1b4559eb59481d248986730b0.jpeg', '德国Balea芭乐雅 玻尿酸安瓶 7ml*8', '￥90');
INSERT INTO `shop5` VALUES ('4', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/162508/1f6de46bec2b2c3b1cebe7e1298e1278.jpeg', '法国Lancome兰蔻 天鹅颈睫毛膏 防晕款', '￥96');
INSERT INTO `shop5` VALUES ('5', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/194284/de1a2902e53a957812bfd762358be323.jpeg', '日本Pampers紫色帮宝适日本产科御用有机棉纸尿裤L40*2', '￥189');
INSERT INTO `shop5` VALUES ('6', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/1946/1472812161c1694314708574ecafa9b4.jpg@64', '德国Aptamil 爱他美1段奶粉0-6个月800g*2', '￥666');
INSERT INTO `shop5` VALUES ('7', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/2420/5b93a390e3e73c19386f1c1c179f9a9d.jpg@64', '韩国Banilaco芭妮兰 致柔卸妆膏 100ml', '￥95');
INSERT INTO `shop5` VALUES ('8', 'https://img0.fengqucdn.com/fq/sku_info/watermark/online/183987/366b3fb93276ad0f1dcecd7644fe5863.jpeg', '澳大利亚RICCI\'S BIKKIES 瑞茜家 干酪香葱风味面包', '￥99');

-- ----------------------------
-- Table structure for `shop6`
-- ----------------------------
DROP TABLE IF EXISTS `shop6`;
CREATE TABLE `shop6` (
  `id` tinyint(111) NOT NULL AUTO_INCREMENT,
  `src` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop6
-- ----------------------------
INSERT INTO `shop6` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20180511/4c0a5873-878f-4067-8d51-a857b6f90dd7.jpeg');
INSERT INTO `shop6` VALUES ('2', 'https://img0.fengqucdn.com/cmsres/20180511/597c705d-03c6-4a34-bf29-ceecb9aa3485.jpeg');
INSERT INTO `shop6` VALUES ('3', 'https://img0.fengqucdn.com/cmsres/20180511/5e6533c6-ab6c-4d58-a027-4e1a328473db.png');
INSERT INTO `shop6` VALUES ('4', 'https://img0.fengqucdn.com/cmsres/20180511/0be14a1b-9ab5-46da-9ad1-8dbc6308a4bb.jpeg');
INSERT INTO `shop6` VALUES ('5', 'https://img0.fengqucdn.com/cmsres/20180511/145cd1ff-cade-4b0b-a684-cf3d1afeebe0.jpeg');
INSERT INTO `shop6` VALUES ('6', 'https://img0.fengqucdn.com/cmsres/20180511/5fb2edd0-eec4-4064-9a34-7638e3097049.jpeg');

-- ----------------------------
-- Table structure for `shop7`
-- ----------------------------
DROP TABLE IF EXISTS `shop7`;
CREATE TABLE `shop7` (
  `id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop7
-- ----------------------------
INSERT INTO `shop7` VALUES ('1', 'https://img0.fengqucdn.com/cmsres/20180511/b538d378-3774-4b9e-8ef6-30bb38f8edab.jpeg');
INSERT INTO `shop7` VALUES ('2', 'https://img0.fengqucdn.com/cmsres/20180511/64251a1e-18cb-42a8-8632-6498562aa76f.jpeg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(90) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'sunjuan', '202cb962ac59075b964b07152d234b70');
INSERT INTO `user` VALUES ('5', '111', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('6', '123', '202cb962ac59075b964b07152d234b70');
INSERT INTO `user` VALUES ('7', 'sun', '202cb962ac59075b964b07152d234b70');
INSERT INTO `user` VALUES ('8', '1234', '202cb962ac59075b964b07152d234b70');
