import { render, screen, fireEvent } from "@testing-library/react";
import Button from '../app/widgets/buttons/Button';

test("calls handler on click", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByText("Learn More"));
//   expect(handleClick).toHaveBeenCalledTimes(1);
});
