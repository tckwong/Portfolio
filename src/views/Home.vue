<template>
    <section id="background">
        <nav id="menu">
            <div class="menu-item">
                <div class="menu-text">
                    <a href="#top-skills">Skills</a>
                </div>
            </div>
            <div class="menu-item highlight">
                <div class="menu-text">
                    <a href="#projects">Projects</a>
                </div>
                
            </div>
            <div class="menu-item highlight">
                <div class="menu-text">
                    <a href="#contactAnchor">Contact</a>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-text">
                    <a href="#resumeSection">Resume</a>
                </div>
            </div>
        </nav>

        <body id="background">
            <div class="intro-section">
                <!-- Intro section Hello message -->
                <div class="intro-section">
                    <div class="intro-section1">
                        <h3 class="intro-text">Hi, My name is</h3>
                    </div>
                    <div class="intro-section2">
                        <h1 class="intro-text2">Trevor Wong.</h1>
                    </div>
                    <div class="intro-section3">
                        <h1 class="intro-text3">I am a full stack developer.</h1>
                    </div>
                        
                </div>
            
                <!-- Picture grid container -->
                <div id="aboutMeWrapper">
                    <div id="aboutMeGridContainer">
                    <div>
                        <h2>About Me</h2>
                        <p>I'm a full stack developer located in Calgary, AB. I am a passionate developer with interest in the frontend spectrum as well as the backend. I have a solid background in developing full-stack decoupled architectured projects.</p>
                        <p v-scroll-reveal.reset>I am a problem solver, with an interest in machine learning and AI. I enjoy playing racquet sports, snowboarding, and hiking.</p>
                    </div>

                    <div class="profileBorder">
                        <img class="borderImage" v-scroll-reveal.reset src="@/assets/techy-border.png" alt="border"/>
                        <img class="avatar" src="@/assets/portfolioPic.jpg" alt="profilePic"/>
                    </div>
                    
                    </div>
                </div>
                
                <div v-scroll-reveal.reset id="top-skills">
                    <h2 class="portfolio-heading">TOP SKILLS</h2>
                </div>
            </div>
            

            <section class="topSkillContainer">
                <div class="leftColumn">
                    <p v-scroll-reveal.reset>"I always strive to follow best industry practices and writing clean code. I take pride in the quality of my code."</p>
                </div>
                <div>
                    <h4>HTML5</h4>
                    <div class="skills skillContainer">
                        <div class="bar1"></div>
                    </div>
                    <h4>CSS3</h4>
                    <div class="skills skillContainer">
                        <div class="bar2"></div>
                    </div>
                    <h4>JavaScript</h4>
                    <div class="skills skillContainer">
                        <div class="bar3"></div>
                    </div>
                    <h4>VueJS</h4>
                    <div class="skills skillContainer">
                        <div class="skills bar4"></div>
                    </div>
                    <h4>Python</h4>
                    <div class="skills skillContainer">
                        <div class="skills bar5"></div>
                    </div>
                    <h4>MySQL</h4>
                    <div class="skills skillContainer">
                        <div class="skills bar6"></div>
                    </div>
                </div>
            </section>
            <!-- Additional Skills -->
            <section>
                <div class="skill-list">
                    <img src="@/assets/nodejsicon.png" alt="nodeJS logo">
                    <img src="@/assets/javaicon.png" alt="Java logo">
                    <img src="@/assets/vbaicon.png" alt="VBa logo">
                    <img src="@/assets/bootstrapicon.png" alt="Boostrap logo">
                    <p>NodeJS</p>
                    <p>Java</p>
                    <p>VBA</p>
                    <p>Bootstrap</p>
                </div>
            </section>
            <!-- Project Section -->
            <section>
                <div id="projects">
                    <h2 v-scroll-reveal.reset class="portfolio-heading">PROJECTS</h2>
                </div>
                
                <div class="project-grid-cont">
                    <div>
                        <a target="_blank" href="https://viadellapizza.tk/"><img src="@/assets/pizzaWebsiteTN.png" alt="pizzawebsite"/></a>
                    </div>
                    
                    <div class="project-desc">
                        <div>
                            <p>A local Italian restaurant designed to entice new customers to this small family business and to tell their story.</p>
                            <p class="inner_heading">Major skills utilized:</p>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Mixins</li>
                        </div>
                    </div>
                    
                    <div>
                        <a target="_blank" href="https://tweeterproject.ml/"><img src="@/assets/tweetertn.png" alt="twitter clone"/></a>
                    </div>
                    <div class="project-desc">
                        <div>
                            <p>A twitter clone designed using Vuetify. This website features login authentication, posts, likes, followers, and comments.</p>
                            <p class="inner_heading">Major skills utilized:</p>
                            <li>VueJS</li>
                            <li>JavaScript</li>
                            <li>Python Flask</li>
                            <li>MariaDB, SQL</li>
                            <li>Apache2</li>
                            <li>HTML, CSS</li>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://workoutrax.tk/"><img src="@/assets/workoutrax.png" alt="pizzawebsite"/></a>
                    </div>
                    
                    <div class="project-desc">
                        <div>
                            <p>A workout tracker designed to allow users to track and log their workouts. This website features a progression chart, and a timer to track the length of a workout.</p>
                            <p class="inner_heading">Major skills utilized:</p>
                            <li>Bootstrap, ChartJS</li>
                            <li>Python Flask</li>
                            <li>SQL</li>
                            <li>VueJS</li>
                            <li>HTML, CSS, JavaScript</li>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contactAnchor">
                <template>
                    <h2 class="contact-heading">Contact</h2>
                    <v-card
                elevation="2"
                ></v-card>
                    <div id="containerContact">
                        <!-- FormSubmit endpoint used for contact form submissions -->
                        <form class="myForm" action="https://formsubmit.co/wtrevor242@outlook.com" method="POST">
                            <input type="text" name="name" placeholder="name" required>
                            <input type="email" name="email" placeholder="email" required>
                            <input type="hidden" name="_next" value="https://trevorwong.ml">
                            <input type="hidden" name="_captcha" value="false">
                            <textarea class="text-area" name="message" rows="6" cols="80" placeholder="message"></textarea>
                            <button id="submitBtn" type="submit">Send</button>
                        </form>
                        <ul>
                            <li>Email : <a href="mailto:wtrevor242@outlook.com">wtrevor242@outlook.com</a></li>
                            <li>LinkedIn : <a target="_blank" href="https://linkedin.com/in/trevor-w1992">linkedin.com/in/trevor-w1992</a></li>
                            <li>Phone Number : <a href="tel:5874327438">(587)432-7438</a></li>
                        </ul>
                    </div>
                </template>
            </section>
            <section id="resumeSection">
                <h2 class="contact-heading">Resume</h2>
                <p>Click <a href="https://drive.google.com/file/d/12ZHYJIj_2zM0Ratg--3nTdUe9ChRPxsk/view?usp=sharing">here</a> to view my resume.</p>
            </section>
        </body>
       <v-footer
            padless
            >
            <v-row
            justify="center"
            no-gutters
            >
            <v-col
                class="footer-style text-center"
                cols="12"
            >
            {{ new Date().getFullYear() }} — <strong>Web Deseign by Trevor Wong</strong>
            </v-col>
            </v-row>
        </v-footer>
    </section>
</template>

<script>
import '../css/preloader.scss'
import '../css/mainStyle.scss'
import anime from 'animejs';

    export default {
        name : "Home",
        data: () => {
            return {
                toggle: false,
            }
        },
        methods: {
            pushToThankyou() {
                this.$router.push({name: 'Thankyou'})
            },
            preloader() {
                anime({
                targets: '#preload-svg path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1000,
                delay: function(el, i) { return i * 100 },
                direction: 'alternate',
                });
            },
            animateHeading1() {
                anime({
                targets: '.intro-section',
                translateY: -120,
                delay: 300,
                duration: 1500
                });
            },
        },
        mounted() {
            this.animateHeading1();
        }

    }
</script>

<style lang="scss" scoped>

</style>