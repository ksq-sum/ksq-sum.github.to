import topmeun from './topMenu.vue'
topmeun.install = app =>{
    app.component(topmeun.name,topmeun)
}
export default topmeun