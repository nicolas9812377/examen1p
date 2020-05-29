Crear una aplicación en consola con NodeJS que permita leer los datos de un archivo CSV y realizar una búsqueda específica.

##Requerimientos funcionales
La aplicación debe realizar las siguientes operaciones:

- Buscar el dato especificado de acuerdo al año y al código de un país determinado.
-Mostrar el resultado de la búsqueda en pantalla.
- Guardar el resultado en un archivo. Los archivos se deben guardar en una carpeta denominada “resultados”. El - nombre del archivo corresponderá al código del país y el año especificado. Por ejemplo, ECU-2008.txt.

##Requerimientos no funcionales
La aplicación dispone de dos comandos. Considerar las validaciones correspondientes para todos los parámetros de los comandos.

El primer comando es mostrar. Este comando imprime en pantalla el resultado de la búsqueda (utilizando colores). Se requieren de tres parámetros:

--archivo -f: Permite establecer el path del archivo CSV que contiene los datos a analizar
--pais -c: Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3. El valor por defecto es “ECU”.
--anio -y: Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 1960.
El segundo comando es guardar. Este comando genera un archivo de texto con el resultado de la búsqueda. Recibe los mismos parámetros que el comando anterior.

##Restricciones
Se debe aplicar todos los conocimientos adquiridos en la asignatura.
La búsqueda se debe manejar como un módulo por separado y dividir las operaciones en al menos dos(2) funciones.
No se debe realizar ninguna modificación ni pre-procesamiento al archivo de datos.
El código se debe manejar como un proyecto npm para una fácil importación, instalación y evaluación.
Todo el código fuente debe subirse a GitHub. Se debe establecer al menos cuatro commit con 30 minutos de diferencia entre ellos.
No se debe incluir las carpetas “node_modules” ni “resultados” en el repositorio de software.
El código que se debe subir al repositorio de software debe estar funcional y sin errores.