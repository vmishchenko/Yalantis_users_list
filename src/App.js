import React, {useState} from 'react';
import getData from './api/getData';
import MonthsList from './components/MonthsList';


import './App.css';

function App() {
  const usersList = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

  const templateMonths = [
    {
      name: 'Jan',
    },
    {
      name: 'Feb',
    },
    {
      name: 'Mar',
    },
    {
      name: 'Apr',
    },
    {
      name: 'May',
    },
    {
      name: 'Jun',
    },
    {
      name: 'Jul',
    },
    {
      name: 'Aug',
    },
    {
      name: 'Sep',
    },
    {
      name: 'Oct',
    },
    {
      name: 'Nov',
    },
    {
      name: 'Dec',
    },
  ];

  const [months, setMonths] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);



  const loadUsers = async() => {
    setLoading(true);

    const loadedUsers = await Promise.all(await getData(usersList))
      .finally(() => setLoaded(true));

    setLoading(false);
    for (let i = 0; i < 12; i++) {
      let tempUsersArr = [];
      tempUsersArr
        .push([...loadedUsers]
          .filter(user => new Date(user.dob).getMonth() === i)
        );

      templateMonths[i] = {
        ...templateMonths[i],
        id: i,
        users: tempUsersArr,
        count: tempUsersArr[0].length,
      }
    }
    setMonths(templateMonths);
  };


  return (
    <div className="App">
      {!isLoaded
        ? (
          <button
            type="button"
            disabled={isLoading}
            onClick={loadUsers}
            className="btn btn-dark"
          >
            {isLoading ? (<>Loading...</>) : (<>Load Users</>)}
          </button>
        )
        : (
          <>
            <MonthsList months={months} />
          </>
        )
      }
    </div>
  );
}

export default App;
