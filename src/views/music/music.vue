<template>
  <div id="aplayer"></div>
  <div>
	<meting-js
		id="10113950624"
		server="netease"
		type="playlist"
		autoplay="false"
		loop="all"
		order="list"
		list-folded="false"
		list-max-height="550px"
		>
	</meting-js>
  </div>
	
  
</template>
<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
// import './Meting.js'

export default {
data(){
	return{
		 audio: [{
			name: 'Record Player',
            artist: 'Daisy the Great / AJR',
            url: 'http://music.163.com/song/media/outer/url?id=1874302915.mp3',
            cover: 'http://p2.music.126.net/EgdLxvuuWMjbL_4HhSpUdw==/109951166340379569.jpg?param=130y130'
		  },
		  {
			name: '庭園にて。',
            artist: 'acane_madder',
            url: 'http://music.163.com/song/media/outer/url?id=29043459.mp3',
            cover: 'http://p2.music.126.net/WUK_iM1E3G1KrzePgrKr2A==/3247957348498924.jpg?param=130y130'
		  },
		  {
			name: '残像',
            artist: 'Dios',
            url: 'http://music.163.com/song/media/outer/url?id=1956037939.mp3',
            cover: 'http://p1.music.126.net/N-0SITc4bvj7DyXZ6S2RhA==/109951169470042279.jpg?param=130y130'
		  }]
		  
	  }
  },
  methods:{
	  addMyAudio() {
	        const ap = new APlayer({
	          container: document.getElementById("aplayer"),
	          fixed: true,
			  autoplay:true,
			  audio: this.audio
	        })
		},
  },
  mounted() {
	  this.addMyAudio();
  }
}
</script>

<style>

</style>