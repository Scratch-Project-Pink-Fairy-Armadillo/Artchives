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


to see your current branch do command git branch (the green one with the star is your branch)

to get code updates: switch to dev branch using the command: git checkout dev
pull the changes using command: git pull origin dev
if have an active branch, use command git merge dev (use this command while in your branch and will be merging from dev branch AFTER you pull origin dev)
if want to start a new branch from these dev changes, use command: git checkout -b (name/feature)
always push your changes to your active branch (name/feature) using command: git push origin (name/feature)
on github, you will want to pull request from base: dev and compare (name/feature) branch
once pull request is approved by other partner, dev will be updated