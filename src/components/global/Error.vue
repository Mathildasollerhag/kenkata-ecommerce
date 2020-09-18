<template>
<div class="bgc">
    <div class="container">
        <div class="text-center mt-10">
            <img class="" src="../../images/404.png" alt="">
            <h4 class="bluetext text-center mb-3 mt-5">Oops! The page you are looking for doesn't exist.</h4>
            <div class="text-center">
                <button class="btn lightblue mt-2 mr-3">HOME</button>
                <button class="btn darkblue mt-2 ml-3">CONTACT US</button>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    
}
</script>
<style scoped>
.lightblue{
    background-color: rgb(0, 207, 207);
    color: white;
    border-radius: 20px;
    padding: 0.5rem 1.7rem !important;
}
.lightblue:hover{
    color: rgb(0, 207, 207);
    background-color: white;
}
.darkblue:hover{
    color: #1328a0;
    background-color: white;
}
.darkblue{
    background-color: #0E153D;
    color: white;
    border-radius: 20px;
    padding: 0.5rem 1.7rem !important;
}
.bluetext{
    color: #16205a;
}
.mt-10{
    padding: 10rem 0 !important;
    
}
.bgc{
    background-color: #E3E3E3;
}
</style>