This is not in use anymore as I have switched to using vercel Next API routes to make the design of this app more simple and save me having to run an EC2 instance at all times.
This was formally deployed in a docker container onto ECS but then switched to deploying to EC2 instance and running server in the background using PM2 node process manager.
I liked using docker containers but ECS is a bit more expensive than EC2 and I like saving money more than technical ease of use.
