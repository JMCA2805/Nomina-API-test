//Esquema General de Seguridad del JWT

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * */


//Esquema de Datos de los Empresas

/**
 * @swagger
 * components:
 *   schemas:
 *     Empresa_Crear:
 *       type: object
 *       properties:
 *         rif:
 *           type: string
 *           description: Rif de la empresa
 *         nombre:
 *           type: string
 *           description: Nombre de la empresa
 *         direccion:
 *           type: string
 *           description: Direccion de la empresa
 *         telefono:
 *           type: string
 *           description: Telefono de la empresa
 *         correo:
 *           type: string
 *           description: Correo de la empresa
 *       required:
 *         -rif
 *         -nombre
 *         -direccion
 *         -telefono
 *         -correo
 *       example:
 *         rif: "J-31356421-4"
 *         nombre: "Universidad Valle de Momboy"
 *         direccion: "Carvajal"
 *         telefono: "02712351785"
 *         correo: "universidad@edu.ve"
 */

/**
 * @swagger
 * /CrearEmpresa:
 *   post:
 *     summary: Registrar una Empresa
 *     tags: [Empresa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Empresa_Crear'
 *     responses:
 *       200:
 *         description: Empresa Registrada
 *       400:
 *         description: Empresa ya Registrada (Existente)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empresa_Listar:
 *       type: object
 *       properties:
 *         idEmpresas:
 *           type: integer
 *           description: ID de la empresa
 *         rif:
 *           type: string
 *           description: Rif de la empresa
 *         nombre:
 *           type: string
 *           description: Nombre de la empresa
 *         direccion:
 *           type: string
 *           description: Direccion de la empresa
 *         telefono:
 *           type: string
 *           description: Telefono de la empresa
 *         correo:
 *           type: string
 *           description: Correo de la empresa
 *       example:
 *         idEmpresas: 1
 *         rif: "J-31356421-4"
 *         nombre: "Universidad Valle de Momboy"
 *         direccion: "Carvajal"
 *         telefono: "02712351785"
 *         correo: "universidad@edu.ve"
 */

/**
 * @swagger
 * /ListarEmpresa:
 *   get:
 *     summary: Listar la Empresa existente
 *     tags: [Empresa]
 *     responses:
 *       200:
 *         description: Empresa Registrada
 *       400:
 *         description: No hay Empresa existente
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empresa_Actualizar:
 *       type: object
 *       properties:
 *         idEmpresas:
 *           type: integer
 *           description: ID de la empresa
 *         rif:
 *           type: string
 *           description: Rif de la empresa
 *         nombre:
 *           type: string
 *           description: Nombre de la empresa
 *         direccion:
 *           type: string
 *           description: Direccion de la empresa
 *         telefono:
 *           type: string
 *           description: Telefono de la empresa
 *         correo:
 *           type: string
 *           description: Correo de la empresa
 *       example:
 *         idEmpresas: 1
 *         rif: "J-31356421-4"
 *         nombre: "Universidad Valle de Momboy"
 *         direccion: "Carvajal"
 *         telefono: "02712351785"
 *         correo: "universidad@edu.ve"
 */

/**
 * @swagger
 * /ActualizaEmpresa:
 *   put:
 *     summary: Actualizar La Empresa
 *     tags: [Empresa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Empresa_Actualizar'
 *     responses:
 *       200:
 *         description: Empresa Actualizado
 *       400:
 *         description: Error al actualizar la Empresa
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Deducciones:
 *       type: object
 *       properties:
 *         monto:
 *           type: number
 *           description: Monto de Dinero de la Deducción
 *         descripcion:
 *           type: string
 *           description: Descripcion de la Deducción
 *       required:
 *         -monto
 *         -descripcion
 *       example:
 *         monto: 2500
 *         descripcion: Impuestos + Seguro + Transporte
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Listar-Registro:
 *       type: object
 *       properties:
 *         nombres:
 *           type: string
 *           description: Nombre del Empleado
 *         apellidos:
 *           type: string
 *           description: apellido del Empleado
 *         horas_laboradas:
 *           type: string
 *           description: Horas Laboradas
 *         horas_extras:
 *           type: string
 *           description: Horas Extras
 *         fecha: 
 *           type: string
 *           description: Fecha del Registro
 *       required:
 *         -nombres
 *         -apellidos
 *         -horas_laboradas
 *         -horas_extras
 *         -fecha
 */

/**
 * @swagger
 * /ListarRegistros:
 *   get:
 *     summary: Listar los Registros de Horas
 *     tags: [Registros]
 *     responses:
 *       200:
 *         description: Registros Cargados
 *       400:
 *         description: No hay Registros
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Carga_Horas:
 *       type: object
 *       properties:
 *         id_empleado:
 *           type: string
 *           description: Id del Empleado a cargar horas
 *         horas: 
 *           type: string
 *           description: Horas Laboradas
 *         horas_extra:
 *           type: string
 *           description: Horas Extra laboradas
 *       required:
 *         -id_empleado
 *         -horas
 *         -horas_extra
 *       example:
 *         id_empleado: 1
 *         horas: 10
 *         horas_extra: 5
 */

/**
 * @swagger
 * /cargarHoras:
 *   post:
 *     summary: Registra Horas Laborales
 *     tags: [Horas Laborales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Carga_Horas'
 *     responses:
 *       200:
 *         description: Horas Registradas
 *       400:
 *         description: Ha ocurrido un error 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pagos:
 *       type: object
 *       properties:
 *         cedula:
 *           type: string
 *           description: Cedula del Empleado
 *         apellidos:
 *           type: string
 *           description: Apellidos del Empleado
 *         nombres:
 *           type: string
 *           description: Nombres del Empleado
 *         cargo:
 *           type: string
 *           description: Cargo del Empleado
 *         monto_deduccion: 
 *           type: string
 *           description: Monto a Restar por Deduccion
 *         descripcion:
 *           type: string
 *           description: Descripcion de la Deduccion
 *         monto_de_pago: 
 *           type: string
 *           description: Monto a Pagar
 *       required:
 *         -cedula
 *         -apellidos
 *         -nombres
 *         -cargo
 *         -monto_deduccion
 *         -descripcion
 *         -monto_de_pago
 *       example:
 *         cedula: V-30259086
 *         apellidos: Araujo Gonzalez
 *         nombres: Kevin Alejandro
 *         cargo: Gerente
 *         monto_deduccion: 25
 *         descripcion: Seguro Social
 *         monto_de_pago: 230
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Deducciones-Edit:
 *       type: object
 *       properties:
 *         iddeducciones:
 *           type: string
 *           description: Id de la Deduccion a editar
 *         monto:
 *           type: number
 *           description: Monto de Dinero de la Deducción
 *         descripcion:
 *           type: string
 *           description: Descripcion de la Deducción
 *       required:
 *         -monto
 *         -descripcion
 *         -iddeducciones
 *       example:
 *         iddeducciones: 1
 *         monto: 2500
 *         descripcion: Impuestos + Seguro + Transporte
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Deducciones-Eliminar:
 *       type: object
 *       properties:
 *         iddeducciones:
 *           type: string
 *           description: Id de la Deduccion a Eliminar
 *       required:
 *         -iddeducciones
 *       example:
 *         iddeducciones: 1
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleados:
 *       type: object
 *       properties:
 *         cedula:
 *           type: string
 *           description: Cedula del Empleado
 *         nombres:
 *           type: string
 *           description: Nombres del Empleado
 *         apellidos:
 *           type: string
 *           description: Apellidos del Empleado
 *         fecha_nacimiento:
 *           type: string
 *           description: fecha_nacimiento del Empleado
 *         direccion:
 *           type: string
 *           description: direccion del Empleado
 *         correo:
 *           type: string
 *           description: correo del Empleado
 *         telefono:
 *           type: string
 *           description: telefono del Empleado
 *         codigo_cargo:
 *           type: string
 *           description: codigo del Empleado de cargo
 *         codigo_departamento:
 *           type: string
 *           description: codigo del Empleado de departamento
 *         codigo_empresa:
 *           type: string
 *           description: codigo del Empleado de empresa
 *         numero_cuenta:
 *           type: string
 *           description: numero de cuenta del empleado
 *         estado:
 *           type: string
 *           description: estado del Empleado
 *         pass:
 *           type: string
 *           description: pass del Empleado
 *         codigo_deduccion:
 *           type: string
 *           description: codigo de deduccion
 *         codigo_bonificaciones:
 *           type: string
 *           description: codigo de bonificacion
 *       required:
 *         -cedula
 *         -nombres
 *         -apellidos
 *         -fecha_nacimiento
 *         -direction
 *         -correo
 *         -telefono
 *         -codigo_cargo
 *         -codigo_departamento
 *         -codigo_empresa
 *         -numero_cuenta
 *         -estado
 *         -pass
 *         -codigo_deduccion
 *         -codigo_bonificaciones
 *       example:
 *         cedula: V-30259086
 *         nombres: Kevin Alejandro
 *         apellidos: Araujo Gonzalez
 *         fecha_nacimiento: 2004/02/07
 *         direccion: La Arboleda
 *         correo: kevinaraujogonzalez@gmail.com
 *         telefono: '04145789632'
 *         codigo_cargo: 01
 *         codigo_departamento: 01
 *         numero_cuenta: '01020304751247000125'
 *         codigo_empresa: 01 
 *         estado: activo
 *         pass: '30259086'
 *         codigo_deduccion: 01
 *         codigo_bonificaciones: 01
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleados-Eliminar:
 *       type: object
 *       properties:
 *         idEmpleados:
 *           type: int
 *           description: Id del Empleado a eliminar
 *       required:
 *         -idEmpleados
 *       example:
 *         idEmpleados: 2
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleados-Buscar:
 *       type: object
 *       properties:
 *         idEmpleados:
 *           type: int
 *           description: Id del Empleado a Buscar
 *       required:
 *         -idEmpleados
 *       example:
 *         idEmpleados: 2
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleados-Editar:
 *       type: object
 *       properties:
 *         cedula:
 *           type: string
 *           description: Cedula del Empleado
 *         nombres:
 *           type: string
 *           description: Nombres del Empleado
 *         apellidos:
 *           type: string
 *           description: Apellidos del Empleado
 *         fecha_nacimiento:
 *           type: string
 *           description: fecha_nacimiento del Empleado
 *         direccion:
 *           type: string
 *           description: direccion del Empleado
 *         correo:
 *           type: string
 *           description: correo del Empleado
 *         telefono:
 *           type: string
 *           description: telefono del Empleado
 *         codigo_cargo:
 *           type: string
 *           description: codigo del Empleado de cargo
 *         codigo_departamento:
 *           type: string
 *           description: codigo del Empleado de departamento
 *         codigo_empresa:
 *           type: string
 *           description: codigo del Empleado de empresa
 *         numero_cuenta:
 *           type: string
 *           description: numero de cuenta del empleado
 *         estado:
 *           type: string
 *           description: estado del Empleado
 *         idEmpleados:
 *           type: string
 *           description: id del empleado a editar
 *         pass:
 *           type: string
 *           description: pass del Empleado
 *         codigo_deduccion:
 *           type: string
 *           description: codigo del Empleado Deduccion
 *         codigo_bonificaciones:
 *           type: string
 *           description: codigo de bonificacion del Empleado
 *       required:
 *         -cedula
 *         -nombres
 *         -apellidos
 *         -fecha_nacimiento
 *         -direction
 *         -correo
 *         -telefono
 *         -codigo_cargo
 *         -codigo_departamento
 *         -codigo_empresa
 *         -numero_cuenta
 *         -estado
 *         -idEmpleados
 *         -pass
 *         -codigo_deduccion
 *         -codigo_bonificaciones
 *       example:
 *         cedula: V-30259086
 *         nombres: Kevin Alejandro
 *         apellidos: Araujo Gonzalez
 *         fecha_nacimiento: 2004/02/07
 *         direccion: La Arboleda
 *         correo: kevinaraujogonzalez@gmail.com
 *         telefono: '04141236789'
 *         codigo_cargo: 01
 *         codigo_departamento: 02
 *         codigo_empresa: 1
 *         numero_cuenta: '01020304757888000025'
 *         estado: activo
 *         idEmpleados: 3
 *         pass: '302590865'
 *         codigo_deduccion: 02
 *         codigo_bonificaciones: 02
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuarios:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: nombre del empleado
 *         apellido:
 *           type: string
 *           description: apellido del empleado
 *         user:
 *           type: string
 *           description: nombre de usuario
 *         pass:
 *           type: string
 *           description: clave
 *       required:
 *         -nombre
 *         -apellido
 *         -user
 *         -pass
 *       example:
 *         nombre: Kevin
 *         apellido: Araujo
 *         user: DarkKevo
 *         pass: gew#$%^#dghd
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User-Login:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: usuario del empleado
 *         pass:
 *           type: string
 *           description: Password del empleado
 *       required:
 *         -user
 *         -pass
 *       example:
 *         user: DarkKevo
 *         pass: gew#$%^#dghd
 */

/**
 * @swagger
 * /newUser:
 *   post:
 *     summary: Registra un nuveo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       200:
 *         description: Usuario Registrado
 *       400:
 *         description: Usuario ya Registrado
 */

/**
 * @swagger
 * /loginUser:
 *   post:
 *     summary: Inicia Sesion con tu Empresa
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/User-Login'
 *     responses:
 *       200:
 *         description: Usuario Registrado
 *       400:
 *         description: Clave erronea
 */

//Esquema de Datos de los Cargos

/**
 * @swagger
 * components:
 *   schemas:
 *     Cargos_Crear:
 *       type: object
 *       properties:
 *         cargo:
 *           type: string
 *           description: Nombre del cargo
 *         salario:
 *           type: int
 *           description: Monto del Salario
 *       required:
 *         -cargo
 *         -salario
 *       example:
 *         cargo: Analista de Sistema
 *         salario: 80
 */

/**
 * @swagger
 * /CrearCargo:
 *   post:
 *     summary: Registrar un nuevo cargo
 *     tags: [Cargos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Cargos_Crear'
 *     responses:
 *       200:
 *         description: Cargo Registrado
 *       400:
 *         description: Cargo ya Registrado (Existente)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cargos_Listar:
 *       type: object
 *       properties:
 *         idcargos:
 *           type: int
 *           description: Identificador del cargo
 *         cargo:
 *           type: string
 *           description: Nombre del cargo
 *         salario:
 *           type: int
 *           description: Salario del cargo
 *       example:
 *         idcargos: 1
 *         cargo: Analista de Sistema
 *         salario: 100
 */

/**
 * @swagger
 * /ListarCargo:
 *   get:
 *     summary: Listar los cargos existentes
 *     tags: [Cargos]
 *     responses:
 *       200:
 *         description: Cargos Registrados
 *       400:
 *         description: No hay cargos existentes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cargos_Eliminar:
 *       type: object
 *       properties:
 *         idcargos:
 *           type: int
 *           description: Identificador del cargo
 *       required:
 *         -idcargos
 *       example:
 *         idcargos: 13
 */

/**
 * @swagger
 * /EliminarCargo:
 *   delete:
 *     summary: Eliminar un cargo
 *     tags: [Cargos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Cargos_Eliminar'
 *     responses:
 *       200:
 *         description: Cargo Eliminado
 *       400:
 *         description: El cargo no existe
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cargos_Actualizar:
 *       type: object
 *       properties:
 *         idcargos:
 *           type: int
 *           description: Identificador del cargo que se va a actualizar
 *         cargo:
 *           type: string
 *           description: Nombre del cargo
 *         salario:
 *           type: int
 *           description: Salario del cargo
 *       required:
 *         -idcargos
 *         -cargo
 *         -salario
 *       example:
 *         idcargos: 11
 *         cargo: Analista de Mercado
 *         salario: 200
 */

/**
 * @swagger
 * /ActualizarCargo:
 *   put:
 *     summary: Actualizar un cargo existente
 *     tags: [Cargos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Cargos_Actualizar'
 *     responses:
 *       200:
 *         description: Cargo Actualizado
 *       400:
 *         description: El cargo no existe
 */

//Esquema de Datos de los Departamentos

/**
 * @swagger
 * components:
 *   schemas:
 *     Departamentos_Crear:
 *       type: object
 *       properties:
 *         Departamento:
 *           type: string
 *           description: Departamento (Tabla - Departamentos)
 *       required:
 *         -departamento
 *       example:
 *         departamento: Sistemas
 */

/**
 * @swagger
 * /CrearDepartamento:
 *   post:
 *     summary: Crear un nuevo Departamento
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Departamentos_Crear'
 *     responses:
 *       200:
 *         description: Departamento Creado
 *       400:
 *         description: Departamento ya Registrado (Existente)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Departamentos_Listar:
 *       type: object
 *       properties:
 *         iddepartamentos:
 *           type: int
 *           description: Id
 *         departamento:
 *           type: int
 *           description: Departamento
 *       example:
 *         id: 1
 *         departamento: Sistemas
 */

/**
 * @swagger
 * /ListarDepartamento:
 *   get:
 *     summary: Listar los departamentos existentes
 *     tags: [Departamentos]
 *     responses:
 *       200:
 *         description: Departamentos Registrados
 *       400:
 *         description: No hay Departamentos existentes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Departamentos_Eliminar:
 *       type: object
 *       properties:
 *         iddepartamento:
 *           type: int
 *           description: Id
 *       required:
 *         -iddepartamento
 *       example:
 *         iddepartamento: 1
 */

/**
 * @swagger
 * /EliminarDepartamento:
 *   delete:
 *     summary: Eliminar un departamento
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Departamentos_Eliminar'
 *     responses:
 *       200:
 *         description: Departamento Eliminado
 *       400:
 *         description: El Departamento no existe
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Departamentos_Actualizar:
 *       type: object
 *       properties:
 *         iddepartamento:
 *           type: int
 *           description: Id
 *         departamento:
 *           type: string
 *           description: Departamento
 *       required:
 *         -iddepartamento
 *         -departamento
 *       example:
 *         iddepartamentos: 1
 *         departamento: Recursos Humanos
 */

/**
 * @swagger
 * /ActualizarDepartamento:
 *   put:
 *     summary: Actualizar un Departamento existente
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Departamentos_Actualizar'
 *     responses:
 *       200:
 *         description: Departamentoo Actualizado
 *       400:
 *         description: El Departamento no existe
 */

/**
 * @swagger
 * /ListarEmpleados:
 *   get:
 *     summary: Listar los Empleados existentes
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Empleados Registrados
 *       400:
 *         description: No hay Empleados existentes
 */

/**
 * @swagger
 * /RegistrarEmpleado:
 *   post:
 *     summary: Crear un nuevo Empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Empleados'
 *     responses:
 *       200:
 *         description: Empleado Creado
 *       400:
 *         description: Empleado ya Registrado (Existente)
 */

/**
 * @swagger
 * /EditarEmpleado:
 *   put:
 *     summary: Actualizar un Empleado existente
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Empleados-Editar'
 *     responses:
 *       200:
 *         description: Empleado Actualizado
 *       400:
 *         description: El Empleado no existe
 */

/**
 * @swagger
 * /EliminarEmpleado:
 *   delete:
 *     summary: Eliminar un Empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Empleados-Eliminar'
 *     responses:
 *       200:
 *         description: Empleado Eliminado
 *       400:
 *         description: El Empleado no existe
 */

/**
 * @swagger
 * /BuscarEmpleado:
 *   post:
 *     summary: Buscar un Empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Empleados-Buscar'
 *     responses:
 *       200:
 *         description: Empleado Encontrado
 *       400:
 *         description: El Empleado no existe
 */


/**
 * @swagger
 * /ListarDeducciones:
 *   get:
 *     summary: Listar las Deducciones existentes
 *     tags: [Deducciones]
 *     responses:
 *       200:
 *         description: Deducciones Registradas
 *       400:
 *         description: No hay Empleados existentes
 */

/**
 * @swagger
 * /RegistrarDeduccion:
 *   post:
 *     summary: Crear una nueva Deduccion
 *     tags: [Deducciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Deducciones'
 *     responses:
 *       200:
 *         description: Deduccion Creada
 *       400:
 *         description: Deduccion ya Registrada (Existente)
 */

/**
 * @swagger
 * /EditarDeduccion:
 *   put:
 *     summary: Actualizar una deduccion existente
 *     tags: [Deducciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Deducciones-Edit'
 *     responses:
 *       200:
 *         description: Deduccion Actualizado
 *       400:
 *         description: La Deduccion no existe
 */

/**
 * @swagger
 * /EliminarDeduccion:
 *   delete:
 *     summary: Eliminar una Deduccion
 *     tags: [Deducciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Deducciones-Eliminar'
 *     responses:
 *       200:
 *         description: Deduccion Eliminado
 *       400:
 *         description: La Deduccion no existe
 */

/**
 * @swagger
 * /GenerarPagos:
 *   get:
 *     summary: Listar los Pagos 
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Pagos por Realizar
 *       400:
 *         description: No hay Pagos existentes
 */




//Esquema de Datos de los Bancos

/**
 * @swagger
 * components:
 *   schemas:
 *     Bancos_Crear:
 *       type: object
 *       properties:
 *         Bancos:
 *           type: string
 *           description: Bancos (Tabla - Bancos)
 *       required:
 *         -codigo
 *         -nombre
 *         -cuenta
 *       example:
 *         codigo: "0108"
 *         nombre: Banco Provincial
 *         cuenta: "0108037815010063774"
 */

/**
 * @swagger
 * /CrearBanco:
 *   post:
 *     summary: Crear un nuevo Banco
 *     tags: [Bancos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Bancos_Crear'
 *     responses:
 *       200:
 *         description: Banco Creado
 *       400:
 *         description: Banco ya Registrado (Existente)
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Bancos_Eliminar:
 *       type: object
 *       properties:
 *         idbancos:
 *           type: int
 *           description: Id
 *       required:
 *         -idbancos
 *       example:
 *         idbancos: 1
 */

/**
 * @swagger
 * /EliminarBancos:
 *   delete:
 *     summary: Eliminar un Banco
 *     tags: [Bancos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Bancos_Eliminar'
 *     responses:
 *       200:
 *         description: Banco Eliminado
 *       400:
 *         description: El Banco no existe
 */

/**
 * @swagger
 * /ActualizaBanco:
 *   put:
 *     summary: Actualizar un Banco existente
 *     tags: [Bancos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Bancos-Editar'
 *     responses:
 *       200:
 *         description: Banco Actualizado
 *       400:
 *         description: El Banco no existe
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Bancos-Editar:
 *       type: object
 *       properties:
 *         codigo:
 *           type: string
 *           description: Codigo del Banco
 *         nombre:
 *           type: string
 *           description: Nombres del Banco
 *         Cuenta:
 *           type: string
 *           description: Cuenta de la Empresa
 *       required:
 *         -codigo
 *         -nombre
 *         -cuenta
 *       example:
 *         codigo: "0102"
 *         nombre: Banco Venezuela
 *         cuenta: "0102000000000000000"
 *         idbancos: 1
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Bancos_Listar:
 *       type: object
 *       properties:
 *         idbancos:
 *           type: int
 *           description: Id
 *         codigo:
 *           type: int
 *           description: Codigo del Banco
 *         nombre:
 *           type: string
 *           description: Nombre del Banco
 *         cuenta:
 *           type: int
 *           description: Cuenta del Banco
 *       example:
 *         idbancos: 1
 *         codigo: "0102"
 *         nombre: Banco de Venezuela
 *         cuenta: "0102037815010067"
 */

/**
 * @swagger
 * /ListarBanco:
 *   get:
 *     summary: Listar los Bancos existentes
 *     tags: [Bancos]
 *     responses:
 *       200:
 *         description: Bancos Registrados
 *       400:
 *         description: No hay Bancos existentes
 */
 

//Esquema de Datos de los Setup

/**
 * @swagger
 * components:
 *   schemas:
 *     Setup_Crear:
 *       type: object
 *       properties:
 *         Setup_file:
 *           type: string
 *           description: setup_banco_file (Tabla - setup_banco_file)
 *       required:
 *         -idbancos
 *         -tipofile
 *         -columnasfile
 *         -separadores
 *       example:
 *         idbancos: 1
 *         nombre: "TXT"
 *         columnasfile: "cuenta, cedula, monto, nombre, apellido"
 *         separadores: " "
 */

/**
 * @swagger
 * /Agregarsetup:
 *   post:
 *     summary: Crear un nuevo Setup
 *     tags: [Setup_file]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Setup_Crear'
 *     responses:
 *       200:
 *         description: Setup Creado
 *       400:
 *         description: Setup ya Registrado (Existente)
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Setup_Eliminar:
 *       type: object
 *       properties:
 *         idfile:
 *           type: int
 *           description: Id
 *       required:
 *         -idfile
 *       example:
 *         idfile: 1
 */

/**
 * @swagger
 * /EliminarSetup:
 *   delete:
 *     summary: Eliminar un Setup
 *     tags: [Setup_file]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Setup_Eliminar'
 *     responses:
 *       200:
 *         description: Configuracion Eliminada
 *       400:
 *         description: La configuracion no existe
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Setup_Listar:
 *       type: object
 *       properties:
 *         idfile:
 *           type: int
 *           description: Id
 *         idbancos:
 *           type: int
 *           description: Id del Banco
 *         tipofile:
 *           type: string
 *           description: Tipo del Txt
 *         columnasfile:
 *           type: string
 *           description: Columnas a usar en el txt
 *       example:
 *         idbancos: "1"
 *         tipofile: Txt
 *         columnasfile: "cuenta,cedula,monto, nombre, apellido"
 *         separadores: " "
 */

/**
 * @swagger
 * /Listarsetup:
 *   get:
 *     summary: Listar los Setup existentes
 *     tags: [Setup_file]
 *     responses:
 *       200:
 *         description: Configuraciones Registradas para el banco
 *       400:
 *         description: No hay Configuraciones existentes para el banco
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     Setup_Editar:
 *       type: object
 *       properties:
 *         Setup_file:
 *           type: string
 *           description: setup_banco_file (Tabla - setup_banco_file)
 *       required:
 *         -idfile
 *         -idbancos
 *         -tipo_file
 *         -columnasfile
 *         -separadores
 *       example:
 *         idfile: 1
 *         idbancos: 1
 *         tipo_file: "TXT"
 *         columnasfile : "cuenta, cedula, monto, nombre, apellido"
 *         separadores: " "
 */



/**
 * @swagger
 * /ActualizarSetup:
 *   put:
 *     summary: Crear un nuevo Setup
 *     tags: [Setup_file]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Setup_Editar'
 *     responses:
 *       200:
 *         description: Setup Creado
 *       400:
 *         description: Setup ya Registrado (Existente)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    Download:
 *       type: object
 *       properties:
 *         Download:
 *           type: string
 *           description: Download (Tabla - Download)
 *       required:
 *         -id_file
 *         -fecha_init
 *         -fecha_final
 *       example:
 *         id_file: 1
 *         fecha_init: "2023-07-15"
 *         fecha_final: "2023-07-31"
 */

/**
 * @swagger
 * /descargartxt:
 *   get:
 *     summary: Descargar archivo
 *     tags: [Download]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Download'
 *     responses:
 *       200:
 *         description: Descargado archivo
 *       400:
 *         description: No se pudo descargar
 */
