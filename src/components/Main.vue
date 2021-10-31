<template>
    <body>
        <div class="profileCard">
            <div class="avatar">
                <img src="@/assets/profileTest.jpg" alt="profilePic"/>
            </div>
            <h3 id="test">Hello, My name is Trevor Wong, and I am a full stack developer.</h3>
        </div>
        <aside>
        </aside>
        <!-- <div data-collapse="medium" data-animation="default" data-duration="400" data-no-scroll="1" class="left-navigation w-nav">
            <a href="#" class="logo-link w-nav-brand"><h1 class="brand-text">INCREDIBLE</h1></a>
                
        <div class="hamburger-button w-nav-button"><div class="w-icon-nav-menu"></div></div><div class="social-footer w-hidden-medium w-hidden-small w-hidden-tiny"><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24db50d5fbeb671afdfd5_social-03-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24de00d5fbeb671afdfe7_social-18-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dd8bba289360a8cc463_social-15-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dd50d5fbeb671afdfe2_social-14-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dd00d5fbeb671afdfe0_social-12-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dc40d5fbeb671afdfdd_social-08-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54e77bf6942b09583a0ebbca_social-30-white.svg" width="17" alt=""></a></div><div class="w-nav-overlay" data-wf-ignore="" style="display: none;"></div></div>
        </div> -->
        <section class="aboutMe">
            <div class="leftColumn">
                <h1 class="wow slideInLeft">"I am a full stack developer, with a knack for learning."</h1>
            </div>
            <div>
                <h2>HTML5</h2>
                <div class="skills skillContainer">
                    <div class="bar1"></div>
                </div>
                <h2>CSS3</h2>
                <div class="skills skillContainer">
                    <div class="bar2"></div>
                </div>
                <h2>JavaScript</h2>
                <div class="skills skillContainer">
                    <div class="bar3"></div>
                </div>
                <h2>Python</h2>
                <div class="skills skillContainer">
                    <div class="skills bar4"></div>
            </div>
            </div>
        </section>
        <section>

        </section>
        <h2 id="heading">PROJECTS</h2>

        <div id="project-grid-cont">
            <div>
               
                <a target="_blank" href="https://viadellapizza.tk/">Pizza Restaurant</a>
                <p>Major skills utilized:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>Mixins</li>
                </ul>
            </div>
            <div>
                <a target="_blank" href="https://viadellapizza.tk/">Twitter Clone Full Stack</a>
                <p>Major skills utilized:</p>
                <ul>
                    <li>VueJS</li>
                    <li>JavaScript</li>
                    <li>Python Flask</li>
                    <li>MariaDB, mySQL</li>
                    <li>Apache2</li>
                    <li>HTML, CSS</li>
                </ul>
            </div>
            
        </div>
        

 
    </body>
</template>

<script>
import '../css/mainStyle.scss'
import '../css/profileCardStyle.scss'


    export default {
        name : "Main",
        data: () => {
            return {
                drawer: null,
                items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'About', icon: 'mdi-forum' },
                ],
                   
            }
        },
    }
</script>

<style lang="scss" scoped>
    .aboutMe {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: 10vw;
        margin-right: 10vw;
        .leftColumn {
            width: 80%;
            justify-self: center;
            align-self: center;
        }
    }
    .fill-height {
        background-color: blue;
        width: 20vw;
    }
    .left-navigation {
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 329px;
        height: 100%;
        background-color: #b9cadb;
    }
    .skillContainer {
        width: 100%;
        background-color: rgb(153, 183, 197);
        border-radius: 25px;
    }
    .skills {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #skillName {
        position: absolute;
        left: 0;
        background-color: blue;
        width: 10%;
        z-index: 5;
    }
    .bar1 {
        width: 90%;
        height: 30px;
        margin-left: 5px;
        background-color: rgb(35, 59, 192);
        border-radius: 25px;
    }
    .bar2 {
        width: 80%;
        height: 30px;
        margin-left: 5px;
        background-color: rgb(35, 59, 192);
        border-radius: 25px;
    }
    .bar3 {
        width: 70%;
        height: 30px;
        margin-left: 5px;
        background-color: rgb(35, 59, 192);
        border-radius: 25px;
    }
     .bar4 {
        width: 80%;
        height: 30px;
        margin-left: 5px;
        background-color: rgb(35, 59, 192);
        border-radius: 25px;
    }
    #heading {
        margin: 10px,0;
        text-align: center;
    }
    #project-grid-cont {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>