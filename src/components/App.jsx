import Feedback from './Feedback/index.jsx';
import Section from './Section/index.jsx';

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback />
      </Section>
    </div>
  );
};
