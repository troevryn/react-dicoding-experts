/* eslint-disable react/react-in-jsx-scope */
import CardLeaderBoard from '../components/CardLeaderBoard';

const stories = {
  title: 'Card Leaderbords',
  component: CardLeaderBoard,
};

export default stories;

function TemplateStory(args) {
  return <CardLeaderBoard {...args} />;
}

const CardLeaderBoardBase = TemplateStory.bind();

CardLeaderBoardBase.args = {
  name: 'robby',
  score: 50,
  avatar: 'https://ui-avatars.com/api/?name=anas&background=random',
};

export { CardLeaderBoardBase };
