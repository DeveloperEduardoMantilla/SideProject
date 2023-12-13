CREATE DATABASE sideProject;
USE sideProject;
CREATE TABLE `usuario`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `usuario` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `fechaRegistro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `rol` TEXT NOT NULL,
    `genero` TEXT NOT NULL,
    `estado` BOOLEAN NOT NULL,
    `telefono` TEXT NOT NULL,
    `correo` TEXT NOT NULL,
    `ciudad` TEXT NOT NULL
);
CREATE TABLE `cv`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `foto` TEXT NOT NULL,
    `nombre` VARCHAR(70) NOT NULL,
    `palabrasClave` JSON NOT NULL,
    `acercaDeMi` TEXT NOT NULL,
    `skills` JSON NOT NULL,
    `idUsuario` INT NOT NULL,
    `idioma` TEXT NOT NULL,
    `nivelIdioma` TEXT NOT NULL,
    `estado` BOOLEAN NOT NULL,
    `accesoEditar` BOOLEAN NOT NULL,
    `github` TEXT NOT NULL,
    `linkedin` TEXT NOT NULL,
    CONSTRAINT `cv_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `experiencia`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `cargo` VARCHAR(150) NOT NULL,
    `empresa` VARCHAR(80) NOT NULL,
    `descripcionLogros` VARCHAR(300) NOT NULL,
    `fecha` DATE NOT NULL,
    `idCv` INT NOT NULL,
    CONSTRAINT `experiencia_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `educacion`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` TEXT NOT NULL,
    `institucion` TEXT NOT NULL,
    `fecha` TEXT NOT NULL,
    `tipo` INT NOT NULL,
    `idCv` INT NOT NULL,
    CONSTRAINT `educacion_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE `softSkills`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `compentencia` TEXT NOT NULL,
    `idCv` INT NOT NULL,
    CONSTRAINT `softskills_idcv_foreign` FOREIGN KEY(`idCv`) REFERENCES `cv`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO usuario (usuario, password, rol, genero, estado, telefono, correo, ciudad)
VALUES ('usuario1', 'password1', 'admin', 'masculino', 1, '3123456789', 'usuario1@example.com', 'Floridablanca'),
       ('usuario2', 'password2', 'usuario', 'femenino', 1, '3102345678', 'usuario2@example.com', 'Bucaramanga');

INSERT INTO cv (foto, nombre, palabrasClave, acercaDeMi, skills, idUsuario, idioma, nivelIdioma, estado, accesoEditar, github, linkedin)
VALUES ('https://example.com/foto.jpg', 'Juan Pérez García',JSON_ARRAY('clave1', 'clave2', 'clave3'), 'Soy un desarrollador de software con 5 años de experiencia. Estoy interesado en trabajar en proyectos de desarrollo web y móvil.',JSON_ARRAY('habilidad1', 'nivel1', 'habilidad2'), 2, 'Español', 'Nativo', true, true, 'https://github.com/juanperezgarcia', 'https://linkedin.com/in/juanperezgarcia');

INSERT INTO experiencia (cargo, empresa, descripcionLogros, fecha, idCv)
VALUES ('Desarrollador Web', 'Empresa X', 'Desarrollé la página web de la empresa, utilizando HTML, CSS y JavaScript.', '2023-01-01', 2);

INSERT INTO experiencia (cargo, empresa, descripcionLogros, fecha, idCv)
VALUES ('Diseñador Gráfico', 'Empresa Y', 'Diseñé el logo y la identidad visual de la empresa.', '2022-02-02', 2);

INSERT INTO educacion (titulo, institucion, fecha, tipo, idCv)
VALUES ('Licenciatura en Informática', 'Universidad X', '2023-01-01', 1, 1),
('Diplomado en Diseño Gráfico', 'Instituto Y', '2022-02-02', 2, 2);

INSERT INTO softSkills (compentencia, idCv)
VALUES ('Comunicación', 2),
('Trabajo en equipo', 2);


SELECT cv.id AS cv_id, cv.foto, cv.nombre, cv.palabrasClave, cv.acercaDeMi, cv.skills, cv.idUsuario, cv.idioma, cv.nivelIdioma, cv.estado AS cv_estado, cv.accesoEditar, cv.github, cv.linkedin, JSON_ARRAYAGG(JSON_OBJECT( 'experiencia_id', exp.id, 'cargo', exp.cargo, 'empresa', exp.empresa, 'descripcionLogros', exp.descripcionLogros, 'fecha', exp.fecha)) AS experiencias FROM cv LEFT JOIN (SELECT * FROM experiencia ORDER BY id ASC) exp ON cv.id = exp.idCv GROUP BY cv.id;


SELECT
  cv.id AS cv_id,
  cv.foto,
  cv.nombre,
   cv.palabrasClave, cv.acercaDeMi, cv.skills, cv.idUsuario, cv.idioma, cv.nivelIdioma, cv.estado AS cv_estado, cv.accesoEditar, cv.github, cv.linkedin, JSON_ARRAYAGG(JSON_OBJECT( 'experiencia_id', exp.id, 'cargo', exp.cargo, 'empresa', exp.empresa, 'descripcionLogros', exp.descripcionLogros, 'fecha', exp.fecha)) AS experiencias,
   JSON_ARRAYAGG(JSON_OBJECT( 'titulo', educacion.titulo,
  'institucion', educacion.institucion,
  'fecha', educacion.fecha,
  'tipo', educacion.tipo)) AS educacion,
   JSON_ARRAYAGG(JSON_OBJECT( 'id', softskills.id, 'competencia', softskills.compentencia)) AS softSkills
FROM cv
INNER JOIN (SELECT * FROM experiencia ORDER BY id ASC) exp ON cv.id = exp.idCv
INNER JOIN educacion ON educacion.idCv = cv.id
INNER JOIN softskills ON softskills.idCv = cv.id
GROUP BY cv.id;

SELECT
  COUNT(*) AS registros
FROM cv


SELECT
  cv.id AS cv_id,
  cv.foto,
  cv.nombre,
  cv.palabrasClave,
  cv.acercaDeMi,
  cv.skills,
  cv.idUsuario,
  cv.idioma,
  cv.nivelIdioma,
  cv.estado AS cv_estado,
  cv.accesoEditar,
  cv.github,
  cv.linkedin,
  JSON_ARRAYAGG(JSON_OBJECT( 'experiencia_id', experiencia.id, 'cargo', experiencia.cargo, 'empresa', experiencia.empresa, 'descripcionLogros', experiencia.descripcionLogros, 'fecha', experiencia.fecha)) AS experiencias,
  JSON_ARRAYAGG(JSON_OBJECT('educacion_id', educacion.id, 'titulo', educacion.titulo,
  'institucion', educacion.institucion,
  'fecha', educacion.fecha,
  'tipo', educacion.tipo)) AS educaciones 
FROM cv
INNER JOIN experiencia ON experiencia.idCv = cv.id
INNER JOIN educacion ON educacion.idCv = cv.id
GROUP BY cv.id, experiencia.idCv, educacion.idCv;