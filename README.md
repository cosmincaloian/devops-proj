# devops-proj

## Build
cd server
docker build -t ${app_name} .

## Start
cd server
docker run -p 3000:3000 ${app_name}

You can access it on http://localhost:3000/poll
