import reactLogo from '../assets/react.svg';

export const ReactLogo = () => {
   return (
      <img
         src={reactLogo}
         alt="React Logo"
         style={{
            position: 'fixed',
            bottom: '30px',
            right: '20px',
            zIndex: 99,
            width: '80px',
         }}
      />
   )
}
