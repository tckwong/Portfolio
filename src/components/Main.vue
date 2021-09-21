<template>
    <body>
        <div class="profileCard">
            <div class="avatar">
                <img src="@/assets/profileTest.jpg" alt="profilePic"/>
            </div>
            <h3>Hi, My name is Trevor Wong, and I am a full stack developer.</h3>
        </div>
        <aside>
            <nav>
                <template>
                <v-sheet
                    height="400"
                    class="overflow-hidden"
                    style="position: relative;"
                >
                    <v-btn
                    color="pink"
                    dark
                    @click.stop="drawer = !drawer"
                    >
                    Toggle
                    </v-btn>
            
                    <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    >
                    <v-list-item>
                        <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    </v-navigation-drawer>
                </v-sheet>
                </template>
            </nav>
        </aside>
        <!-- <div data-collapse="medium" data-animation="default" data-duration="400" data-no-scroll="1" class="left-navigation w-nav">
            <a href="#" class="logo-link w-nav-brand"><h1 class="brand-text">INCREDIBLE</h1></a>
                
        <div class="hamburger-button w-nav-button"><div class="w-icon-nav-menu"></div></div><div class="social-footer w-hidden-medium w-hidden-small w-hidden-tiny"><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24db50d5fbeb671afdfd5_social-03-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24de00d5fbeb671afdfe7_social-18-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dd8bba289360a8cc463_social-15-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dd50d5fbeb671afdfe2_social-14-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dd00d5fbeb671afdfe0_social-12-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54d24dc40d5fbeb671afdfdd_social-08-white.svg" width="17" alt=""></a><a href="#" class="social-icon-link w-inline-block"><img src="https://assets.website-files.com/5531240438615e9e376d4489/54e77bf6942b09583a0ebbca_social-30-white.svg" width="17" alt=""></a></div><div class="w-nav-overlay" data-wf-ignore="" style="display: none;"></div></div>
        </div> -->
        <section class="aboutMe">
            <div class="leftColumn">
                <h1>I am a full stack developer, with a knack for learning.</h1>
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
        grid-template-columns: 1fr 1fr;
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
   
</style>