/* eslint-disable react/react-in-jsx-scope */
import InputBase from '../components/InputBase';

const stories = {
  title: 'Input Base',
  component: InputBase,
};

export default stories;

function TemplateStory(args) {
  return <InputBase {...args} />;
}

const InputPassword = TemplateStory.bind();
const InputDate = TemplateStory.bind();
const TextArea = TemplateStory.bind();

InputPassword.args = {
  type: 'password',
  placeholder: 'Password',
  label: 'Password',
  value: '',
  id: 'input-password',
  onChangeInput: () => {},

};

InputDate.args = {
  type: 'date',
  placeholder: 'Date',
  label: 'Date',
  value: '',
  id: 'input-date',
  onChangeInput: () => {},
};
TextArea.args = {
  type: '',
  placeholder: 'testingT',
  label: 'Description',
  value: '',
  id: 'input-description',
  onChangeInput: () => {},
  textarea: true,
};

export { InputPassword, InputDate, TextArea };
