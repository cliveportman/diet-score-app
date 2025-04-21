import React from "react";
import { View, ViewProps } from "react-native";

type TwContainerProps = ViewProps & {
  children?: React.ReactNode;
  twc?: string;
};

export function TwContainer({
  children,
  twc = "",
  ...props
}: TwContainerProps) {
  return (
    <View className={twc} {...props}>
      {children}
    </View>
  );
}
