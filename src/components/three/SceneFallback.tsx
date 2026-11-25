import React from 'react';

export const SceneFallback: React.FC = () => {
  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Interactive 3D graphic visualization"
    >
      <div 
        style={{
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1.5px solid rgba(29, 78, 216, 0.35)',
          boxShadow: '0 0 50px rgba(29, 78, 216, 0.1), inset 0 0 30px rgba(2, 132, 199, 0.08)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'rotate3d 20s linear infinite'
        }}
      >
        <div 
          style={{
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            border: '1px dashed rgba(2, 132, 199, 0.45)',
            position: 'absolute'
          }} 
        />
        <div 
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #2563EB 0%, #1D4ED8 80%)',
            boxShadow: '0 8px 30px rgba(29, 78, 216, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '18px',
            letterSpacing: '1px'
          }}
        >
          QUIKBOOM
        </div>
      </div>
      <style>{`
        @keyframes rotate3d {
          from { transform: rotate(0deg) scale(0.98); }
          50% { transform: rotate(180deg) scale(1.02); }
          to { transform: rotate(360deg) scale(0.98); }
        }
      `}</style>
    </div>
  );
};
