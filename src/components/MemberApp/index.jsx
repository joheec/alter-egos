import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../../auth0-wrapper';

function MemberApp() {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: '/member' }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect]);

  if (isAuthenticated) {
    return <Route path='/member' component={() => <div>Member</div>} />;
  }

  return null;
}

export default MemberApp;
