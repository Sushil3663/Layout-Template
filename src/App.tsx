import { ConfigProvider } from "antd";
import All from "./component/Layout";
import AntdConfig from "./utils/antdConfigs";
import GlobalStyles from "./constants/style/globalStyles";

function App() {
  return (
    <>
      <ConfigProvider theme={AntdConfig}>
        <GlobalStyles />
        <All />
      </ConfigProvider>
    </>
  );
}

export default App;
