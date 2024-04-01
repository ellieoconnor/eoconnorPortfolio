import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed
import {SidebarComponent} from './sidebar.component';
export default {
    title: 'Components/Sidebar',
    component: SidebarComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SidebarComponent], // Import necessary Angular modules here
            declarations: []
        })
    ]
};

export const Sidebar = () => ({
template: `<app-sidebar></app-sidebar>`}); // Use inline template instead of templateUrl

