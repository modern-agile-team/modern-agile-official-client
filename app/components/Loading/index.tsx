import React from 'react';
import MainLogo from 'assets/logo/main-logo.png';

const Loading = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <img
        src={MainLogo}
        alt="로딩중"
        width={200}
        style={{
          width: '80px',
          borderRadius: '9px',
          boxShadow: '1px 1px 3px #bdbdbd',
        }}
      />
    </div>
  );
};

export default Loading;
