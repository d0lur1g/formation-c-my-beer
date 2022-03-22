import { rest } from "msw";

const apiUri =
  "https://my-json-server.typicode.com/d0lur1g/formation-c-my-beer";

export const handlers = [
  rest.get(`${apiUri}/beers`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "rs8GCw",
          name: "Focal Banger",
          description:
            "Focal Banger is an American India Pale Ale. We have a real love for IPAs here at Alchemist, and we strive to offer you t",
          categoryId: 3,
          imageUri:
            "https://brewerydb-images.s3.amazonaws.com/beer/rs8GCw/upload_XIcqa6-large.png",
          price: "5.14",
        },
        {
          id: "lFHjKe",
          name: "GBG Beer Week 2018",
          description:
            "When we got asked to do the official GBG Beer Week 2018 beer all we could think about was sour strawberries, sour and st",
          categoryId: 4,
          imageUri:
            "https://brewerydb-images.s3.amazonaws.com/beer/lFHjKe/upload_Gwao1A-large.png",
          price: "3.44",
        },
      ])
    );
  }),
  rest.get(`${apiUri}/categories`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 3,
          name: "North American Origin Ales",
        },
        {
          id: 4,
          name: "German Origin Ales",
        },
        {
          id: 5,
          name: "Belgian And French Origin Ales",
        },
      ])
    );
  }),
];
