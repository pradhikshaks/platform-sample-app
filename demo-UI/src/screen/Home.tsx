import React, { useState } from 'react'

const Home: React.FC = (props) => {
  // const [empolyeeData, setEmployeeData] = useState(props.employee);
  // const [projectData, setProjectData] = useState(props.project);
  const empolyeeHeader = ['ID', 'NAME', 'ROLE']
  const projectHeader = ['ID', 'NAME', 'PROJECT']

  // useEffect(() => {
  //   getData('employee')
  //     .then((result) => setEmployeeData(result))
  //     .catch((err) => console.error('Failed to load data:', err));

  //   getData('project')
  //     .then((result) => setProjectData(result))
  //     .catch((err) => console.error('Failed to load data:', err));

  // }, [])
  return (
    <div className='bg-amber-50 w-full h-screen' >
      <h1 className='text-xl text-center p-6'>Demo</h1>
      <div className='grid grid-cols-2 gap-10'>
        <div className='w-full h-max p-5'>
          <table className='table-fixed w-full'>
            <caption className="caption-top p-5">
              Employee
            </caption>
            <thead>
              <tr className='bg-red-100 border'>
                {empolyeeHeader.map((ele: string, index: number) => (
                  <th key={index} className='p-4 border'>{ele}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.employee?.map((ele: any, index: number) => (
                <tr key={index} className='border'>
                  <td className='p-4 border text-center'>{ele.Id}</td>
                  <td className='p-4 border text-center'>{ele.Name}</td>
                  <td className='p-4 text-center'>{ele.Role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='w-full h-max p-5'>
          <table className='table-fixed w-full'>
            <caption className="caption-top p-5">
              Project
            </caption>
            <thead>
              <tr className='bg-red-100'>
                {projectHeader.map((ele: string, index: number) => (
                  <th key={index} className='p-4 border'>{ele}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.project?.map((ele: any, index: number) => (
                <tr key={index} className='border'>
                  <td className='p-4 border text-center'>{ele.Id}</td>
                  <td className='p-4 border text-center'>{ele.Name}</td>
                  <td className='p-4 border text-center'>{ele.Project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home