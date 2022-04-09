import App from "./App";
import AuthProvider from "./services/pryv/service";

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
