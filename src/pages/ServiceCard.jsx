import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const ServiceCardItem = ({ title, description, image }) => (
    <div className="col-md-3 mb-4">
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    </div>
);

const ServiceCard = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center mb-4">Our Services</h1>
                    </div>
                </div>
                <div className="row">
                    <ServiceCardItem
                        title="Web Development"
                        description="Build modern and responsive websites with the latest technologies."
                        image="https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif"
                    />
                    <ServiceCardItem
                        title="Mobile App Development"
                        description="Design and develop mobile apps for both Android and iOS platforms."
                        image="https://cdn.dribbble.com/users/1603428/screenshots/4158705/mob-dev.gif"
                    />
                    <ServiceCardItem
                        title="UI/UX Design"
                        description="Create intuitive and user-friendly interfaces for your digital products."
                        image="https://cdn.dribbble.com/users/8619169/screenshots/16392779/media/9736d4a7eec3c1ca28fd77f788dd02a9.gif"
                    />
                    <ServiceCardItem
                        title="Digital Marketing"
                        description="Enhance your online presence with effective digital marketing strategies."
                        image="https://i.pinimg.com/originals/85/04/77/850477fed08bfe98598082bcd309ce70.gif"
                    />
                </div>

                <div className="row">
                    <ServiceCardItem
                        title="SEO Optimization"
                        description="Improve your website's search engine rankings with tailored SEO strategies."
                        image="https://cdn.dribbble.com/users/104417/screenshots/1891125/media/082fe2e79fe43516076db16e08801cdf.gif"
                    />
                    <ServiceCardItem
                        title="Content Creation"
                        description="Engage your audience with high-quality, relevant content."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6-eyBDnqEi_Ko00Zuk3BhBS8MlWO91aouw&s"
                    />
                    <ServiceCardItem
                        title="Cloud Services"
                        description="Utilize cloud solutions to enhance scalability and performance."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWIi55ZeCQ76b2nrn5yuRVSUST0p_Y6l9vA&s"
                    />
                    <ServiceCardItem
                        title="E-Commerce Solutions"
                        description="Develop a secure and scalable e-commerce platform for your business."
                        image="https://thyosoftech.com/img/services/e-commercee.gif"
                    />
                </div>

                <div className="row">
                    <ServiceCardItem
                        title="Custom Software Development"
                        description="Create tailored software solutions for your specific business needs."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJ1x_ccdKmHUXHMtR-W__FgZPKqG49h_tcg&s"
                    />
                    <ServiceCardItem
                        title="Cybersecurity"
                        description="Protect your business with advanced cybersecurity solutions."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOpiZE-ZCgZpKq18HupUlQLuFoRqV8j0OeA&s"
                    />
                    <ServiceCardItem
                        title="IT Consulting"
                        description="Get expert advice on optimizing your IT infrastructure and operations."
                        image="https://cdn.dribbble.com/users/1603428/screenshots/4158726/tcs-gif.gif"
                    />
                    <ServiceCardItem
                        title="Data Analytics"
                        description="Leverage data to drive decision-making and business insights."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13UyC28fldPvvHCIkY2DogNxWYtPN6OJzwQ&s"
                    />
                </div>
            </div>

            <Footer/>
        </>
    );
};
export default ServiceCard;
