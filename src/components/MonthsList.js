import React, {useState} from 'react';
import UsersList from './UsersList';

const MonthsList = ({ months }) => {

  const setColor = (count) => {
    switch (true) {
      case (count <= 2): {
        return 'bg-secondary text-white';
      }
      case (count <= 6): {
        return 'bg-primary text-white';
      }
      case (count <= 10): {
        return 'bg-success text-white';
      }
      default: {
        return 'bg-danger text-white';
      }
    }
  };
  const [usersToShow, setUsersToShow] = useState([]);
  const [mouseMoved, setMouseMoved] = useState(false);

  const mouseEntered = (event) => {
    const m = months.find(item => item.id === +event.target.id);
    setUsersToShow(m.users[0]);
    setMouseMoved(true);
  };


  return (
    <div className="row content">
      <div className="col month">
        <ul>
          {months.map(monthItem => (
            <li
              key={monthItem.id}
              id={monthItem.id}
              className={setColor(monthItem.count)}
              onMouseEnter={mouseEntered}
            >
              {monthItem.name}
            </li>
          ))}
        </ul>
      </div>

      {mouseMoved
      ? <UsersList users={usersToShow} />
      : <p className="col">
          <span role="img" aria-label="finger">👈</span> Move mouse on month <br /> to see users
      </p>
      }
    </div>
  )
};

export default MonthsList;
