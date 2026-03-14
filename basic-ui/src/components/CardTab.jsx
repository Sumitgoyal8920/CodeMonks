import React from "react";
import Card from "./Card";
import "../Css/Card.css";




function CardTab() {
  return (
    <div className="container">
      <Card
        
        title="Mobile App  Development"
        description="Crafting sleek and performant mobile experiences."
        items={[
          "Kotlin (Android), Swift (iOS)",
          "React Native & Flutter",
          "High-performance architecture",
          "Intuitive UI/UX",
          "API integrations"
        ]}
      />

      <Card
        
        title="Web Development"
        description="Modern responsive websites and apps."
        items={[
          "React.js, Next.js",
          "Responsive & SEO Optimized",
          "UI/UX focused",
          "PWA support",
          "Secure infrastructure"
        ]}
      />

      <Card
         
        title="Custom CRM Development"
        description="Automate and organize business operations."
        items={[
          "Lead tracking",
          "Workflow automation",
          "Reports & dashboards",
          "Team collaboration",
          "Custom features"
        ]}
      />

      <Card
         
        title="Cloud & DevOps"
        description="Infrastructure and cloud solutions."
        items={[
          "AWS, Azure, GCP",
          "Migration & Scaling",
          "CI/CD Pipelines",
          "Compliance & Security",
          "Efficient infra"
        ]}
      />

    </div>
  );
}

export default CardTab;