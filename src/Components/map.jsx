import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import styled from "styled-components";

const Text = styled.text`
    font-size: 25px;
`

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const Map = () => {
  return (
    <ComposableMap projection="geoAlbers" projectionConfig={{center: [-5, 30], scale:1200}} style={{width:"100%", height:"100%"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#2f3e46"
              stroke="white"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-122.9888, 38.5780]}>
        <circle r={8} fill="#db8e56"/>
      </Marker>
      <Marker coordinates={[-122.9888, 39]}>
      <Text>California</Text>
      </Marker>
    </ComposableMap>
  );
};

export default Map;
