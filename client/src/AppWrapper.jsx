import App from "./App";
import AuthProvider from "./services/auth/service";

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
