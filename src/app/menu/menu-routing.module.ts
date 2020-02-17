import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Route } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Route[] = [
    {
        path: 'menu',
        component: MenuComponent,
        children: [
            {
                path: 'landing',
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                            import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            // {
            //     path: 'counseling/relationship',
            //     children: [
            //         {
            //             path: '',
            //             loadChildren: () => 
            //                 import('../home/relationship/relationship.component').then(m => m.RelationshipComponent)

            //         }
            //     ]
            // }
        ]
    },
    {
        path: '',
        redirectTo: 'menu/landing',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]    
})
export class MenuRoutingModule { }
