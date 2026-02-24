import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={'/signup'} style={{
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 16,
        color: 'white'
      }}>
        Create An Account
      </Link>
    </View>
  );
}
