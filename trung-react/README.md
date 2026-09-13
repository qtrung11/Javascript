## Terms
- first render
- re-render (next render)
- MPA (multiple page apps) & SPA (single page apps)
- library, framework

- libs: react 
  - react -> component
  - react router -> navigate
  - drag drop -> dnd kit
  - schedule -> fullcalendar
  - overview data -> chart
  - call api -> fetch or axios
- framework: angular
  - có sẵn 1 bộ khung
  - include libs: angular route, angular http

# Naming convention
- camelCase: name variable, name function
- UPPERCASE: constant (config folder)
- lower-case: name file react component, name folder
- PascalCase: name react component

# Interview
## How many way to render component?
- state change
- props change
- parent component re-render

# Git
- Repository: github, gitlab ...
- Git CLI
- Git state: committed, update, delete, modified

# Gitflow
- 3 branchs
  - main/master - stable - use for PRODUCTION (live user)
  - qc/uat - unstable - use for QC team
  - develop - unstable - use for developer team

```bash
# Task: Scrum 1 - RB - Create Promotion Modal\

## Step developer
1. always switch main branch
$ git checkout main

2. get latest code 
$ git pull

3. create new an new branch. Format: {jira id} - {jira title}
$ git checkout -b scrum-1-rb-create-promotion-modal

4. commit code and push
$ git status
$ git add .
$ git commit -m "create promotion modal"
$ git push

## Step review


```

# Git CLI
- git pull: get lasted code from remote repository
- git status: check status file changes
- git add .: add all file changes into staging area
- git commit -m "xxx": add file changes into .git (local repository)
- git push: push code in remote repository
- git checkout {name branch}: switch branch
- git checkout -b {name branch}: create a new branch

```bash
# 1. get lasted code
$ git pull

# 2. create new branch
$ git checkout -b {name branch}

# 3. code and push
$ git add .
$ git commit -m "message"
$ git push
```