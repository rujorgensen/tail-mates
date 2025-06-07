import type { Meta, StoryObj } from '@storybook/html';
import './button.js';

interface ButtonArgs {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  label: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/TmButton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'Button text content',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    label: 'Button',
  },
  render: ({ variant, size, disabled, label }) => {
    const button = document.createElement('tm-button');
    button.setAttribute('variant', variant);
    button.setAttribute('size', size);
    if (disabled) {
      button.setAttribute('disabled', '');
    }
    button.textContent = label;
    
    // Add event listener for demonstration
    button.addEventListener('tm-click', (event) => {
      console.log('Button clicked:', event.detail);
    });
    
    return button;
  },
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button',
  },
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    
    const variants = ['primary', 'secondary', 'outline'] as const;
    
    variants.forEach(variant => {
      const button = document.createElement('tm-button');
      button.setAttribute('variant', variant);
      button.textContent = `${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`;
      container.appendChild(button);
    });
    
    return container;
  },
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    
    const sizes = ['small', 'medium', 'large'] as const;
    
    sizes.forEach(size => {
      const button = document.createElement('tm-button');
      button.setAttribute('size', size);
      button.textContent = `${size.charAt(0).toUpperCase() + size.slice(1)} Button`;
      container.appendChild(button);
    });
    
    return container;
  },
};