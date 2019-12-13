<template>
    <div class="container mt-5 mb-5">
        <div class="form-group mt-5 pt-5">
            <h4 style="color: #e84c3d;">About Us</h4>
            <hr class="hr" />
            <p class="text-white">
                Trash Treasure, also known as e-Business, is simply the sale and purchase of services and goods over an electronic medium, like the Internet. It also involves electronically transferring data and funds between two or more parties which is coming soon in near future. Simply put, it is online shopping as we commonly know it.
                It has become so convenient and easy, that anyone can shop for anything right from a living room, with just a few clicks. This has evolved more with the emergence of smartphones, where now, you can shop from anywhere and anytime, with a wireless device connected to the Internet. Now you can search for almost any product or service online, without having to go anywhere physically.
            </p>
        </div>
        <div class="form-group">
            <h4 style="color: #e84c3d;">Our Team</h4>
            <hr class="hr" />
            <div id="content">
                <div id="member1"><img :src="getImage('member.png')" alt="Faizan Jariwala" /><span class="name">Faizan Jariwala</span><span class="position">Developer</span></div>
                <div id="member2"><img :src="getImage('member.png')" alt="Mukul Patel" /><span class="name">Mukul Patel</span><span class="position">Designer</span></div>
                <div id="member3"><img :src="getImage('member.png')" alt="Sahil Sheoran" /><span class="name">Sahil Sheoran</span><span class="position">Developer</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutComponent",
        methods: {
            getImage(src) {
                return require('../assets/' + src);
            }
        }
    }
</script>

<style scoped>
    #memberHead {
        margin: 30px;
        font-size: 1.62em;
        color: #439ce8;
    }

    #content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;
    }

    #member1,
    #member2,
    #member3 {
        display: grid;
        margin: 30px;
    }

    #content img {
        height: 320px;
        width: 320px;
        box-shadow: 0 0 20px 1px #666666;
        background-color: #555;
        border-radius: 50%;
    }

    .name,
    .position {
        text-align: center;
        margin-top: 10px;
        color: #439ce8;
    }

    .name {
        font-size: 2em;
        font-family: "Mortal Engines";
    }

    .position {
        font-style: italic;
    }
</style>