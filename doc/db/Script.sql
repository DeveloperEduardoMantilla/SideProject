CREATE TABLE `experiencia`(
    `id` INT NOT NULL,
    `cargo` TEXT NOT NULL,
    `empresa` TEXT NOT NULL,
    `descripcionLogros` TEXT NOT NULL,
    `fecha` TEXT NOT NULL,
    `idCv` INT NOT NULL
);
ALTER TABLE
    `experiencia` ADD PRIMARY KEY(`id`);
CREATE TABLE `cv`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `foto` TEXT NOT NULL,
    `nombre` TEXT NOT NULL,
    `palabrasClave` JSON NOT NULL,
    `acercaDeMi` TEXT NOT NULL,
    `skills` JSON NOT NULL,
    `idUsuario` INT NOT NULL,
    `idioma` TEXT NOT NULL,
    `nivelIdioma` TEXT NOT NULL,
    `estado` TINYINT(1) NOT NULL,
    `accesoEditar` TINYINT(1) NOT NULL,
    `github` TEXT NOT NULL,
    `linkedin` TEXT NOT NULL
);
CREATE TABLE `educacion`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` TEXT NOT NULL,
    `institucion` TEXT NOT NULL,
    `fecha` TEXT NOT NULL,
    `tipo` INT NOT NULL,
    `idCv` INT NOT NULL
);
CREATE TABLE `softSkills`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `compentencia` TEXT NOT NULL,
    `idCv` INT NOT NULL
);
CREATE TABLE `usuario`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `usuario` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `fechaRegistro` TIMESTAMP NOT NULL,
    `rol` TEXT NOT NULL,
    `genero` TEXT NOT NULL,
    `estado` INT NOT NULL,
    `telefono` TEXT NOT NULL,
    `correo` TEXT NOT NULL,
    `ciudad` TEXT NOT NULL
);
ALTER TABLE
    `experiencia` ADD CONSTRAINT `experiencia_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`);
ALTER TABLE
    `softSkills` ADD CONSTRAINT `softskills_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`);
ALTER TABLE
    `cv` ADD CONSTRAINT `cv_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `educacion` ADD CONSTRAINT `educacion_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`);