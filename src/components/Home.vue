<template>
	<div class="bg">
		<div v-if="seen" class="bg">八号当铺</div>
		<div v-else class="bg">值得的人和事</div>
		<div v-for='item in items' class='item'>{{item.name}}</div>
	</div>	
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			seen: false,	
			items: [
			    {name: '不值得的人和事'},
			    {name: '不值得的钱'}]
		}
	}
}
</script>
<style scoped>
    .item {
    	position: absoult;
    	left: 0;
    	width: 100%;
    	height: 100px;
    	font-size: 100px;
    }
	.bg{
	  position:absoult;
	  width: 100%;
	  height: 100%;
	  background: url('../assets/bg.jpg') no-repeat left top;
	  background-size: 100% 100%;
	  font-size: 100px;
    }
</style>