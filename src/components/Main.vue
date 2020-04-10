<template>
<div id="mainSection">
<div id="userName"><span style="text-decoration: underline">Mai Kawaoka</span></div>
<p>
</p>
<div id="companyName">Seattle consulting</div>
<img id="profilePicture" src="../assets/img_mai.png">
</div>
</template>


<style scoped>
@import url(https://www.google.com/get/noto/);
</style>

<style>
#mainSection {
background-color: linear-gradient(180deg #80E1F7 #06C1E6);
width: 100%;
height: auto;
text-align: center;
}

#userName {
color: #FFFFFF;
font-family: 'Noto Sans';
font-weight: bold;
font-size: 18pt;
text-shadow: 0px 0.5px 2px black;
padding: 20px 0;
margin: 0 310px;
}

#companyName {
color:#ffffff;
padding-top: 20px;
font-family: 'Noto Sans JP', sans-serif;
font-weight: border;
font-size: 18pt;
}

#profilePicture {
background-position: center;  
border-radius: 50%;
width: 300px;
height: auto;
}
</style>