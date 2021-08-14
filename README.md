# Document Framework

# What is Gatsby ?
Gatsby is static site generator of for React. It is nice tool to help build a static web and improve performance of a website.

# Some advantages of Gatsby
* HTML page was rendered in server side.
* Extend plugins easily.
* Config webpack easily.
* Manage routing automacticly depend on structure of folder.
* Gatsby only load important resource and it will automatically preload the resources needed for the other sites.

# Step by step to start Appvity Web v2 project
1. Clone source at url [Appvity Web v2](https://appvity.visualstudio.com/_git/Appvity%20Web%20v2).
2. Open folder that contain project and open terminal.
3. Run statement **npm i** to install node_modules (node requirement: version 14.16.1).
4. Run statement **npm run develop** to start project.
5. Open browser with url [localhost:8000](http://localhost:8000/).

# Structure of project
1. In src folder will contain some important folder:
* Component folder contain React components and they can reused.
* Pages folder contain all pages of project.
* Styles folder contain all file scss of project.
* Data folder contain markdown files of blog and faqs.
* Templates folder contain JS files that have used to define HTML structure for blog and faqs.
2. In static folder contain all images of all pages in project.

# How to create and reuse component and scss files in project.
1. To create and use a scss file
* Open style.scss file import scss file that you want to use
* In components folder of styles folder create new file scss if you want to create scss file for component
* In pages folder of styles folder create new file scss if you want to create scss file for page
* In core folder of styles folder create new file scss if you want to create scss file that defined available variable
 to can use quickly and custom easily in project about font, color, etc
2. To create and reuse a component file
* Go to component folder in src
* Create new JS file and export component in order to reuse
* Import component that you want to reuse anywhere when you need to reuse it