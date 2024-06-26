import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed
import { IntroComponent } from "./intro.component";
import {HeaderNavigationComponent} from "../components/header-navigation/header-navigation.component";
import {SidebarComponent} from "../components/sidebar/sidebar.component";

export default {
    title: 'Intro Page',
    component: IntroComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, HeaderNavigationComponent, SidebarComponent], // Import necessary Angular modules here
            declarations: []
        })
    ]
};

export const IntroPage = () => ({
    template: `<app-intro></app-intro>`, // Use inline template instead of templateUrl
});

export {IntroComponent};