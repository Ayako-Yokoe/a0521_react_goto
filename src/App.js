import './App.css';

import ChallengeA from './challenges/challengeA/ChallengeA'
import ChallengeB from './challenges/challengeB/ChallengeB'
import ChallengeC from './challenges/challengeC/ChallengeC'
import ChallengeD from './challenges/challengeD/ChallengeD'
import ComponentA from './challenges/challengeE/ComponentA';

function App() {
  return (
    <div className="App">
      {/* <ChallengeA />   */}
      {/* <ChallengeB />   */}
      {/* <ChallengeC />   */}
      {/* <ChallengeD />   */}
      <ComponentA />
    </div>
  );
}

export default App;
