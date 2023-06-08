

TO DO:

-Edición de oferta: estás editando el puesto?
- Gestion de errores
- Sacar containers de containers
- Machacar token. cambios de usuario no se rerenderizan
- Candidate Search. que funcione sin darle a buscar
- Details job: Arreglar languages
- Emoticonos contacta
- Securizar pages: crear experiencia, crear oferta, editar experiencia, editar oferta
- Muchos errores en dropdown de navbar
- La edición de experiencia no está protegida
- Formularios en modales
- Arreglar formato fecha en el defaultvalue


- Hacer FAVORITOS profesionañes
- Aplicar a oferta
- Sacar más de un idioma al editar perfil


DONE:

- Proteger rutas
- Saber quién es el owner de la sesión
- Prerrellenar campos en formulario de editar perfil
- Que no se borren datos al editar perfil
- Servicios: de dónde viene data¿
- Skills al editar perfil?
- Edición de profile: no cambia sin recargar página
- TODO: SUPEDITAR LA SALIDA DE LA BARRA A LA EXISTENCIA DE USER
- TODO: Encapsular UseEffects
- Experiences se crean sin owner
- Desacoplar ontroladores
- Controladores auth no funcionan
- Cloudinary
- CRUD Jobs
- / Empleos 
- / Contacta
- / Inicio
- Ocultar botones si no eres dueño
- Search location
- Que en profesionales sólo aparezcan los de ROL: Profesional 
- Que sólo aparezcan empleos de tu categoría
- Guardar oferta
- Sacar username.
- Borrar experiencia, que desaparezca del perfil sin recarga: LOAD EXPERIENCE
- Editar perfil: renderizar un formulario u otro según el ROL
- Al iniciar sesión redirige a la segunda
- Que los empleos desaparezcan al borrar
- Rol Organización no puede crear ni ver experiencias
- Admin no puede ver empleos
- Pintar empleos en perfil para ONGs
- Borrar empleo, que desaparezca de "empleos" sin recarga
- Esconder marcador oferta para las organizaciones
- Botón de crear ofertas para ONGs en perfil
- Iconos de Candidate card
- colores de disponibilidad en card de candidates
- Usuarios que han guardado la oferta
- Filtro de profesionales
- Darle formato a los formularios
- Details job: Arreglar fecha
- Endpoints. arreglar readme
- Navbar por roles





















# El-Megafono-server

**Auth Routes**
Base URL `/auth`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/verify` | Verify Auth Token |
| POST | `/signup` | Signup user |
| POST | `/login` | Login user |


**User Routes**
Base URL `/api/users`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllUsers` | Get all users list |
| GET | `/getOneUser/:id` | Get matching ID user details|
| GET | `/favourites/:id` | Get list of users made favourite by a user| 
| POST | `/favourites/:id` | Add users to a list of favourites|
| PUT | `/:id/edit` | Matching ID user edition |
| DELETE | `/:id/delete` | Matching ID user deletion |
| DELETE | `/favourites/:id` | Matching ID deletion from favourites |


**Experience Routes**
Base URL `/api/experience` 

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/:id/getAllExperiences` | Get all experiences list from matching ID |
| GET | `/getOneExperience/:id` | Get matching ID experience details| 
| POST | `/saveExperience` | Create new experience  |
| PUT | `/:id/edit` | Matching ID experience edition |
| DELETE | `/:id/delete` | Matching ID experience deletion |


**Jobs Routes**
Base URL `/api/jobs`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllJobs` | Get all jobs list |
| GET | `/getOneJob/:id` | Get matching ID job details| 
| GET | `/owner/:id` | Get list of jobs with the same owner|
| GET | `/category/:id` | Get list of jobs with the same category|
| GET | `/saved/:id` | Get list of jobs saved on a user's profile|
| POST | `/saveJob` | Create new job offer |
| POST | `/saved/:id` | Save a maching ID job offer to a user's profile|
| PUT | `/:id/edit` | Matching ID job edition |
| DELETE | `/:id/delete` | Matching ID job deletion |
| DELETE | `/saved/:id` | Matching ID job deletion from saved|


**Job Application Routes**
Base URL: `/api/job-applications`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllJobApplications` | Get all job applications |
| GET | `/:id` | Matching ID job application|
| POST | `/apply/:id` | Apply to an ID job offer|
| DELETE | `/delete/:id` | Matching ID job deletion from saved|


 # El-Megafono-server

 