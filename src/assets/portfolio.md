As a developer, it would only be fair that I develop my portfolio website myself. The website that you're currently looking at is the result. Although it is relatively simple looking, it has a lot of convenience features for easy maintenance, without reliance on servers and databases. I will explain the different features on this page.{.intro}

This site is running on Typescript and vue-cli. The pages are pre-rendered using for fast performance and static deployment.

## Editing and managing projects
This is my personal portfolio website and it doesn't need complicated editing features. Fun to make for sure, but the time cost is simply not worth it. But that was not to be the end of it. Copying and pasting each new project and diving into source code for each spelling mistake I had to correct was not going to be a feasible solution either.

### Framework (Vue)
The first order of business was to use a framework. Developing modern web features in plain html is getting increasingly more complex for many reasons, but the one that totally swayed me was the templating that can be done with them. I could create a basic HTML template and apply that to each project I would ever want to add in the future. I chose to use Vue simply due to my existing familiarity with it.

### Markdown
With just a framework, I wasn't done yet. I needed a way to actually load the content of my pages into my site, and I didn't want to be limited by plain-text strings. Markdown was the first thing to come to mind. 

With markdown I would be able to use basic formatting; no more and no less than what I needed. It is a portable format, that can be edited and viewed by with no editor needed. Meaning, I could edit projects easily from anywhere if I ever needed to. Formatting is unified through css so every page will have the same looks, while at the same time giving up nothing in terms of flexibility.

I use `markdown-it` ([npm link](https://www.npmjs.com/package/markdown-it)) to render the markdown files. Apart from being a really good and feature-complete markdown renderer, it also allows me to add custom classes to files. I use this to for example display the external links at the bottom of pages. I can add custom icons to links and add display hints to images to tell if they should be full-width or centered.

### File system database
As I only add a new project to this site every few months, at most three times a year, I didn't want to bother with setting up a database and dealing with external hosting. That makes the easiest solution for managing the projects using a simple file system database. A json array keeps track of the projects and their metadata (such as the titles, thumbnail/splash images, or dates), while the markdown files are retrieved by plainly importing them into the code.

### Flexibility and scalability
Using a file system database that requires some manual work to use isn't the most flexible solution out there. But it is very easy and very cheap to manage. Most importantly though, the system is scalable. If I decided to use a dedicated database one day, it would only be a question of moving the current data into a database and that's it. Slap a few queries together to load the data in, and no further editing of the code would be needed. The views will take care of the rest.

## Hosting & rendering
The website is entirely static. There is no user interaction with the server, and so it could be hosted statically. This is nice, because static hosting is cheap or even free! The easiest solution proved to be to upload it to GitHub pages. The process of deployment isn't entirely smooth (the current setup uses two separate repos), but a small shell script can reduce the job to a single click. 

### Pre-rendering
A static host like GitHub pages doesn't allow any dynamic interaction between server and client. This also means I can't run my Vue app on it. There is however a solution for this called pre-rendering. This allows to render all the pages of a Vue router into html pages that can then be loaded as if it were any other webpage. The Vue app itself is compiled into a plain Javascript script that takes care of things like page transitions and other features. Pre-rendering is done using the `prerender-spa-plugin` ([npm link](https://www.npmjs.com/package/prerender-spa-plugin)).

One challenge was to render a page for each of the projects. In the original Vue app, each project is rendered onto the same page using address lookup in the vue-router. This functionality is server-side and can therefore not be used on a static website. In order for this to work, I had to add an extra step into the build process, where the list of projects is analysed and added to the paths to be rendered. This caused some typescript and javascript interop problems, which I fixed by adding a pre-build step that converts `vue.config.ts` into the required `vue.config.js` file.

[Source code](https://github.com/Creator13/cvanbattum.com){.external-link}{.github} {.link-container}