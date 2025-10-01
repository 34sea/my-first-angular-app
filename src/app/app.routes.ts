import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { HelloWorld } from './hello-world/hello-world';
import { Testebindings } from './components/testebindings/testebindings';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "word",
        component: HelloWorld
    },
    {
        path: "binding",
        component: Testebindings
    }
];
