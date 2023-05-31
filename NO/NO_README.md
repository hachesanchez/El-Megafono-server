TO DO:

- Proteger rutas
- Saber quién es el owner de la sesión
- Prerrellenar campos en formulario de editar perfil
- Que no se borren datos al editar perfil
- Servicios: de dónde viene data¿

- Al iniciar sesión redirige a la segunda
- Sacar más de un idioma al editar perfil
- Skills al editar perfil?
- Editar perfil: renderizar un formulario u otro según el ROL
- Perfil no salen los datos. en Auth routes server > payload



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
