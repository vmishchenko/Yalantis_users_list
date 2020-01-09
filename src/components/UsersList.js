import React from 'react';

const UsersList = ({ users }) => (
  <div className="col">
    <ul>
      {users.map(user =>
        <li key={user.id}>
          {`${user.firstName} ${user.lastName}`}
        </li>
      )}
    </ul>
  </div>
);

export default UsersList;
