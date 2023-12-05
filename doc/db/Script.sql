CREATE TABLE `experiencia`(
    `id` INT NOT NULL,
    `cargo` TEXT NOT NULL,
    `empresa` TEXT NOT NULL,
    `descripcionLogros` TEXT NOT NULL,
    `fecha` TEXT NOT NULL
);
ALTER TABLE
    `experiencia` ADD PRIMARY KEY `experiencia_id_primary`(`id`);
CREATE TABLE `cv`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `foto` TEXT NOT NULL,
    `nombre` TEXT NOT NULL,
    `palabrasClave` JSON NOT NULL,
    `acercaDeMi` TEXT NOT NULL,
    `skills` JSON NOT NULL,
    `idUsuario` INT NOT NULL,
    `idioma` TEXT NOT NULL,
    `nivelIdioma` TEXT NOT NULL
);
ALTER TABLE
    `cv` ADD PRIMARY KEY `cv_id_primary`(`id`);
CREATE TABLE `contacto`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `telefono` TEXT NOT NULL,
    `correo` TEXT NOT NULL,
    `github` TEXT NOT NULL,
    `linkedin` TEXT NOT NULL,
    `ciudad` TEXT NOT NULL,
    `idCv` INT NOT NULL
);
ALTER TABLE
    `contacto` ADD PRIMARY KEY `contacto_id_primary`(`id`);
CREATE TABLE `competenciasCv`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `competenciasSocioEmocionalesId` INT NOT NULL,
    `cvId` INT NOT NULL
);
ALTER TABLE
    `competenciasCv` ADD PRIMARY KEY `competenciascv_id_primary`(`id`);
CREATE TABLE `educacion`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `titulo` TEXT NOT NULL,
    `institucion` TEXT NOT NULL,
    `fecha` TEXT NOT NULL,
    `tipo` INT NOT NULL,
    `idCv` INT NOT NULL
);
ALTER TABLE
    `educacion` ADD PRIMARY KEY `educacion_id_primary`(`id`);
CREATE TABLE `experienciaCv`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `cvId` INT NOT NULL,
    `experiencia` INT NOT NULL
);
ALTER TABLE
    `experienciaCv` ADD PRIMARY KEY `experienciacv_id_primary`(`id`);
CREATE TABLE `softSkills`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `compentencia` TEXT NOT NULL
);
ALTER TABLE
    `softSkills` ADD PRIMARY KEY `softskills_id_primary`(`id`);
CREATE TABLE `usuario`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `usuario` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `fechaRegistro` TIMESTAMP NOT NULL,
    `ultimoIngreso` TEXT NOT NULL,
    `rol` INT NOT NULL,
    `genero` TEXT NOT NULL,
    `estado` INT NOT NULL
);
ALTER TABLE
    `usuario` ADD PRIMARY KEY `usuario_id_primary`(`id`);
ALTER TABLE
    `contacto` ADD CONSTRAINT `contacto_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`);
ALTER TABLE
    `competenciasCv` ADD CONSTRAINT `competenciascv_cvid_foreign` FOREIGN KEY(`cvId`) REFERENCES `cv`(`id`);
ALTER TABLE
    `experienciaCv` ADD CONSTRAINT `experienciacv_experiencia_foreign` FOREIGN KEY(`experiencia`) REFERENCES `experiencia`(`id`);
ALTER TABLE
    `experienciaCv` ADD CONSTRAINT `experienciacv_cvid_foreign` FOREIGN KEY(`cvId`) REFERENCES `cv`(`id`);
ALTER TABLE
    `competenciasCv` ADD CONSTRAINT `competenciascv_competenciassocioemocionalesid_foreign` FOREIGN KEY(`competenciasSocioEmocionalesId`) REFERENCES `softSkills`(`id`);
ALTER TABLE
    `cv` ADD CONSTRAINT `cv_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `educacion` ADD CONSTRAINT `educacion_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`);