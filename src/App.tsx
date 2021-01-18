import React from 'react';
import GlobalStyles, {Container} from './globalStyles';

import Calendar from './components/Calendar';

const events = [new Date(1962, 6, 4), new Date(1970, 2, 5), new Date(1991, 10, 18), new Date(1998, 0, 14), new Date(2000, 2, 15), new Date(2000, 11, 23), new Date(2017, 8, 11)];

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Calendar events={events}/>
      </Container>
    </>
  )
}

export default App;
