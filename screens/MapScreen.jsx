import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import * as Location from "expo-location";

export default function MapScreen({ route }) {
  const apiKey = "yyxXlbgc7wMsUKBZY88fGXiCqM0IHspm";
  const restaurant = route.params?.restaurant;
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      let location = await Location.getCurrentPositionAsync({});
      setCoords(location.coords);
    })();
  }, []);

  if (!coords)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    );

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <script src="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.15.0/maps/maps-web.min.js"></script>
        <script src="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.15.0/services/services-web.min.js"></script>
        <link rel="stylesheet" href="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.15.0/maps/maps.css">
        <style>html, body, #map { margin: 0; height: 100%; }</style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          const map = tt.map({
            key: '${apiKey}',
            container: 'map',
            center: [${restaurant.lon}, ${restaurant.lat}],
            zoom: 13
          });

          // Marker cho quán ăn
          new tt.Marker().setLngLat([${restaurant.lon}, ${restaurant.lat}]).addTo(map);

          // Marker cho vị trí hiện tại
          const userMarker = new tt.Marker({ color: 'blue' })
            .setLngLat([${coords.longitude}, ${coords.latitude}])
            .addTo(map);

          // Gọi API chỉ đường
          tt.services.calculateRoute({
            key: '${apiKey}',
            locations: [[${coords.longitude}, ${coords.latitude}], [${restaurant.lon}, ${restaurant.lat}]]
          })
          .go()
          .then(function(response) {
            const geojson = response.toGeoJson();
            map.addLayer({
              id: 'route',
              type: 'line',
              source: { type: 'geojson', data: geojson },
              paint: { 'line-color': '#007AFF', 'line-width': 5 }
            });
            const bounds = new tt.LngLatBounds();
            geojson.features[0].geometry.coordinates.forEach(c => bounds.extend(tt.LngLat.convert(c)));
            map.fitBounds(bounds, { padding: 50 });
          });
        </script>
      </body>
    </html>
  `;

  return (
    <WebView originWhitelist={["*"]} source={{ html: htmlContent }} style={{ flex: 1 }} />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
