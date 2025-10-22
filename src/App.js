import tuba from './tuba.jpeg';
import './App.css';

function App() {
  return (
    <div
      style={{
        minHeight: '80vh',
        // background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          padding: '48px',
          maxWidth: '448px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              width: '128px',
              height: '128px',
              margin: '0 auto 24px',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #cbd5e1, #94a3b8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '4px solid white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
          >
            <img
              src={tuba}
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '8px',
          }}
        >
          Annur Tasnim islam
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#475569',
            marginBottom: '16px',
          }}
        >
          Software Engineer
        </p>

        <div
          style={{
            paddingTop: '16px',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Grameen Healthtech Ltd
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
