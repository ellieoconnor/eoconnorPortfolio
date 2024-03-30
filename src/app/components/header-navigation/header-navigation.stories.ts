import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed
import { HeaderNavigationComponent } from './header-navigation.component';

export default {
    title: 'Components/Header Navigation',
    component: HeaderNavigationComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, HeaderNavigationComponent], // Import necessary Angular modules here
            declarations: []
        })
    ]
};

export const NavigationBar = () => ({
    template: `<app-header-navigation></app-header-navigation>`, // Use inline template instead of templateUrl
});

export {HeaderNavigationComponent};