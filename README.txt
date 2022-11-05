http://localhost:8080/ is our front end
localhost:3000 is our backend

git pull origin dev (check if changes in dev)

git checkout dev (first step to make sure you're in this branch)
git checkout -b (name/feature) --to do new branch from dev

git push origin (name/feature) --to push to github branch 


fetch call that displays all things we need (remember to change the pages)
https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cartist_display%2Cdepartment_title%2Cdepartment_id%2Cartwork_type_title%2Cmain_reference_number%2Cimage_id%2Cconfig%2C

fetch call that displays the images by image id
https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg

