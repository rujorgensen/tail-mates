import type { Meta, StoryObj } from '@storybook/html';
import './card.js';

interface CardArgs {
  variant: 'default' | 'elevated' | 'bordered';
  padding: 'none' | 'small' | 'medium' | 'large';
  headerContent: string;
  mainContent: string;
  footerContent: string;
}

const meta: Meta<CardArgs> = {
  title: 'Components/TmCard',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'bordered'],
      description: 'Card variant style',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Card padding size',
    },
    headerContent: {
      control: { type: 'text' },
      description: 'Content for the header slot',
    },
    mainContent: {
      control: { type: 'text' },
      description: 'Main content of the card',
    },
    footerContent: {
      control: { type: 'text' },
      description: 'Content for the footer slot',
    },
  },
  args: {
    variant: 'default',
    padding: 'medium',
    headerContent: '',
    mainContent: 'This is the main content of the card.',
    footerContent: '',
  },
  render: ({ variant, padding, headerContent, mainContent, footerContent }) => {
    const card = document.createElement('tm-card');
    card.setAttribute('variant', variant);
    card.setAttribute('padding', padding);
    
    // Add header if provided
    if (headerContent) {
      const header = document.createElement('div');
      header.setAttribute('slot', 'header');
      header.textContent = headerContent;
      card.appendChild(header);
    }
    
    // Add main content
    const content = document.createElement('p');
    content.textContent = mainContent;
    card.appendChild(content);
    
    // Add footer if provided
    if (footerContent) {
      const footer = document.createElement('div');
      footer.setAttribute('slot', 'footer');
      footer.textContent = footerContent;
      card.appendChild(footer);
    }
    
    return card;
  },
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Default: Story = {
  args: {
    variant: 'default',
    mainContent: 'This is a default card with basic styling.',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    mainContent: 'This is an elevated card with enhanced shadow effects.',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    mainContent: 'This is a bordered card with a border instead of shadow.',
  },
};

export const WithHeader: Story = {
  args: {
    headerContent: 'Card Header',
    mainContent: 'This card includes a header section.',
  },
};

export const WithFooter: Story = {
  args: {
    mainContent: 'This card includes a footer section.',
    footerContent: 'Card Footer',
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    headerContent: 'Card Title',
    mainContent: 'This card demonstrates both header and footer slots working together.',
    footerContent: 'Action buttons would go here',
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'small',
    headerContent: 'Compact Card',
    mainContent: 'This card uses small padding for a more compact appearance.',
    footerContent: 'Small footer',
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'large',
    headerContent: 'Spacious Card',
    mainContent: 'This card uses large padding for a more spacious appearance.',
    footerContent: 'Large footer',
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    headerContent: 'No Padding Card',
    mainContent: 'This card has no internal padding.',
    footerContent: 'No padding footer',
  },
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    container.style.gap = '24px';
    container.style.maxWidth = '1000px';
    
    const variants = ['default', 'elevated', 'bordered'] as const;
    
    variants.forEach(variant => {
      const card = document.createElement('tm-card');
      card.setAttribute('variant', variant);
      card.setAttribute('padding', 'medium');
      
      const header = document.createElement('div');
      header.setAttribute('slot', 'header');
      header.textContent = `${variant.charAt(0).toUpperCase() + variant.slice(1)} Card`;
      card.appendChild(header);
      
      const content = document.createElement('p');
      content.textContent = `This is a ${variant} card variant demonstrating the different styling options available.`;
      card.appendChild(content);
      
      const footer = document.createElement('div');
      footer.setAttribute('slot', 'footer');
      footer.textContent = 'Footer content';
      card.appendChild(footer);
      
      container.appendChild(card);
    });
    
    return container;
  },
};

export const RichContent: Story = {
  render: () => {
    const card = document.createElement('tm-card');
    card.setAttribute('variant', 'elevated');
    card.setAttribute('padding', 'large');
    
    const header = document.createElement('div');
    header.setAttribute('slot', 'header');
    header.innerHTML = '<strong>🐕 Dog Profile</strong>';
    card.appendChild(header);
    
    const content = document.createElement('div');
    content.innerHTML = `
      <h3>Max</h3>
      <p><strong>Breed:</strong> Golden Retriever</p>
      <p><strong>Age:</strong> 3 years old</p>
      <p><strong>Temperament:</strong> Friendly, energetic, loves meeting new dogs</p>
      <p><strong>Favorite Activities:</strong> Fetch, swimming, long walks</p>
    `;
    card.appendChild(content);
    
    const footer = document.createElement('div');
    footer.setAttribute('slot', 'footer');
    footer.innerHTML = '<button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Send Friend Request</button>';
    card.appendChild(footer);
    
    return card;
  },
};