import { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent, ButtonProps } from './Button';

export default {
	title: 'Components/Button',
	component: ButtonComponent,
	args: {
		label: 'Create account',
		type: 'primary',
		onClick: () => alert('test'),
		hasIcon: true,
	},
	argTypes: {},
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
	argTypes: {
		type: {
			control: {
				type: 'inline-radio',
			},
		},
		hasIcon: {
			options: [true, false],
			control: {
				type: 'boolean',
			},
		},
		onClick: { table: { disable: true } },
	},
};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		type: 'secondary',
	},
	argTypes: {
		type: {
			control: {
				type: 'inline-radio',
			},
		},
		hasIcon: {
			options: [true, false],
			control: {
				type: 'boolean',
			},
		},
		onClick: { table: { disable: true } },
	},
};
