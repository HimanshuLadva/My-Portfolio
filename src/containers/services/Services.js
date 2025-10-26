import React, {useContext} from "react";
import "./Services.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Services() {
  const {isDark} = useContext(StyleContext);

  const servicesData = [
    {
      title: "Angular Development",
      icon: "fab fa-angular",
      description:
        "Build scalable, high-performance single-page applications with Angular, delivering responsive and dynamic user experiences.",
      color: "#dd1b16"
    },
    {
      title: "ERP Solutions",
      icon: "fas fa-cogs",
      description:
        "Develop and optimize ERP modules for transport, accounting, and inventory management with seamless integration and performance.",
      color: "#00d9ff"
    },
    {
      title: "Performance Optimization",
      icon: "fas fa-tachometer-alt",
      description:
        "Enhance application speed through lazy loading, code splitting, AOT compilation, and reducing API calls by 40%.",
      color: "#ffc107"
    },
    {
      title: "Full Stack Development",
      icon: "fas fa-layer-group",
      description:
        "End-to-end development with Angular, TypeScript, .NET Web API, and SQL for complete web application solutions.",
      color: "#6c63ff"
    },
    {
      title: "Legacy Migration",
      icon: "fas fa-sync-alt",
      description:
        "Migrate legacy applications to modern frameworks (Angular 11 → 14+) with improved architecture and best practices.",
      color: "#ff6b6b"
    },
    {
      title: "API Integration",
      icon: "fas fa-plug",
      description:
        "Seamlessly integrate REST APIs, GraphQL, and third-party services ensuring smooth data flow and real-time updates.",
      color: "#4ecdc4"
    }
  ];

  return (
    <div className="services-main" id="services">
      <div className="services-header">
        <Fade bottom duration={1000} distance="20px">
          <h1 className={isDark ? "dark-mode services-heading" : "services-heading"}>
            {emoji("How I Can Help Your Business 🚀")}
          </h1>
          <p className={isDark ? "dark-mode services-subtitle" : "services-subtitle"}>
            Specialized services to transform your ideas into powerful, scalable solutions
          </p>
        </Fade>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <Fade bottom duration={1000} distance="20px" key={index}>
            <div
              className={isDark ? "service-card dark-mode" : "service-card"}
              style={{"--service-color": service.color}}
            >
              <div className="service-icon-wrapper">
                <i className={`${service.icon} service-icon`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
