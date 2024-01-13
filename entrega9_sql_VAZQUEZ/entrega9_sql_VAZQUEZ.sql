/*Punto 1*/
CREATE DATABASE personal;

/*Punto 2*/
CREATE TABLE departamento (
    Clave_Depto INT PRIMARY KEY,
    Nombre VARCHAR(30),
    Presupuesto INT
);

CREATE TABLE empleados (
    Clave_empleado VARCHAR(8) PRIMARY KEY,
    Nombre VARCHAR(30),
    Apellidos VARCHAR(30),
    Clave_Depto INT,
    FOREIGN KEY (Clave_Depto) REFERENCES departamento (Clave_Depto)
);