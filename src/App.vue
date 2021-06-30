<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
    </div>  -->
 
    <router-view/>
  </div>
</template>

<style lang="less">
html, body, #app {
	height: 100%;
  width: 100%;
	margin: 0px;
	padding: 0px;
}

*{
  margin:0px;
  padding:0px;
  border:0px;

}
</style>
