"use client";

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 Juli 2024"
        details={[
          {
            title: "Kundenwachstum",
            amount: "175,00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Ausgaben",
            amount: "10,00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Fälligkeiten & Offene Bestellungen"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 Juli 2024"
        details={[
          {
            title: "Fälligkeiten",
            amount: "250,00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Offene Bestellungen",
            amount: "147",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Verkäufe & Rabatte"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 Juli 2024"
        details={[
          {
            title: "Verkäufe",
            amount: "1.000,00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: "Rabatte",
            amount: "200,00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
