import axios from 'axios'

export default{
    name:"topmenu",
    props: {
        options:Array
    },
    data() {
        return{
            menudata:{}
        }
    },
    methods: {
        getprops(){
            this.menudata = this.options
        },
        ifshowClick(item){
            
            if (item.label == "jdk下载") {
                // var winRecord = window.open('','location=no','',false)
                // winRecord.location.href = 'https://repo.huaweicloud.com/java/jdk/11.0.2+7/jdk-11.0.2_windows-x64_bin.zip';
                // axios.get('https://repo.huaweicloud.com/java/jdk/11.0.2+7/jdk-11.0.2_windows-x64_bin.zip')
                // axios.defaults.baseURL = '/api'
 
                // axios.
                // get('/')
                //     .then((response) => {  console.log(response.data);
                // })
                // .catch((error) => {
                //   console.error(error);
                // });
                console.log('a')
                const a = document.createElement('a');
    a.setAttribute('href', 'https://repo.huaweicloud.com/java/jdk/11.0.2+7/jdk-11.0.2_windows-x64_bin.zip');
    a.setAttribute('download', 'lzwme-index.html');
    a.click();
            }
            item.ifshow = !item.ifshow
        }
    },
    created() {
        this.getprops()
    },
}


