import React, { useState } from "react";

const TabContent = ({ videoId }: { videoId: string }) => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("registration");

  const renderContent = () => {
    switch (activeTab) {
      case "registration":
        return <TabContent videoId="G7KNmW9a75Y" />;
      case "order":
        return <TabContent videoId="22tVWwmTie8" />;
      case "additional":
        return <TabContent videoId="G7KNmW9a75Y" />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "$full",
          //   justifyContent: "space-around",
          marginBottom: "20px",
          backgroundColor: "blue",
        }}
      >
        <button
          style={{ height: 53, width: 91 }}
          onClick={() => setActiveTab("registration")}
        >
          Регистрация
        </button>
        <button onClick={() => setActiveTab("order")}>Заказ товара</button>
        <button onClick={() => setActiveTab("additional")}>
          Дополнительно
        </button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Tabs;
