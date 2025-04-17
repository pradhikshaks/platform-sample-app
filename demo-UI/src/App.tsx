import { useEffect, useState } from 'react'
import Home from './screen/Home'
import { getData } from './utils/Invoke';

function App() {

const [empolyeeData, setEmployeeData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    getData('employee')
      .then((result) => setEmployeeData(result))
      .catch((err) => console.error('Failed to load data:', err));

    getData('project')
      .then((result) => setProjectData(result))
      .catch((err) => console.error('Failed to load data:', err));

  }, [])
  return (
    <Home employee={empolyeeData} project={projectData}/>
  )
}

export default App
