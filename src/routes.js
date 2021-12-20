import Home from "@/components/Home";
import Component1 from "@/components/Component1";
import Page from "@/components/Page";
import HelloWorld from "@/components/HelloWorld";

export default [
    { path: '/', component: Home },
    { path: '/path/:val', props: true, name: 'pathRoute', component: Component1 },
    { path: '/page/:val', props: true, component: Page },
    { path: '/hello/:val', props: true, component: HelloWorld}
];