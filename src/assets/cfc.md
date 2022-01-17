*#ConnectForCoffee* is a twist on WiFi captive portals, those screens you get when you're looking for public WiFi that ask you to login. Connecting the physical space with the digital, *#ConnectForCoffee* will let you play a safe and fun game to meet a random stranger at public waiting areas. {.intro}

We designed *#ConnectForCoffee* for public waiting areas, like **train stations** and **airports**. As you're searching for a public WiFi network, instead of connecting to the internet, a little game will open and will **connect you to another person** waiting in the same area. Ask the person our **carefully prepared questions** to find out their looks and whereabouts, and if you manage to find each other, you'll both be rewarded by a **free cup of coffee** to enjoy **together**!

<div class="video-wrapper" ><iframe src="https://player.vimeo.com/video/382012948?portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

## Hijacking public WiFi
In order for it to work, we needed to surprise our players with something they didn't expect. As they try to connect to a seemingly normal public WiFi network, we wanted to surprise them with our game. In one of the first experiments we performed, we set up a small Arduino with WiFi to emit a network with the same name as the one at the Utrecht train station, and waited for people to connect to it. We asked them to come find us if they did, and against all our expectations we met a few people! 

### Running a custom captive portal on a Raspberry Pi
Raspberry Pis are surprisingly customizable little machines. Leveraging the power of all of Linux, I managed to run a Node.js server that would serve up our Vue webapp and function as a backend game server. Next, I had to configure the Pi to use its WiFi chip to emit a WiFi network instead of connect to one (similar to how a phone creates a WiFi hotspot). Then, using HostAPD, I configured the network to redirect to the locally running Node.js server as a captive portal. It was an incredible experience to create a 'real' access point out of a simple Raspberry Pi.

## Side quests: Rapid prototyping
In the early stages of the development process, driven by our goal to make an experience to connect people, we wanted to experiment with some social games. One day, we brough a rope to Utrecht Central Station and attempted to get random people to participate in a game of tug-of-war.

In order to test a game of *who is it* between strangers, we needed a set of random questions and answers to quickly test on people. Creating the entire app with network connectivity was more than unfeasible at this point, but picking all the questions by hand and matching them with answers on the fly would have been a hassle too. Instead **I wrote a Python script** ([link](https://github.com/Creator13/ConnectForCoffee/blob/master/playtesting/src/randomnumbers.py)) that would handle the complex part of the game based on just a list of questions and answers. Running on a single computer, it would generate a question that could be copied over to an online chat app (like WhatsApp), so the game master could have two random players communicate with each other without the two players being aware who the other one is.

## One page design poster

![One page design poster](/project_content/connect-for-coffee/onePageDesign.png)

## Made together with

- [Daniël Korssen](https://danielkorssen.com/portfolio/all): Front-end programming
- [Leon van Oldenborgh](https://studenthome.hku.nl/~leon.vanoldenborgh/index.html): Experience design & playtesting
- [Kai Calis](https://www.artstation.com/kai-calis): Visual design
- [Luuk Siewers](https://luuksiewers.nl/): Experience design, graphics & branding
- [Amar Ravi](https://www.amarravi.com/): Experience design
- Me: back-end programming, hardware & playtesting support


[GitHub repo](https://github.com/Creator13/ConnectForCoffee){.external-link}{.github} {.link-container}