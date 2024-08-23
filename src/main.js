import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import topmenu from '@/components/menu/topmenu'
import cors from 'cors';
import '@/assets/menu/iconfont.js'

// const app = express();
// const port = 3000;



// app.post('/login', (req, res) => {
//   res.send('登录成功');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const app = createApp(App)
app.use(cors)
app.use(topmenu)
app.use(router)
app.mount('#app')
