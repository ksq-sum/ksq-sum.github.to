<template>
    <div id="divI" >
        <input id="inputT" type="text"
        value="Laat je woord achter" autofocus>
    </div>
</template>

<script>
export default {

}
</script>

<style>
 #inputT{
    text-align:center;
    outline:none;
    border:none;
    background: transparent;
    font-size:20px;
    color:white;
    width:40%;
    border-bottom: 1px solid #DCDCDC;
    font-style: italic;
    word-spacing:3px
 }

 #divI{
     display:flex;
     justify-content: center;
 }
</style>