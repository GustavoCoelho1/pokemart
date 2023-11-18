"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [bgColor, setBgColor] = useState("bg-blue-900");

  return (
    <section className={`w-full h-[500px] px-8 ${bgColor}`}>
      <div className="w-full h-full rounded-xl bg-white p-12">
        <div className="flex gap-5">
          {" "}
          {/*LEMBRAR DE COLOCAR GRID*/}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
