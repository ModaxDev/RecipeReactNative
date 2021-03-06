import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { FlatList, Text, View } from "react-native";
import useApi from "../hooks/useApi";
import recipesApi from "../api/recipes";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import HorizontalCard from "../components/HorizontalCard";
import routes from "../navigation/routes";
import { useTheme } from "@react-navigation/native";
import HorizontalCardContentLoader from "../components/contentLoader/HorizontalCardContentLoader";

import {
  CategoryHeader,
  TrendingRecipe,
  CheckRecipes,
  SearchBar,
  HeaderHome,
} from "../components/homeScreen";
import appTheme from "../constants/theme";

function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  const getRecipesApi = useApi(recipesApi.getRecipes);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getRecipesApi.request(true);
  }, []);

  return (
    <>
      <ActivityIndicator visible={getRecipesApi.loading} />
      <Screen>
        {getRecipesApi.error && (
          <>
            <Text>Les recettes n'ont pas pu etre chargés.</Text>
            <AppButton
              title="Reessayer"
              onPress={() => getRecipesApi.request(true)}
            />
          </>
        )}
        <FlatList
          data={getRecipesApi.data}
          keyExtractor={(recipe) => recipe.id.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            getRecipesApi.request(true);
            setRefreshing(false);
          }}
          ListEmptyComponent={() => <HorizontalCardContentLoader />}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              <HeaderHome />
              <SearchBar />
              <CheckRecipes
                onPress={() => navigation.navigate(routes.LISTINGS)}
              />
              <TrendingRecipe
                navigation={navigation}
                data={getRecipesApi.data}
              />
              <CategoryHeader />
            </View>
          }
          renderItem={({ item }) => {
            return (
              <HorizontalCard
                styleCard={{
                  marginHorizontal: appTheme.SIZES.padding,
                }}
                item={item}
                image={"http://127.0.0.1:8000" + item.fileUrl}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            );
          }}
          ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
        />
      </Screen>
    </>
  );
}

export default HomeScreen;
