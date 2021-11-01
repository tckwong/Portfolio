<template>
  <section id="background">
    <body class="intro-section">
      <nav>
        <a href="#project-heading">Skills</a><span></span>
        <a href="#project-heading">Projects</a>
      </nav>
        <div class="intro-section">
            <h3 id="test">Hi, My name is</h3>
            <h1>Trevor Wong.</h1>
            <h1>I am a full stack developer.</h1>
        </div>
        <div id="avatar-desc-grid">
              <h2>I am a full stack developer with a solid background in developing full-stack decoupled architectured projects.</h2>
              <img class="avatar" src="@/assets/portfolioPic.jpg" alt="profilePic"/>
          </div>
          <h2 id="project-heading">TOP SKILLS</h2>
        <section class="aboutMe">
          
            <div class="leftColumn">
                <h2 class="wow slideInLeft">"I enjoy utilizing my skills to build functional products. I take pride in the quality of my code."</h2>
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
          <h2 id="project-heading">PROJECTS</h2>
        <div class="project-grid-cont">
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
                <a target="_blank" href="https:tweeterproject.ml/">Twitter Clone Full Stack</a>
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
        </section>
        
    </body>
    </section>
</template>

<script>
import '../css/mainStyle.scss'

    export default {
        name : "Home",
        data: () => {
            return {

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
</style>