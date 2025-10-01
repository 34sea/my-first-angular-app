import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { HelloWorld } from './hello-world/hello-world';
import { Testebindings } from './components/testebindings/testebindings';
import { Condicionals } from './components/condicionals/condicionals';
import { Flow } from './components/flow/flow';
import { ChildComponent } from './components/con-between-com/child-component/child-component';
import { ConBetweenCom } from './components/con-between-com/con-between-com';

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
    },
    {
        path: "condicionals",
        component: Condicionals
    },
    {
        path: "flow",
        component: Flow
    },
    {
        path: "connection",
        component: ConBetweenCom
    }
    
    
];
