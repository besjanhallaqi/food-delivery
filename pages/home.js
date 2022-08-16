import Menu from "../components/Menu";
import DiscountProduct from "../components/DiscountProduct";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import Restaurant from "../components/Restaurant";

export default function Home() {
  const category = [
    { image: "/images/pizza.png", title: "Pizza" },
    { image: "/images/burger.png", title: "Burger" },
    { image: "/images/bbq.png", title: "BBQ" },
    { image: "/images/sushi.png", title: "Sushi" },
    { image: "/images/vegan.png", title: "Vegan" },
    { image: "/images/muffin.png", title: "Desserts" },
  ];

  const restaurants = [
    {
      image: "/images/restaurants/sushiRestaurant.jpg",
      name: "Royal Sushi House",
      deliveryTime: "30-40",
      deliveryAverage: "32",
      featured: true,
      category: [{ image: "/images/sushi.png", title: "Sushi" }],
      card: 0,
    },
    {
      image: "/images/restaurants/pizzaRestaurant.jpg",
      name: "Burgers & Pizza",
      deliveryTime: "40-60",
      deliveryAverage: "43",
      featured: true,
      category: [
        { image: "/images/pizza.png", title: "Pizza" },
        { image: "/images/burger.png", title: "Burger" },
      ],
      card: 2,
    },
    {
      image: "/images/restaurants/burgerRestaurant.jpg",
      name: "Burger House",
      deliveryTime: "20-40",
      deliveryAverage: "22",
      featured: false,
      category: [{ image: "/images/burger.png", title: "Burger" }],
      card: 0,
    },
    {
      image: "/images/restaurants/sushiRestaurant.jpg",
      name: "Royal Sushi House",
      deliveryTime: "30-40",
      deliveryAverage: "32",
      featured: true,
      category: [{ image: "/images/sushi.png", title: "Sushi" }],
      card: 0,
    },
    {
      image: "/images/restaurants/pizzaRestaurant.jpg",
      name: "Burgers & Pizza",
      deliveryTime: "40-60",
      deliveryAverage: "43",
      featured: true,
      category: [
        { image: "/images/pizza.png", title: "Pizza" },
        { image: "/images/burger.png", title: "Burger" },
      ],
      card: 2,
    },
    {
      image: "/images/restaurants/burgerRestaurant.jpg",
      name: "Burger House",
      deliveryTime: "20-40",
      deliveryAverage: "22",
      featured: false,
      category: [{ image: "/images/burger.png", title: "Burger" }],
      card: 0,
    },
  ];

  const [categorySelected, setCategorySelected] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    if (categorySelected.length === 0) {
      setRestaurantsList(restaurants);
    } else {
      var array = [];
      restaurants.forEach((item) => {
        item.category.filter((categorys) =>
          categorySelected.map((items) =>
            items === categorys.title
              ? array.includes(item)
                ? ""
                : array.push(item)
              : ""
          )
        );
      });
      setRestaurantsList(array);
    }
  }, [categorySelected]);

  return (
    <div className="w-full min-h-screen ">
      <Menu />
      <div className="w-full px-8 md:px-0 container mx-auto py-10 space-y-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <DiscountProduct
            title="All deserts"
            discount={20}
            category="Deserty"
            backgroundColor="bg-primaryLight"
            image="/images/muffin.png"
            textColor="text-primary"
          />
          <DiscountProduct
            title="Big Burgers"
            discount={50}
            category="Fooddies"
            backgroundColor="bg-secondaryLight"
            image="/images/burger.png"
            textColor="text-secondary"
          />
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
          {category.map((item, index) => (
            <Category
              key={index}
              item={item}
              selected={categorySelected}
              functionSelected={setCategorySelected}
            />
          ))}
        </div>
        <div className="w-full space-y-4">
          <p className="text-[28px]">Nearby restaurants</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {restaurantsList.length === 0 && (
              <p className="text-lg text-primary">Not found any restaurant</p>
            )}
            {restaurantsList.map((item, index) => (
              <Restaurant item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
