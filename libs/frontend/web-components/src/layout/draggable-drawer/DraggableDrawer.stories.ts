import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import type { ButtonProps } from './DraggableDrawer';
import imageFile from '../../../.storybook/static/map.png';

import './DraggableDrawer';

const image = {
	src: imageFile,
	alt: 'my image',
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'layouts/DraggableDrawer',
	tags: [
		'autodocs',
	],
	render: () => html`
    <div style="border: 1px dashed black; height: 896px; width: 414px;">
      <draggable-drawer color="white">
        <div slot="body" style="background-image: url(${image.src}); background-size: cover; height: 100%; width: 100%;">
        </div>
        <div slot="drawer" style="background-color: white; height: 100%; border-top: 1px solid white;">
          <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </div>
      </draggable-drawer>
    </div>
  `,
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
		color: {
			control: {
				type: 'select',
			},
			options: [
				'red',
				'blue',
				'white',
			],
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		color: 'true',
	},
};
