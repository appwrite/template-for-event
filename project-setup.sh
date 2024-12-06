#!/bin/bash

#Create the database:
appwrite databases create --database-id 'hackathon' --name 'hackathon'

#Create a collection
appwrite databases create-collection \
    --database-id 'hackathon' \
    --collection-id 'submissions' \
    --name 'submissions' \
    --permissions 'read("Users")' 'write("Users")' 'update("Users")' 'delete("Users")'

#create the attributes
appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'title' --size 255 --required true

appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'description' --size 1024 --required true

appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'inspiration' --size 1024 --required true

appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'stack' --size 1024 --required true

appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'repositoryLink' --size 255 --required true

appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'demoLink' --size 255 --required true

appwrite databases create-string-attribute --database-id 'hackathon' --collection-id 'submissions' --key 'user-id' --size 50 --required true