#Note: complete backend api of nodejs for Crud Operations with user authentication

api information

user endpoints 
domain.com/api/v1/users/new  ( post  register )
domain.com/api/v1/users/login ( post )
domain.com/api/v1/users/logout ( get )
domain.com/api/v1/users/me   (get, user data after authentication ) 

task endpoints
domain.com/api/v1/task/ ( routes ) 
domain.com/api/v1/task/new ( post, after authentication, new task creation )
domain.com/api/v1/task/my ( get, after authentication get my task )
domain.com/api/v1/task/:id ( put, update the task, delete the task ) 
