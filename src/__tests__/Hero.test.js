import { render, screen } from '@testing-library/react';
import Hero from '../app/about/hero/Hero';

describe('About Page Hero Component', () => {
  test('renders showcase container', () => {
    render(<Hero />);
    expect(screen.getByRole('img', { name: /phone/i })).toBeInTheDocument();
  });

  test('renders all hero cards', () => {
    render(<Hero />);
    expect(screen.getByText('I believe in...')).toBeInTheDocument();
    expect(screen.getByText('Frontend should feel')).toBeInTheDocument();
    expect(screen.getByText('I love building for...')).toBeInTheDocument();
    expect(screen.getByText('The mindset I code with')).toBeInTheDocument();
    expect(screen.getByText('“Frontend is a craft…”')).toBeInTheDocument();
  });

  test('renders LinkedIn link', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /phone/i });
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/thesonia07');
  });
});
