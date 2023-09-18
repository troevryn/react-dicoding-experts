/* eslint-disable react/react-in-jsx-scope */
import Button from '../components/Button';

const stories = {
  title: 'Button',
  component: Button,
};

export default stories;

function TemplateStory(args) {
  return <Button {...args} />;
}

const ButtonGreen = TemplateStory.bind();

ButtonGreen.args = {
  color: 'text-white',
  backGroundColor: 'bg-green-500',
  label: 'Submit',
};
const ButtonBlue = TemplateStory.bind();

ButtonBlue.args = {
  color: 'text-white',
  backGroundColor: 'bg-blue-500',
  label: 'Submit',
};
const ButtonRed = TemplateStory.bind();

ButtonRed.args = {
  color: 'text-white',
  backGroundColor: 'bg-red-500',
  label: 'Submit',
};

export { ButtonGreen, ButtonBlue, ButtonRed };
