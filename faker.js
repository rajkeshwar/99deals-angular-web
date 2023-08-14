/*
 * @Author: rajkeshwar.pd@gmail.com
 * @Date: 2023-08-14 08:34:28
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2023-08-14 14:00:17
 */

import { faker } from "@faker-js/faker";
import { range, random } from "lodash-es";
import fs from "fs";

const carauselImages = [
  "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/84ae27f93c14a4e3.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/e65b064fc53f59c2.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/3959ad9f670aeeeb.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/d417c02a9cc69fda.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/84ae27f93c14a4e3.jpg?q=50",
];

const banners = carauselImages.map((imageUrl) => {
  return {
    url: imageUrl,
    name: faker.commerce.productName(),
  };
});

const categories = range(0, 8).map((a) => {
  return {
    label: faker.commerce.department(),
    id: String(a),
    items: range(0, 4).map((b) => {
      return range(0, 2).map((c) => {
        return {
          label: faker.commerce.department(),
          id: `${a}${b}`,
          items: range(0, 2).map((d) => ({
            id: `${a}${b}${c}`,
            label: faker.commerce.department(),
          })),
        };
      });
    }),
  };
});

const products = range(1, 100).map((x) => {
  return {
    url: faker.image.url(300, 200, true),
    product: ['Pizza', 'Cheese', 'Bacon'][random(0,3)],
    name: faker.commerce.productName(),
    material: faker.commerce.productMaterial(),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "₹ " }),
  };
});

const dataObject = { categories, products, banners };
const jsonString = JSON.stringify(dataObject, null, 2);

fs.writeFileSync("./db.json", jsonString);
