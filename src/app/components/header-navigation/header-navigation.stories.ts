import { moduleMetadata } from '@storybook/angular';
import { HeaderNavigationComponent } from './header-navigation.component';

export default {
    title: 'Components/Header Navigation',
    component: HeaderNavigationComponent,
    decorators: [
        moduleMetadata({
            declarations: [HeaderNavigationComponent]
        })
    ]
}