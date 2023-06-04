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
| POST | `/savedJob/:id` | Add job to saved jobs array|
| POST | `/favourites/:id` | Add users to a list of favourites|
| PUT | `/edit/:id` | Matching ID user edition |
| DELETE | `/delete/:id` | Matching ID user deletion |
| DELETE | `/favourites/:id` | Matching ID deletion from favourites |


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
| GET | `/owner/:id` | Get list of jobs with the same owner|
| GET | `/category/:id` | Get list of jobs with the same category|
| GET | `/saved/:id` | Get list of jobs saved on a user's profile|
| POST | `/saveJob` | Create new job offer |
| POST | `/saved/:id` | Save a maching ID job offer to a user's profile|
| PUT | `/edit/:id` | Matching ID job edition |
| DELETE | `/delete/:id` | Matching ID job deletion |
| DELETE | `/saved/:id` | Matching ID job deletion from saved|

 
