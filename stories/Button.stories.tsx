import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button as ButtonComponent} from './Button';

export default {
    title: 'Example',
    component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;
export const Button = Template.bind({});

Button.args = {
    primary: true,
    label: 'Button',
    size: 'large',
};
