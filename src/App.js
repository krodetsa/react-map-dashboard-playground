import { MapComponent } from "react-map-dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import { MapContainer, RootContainer } from "./styles";
import { colors, layers, useCountriesStore, useCustomTooltip } from "./data";
import CustomTooltip from "./components/customTooltip/CustomTooltip";

function App() {
  const { countriesData } = useCountriesStore();
  const { customTooltip } = useCustomTooltip();
  return (
    <RootContainer>
      <Sidebar />
      <MapContainer>
        <MapComponent
          colors={colors}
          layers={layers}
          countriesData={countriesData}
          customTooltip={customTooltip ? <CustomTooltip /> : undefined}
        />
      </MapContainer>
    </RootContainer>
  );
}

export default App;
