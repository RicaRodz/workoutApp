import { gql } from "graphql-request";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";

const setsQuery = gql`
  query MyQuery {
    sets {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;

const SetsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sets"],
    queryFn: () => client.request(setsQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  return (
    <FlatList
      data={data.sets.documents}
      renderItem={({ item }) => (
        <Text style={{
            backgroundColor: "white",
            marginVertical: 5,
            padding: 10,
            borderRadius: 5,
            overflow: "hidden",
        }}>
          {item.exercise}: {item.reps} x {item.weight}
        </Text>
      )}
    />
  );
};

export default SetsList;
