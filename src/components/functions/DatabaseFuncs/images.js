import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
const ImagesObject = {};

export const getImages = async () => {
  let nextToken = null;
  let allItems = [];

  do {
    const response = await Amplify.API.graphql({
      query: queries.listImages,
      variables: { nextToken }, // Pass the nextToken variable
    });

    const { items, nextToken: newNextToken } = response.data.listImages;

    allItems = allItems.concat(items);
    nextToken = newNextToken;
  } while (nextToken);

  return allItems;
};
