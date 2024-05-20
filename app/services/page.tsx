import React from "react";

interface Service {
  id: number;
  name: string;
  description: string;
}

const services: Service[] = [
  { id: 1, name: "Service 1", description: "Description of Service 1" },
  { id: 2, name: "Service 2", description: "Description of Service 2" },
  { id: 3, name: "Service 3", description: "Description of Service 3" },
];

const ServicesPage: React.FC = () => {
  return (
    <div>
      <h1>Services</h1>
      {services.map((service) => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
