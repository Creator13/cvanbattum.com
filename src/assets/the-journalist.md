In assignment for the [Dutch Institute for Sound and Vision](https://www.beeldengeluid.nl/) (Beeld & Geluid), we created a classroom experience to teach schoolkids about the process of creating news. {.intro}

During this five-month long project, we explored ways to create an experience that effectively teaches young high school students (12-14yo) about the process of news creation. With the rapid online spread of fake news and information, media literacy is becoming an ever-more important curriculum item in the Netherlands. Our classroom experience aims to lay a solid foundation for navigating the seemingly infinite stream of information that we all have access to.

## The experience
From our early research, we learned that media literacy is not a topic that much of our target audience is actively thinking about. In order to create an effective teaching tool, we decided to design our workshop around the [four-stage competence model](https://en.wikipedia.org/wiki/Four_stages_of_competence). 

### Part 1

In the first part of the workshop, we make the students conscious about the process of news creation. The newsroom app is a little game in which the students have to filter through incoming news sources like press releases, calls, and more. _They_ get to decide what is worthy of being published. The workshop teachers are involved by acting out the role of editor-in-chief, and they can personally react to the choices the students make. Incorrect choices could lead to negative, real-world results for example.

![App screenshot](/project_content/journalist/webapp.jpg)

### Part 2

Where the first part aims to improve consciousness about news creation, the second part teaches competence. After simply learning about the different pitfalls of fake or false news in the first part, the second part will have them apply their newly gained knowledge. We created a simulation of an event that the students will cover in their very own news items. Through augmented reality (powered by tablets), the students will form groups to interview characters with complex narrative trees. Through asking different questions, different students will uncover different parts of the story. After they collected their information, they can use real reporting equipment like cameras, microphones and editing software to create their own audiovisual newsitem. Everyone will get a chance to display theirs to the class, before getting in-character feedback from their editor-in-chief teacher.

![Newsroom impression](/project_content/journalist/part2.jpg){.no-shadow}

## Creating a webapp
When it became clear we would be creating a distributed game, I gave myself the goal of learning modern web technologies. In particular, I wanted to refresh my knowledge of Node.js and I was very interested in learning TypeScript and some front-end framework. This framework ended up being Vue.

For its relatively simple premise, this project was surprisingly complex. With at least three different groups of end users, I had to create three separate interfaces, as well as three different routings behind the scenes. 

### Accessible prototyping
 As soon as we were ready to test the webapp, we needed to add and edit relatively large amounts of content quickly. Since I had my hands full with programming, and because the team consisted mostly of non-programmers, I created an interface that would allow the testers to quickly manage the content. It didn't need to be anything impressive in terms of interface design, but it had to be usable and simple enough for everyone to understand.

![Source management interface](/project_content/journalist/manage.png)

## The team
My partners in crime during this project. We all had about an equal hand in the experience design, hence no mention of this role on any person in particular.

- [Joyce van der Zon](http://jrochel.portfoliobox.me/) - 2D art & visual design
- [Pieter Dieleman](https://nl.linkedin.com/in/pieter-dieleman-b87506a4) - Testing, presentation & client communication
- [Rafaël Lie Kwie](https://dribbble.com/Rulk) - Interface design
- [Nina Durge](https://www.ninadurge.com/) - 2D art & visual design
- [Evangelos Tsakanikas](https://www.linkedin.com/in/evangelos-tsakanikas-04413817a/) - Android app programming in Unity
- [Jaël van Rossum](mailto:jael.vanrossum@student.hku.nl) - Narrative design
- Casper van Battum - Webapp frontend programming & backend programming