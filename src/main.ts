import { createApp, Component } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


function createVueInstance(rootComponent: Component){
    const app = createApp(rootComponent)
    app.use(router);
    app.use(ElementPlus)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }

    return app;
}

createVueInstance(App).mount("#app");
