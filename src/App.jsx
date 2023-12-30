import { useState } from 'react';

import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';

function App() {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);

  const handleAddProjectClick = () => {
    setShowNewProjectForm(true);
  };
  const handleCloseClick = () => {
    setShowNewProjectForm(false);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addProjectClickHandler={handleAddProjectClick} />
      {showNewProjectForm && (
        <NewProject closeClickHandler={handleCloseClick} />
      )}
    </main>
  );
}

export default App;
