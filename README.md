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
| GET | `/getOneUser/:id` | Get users with role "PROFESIONAL"|
| GET | `/favourites/:id` | Get list of users made favourite by a user| 
| POST | `/addSavedJob/:jobId` | Add job to saved jobs array|
| PUT | `/deleteSavedJob/:jobId` | Matching ID deletion from favourites | 
| PUT | `/edit/:id` | Matching ID user edition |
| DELETE | `/delete/:id` | Matching ID user deletion |



**Experience Routes**
Base URL `/api/experience` 

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllExperiences` | Get all experiences list from matching ID |
| GET | `/getOneExperience/:id` | Get matching ID experience details| 
| POST | `/saveExperience` | Create new experience  |
| PUT | `/edit/:id` | Matching ID experience edition |
| DELETE | `/delete/:id` | Matching ID experience deletion |


**Jobs Routes**
Base URL `/api/jobs`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllJobs` | Get all jobs list |
| GET | `/getOneJob/:id` | Get matching ID job details| 
 | POST | `/saveJob` | Create new job offer |
| POST | `/saved/:id` | Save a maching ID job offer to a user's profile|
| PUT | `/edit/:id` | Matching ID job edition |
| DELETE | `/delete/:id` | Matching ID job deletion |
 

 
