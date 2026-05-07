import React from "react";
import { View } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

export default function DrawingWrapper() {
  return (
    <View style={{ flex: 1 }}>
      <WithSkiaWeb
        opts={{
          locateFile: (file: string) =>
            `https://cdn.jsdelivr.net/npm/canvaskit-wasm@0.40.0/bin/full/${file}`,
        }}
        getComponent={() => import("../drawing/DrawingDashboard")}
        fallback={<View style={{ flex: 1, backgroundColor: "#000" }} />}
      />
    </View>
  );
}
