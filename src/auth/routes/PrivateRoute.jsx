// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;
        }

        // Verifica si el usuario tiene los roles necesarios
        if (roles && roles.length > 0 && !roles.includes(user.role)) {
          return <Navigate to="/" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
