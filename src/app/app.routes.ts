import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { HelloWorld } from './hello-world/hello-world';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "word",
        component: HelloWorld
    }
];
